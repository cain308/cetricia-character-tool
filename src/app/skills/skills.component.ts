import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { SkillsCalculatorService } from '../skills-calculator.service';

import { SkillTypeTable, SkillNameTable, Skills, SkillNode, SKILL_TREE } from '../../skillsdata'
import { Character } from '../../chardata'
import { Globals } from '../../globals'


interface FlatSkillNode {
  expandable: boolean;
  name: string;
  skillNode : SkillNode;
  isMissing;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  allSkills = Skills;
  skillTypeLookup = SkillTypeTable;
  skillNameLookup = SkillNameTable;

  globals:Globals;
  skillsCalculatorService:SkillsCalculatorService;

  // for flattening the data
  private _transformer = (node: SkillNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.getName(),
      skillNode: node,
      isMissing: node.isMissing,
      level: level,
    };
  }
  
  // This is all for hooking up the skill tree as a tree
  treeControl = new FlatTreeControl<FlatSkillNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(globals:Globals, skillsCalculatorService : SkillsCalculatorService) { 
    this.globals = globals; 
    this.skillsCalculatorService = skillsCalculatorService;
    this.dataSource.data = SKILL_TREE;
  }

  hasChild = (_: number, node: FlatSkillNode) => node.expandable;

  ngOnInit() {
    // console.log("globals is "+this.globals);
    // console.log("global char is "+this.globals.currentCharacter);
    // console.log("I have character "+this.globals.currentCharacter.name);

    var processFN = this.processAttributeModifier;
    var char = this.globals.currentCharacter;
    this.allSkills.forEach(function(skill){
      var detailsObject = processFN(skill["Attribute Modifier"], char);
      skill["ModDetails"] = detailsObject;
    });
  }

  processSkillsForCharacter(char : Character) {
    var processFN = this.processAttributeModifier;
    this.allSkills.forEach(function(skill){
      var detailsObject = processFN(skill["Attribute Modifier"], char);
      skill["ModDetails"] = detailsObject;
    });
  }

  getTotalXPMods(skillNode:SkillNode, ch) {
    if (skillNode.isMissing) {
      console.log("Skill node is missing: breaking out of processing "+skillNode.getName());
      return 0;
    }
    // console.log("About to calculate skill stats for "+skillNode.getName());

    // let thisSchool = Number(skill["This School"]);
    let added = this.getTotalXPModifiers(skillNode.skill, ch);

    // console.log("Got "+added.total);
    return Math.round(added.total * 1000) / 1000;
  }


  getInnateTalent(skillNode:SkillNode, ch) {
    if (skillNode.isMissing) {
      console.log("Skill node is missing: breaking out of processing "+skillNode.getName());
      return 0;
    }
    // let thisSchool = Number(skill["This School"]);
    let added = this.getTotalXPModifiers(skillNode.skill, ch);

    return Math.ceil(added.total * skillNode.getBase());
  }

  describeModDetails(skillNode:SkillNode, ch) {
    if (skillNode.isMissing) {
      console.log("Skill node is missing: breaking out of processing "+skillNode.getName());
      return 0;
    }
    // console.log("About to calculate skill stats for "+skillNode.getName());

    // let thisSchool = Number(skill["This School"]);
    let added = this.getTotalXPModifiers(skillNode.skill, ch);

    return this.skillsCalculatorService.describeModDetails(added);

    // console.log("Got "+added.total);
    // return Math.round(added.total * 1000) / 1000;
  }


  getTotalXPModifiers(sk, ch) {
    // console.log(sk);
    return this.skillsCalculatorService.calculateXPModsForCharacter(ch, sk);
  }

  processAttributeModifier(formula:string, character) {
    // console.log("Processing "+formula);
    // make this a constant somewhere
    let formulaMatcher: RegExp = /([a-zA-Z]+)[^\d]?(\d+)\s*\-(0?\.\d+)/;
    // make this constant somewhere too
    let attributeMapper = {
      ST:"strength",
      IN:"intelligence",
      INT:"intelligence",
      WI:"wisdom",
      W:"wisdom",
      CD:"coordination",
      HE:"health",
      CH:"charisma",
      AP:"appearance"
    };

    var segments = formula.split("/");
    //console.log(segments.length +" segments in formula")
    var totalModifier = 0;
    var modifiersDetails = [];
    segments.forEach(function (seg) {
      //console.log(seg);
      if (!formulaMatcher.test(seg)) {
        console.log("Formula segment \""+seg+"\" did NOT parse!  Part of: "+formula);
        return
      }
      //console.log(formulaMatcher.test(seg))
      let groups = seg.match(formulaMatcher);
      var att = groups[1];
      var target = groups[2];
      var scaleFactor = groups[3];

      // process the pieces and apply then to the character
      // 1. Get the relevant attribute from the character
      var charAtt:number = character[attributeMapper[att]];
      //console.log("Character has a "+charAtt);
      
      // 2. Get the cutoff and figure out how far above or below it we are
      var delta:number = charAtt - Number(target);
      //console.log("Delta is "+delta);
      
      // 3. Get the modifier and multiply it by the cutoff to get the final value
      var finalXPMod = Number(scaleFactor) * delta;
      //console.log("Character gains a modifier of "+finalXPMod);
      
      // add to the total modifier value
      if (isNaN(finalXPMod)) {
        console.log("WON'T PROCESS: "+seg);


        console.log("Attribute "+att+" which processes to "+attributeMapper[att]);
        console.log("Character has a "+charAtt);
        console.log("Delta is "+delta);
        console.log("Character gains a modifier of "+finalXPMod);
      }
      // originally just rounded the final total, but we might want to display this too 
      finalXPMod = Math.round(finalXPMod * 1000) / 1000;

      totalModifier += finalXPMod;
      // also track the details of this particular interaction
      var details = {att:attributeMapper[att], delta:delta, total:finalXPMod, formula:seg};
      modifiersDetails.push(details);
    });

    // round the total nicely
    totalModifier = Math.round(totalModifier * 1000) / 1000;

    return {total: totalModifier, details:modifiersDetails};
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}