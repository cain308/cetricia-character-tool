import { Component, OnInit, Inject } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { SelectionModel } from '@angular/cdk/collections';

import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';

import { SkillsCalculatorService } from '../skills-calculator.service';

import { Character, ChosenSkill, HeldItem } from '../../chardata';
import { ALL_SPELLS_LOOKUP } from '../../spelldata';
// Do I really need anything specific from item data??
//import { Character, ChosenSkill } from '../../itemData';

import { Globals } from '../../globals';

import {
  SkillTypeTable,
  SkillNameTable,
  SkillLookupByName,
  Skills,
  SkillNode,
  SKILL_TREE,
  GET_NODES_BY_NAME,
} from '../../skillsdata';

interface FlatSkillNode {
  expandable: boolean;
  name: string;
  skillNode: SkillNode;
  isMissing;
  level: number;
}

class SpellSchoolFamiliarity {
  // Create new instances of the same class as static attributes
  static Unfamiliar = new SpellSchoolFamiliarity('unfamiliar', 1 / 4);
  static Familiar = new SpellSchoolFamiliarity('familiar', 1 / 3);
  static Specialized = new SpellSchoolFamiliarity('specialized', 1 / 2);
  static Devoted = new SpellSchoolFamiliarity('devoted', 1 / 1.5);
  static NA = new SpellSchoolFamiliarity('N/A', 1 / 1);

  name: string;
  ratio: number;

  constructor(name, ratio) {
    this.name = name;
    this.ratio = ratio;
  }
}

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  globals: Globals;

  dialog: MatDialog;

  allSkills = Skills;
  skillTypeLookup = SkillTypeTable;
  skillNameLookup = SkillNameTable;
  skillLookupByName = SkillLookupByName;

  spellLookupByKey = ALL_SPELLS_LOOKUP;

  getSkillNodeByNameFunc = GET_NODES_BY_NAME;

  skillsCalculatorService: SkillsCalculatorService;

  headers = [];
  magicHeaders = [];
  inventoryHeaders = [];
  spellbookHeaders = [];

  // the character's current inventory
  inventoryItems;
  // for selecting iventory items
  selectedInventoryItem = new SelectionModel(false, []);

  is2hView = false;

  // the character's current spellbook
  spellbook;
  // for selecting spells
  selectedSpellbookItem = new SelectionModel(false, []);

  // the "normal," non-special skills
  normalSkills;
  // a hardcoded array of the relevant magic skills
  magicSkills;
  // a map for going from the SP key to an item in this array;
  magicSchoolKeyMap = {};

  sampleLearnedSkill;

  // for flattening the data
  private _transformer = (node: SkillNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.getName(),
      skillNode: node,
      isMissing: node.isMissing,
      level: level,
    };
  };

  // This is all for hooking up the skill tree as a tree
  treeControl = new FlatTreeControl<FlatSkillNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    globals: Globals,
    skillsCalculatorService: SkillsCalculatorService,
    dialog: MatDialog
  ) {
    this.globals = globals;
    this.dialog = dialog;
    this.skillsCalculatorService = skillsCalculatorService;
    this.dataSource.data = SKILL_TREE.filter(function (skillNode) {
      return globals.currentCharacter.hasSkill(skillNode);
      // return false;
    });
    this.getSkillNodeByNameFunc = GET_NODES_BY_NAME;
    this.dataSource.filterPredicate = this.filterSkills;
    // this.dataSource.filter = globals.currentCharacter;

    /*
    this.sampleLearnedSkill = globals.currentCharacter.acquiredSkills[0];
    console.log(this.sampleLearnedSkill);
    */
  }

  getOwnedSkills() {}

  filterSkills(data: SkillNode, filter: Character) {
    //  => !filter || data.level == filter;
    // return true;
    console.log('Running filter function...');
    return false;
  }

  ngOnInit() {
    this.dataSource.filter = this.globals.currentCharacter;

    this.headers = [
      'Skill Name',
      'Level',
      'Total Points',
      'Innate Points',
      'Added Points',
      'Notes',
      'Edit',
    ];
    // filter out the entire spell class, so skills with category = SPELL
    this.normalSkills = new MatTableDataSource(
      this.globals.currentCharacter.acquiredSkills.filter(
        (chosenSkill) => chosenSkill.skillNode.skill['Skill Type'] != 'SPELL'
      )
    );

    this.magicHeaders = [
      'Magic School',
      'Status',
      'SP',
      'Reclamation',
      'Success',
    ];
    // the raw data on the relevant magic schools and their skills.  Will add to this
    // with personalized data below
    this.magicSkills = [
      {
        name: 'Spirit',
        spKey: 'SPELL_SPIRIT_SP',
        recKey: 'SPELL_SPIRIT_RECLAMATION',
        succKey: 'SPELL_SPIRIT_SUCCESS',
      },
      {
        name: 'Animist',
        spKey: 'SPELL_ANIMIST_SP',
        recKey: 'SPELL_AN_RCLAMATION',
        succKey: 'SPELL_AN_SUCC',
      },
      {
        name: 'Artificer',
        spKey: 'SPELL_ARTIFICER_SP',
        recKey: 'SPELL_ATIFICER_RECLAMATION',
        succKey: 'SPELL_ARTIFICER_SUCCESS',
      },
      {
        name: 'House of Air',
        spKey: 'SPELL_HOUSE_OF_AIR_SP',
        recKey: 'SPELL_HOA_RECLAMATION',
        succKey: 'SPELL_HOA_SUCCESS',
      },
      {
        name: 'House of Chaos',
        spKey: 'SPELL_HOUSE_OF_CHAOS_SP',
        recKey: 'SPELL_HOC_SUCCESS',
        succKey: 'SPELL_HOC_RECLAMATION',
      },
      {
        name: 'House of Death',
        spKey: 'SPELL_HOUSE_OF_DEATH_SP',
        recKey: 'SPELL_HOD_RECLAMATION',
        succKey: 'SPELL_HOD_SUCCESS',
      },
      {
        name: 'House of Earth',
        spKey: 'SPELL_HOUSE_OF_EARTH_SP',
        recKey: 'SPELL_HOE_RECLAMATION',
        succKey: 'SPELL_HOE_SUCCESS',
      },
      {
        name: 'House of Fire',
        spKey: 'SPELL_HOUSE_OF_FIRE_SP',
        recKey: 'SPELL_HOF_RECLAMATION',
        succKey: 'SPELL_HOF_SUCCES',
      },
      {
        name: 'House of Life',
        spKey: 'SPELL_HOUSE_OF_LIFE_SP',
        recKey: 'SPELL_HOL_RECLAMTION',
        succKey: 'SPELL_HOL_SUCCESS',
      },
      {
        name: 'House of Order',
        spKey: 'SPELL_HOUSE_OF_ORDER_SP',
        recKey: 'SPELL_HOO_RECLAMATION',
        succKey: 'SPELL_HOO_SUCCESS',
      },
      {
        name: 'House of Water',
        spKey: 'SPELL_HOUSE_OF_WATER_SP',
        recKey: 'SPELL_HOW_RECLAMATION',
        succKey: 'SPELL_HOW_SUCCESS',
      },
      {
        name: 'Mentalist',
        spKey: 'SPELL_MENTALIST_SP',
        recKey: 'SPELL_MENTALIST_RECLAMATION',
        succKey: 'SPELL_MENTALIST_SUCCESS',
      },
      {
        name: 'Necromantic',
        spKey: 'SPELL_NECROMANTIC_SP',
        recKey: 'SPELL_NECROMANTIC_RECLAMATION',
        succKey: 'SPELL_NECROMANTIC_SUCCESS',
      },
      {
        name: 'Restorative',
        spKey: 'SPELL_RESTORATIVE_SP',
        recKey: 'SPELL_RESTOATIVE_RCLAMATION',
        succKey: 'SPELL_RESTORATIVE_SUCCESS',
      },
      {
        name: 'Shade',
        spKey: 'SPELL_SHADE_SP',
        recKey: 'SPELL_SHADE_RECLAMATION',
        succKey: 'SPELL_SHADE_SUCCESS',
      },
    ];

    // this will tell me which school has the highest data
    let highestLevel = 0;
    let highestSchoolKey;
    // figure out which school has the highest level.
    // Also, fill in level and familiarity for each school.
    // ALSO ALSO, estimate missing fields because there are some
    this.magicSkills.forEach((schoolData) => {
      this.magicSchoolKeyMap[schoolData.spKey] = schoolData;
      let lvl = this.getLevelOfSkill(schoolData.spKey);
      schoolData.familiarity = this.getStatusOfSchool(schoolData.spKey);
      schoolData.level = lvl;

      this.estimateMissingPointsInMagicSchool(schoolData);

      if (lvl > highestLevel) {
        highestLevel = lvl;
        highestSchoolKey = schoolData.spKey;
      }
    });

    if (highestSchoolKey) {
      let highestSchool = this.magicSchoolKeyMap[highestSchoolKey];
      console.log(
        'Highest leveled school is ' +
          highestSchool.name +
          ' at level ' +
          highestSchool.level
      );
    } else {
      console.log('Unable to calculate highest leveled school??');
    }

    // inventory management!
    this.inventoryHeaders = [
      'select',
      'Name',
      'Count',
      'Total Weight',
      'Category',
      'Notes',
    ];

    this.inventoryItems = new MatTableDataSource(
      this.globals.currentCharacter.inventory.slice()
    );

    this.spellbookHeaders = [
      'select',
      'School',
      'Name',
      'Level',
      'Description',
    ];
    // create objects to hold some personalized data for our spellbook
    let spellbookData = [];
    this.globals.currentCharacter.spellBook.forEach((spellKey) => {
      let spellData = {};
      spellData.spellKey = spellKey;
      spellData.spell = this.spellLookupByKey[spellKey];
      // calculate the effective level of casting this spell

      // At a baseline, we start with the highest achieved level overall
      let highestSchool = this.magicSchoolKeyMap[highestSchoolKey];
      let effectiveLevel = highestSchool.level;

      // is this our school?
      let school = this.magicSchoolKeyMap[spellData['spell'].SCHOOL_SKILL_KEY];
      spellData.school = school;
      if (school.spKey != highestSchoolKey) {
        // how good are we in this school?  Good enough to add effective levels on?
        switch (school.familiarity) {
          case SpellSchoolFamiliarity.Specialized:
          case SpellSchoolFamiliarity.Devoted:
            let addition = school.level * school.familiarity.ratio;
            console.log('Would add an effective ' + addition + ' more levels');
            effectiveLevel += Math.ceil(addition);
          default:
          // do nothing
        }
      }

      spellData.effectiveLevel = effectiveLevel;

      console.log(
        'Effective casting level for spell ' +
          spellData.spell['SPELL NAME'] +
          ' is ' +
          effectiveLevel
      );
      /*
      console.log(
        'Associated school for spell ' +
          spellData.spell['SPELL NAME'] +
          ' is ' +
          school.name +
          ' at level ' +
          school.level
      );
      */
      spellbookData.push(spellData);
    });

    this.spellbook = new MatTableDataSource(spellbookData);

    // this.spellbook = new MatTableDataSource(
    //   this.globals.currentCharacter.spellBook.slice()
    // );
  }

  /* INVENTORY DISPLAY AND MANAGEMENT */

  isAllSelected() {
    return false;
  }

  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selectedInventoryItem.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }

  getSelectedInvItem() {
    return this.selectedInventoryItem.selected[0];
  }

  getSelectedSpell() {
    return this.selectedSpellbookItem.selected[0];
  }

  /* IMPORTANT WEAPON STATS */
  //Chance to hit :  ((Strength - STN)*STMOD) + ((Coordination - CDN)*CDMOD)) + Skill Ability + Magic bonus to hit + other hit bonuses (ie, spells)
  // Damage bonus:  (((Strength - STN)*STMOD)/4 + other (magic) bonuses.
  // Speed Bonus: Weapon Speed - (((Coordination-CDN)*CDMOD)/4)
  computeSelectedChanceToHit1H() {
    let weapon = this.getSelectedInvItem();

    let baseChance1H =
      (this.globals.currentCharacter.strength -
        Number(weapon.getActualProperty('STN, 1H'))) *
        Number(weapon.getActualProperty('STMOD')) +
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 1H'))) *
        Number(weapon.getActualProperty('CDMOD'));
    //console.log('Chance to hit 1H... ' + baseChance1H);
    return baseChance1H;
  }

  computeSelectedChanceToHit2H() {
    let weapon = this.getSelectedInvItem();

    let baseChance2H =
      (this.globals.currentCharacter.strength -
        Number(weapon.getActualProperty('STN, 2H'))) *
        Number(weapon.getActualProperty('STMOD')) +
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 2H'))) *
        Number(weapon.getActualProperty('CDMOD'));
    //console.log('Chance to hit 2H... ' + baseChance2H);
    return baseChance2H;
  }

  describeSelectedChanceToHit1H() {
    let weapon = this.getSelectedInvItem();

    let descriptionString =
      '((Strength(' +
      this.globals.currentCharacter.strength +
      ') - STN(' +
      Number(weapon.getActualProperty('STN, 1H')) +
      ')*STMOD(' +
      Number(weapon.getActualProperty('STMOD')) +
      ')) ' +
      '+ ((Coordination(' +
      this.globals.currentCharacter.coordination +
      ') - CDN(' +
      Number(weapon.getActualProperty('CDN, 1H')) +
      '))*CDMOD(' +
      Number(weapon.getActualProperty('CDMOD')) +
      '))) ' +
      '+ (Skill Ability + Magic bonus to hit + other hit bonuses (ie, spells), not accounted for here)';

    return descriptionString;
  }

  describeSelectedChanceToHit2H() {
    let weapon = this.getSelectedInvItem();

    let descriptionString =
      '((Strength(' +
      this.globals.currentCharacter.strength +
      ') - STN(' +
      Number(weapon.getActualProperty('STN, 2H')) +
      ')*STMOD(' +
      Number(weapon.getActualProperty('STMOD')) +
      ')) ' +
      '+ ((Coordination(' +
      this.globals.currentCharacter.coordination +
      ') - CDN(' +
      Number(weapon.getActualProperty('CDN, 2H')) +
      '))*CDMOD(' +
      Number(weapon.getActualProperty('CDMOD')) +
      '))) ' +
      '+ (Skill Ability + Magic bonus to hit + other hit bonuses (ie, spells), not accounted for here)';

    return descriptionString;
  }

  computeDamageBonus1H() {
    let weapon = this.getSelectedInvItem();

    let baseChance2H =
      ((this.globals.currentCharacter.strength -
        Number(weapon.getActualProperty('STN, 1H'))) *
        Number(weapon.getActualProperty('STMOD'))) /
      4;
    return baseChance2H;
  }

  describeDamageBonus1H() {
    let weapon = this.getSelectedInvItem();

    let descriptionString =
      '((Strength(' +
      this.globals.currentCharacter.strength +
      ') - STN(' +
      Number(weapon.getActualProperty('STN, 1H')) +
      ')*STMOD(' +
      Number(weapon.getActualProperty('STMOD')) +
      ')) / 4 + other (magic) bonuses';

    return descriptionString;
  }

  computeDamageBonus2H() {
    let weapon = this.getSelectedInvItem();

    let baseChance2H =
      ((this.globals.currentCharacter.strength -
        Number(weapon.getActualProperty('STN, 2H'))) *
        Number(weapon.getActualProperty('STMOD'))) /
      4;
    return baseChance2H;
  }

  describeDamageBonus2H() {
    let weapon = this.getSelectedInvItem();

    let descriptionString =
      '((Strength(' +
      this.globals.currentCharacter.strength +
      ') - STN(' +
      Number(weapon.getActualProperty('STN, 2H')) +
      ')*STMOD(' +
      Number(weapon.getActualProperty('STMOD')) +
      ')) / 4 + other (magic) bonuses';

    return descriptionString;
  }
  /*
  'Speed, Missle': '2',
  'Speed, Melee': '0',
  'Speed, Readied': '2',
  */
  // Speed Bonus: Weapon Speed - (((Coordination-CDN)*CDMOD)/4)

  computeSpeedBonusMissile1H() {
    let weapon = this.getSelectedInvItem();

    let speedBonus =
      Number(weapon.getActualProperty('Speed, Missle')) -
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 1H'))) *
        Number(weapon.getActualProperty('CDMOD') / 4);
    return speedBonus;
  }

  computeSpeedBonusMelee1H() {
    let weapon = this.getSelectedInvItem();

    let speedBonus =
      Number(weapon.getActualProperty('Speed, Melee')) -
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 1H'))) *
        Number(weapon.getActualProperty('CDMOD') / 4);
    return speedBonus;
  }

  computeSpeedBonusReadied1H() {
    let weapon = this.getSelectedInvItem();

    let speedBonus =
      Number(weapon.getActualProperty('Speed, Readied')) -
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 1H'))) *
        Number(weapon.getActualProperty('CDMOD') / 4);
    return speedBonus;
  }

  computeSpeedBonusMissile2H() {
    let weapon = this.getSelectedInvItem();

    let speedBonus =
      Number(weapon.getActualProperty('Speed, Missle')) -
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 2H'))) *
        Number(weapon.getActualProperty('CDMOD') / 4);
    return speedBonus;
  }

  computeSpeedBonusMelee2H() {
    let weapon = this.getSelectedInvItem();

    let speedBonus =
      Number(weapon.getActualProperty('Speed, Melee')) -
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 2H'))) *
        Number(weapon.getActualProperty('CDMOD') / 4);
    return speedBonus;
  }

  computeSpeedBonusReadied2H() {
    let weapon = this.getSelectedInvItem();

    let speedBonus =
      Number(weapon.getActualProperty('Speed, Readied')) -
      (this.globals.currentCharacter.coordination -
        Number(weapon.getActualProperty('CDN, 2H'))) *
        Number(weapon.getActualProperty('CDMOD') / 4);
    return speedBonus;
  }

  describeSpeedBonus() {
    return 'description';
  }

  /* MAGIC SCHOOL INFORMATION */

  getStatusOfSchool(schoolSpKey) {
    // we check the levels in spirit and the level in the school to determine this
    let spiritSpLvl = this.getLevelOfSkill('SPELL_SPIRIT_SP');
    // this is NOT a magic user.  Not much to see here
    if (spiritSpLvl == 0) {
      return SpellSchoolFamiliarity.NA;
    }

    if (schoolSpKey == 'SPELL_SPIRIT_SP') {
      return SpellSchoolFamiliarity.NA;
    }

    let schoolLvl = this.getLevelOfSkill(schoolSpKey);
    if (schoolLvl == 0) {
      return SpellSchoolFamiliarity.Unfamiliar;
    }
    if (schoolLvl < 3) {
      return SpellSchoolFamiliarity.Familiar;
    }
    if (schoolLvl > 8 || schoolLvl / spiritSpLvl >= 0.5) {
      return SpellSchoolFamiliarity.Specialized;
    }

    if (schoolLvl > 12 || schoolLvl / spiritSpLvl >= 0.75) {
      return SpellSchoolFamiliarity.Devoted;
    }

    return SpellSchoolFamiliarity.Familiar;
  }

  getLevelOfSkill(skillKey) {
    //console.log('Looking up skill ' + skillKey);
    // why did I make this return an array again??
    let sn: SkillNode = this.getSkillNodeByNameFunc(skillKey)[0];
    //console.log('got node: ');
    //console.log(sn);

    if (this.globals.currentCharacter.hasSkill(sn)) {
      let chosenSkill = this.globals.currentCharacter.getExistingSkill(sn);
      return chosenSkill.level;
    }
    // yeah... sometimes we just don't have a skill officially present
    return 0;
  }

  hasSkill(skillKey) {
    let sn: SkillNode = this.getSkillNodeByNameFunc(skillKey)[0];
    return this.globals.currentCharacter.hasSkill(sn);
  }

  getDescriptionOfMagicSkill(spKey, skillKey) {
    if (!this.hasSkill(spKey)) {
      return 'No SP invested in this school';
    }

    let sn: SkillNode = this.getSkillNodeByNameFunc(skillKey)[0];
    //console.log('got node: ');
    //console.log(sn);
    if (!sn) {
      // well shit... this skill isn't implemented
      return 0;
    }

    if (this.globals.currentCharacter.hasSkill(sn)) {
      let chosenSkill = this.globals.currentCharacter.getExistingSkill(sn);

      return this.skillsCalculatorService.describePointsAndDropdownsInChosenSkill(
        this.globals.currentCharacter,
        chosenSkill
      );
    } else {
      return this.skillsCalculatorService.describePointsAndDropdownsInNaiveSkill(
        this.globals.currentCharacter,
        sn
      );
    }
  }
  // basically, if we HAVE SP in the skill, we'll get our points in it.
  // otherwise, 0
  getPointsInMagicSkill(spKey, skillKey) {
    if (!this.hasSkill(spKey)) {
      return 0;
    }

    // console.log(
    //   'has points in shcool ' + spKey + ' so progressing for ' + skillKey
    // );
    let sn: SkillNode = this.getSkillNodeByNameFunc(skillKey)[0];
    //console.log('got node: ');
    //console.log(sn);
    if (!sn) {
      // well shit... this skill isn't implemented
      return 0;
    }

    //console.log(sn);

    if (this.globals.currentCharacter.hasSkill(sn)) {
      let chosenSkill = this.globals.currentCharacter.getExistingSkill(sn);
      return this.getTotalPointsInSkill(
        chosenSkill,
        this.globals.currentCharacter
      );
    } else {
      // var xpModDetails = this.skillsCalculatorService.calculateXPModsForCharacter(
      //   this.globals.currentCharacter,
      // );
      return this.skillsCalculatorService.calculatePointsAndDropdownsInNaiveSkill(
        this.globals.currentCharacter,
        sn
      );
    }
    return 0;
  }

  estimateMissingPointsInMagicSchool(school) {
    if (school.level == 0) {
      // this is wasted effort.  We aren't even gonna display the dropdowns
      school.reclamationPoints = 0;
      school.reclamationDescription = 'No SP invested in this school';
      school.successPoints = 0;
      school.successDescription = 'No SP invested in this school';
      return;
    }

    // calculate points in reclamation and success
    let reclamationPoints = this.getPointsInMagicSkill(
      school.spKey,
      school.recKey
    );
    let successPoints = this.getPointsInMagicSkill(
      school.spKey,
      school.succKey
    );

    // three bad scenarios: missing reclamation, missing success, or missing both
    if (reclamationPoints == 0 && successPoints != 0) {
      // estimate reclamation to be the same as success for now
      console.log(school.name + ' estimating reclamation');
      school.reclamationPoints = successPoints;
      school.reclamationDescription =
        '*MISSING and estimated from Success skill';
      school.successPoints = successPoints;
      school.successDescription = this.getDescriptionOfMagicSkill(
        school.spKey,
        school.succKey
      );
    } else if (reclamationPoints != 0 && successPoints == 0) {
      console.log(school.name + ' estimating success');
      school.reclamationPoints = reclamationPoints;
      school.reclamationDescription = this.getDescriptionOfMagicSkill(
        school.spKey,
        school.recKey
      );
      school.successPoints = reclamationPoints;
      school.successDescription =
        '*MISSING and estimated from Reclamation skill';
    } else if (reclamationPoints == 0 && successPoints == 0) {
      let spPoints = this.getPointsInMagicSkill(school.spKey, school.spKey);
      school.reclamationPoints = Math.ceil(spPoints / 2);
      school.reclamationDescription =
        '*MISSING and roughly estimated as 1/2 SP skill';
      school.successPoints = Math.ceil(spPoints / 2);
      school.successDescription =
        '*MISSING and roughly estimated as 1/2 SP skill';
    } else {
      // everything is actually fine!
      school.reclamationPoints = reclamationPoints;
      school.reclamationDescription = this.getDescriptionOfMagicSkill(
        school.spKey,
        school.recKey
      );
      school.successPoints = successPoints;
      school.successDescription = this.getDescriptionOfMagicSkill(
        school.spKey,
        school.succKey
      );
    }
  }

  hasChild = (_: number, node: FlatSkillNode) => node.expandable;

  getTotalXPMods(skillNode: SkillNode, ch) {
    if (skillNode.isMissing) {
      console.log(
        'Skill node is missing: breaking out of processing ' +
          skillNode.getName()
      );
      return 0;
    }

    let added = this.getTotalXPModifiers(skillNode.skill, ch);

    return Math.round(added.total * 1000) / 1000;
  }

  getTotalXPModifiers(sk, ch) {
    return this.skillsCalculatorService.calculateXPModsForCharacter(ch, sk);
  }

  getTotalPointsInSkill(chosenSkill, ch) {
    var base = this.getBasePointsInSkill(chosenSkill, ch);
    return base + chosenSkill.points;
  }

  getBasePointsInSkill(chosenSkill, ch) {
    var xpModDetails = this.skillsCalculatorService.calculateXPModsForCharacter(
      ch,
      chosenSkill.skillNode.skill
    );
    /*
    if (chosenSkill.skillNode.getParameterizedName() == 'DETECT_BASIC_DETECT') {
      
      // console.log(
      //   'Calculating for: ' +
      //     this.skillNameLookup[chosenSkill.skillNode.getParameterizedName()] +
      //     ' from ' +
      //     chosenSkill.guildName
      // );
      // console.log('Raw stat based Modifier: ' + xpModDetails.total);
      // console.log(xpModDetails.details);
      // // console.log('Modifier for skill: ' + chosenSkill.mod);
      // console.log('Base for skill: ' + chosenSkill.skillNode.getBase());
      
    }
    */

    return (
      this.skillsCalculatorService.calculatePointsAndDropdownsInChosenSkill(
        ch,
        chosenSkill
      ) - chosenSkill.points
    );

    // return Math.ceil(xpModDetails.total * chosenSkill.skillNode.getBase());
  }

  openDialog(cs: ChosenSkill): void {
    console.log('Opening a new dialog with object');
    console.log(cs);

    var clone = Object.create(cs);

    const dialogRef = this.dialog.open(EditSkillDetailsDialog, {
      width: '500px',
      data: clone,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      // there are lots of ways to close that don't yield a result
      if (result) {
        console.log('There is an item to use!');
        console.log(result);

        // update the original object
        if (result.level) {
          cs.level = result.level;
        }

        if (result.points) {
          cs.points = parseInt(result.points);
        }

        if ('notes' in result) {
          // if (result.notes) {
          cs.notes = result.notes;
        }
      }
    });
  }
}

@Component({
  selector: 'edit-skill-dialog',
  templateUrl: 'edit-skill-dialog.html',
})
export class EditSkillDetailsDialog {
  skillNameLookup = SkillNameTable;

  constructor(
    public dialogRef: MatDialogRef<EditSkillDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ChosenSkill
  ) {
    console.log('In constructor for EditSkillDetailsDialog');
  }

  getPrettyName() {
    return this.skillNameLookup[this.data.skillNode.getParameterizedName()];
    //return 'This is a pretty name';
  }

  getNameForSkill(chosenSkill): String {
    return this.skillNameLookup[chosenSkill.skillNode.getParameterizedName()];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*
<mat-card class="skill-card">
  <mat-card-header>
    <!-- <div mat-card-avatar class="example-header-image"></div> -->
    <mat-card-title>{{skillNameLookup[sampleLearnedSkill.skillNode.getParameterizedName()]}}</mat-card-title>
    <mat-card-subtitle>LVL {{sampleLearnedSkill.level}}</mat-card-subtitle>
  </mat-card-header>

  <!-- <mat-card-content *ngIf="sampleLearnedSkill.notes"> -->
  <mat-card-content>
    <p>
      Total points in skill: {{getTotalPointsInSkill(sampleLearnedSkill, globals.currentCharacter)}}
    </p>

    <p>
      Innate ({{getBasePointsInSkill(sampleLearnedSkill, globals.currentCharacter)}}) + Learned
      ({{sampleLearnedSkill.points}})
    </p>

    <p *ngIf="sampleLearnedSkill.notes">
      {{sampleLearnedSkill.notes}}
    </p>
  </mat-card-content>
  <mat-card-actions class="bordered-button">
    <button mat-stroked-button (click)="openDialog(sampleLearnedSkill)" >EDIT</button>
  </mat-card-actions>
</mat-card>
*/

/*
<div>
  <div *ngFor="let chosenSkill of globals.currentCharacter.acquiredSkills ">
    <p>
      {{ skillNameLookup[chosenSkill.skillNode.getParameterizedName()] }} (lvl {{
      chosenSkill.level }}) - base {{getBasePointsInSkill(chosenSkill, globals.currentCharacter)}}
    </p>
    <!--
    <p>
      {{ chosenSkill.skillNode.getParameterizedName() }}
    </p>
    -->
  </div>
</div>
*/

/*

<mat-tree [dataSource]="dataSource" [treeControl]="treeControl" multiTemplateDataRows>
  <!-- This is the tree node template for leaf nodes -->
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding multiTemplateDataRows>
    <!-- use a disabled button to provide padding for tree leaf -->
    <button mat-icon-button disabled></button>
    <div style="display: flex">
      <div class="skill-category-box">
        {{ skillTypeLookup[node.skillNode.skill["Skill Type"]] }}:
      </div>
      <div class="skill-name-box">
        <font [ngStyle]="{'color': node.isMissing ? 'red' : 'black'}">
          {{skillNameLookup[node.name]}}
        </font>
      </div>
    </div>
  </mat-tree-node>

  <!-- This is the tree node template for expandable nodes -->
  <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding multiTemplateDataRows>
    <button mat-icon-button matTreeNodeToggle
            [attr.aria-label]="'toggle ' + node.name">
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    <div style="display: flex">
      <div class="skill-category-box">
        {{ skillTypeLookup[node.skillNode.skill["Skill Type"]] }}:
      </div>
      <div class="skill-name-box">
        {{skillNameLookup[node.name]}}
      </div>
    </div>

  </mat-tree-node>

</mat-tree>

*/
