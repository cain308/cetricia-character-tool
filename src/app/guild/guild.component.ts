import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Inject
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource, MatSort } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { Globals } from '../../globals';
import {
  SkillTypeTable,
  SkillNameTable,
  Skills,
  SkillLookupByName,
  GET_NODES_BY_NAME,
  SkillNode
} from '../../skillsdata';
import { Character } from '../../chardata';
import { SkillsCalculatorService } from '../skills-calculator.service';
import { UtilsService } from '../utils.service';
import { Guild, ALL_GUILDS } from '../../guilds';

@Component({
  selector: 'app-guild',
  templateUrl: './guild.component.html',
  styleUrls: ['./guild.component.css']
})
export class GuildComponent implements OnInit, AfterViewInit {
  globals: Globals;
  allGuilds: Guild[] = ALL_GUILDS;
  skillNameLookup = SkillNameTable;
  skillTypeLookup = SkillTypeTable;
  skillLookupByName = SkillLookupByName;
  skillsCalculatorService: SkillsCalculatorService;
  utilsService: UtilsService;

  skillNodeLookupFn = GET_NODES_BY_NAME;

  headers = [];

  sortedData;

  selectedGuild: Guild;

  dialog: MatDialog;
  // @ViewChild(MatSort, {static:false}) sort: MatSort;

  constructor(
    globals: Globals,
    skillsCalculatorService: SkillsCalculatorService,
    utilsService: UtilsService,
    dialog: MatDialog
  ) {
    this.globals = globals;
    this.skillsCalculatorService = skillsCalculatorService;
    this.utilsService = utilsService;
    this.dialog = dialog;
  }

  ngOnInit() {
    // this.sortListByRelativeSkill();
    this.headers = [
      'Category',
      'Skill Name',
      'Relative Skill',
      'Total XP Mod',
      'Raw XP For 100',
      'XP Mod Details',
      'Add'
      // "Remove"
    ];

    // this.selectedGuild = this.globals.currentCharacter.primaryGuild;
    this.selectedGuild = this.allGuilds[0];

    // this.guildSkillData = this.globals.currentCharacter.primaryGuild.skills.slice();

    this.sortedData = new MatTableDataSource(this.selectedGuild.skills.slice());
    this.sortedData.sortData = this.sortDataForMatSort;
    // this.sortedData = this.guildSkillData.slice();
  }

  ngAfterViewInit() {
    // this.sortedData.sort = this.sort;
  }

  onGuildSelectionChanged() {
    console.log('Selection changed to ' + this.selectedGuild);
    // this.sortedData = new MatTableDataSource(this.selectedGuild.skills.slice());
    this.sortedData.data = this.selectedGuild.skills.slice();
  }

  effectiveXP(skill, ch) {
    let xpMod = this.getTotalXPMods(skill, ch);
    let scaledXP = 100 / xpMod;
    return Math.floor(scaledXP);
    //return scaledXP;
  }

  roundRatio(val) {
    return Math.round(val);
  }

  getFullSkill(nameKey) {
    return this.skillLookupByName[nameKey];
  }

  getRelativeSkill(skill) {
    let ratio =
      this.roundRatio((skill['This School'] / skill['Bad School']) * 100) - 100;
    if (ratio > 0) {
      return '+' + ratio + '%';
    }
    return ratio + '%';
  }

  getRelativeSkillRaw(skill) {
    return (
      Math.round((skill['This School'] / skill['Bad School']) * 1000) - 1000
    );
  }

  getXPModDescription(skill, ch) {
    let thisSchool = Number(skill['This School']);
    let added = this.getAttributeXPModifiersById(skill['Skill Name'], ch);

    let descriptionString = this.skillsCalculatorService.describeModDetails(
      added
    );
    var description = thisSchool + ' from school. ' + descriptionString;
    // descriptions.push(detail.total+" from "+detail.att
    return description;
  }

  getTotalXPMods(skill, ch) {
    let thisSchool = Number(skill['This School']);
    let added = this.getAttributeXPModifiersById(skill['Skill Name'], ch);

    return Math.round((thisSchool + added.total) * 1000) / 1000;
  }

  getAttributeXPModifiersById(nameKey, ch) {
    var fullSkill = this.skillLookupByName[nameKey];
    if (!fullSkill) {
      // TODO: handle this
      //console.log("Could not retrieve full value for "+nameKey);
      return { total: 0, details: [] };
    }
    return this.getTotalXPModifiers(fullSkill, ch);
  }

  getTotalXPModifiers(sk, ch) {
    return this.skillsCalculatorService.calculateXPModsForCharacter(ch, sk);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sortedData.filter = filterValue.trim().toLowerCase();
  }

  sortDataForMatSort(unsorted: [], sort: Sort) {
    console.log('inside new sort');
    const data = unsorted.slice();
    if (!sort.active || sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Skill Name':
          return this.compare(a['Skill Name'], b['Skill Name'], isAsc);
        case 'Relative Skill':
          return this.compare(
            this.getRelativeSkillRaw(a),
            this.getRelativeSkillRaw(b),
            isAsc
          );
        case 'Total XP Mod':
          return this.compare(
            this.getTotalXPMods(a, this.globals.currentCharacter),
            this.getTotalXPMods(b, this.globals.currentCharacter),
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  sortData(sort: Sort) {
    console.log('inside old sort');
    const data = this.selectedGuild.skills.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData.data = data;
      // this.sortedData = data;
      return;
    }

    this.sortedData.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Skill Name':
          return this.compare(a['Skill Name'], b['Skill Name'], isAsc);
        case 'Relative Skill':
          return this.compare(
            this.getRelativeSkillRaw(a),
            this.getRelativeSkillRaw(b),
            isAsc
          );
        case 'Total XP Mod':
          return this.compare(
            this.getTotalXPMods(a, this.globals.currentCharacter),
            this.getTotalXPMods(b, this.globals.currentCharacter),
            isAsc
          );
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  shouldDisableButtonForSkill(skill) {
    return !this.canAddSkill(skill);
  }

  currentCharHasSkill(skillNode) {
    return this.globals.currentCharacter.hasSkill(skillNode);
  }

  canAddSkill(skill) {
    // console.log("canAddSkill: "+skill["Skill Name"]);
    var skillNodes = this.skillNodeLookupFn(skill['Skill Name']);
    if (!skillNodes) {
      return false;
    }

    if (skillNodes.length == 0) {
      //console.log(skill["Skill Name"] + " has no entries");
      return false;
    }

    if (skillNodes.length == 1) {
      var sn: SkillNode = skillNodes[0];
      // console.log(sn);
      // console.log(skill["Skill Name"] + " has skill node "+sn.getParameterizedName());
      if (this.currentCharHasSkill(sn)) {
        return true;
      }

      var parent: SkillNode = sn.getParent();
      if (parent) {
        // console.log(sn.getParameterizedName() + " has parent "+parent.getParameterizedName());
        if (this.currentCharHasSkill(parent)) {
          return true;
        }
      } else {
        return true;
      }
      return false;
    }
    // maybe filter the array down
    var filteredList = this.filterSkillList(skillNodes);
    if (filteredList.length > 0) {
      return true;
    }

    return false;
  }

  filterSkillList(skillNodes: SkillNode[]) {
    var filteredNodes: SkillNode[] = [];

    for (let sn of skillNodes) {
      if (this.currentCharHasSkill(sn)) {
        filteredNodes.push(sn);
        continue;
      }

      var parent: SkillNode = sn.getParent();
      if (parent) {
        if (this.currentCharHasSkill(parent)) {
          filteredNodes.push(sn);
          // console.log("skill "+sn.getParameterizedName()+" has parent "+parent.getParameterizedName());
          continue;
        }
      } else {
        // console.log("skill "+sn.getParameterizedName()+" has no parent. Its parent skill is "+sn.skill["Parent Skill"]);
        // but is it supposed to have a parent??
        // it not having one might mean that there was an error hooking it up
        var listedParent = sn.skill['Parent Skill'];
        if (listedParent && listedParent.length > 0) {
          // console.log("...not adding it")
          continue;
        }
        // if (sn.skill["Parent Skill"]) {
        //   // it not having one means that there was an error hooking it up
        //   continue;
        // }
        filteredNodes.push(sn);
        continue;
      }
      continue;
    }
    return filteredNodes;
  }

  addSkill(skill) {
    var skillNodes = this.skillNodeLookupFn(skill['Skill Name']);
    if (!skillNodes) {
      return;
    }

    if (skillNodes.length == 1) {
      var sn: SkillNode = skillNodes[0];

      var modifier = this.getTotalXPMods(skill, this.globals.currentCharacter);
      console.log('modifier: ' + modifier);

      this.globals.currentCharacter.addSkill(this.selectedGuild, sn, modifier);
      return;
    }
    // this is a multi-skill thing that requries me to open a dialogue.
    var filteredList = this.filterSkillList(skillNodes);
    if (filteredList.length > 0) {
      this.openDialog({ nodes: filteredList }, skill);
    }
  }

  openDialog(nodeData, origGuildSkill): void {
    // var newChar : Character = new Character();
    // newChar.name = "New Character";
    const dialogRef = this.dialog.open(AddSkillDialog, {
      width: '500px',
      data: nodeData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // there are lots of ways to close that don't yield a result
      if (result) {
        console.log('Got skill to add!');
        // console.log(result);
        var modifier = this.getTotalXPMods(
          origGuildSkill,
          this.globals.currentCharacter
        );
        console.log('modifier: ' + modifier);
        this.globals.currentCharacter.addSkill(
          this.selectedGuild,
          result,
          modifier
        );
        /*
        var newChar = new Character();
        // make sure all of the data is in number form and not string from
        newChar.name = result.name;
        newChar.strength = Number(result.strength);
        newChar.intelligence = Number(result.intelligence);
        newChar.wisdom = Number(result.wisdom);
        newChar.coordination = Number(result.coordination);
        newChar.health = Number(result.health);
        newChar.charisma = Number(result.charisma);
        newChar.appearance = Number(result.appearance);
        newChar.calculateDerivedSkills();

        console.log(newChar);

        this.globals.characters.push(newChar);
        this.globals.currentCharacter = newChar;

        this.calculateSkillsArrayFromCurrentCharacter();
        */
      }
    });
  }
}

@Component({
  selector: 'add-skill-dialog',
  templateUrl: 'add-skill-dialog.html'
})
export class AddSkillDialog {
  constructor(
    public dialogRef: MatDialogRef<AddSkillDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getNameForSkill(skillNode): String {
    return skillNode.getParameterizedName();
  }
}
