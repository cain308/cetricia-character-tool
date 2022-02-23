import { Guild, ALL_GUILDS } from './guilds';

import {
  StateManagementService,
  StateManagementService_GLOBAL,
} from './app/state-management.service';

var PROGRESSION_TABLE = [
  { start: 0, end: 99 },
  { start: 100, end: 199 },
  { start: 200, end: 299 },
  { start: 300, end: 499 },
  { start: 500, end: 799 },
  { start: 800, end: 1299 },
  { start: 1300, end: 1999 },
  { start: 2000, end: 2999 },
  { start: 3000, end: 4399 },
  { start: 4400, end: 6299 },
  { start: 6300, end: 8799 },
  { start: 8800, end: 12099 },
  { start: 12100, end: 16399 },
  { start: 16400, end: 21099 },
  { start: 21800, end: 25999 },
  { start: 26000, end: 30999 },
  { start: 31000, end: 35999 },
  { start: 36000, end: 40999 },
  { start: 41000, end: 46000 },
  { start: 45999, end: 50999 },
];

// For now, let this just be weapons.  Generalize it later
export class HeldItem {
  // if it's a straight purchase or discovery of a stock item
  originalItemKey = '';
  // a convenient direct reference to the original object we'll be using
  originalRef;
  // if it's a found item that has not been identified, and if so
  // what its id code is
  isIdentified = true;
  idCode;
  // if this is a custom item, we'll want to know
  isCustom = false;
  // these are the overrides to the default stats.  Anything not in
  // here will use the original values
  overrideObject = {};
  // notes about the item.  Could be flavortext, where it was found, or
  // really anything
  notes = '';
  // sometimes, you have more than one of an item in your inventory!
  numItems: Number = 1;
  // for deciding whether or not the item was equipped
  equipped = false;

  getName() {
    // This has to account for types of iteme
    switch (this.getCategory()) {
      case 'WEAPON':
        return this.getActualProperty('Name');
      case 'ARMOR':
        return this.getActualProperty('Armor Type');
      default:
        // I dunno, try for a field called "Name"
        return this.getActualProperty('Name');
    }
  }

  getTotalWeight() {
    let itemWeight = 0;
    switch (this.getCategory()) {
      case 'WEAPON':
        itemWeight = Number(this.getActualProperty('Weight'));
        break;
      case 'ARMOR':
        itemWeight = Number(this.getActualProperty('approx weight'));
        break;
      default:
        // I dunno, try for a field called "Name"
        itemWeight = Number(this.getActualProperty('Weight'));
    }

    return itemWeight * Number(this.numItems);
  }

  getCategory() {
    // again, probably need some logic here for custom items
    return this.getActualProperty('CATEGORY');
  }

  getActualProperty(propName) {
    if (this.isCustom) {
      if (this.overrideObject[propName]) {
        return this.overrideObject[propName];
      }
    }
    // probably need some logic here for custom items, once we implement them
    return this.originalRef[propName];
  }
}

export class ChosenSkill {
  // the combination of guild name + skill can uniquely identify a chosen skill
  guildName = '';
  skillNode;
  level = 0;
  points = 0;
  unspentXP = 0;
  mod = 0;
  xpMod = 0;
  notes = '';
}

export class Character {
  name: string;

  primaryGuild: Guild;
  secondaryGuild: Guild;

  // core attributes
  strength: number = 11;
  intelligence: number = 11;
  wisdom: number = 11;
  coordination: number = 11;
  health: number = 11;
  charisma: number = 11;
  appearance: number = 11;

  // calculated attributes
  reflex: number = 0;
  fortitude: number = 0;
  will: number = 0;
  social: number = 0;

  hitPoints: number = 3;
  basicSocial: number = 5;

  totalRawXP: number = 0;
  unspentGenericXP: number = 0;

  acquiredSkills: ChosenSkill[] = [];
  spellBook: string[] = [];
  inventory: HeldItem[] = [];

  // this is something we need to calculate from an item list!!
  currentEncumbrance: number = 0;
  weightPossible: number = 0;
  baseSpeed: number = 0;

  stateManagementService: StateManagementService =
    StateManagementService_GLOBAL;

  calculateDerivedSkills() {
    // calculate hitPoint and basicSocial from skills as well...

    //     Reflex is ({Intelligence+(Coordination*3)}
    this.reflex = this.intelligence + this.coordination * 3;

    // Fortitude is {Strength+(Health*2)+Hit Points}
    this.fortitude = this.strength + this.health * 2 + this.hitPoints;

    this.will = (this.intelligence + this.wisdom) * 2.5;
    // Will is {(Intelligence+Wisdom)*2.5}

    // Social CC is  ((Charisma+Appearance)*2)+(Wisdom/4)+ Basic Social
    this.social =
      (this.charisma + this.appearance) * 2 +
      this.wisdom / 4 +
      this.basicSocial;

    // weight possible, movement speed, etc

    // weight possible
    //(ST*90)+(HE*10)
    this.weightPossible = this.strength * 90 + this.health * 10;

    // base speed
    //(10’+(CD/4)’
    this.baseSpeed = Math.ceil(10 + this.coordination / 4);
    // actual speed
    // (base speed) * (1-(WC/WP))
  }

  getInventoryWeight() {
    let totalWeight = 0;
    this.inventory.forEach(function (item: HeldItem) {
      totalWeight += item.getTotalWeight();
    });
    return totalWeight;
  }

  getEncumbrancePercent() {
    /*
    console.log('Weight possible: ' + this.weightPossible);
    console.log('current carried = ' + this.getInventoryWeight());
    let result = this.weightPossible / this.getInventoryWeight();
    console.log('Encumbrance: ' + result);
    */
    return this.getInventoryWeight() / this.weightPossible;
  }

  getExistingSkill(skillNode) {
    // console.log("Char: checking for existing skill")
    // console.log(skillNode);
    var existingSkill: ChosenSkill = this.acquiredSkills.find(
      (sk) =>
        sk.skillNode.getParameterizedName() == skillNode.getParameterizedName()
    );
    return existingSkill;
  }

  hasSkill(skillNode) {
    return this.getExistingSkill(skillNode) ? true : false;
  }

  gapForNewLevel(levelNum) {
    // I'll leave levelNum 1 indexed for readability where it's used
    var index = levelNum - 1;
    if (index >= PROGRESSION_TABLE.length) {
      index = PROGRESSION_TABLE.length - 1;
    }

    var bracket = PROGRESSION_TABLE[index];
    var gap = bracket.end - bracket.start + 1;

    return gap;
  }

  addSkill(guild: Guild, skillNode, xpMod) {
    var existingSkill: ChosenSkill = this.getExistingSkill(skillNode);
    if (existingSkill) {
      console.log(
        'Already have skill.  Adding a level to ' +
          skillNode.getParameterizedName()
      );

      var neededXP = this.gapForNewLevel(existingSkill.level + 1);
      var realXP = Math.round(neededXP / xpMod);
      console.log(
        'Required xp to level: computed - ' + neededXP + ', real - ' + realXP
      );

      this.unspentGenericXP -= realXP;
      console.log('XP left: ' + this.unspentGenericXP);
      existingSkill.mod = xpMod;

      existingSkill.level++;

      // just for testing
      console.log(this.stateManagementService.getSaveCharacterData(this));
    } else {
      console.log('Newly acquiring skill ' + skillNode.getParameterizedName());
      var newSkill: ChosenSkill = new ChosenSkill();
      newSkill.guildName = guild.name;
      newSkill.level = 1;
      newSkill.skillNode = skillNode;
      var neededXP = this.gapForNewLevel(1);
      var realXP = Math.round(neededXP / xpMod);
      console.log(
        'Required xp to level: computed - ' +
          neededXP +
          ', real - ' +
          realXP +
          ' rounded from ' +
          neededXP / xpMod
      );
      this.unspentGenericXP -= realXP;
      newSkill.mod = xpMod;
      console.log('XP left: ' + this.unspentGenericXP);

      this.acquiredSkills.push(newSkill);
    }
    // save after each addition of a skill
    this.stateManagementService.saveCharacter(this);
  }

  debugDescribeSkills() {
    var messageSegments = [];
    messageSegments.push('Unspent XP: ' + this.unspentGenericXP);
    // var finalString = "Unspent XP: "+this.unspentGenericXP + "\n";
    for (let sk of this.acquiredSkills) {
      messageSegments.push(
        sk.skillNode.getParameterizedName() +
          ' (' +
          sk.level +
          ')' +
          ' - ' +
          sk.guildName
      );
    }
    return messageSegments.join('\n');
  }

  addItem(item: HeldItem) {
    // right now, just add it straight
    this.inventory.push(item);
  }

  // spells are really just a list of their keys.  So add them by key
  addSpell(spellKey) {
    this.spellBook.push(spellKey);
    console.log(this.spellBook);
    this.spellBook = [...new Set(this.spellBook)];
    console.log(this.spellBook);
  }
}

var AaronChar: Character = new Character();
AaronChar.name = 'Dion WillowBrook';
AaronChar.strength = 15;
AaronChar.intelligence = 18;
AaronChar.wisdom = 14;
AaronChar.coordination = 18;
AaronChar.health = 15;
AaronChar.charisma = 15;
AaronChar.appearance = 15;

AaronChar.calculateDerivedSkills();

AaronChar.primaryGuild = ALL_GUILDS.find((x) => x.name == 'Collegium Arcana');
AaronChar.secondaryGuild = ALL_GUILDS.find(
  (x) => x.name == 'Bowyers of Ceminiar'
);

AaronChar.unspentGenericXP = 8750;

var character = StateManagementService_GLOBAL.loadCharacter();
// console.log("Finished trying to load the oldCharacter");
if (!character) {
  console.log('There is no old character');
  character = AaronChar;
}

console.log(character);
// console.log("Primary guild set to: "+AaronChar.primaryGuild.name);
// console.log("Secondary guild set to: "+AaronChar.secondaryGuild.name);

export const currentChar = character;
