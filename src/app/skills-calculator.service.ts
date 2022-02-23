import { Injectable } from '@angular/core';

import {
  SkillTypeTable,
  SkillNameTable,
  Skills,
  SkillNode,
} from '../skillsdata';
import { Character, ChosenSkill } from '../chardata';

@Injectable()
export class SkillsCalculatorService {
  constructor() {
    //console.log("Creating class SkillsCalculatorService");
  }

  calculateXPModsForCharacter(char: Character, skill) {
    var detailsObject = this.processAttributeModifier(
      skill['Attribute Modifier'],
      char
    );
    return detailsObject;
  }

  calculateBasePoints(char: Character, skill) {
    var detailsObject = this.processAttributeModifier(
      skill['Attribute Modifier'],
      char
    );
    return detailsObject;
  }

  getBasePointsInSkill(ch: Character, sn: SkillNode) {
    var xpModDetails = this.calculateXPModsForCharacter(ch, sn.skill);
    return Math.ceil(xpModDetails.total * sn.getBase());
  }

  calculateBasePointsAndDropdownsInChosenSkill(char: Character, cs: ChosenSkill) {
    // Calculate points for this skill, with base plus assigned points
    let total = this.getBasePointsInSkill(char, cs.skillNode);

    // console.log(
    //   'Points in ' + cs.skillNode.getParameterizedName() + ': ' + total
    // );
    // if there's a parent, recursively walk up the tree
    if (cs.skillNode.parent) {
      // safe to assume we have the parent skill here.  Should never be null
      let parentChosenSkill = char.getExistingSkill(cs.skillNode.parent);
      // ...but just in case, we can roll with it
      if (parentChosenSkill) {
        // console.log('have to look up results for parent skill');
        var parentPoints = this.calculatePointsAndDropdownsInChosenSkill(
          char,
          parentChosenSkill
        );

        return total + Math.ceil(0.5 * parentPoints);
      } else {
        return (
          total +
          Math.ceil(
            0.5 *
              this.calculatePointsAndDropdownsInNaiveSkill(
                char,
                cs.skillNode.parent
              )
          )
        );
      }
    }
    // otherwise, just return what we've got
    return total;
  }

  calculatePointsAndDropdownsInChosenSkill(char: Character, cs: ChosenSkill) {
    // Calculate points for this skill, with base plus assigned points
    let total = this.getBasePointsInSkill(char, cs.skillNode) + cs.points;

    // console.log(
    //   'Points in ' + cs.skillNode.getParameterizedName() + ': ' + total
    // );
    // if there's a parent, recursively walk up the tree
    if (cs.skillNode.parent) {
      // safe to assume we have the parent skill here.  Should never be null
      let parentChosenSkill = char.getExistingSkill(cs.skillNode.parent);
      // ...but just in case, we can roll with it
      if (parentChosenSkill) {
        // console.log('have to look up results for parent skill');
        var parentPoints = this.calculatePointsAndDropdownsInChosenSkill(
          char,
          parentChosenSkill
        );

        return total + Math.ceil(0.5 * parentPoints);
      } else {
        return (
          total +
          Math.ceil(
            0.5 *
              this.calculatePointsAndDropdownsInNaiveSkill(
                char,
                cs.skillNode.parent
              )
          )
        );
      }
    }
    // otherwise, just return what we've got
    return total;
  }

  calculatePointsAndDropdownsInNaiveSkill(
    char: Character,
    skillNode: SkillNode
  ) {
    // Calculate naive points for this skill
    let total = this.getBasePointsInSkill(char, skillNode);
    // if there's a parent, recursively walk up the tree.
    if (skillNode.parent) {
      // If we own the parent, switch to the other recursive call
      let parentChosenSkill = char.getExistingSkill(skillNode.parent);
      if (parentChosenSkill) {
        return (
          total +
          Math.ceil(
            0.5 *
              this.calculatePointsAndDropdownsInChosenSkill(
                char,
                parentChosenSkill
              )
          )
        );
      } else {
        return (
          total +
          Math.ceil(
            0.5 *
              this.calculatePointsAndDropdownsInNaiveSkill(
                char,
                skillNode.parent
              )
          )
        );
      }
    }
    // otherwise, just return what we've got
    return total;
  }

  describePointsAndDropdownsInChosenSkill(char: Character, cs: ChosenSkill) {
    // Calculate points for this skill, with base plus assigned points
    let total1 = this.getBasePointsInSkill(char, cs.skillNode) + cs.points;

    // this is the body of getBasePointsInSkill
    var xpModDetails = this.calculateXPModsForCharacter(
      char,
      cs.skillNode.skill
    );
    let totalInnate = Math.ceil(xpModDetails.total * cs.skillNode.getBase());
    // something like 5 (from "the attribute mod stuff" * base)
    // let desc =
    //   total1 +
    //   ': ' +
    //   cs.points +
    //   '(allocated) + (' +
    //   this.describeModDetails(xpModDetails) +
    //   ')*' +
    //   cs.skillNode.getBase();

    // do this with less detail?
    let desc =
      total1 +
      ': ' +
      cs.points +
      '(allocated) + ' +
      totalInnate +
      '(' +
      xpModDetails.total +
      '*' +
      cs.skillNode.getBase() +
      ')';

    // if there's a parent, recursively walk up the tree
    if (cs.skillNode.parent) {
      // safe to assume we have the parent skill here.  Should never be null
      let parentChosenSkill = char.getExistingSkill(cs.skillNode.parent);
      // ...but just in case, we can roll with it
      if (parentChosenSkill) {
        let inheritedTotal = Math.ceil(
          0.5 *
            this.calculatePointsAndDropdownsInChosenSkill(
              char,
              parentChosenSkill
            )
        );

        return (
          desc +
          ' + (' +
          inheritedTotal +
          ' -- 1/2 * (' +
          this.describePointsAndDropdownsInChosenSkill(
            char,
            parentChosenSkill
          ) +
          ')'
        );
      } else {
        return 'ERROR: Own a skill without owning its parent!';
      }
    }
    // otherwise, just return what we've got
    return desc;
  }

  describePointsAndDropdownsInNaiveSkill(
    char: Character,
    skillNode: SkillNode
  ) {
    // Calculate naive points for this skill

    // this is the body of getBasePointsInSkill
    var xpModDetails = this.calculateXPModsForCharacter(char, skillNode.skill);
    let total = Math.ceil(xpModDetails.total * skillNode.getBase());
    // something like 5 (from "the attribute mod stuff" * base)
    let desc =
      total + ': (' + xpModDetails.total + '*' + skillNode.getBase() + ')';

    /*
    let desc =
      total1 +
      ': ' +
      cs.points +
      '(allocated) + ' +
      totalInnate +
      '(' +
      xpModDetails.total +
      '*' +
      cs.skillNode.getBase() +
      ')';
      */
    // if there's a parent, recursively walk up the tree
    // But also: the effective points are only counted IF
    // 1. This skill has no parent, or
    // 2. The parent is owned by us.
    if (skillNode.parent) {
      // If we own the parent, switch to the other recursive call
      let parentChosenSkill = char.getExistingSkill(skillNode.parent);
      if (parentChosenSkill) {
        let inheritedTotal = Math.ceil(
          0.5 *
            this.calculatePointsAndDropdownsInChosenSkill(
              char,
              parentChosenSkill
            )
        );

        return (
          desc +
          ' + (' +
          inheritedTotal +
          ' -- 1/2 * (' +
          this.describePointsAndDropdownsInChosenSkill(
            char,
            parentChosenSkill
          ) +
          ')'
        );
      } else {
        return "0 (don't own parent skill)";
      }
    }
    // otherwise, just return what we've got
    return desc;
  }

  /* I imagine explanatory tooltips would just love this */
  describeModDetails(detailsObject) {
    if (!detailsObject) {
      return 'No details object';
    }
    if (!detailsObject.total) {
      return 'No total on details object';
    }

    var descriptions = [];
    detailsObject.details.forEach(function (detail) {
      descriptions.push(detail.total + ' from ' + detail.att);
    });
    return descriptions.join(', ');
  }

  processAttributeModifier(formula: string, character) {
    // console.log("Processing "+formula);
    // make this a constant somewhere
    let formulaMatcher: RegExp = /([a-zA-Z]+)[^\d]?(\d+)\s*\-(0?\.\d+)/;
    // make this constant somewhere too
    let attributeMapper = {
      ST: 'strength',
      IN: 'intelligence',
      INT: 'intelligence',
      WI: 'wisdom',
      W: 'wisdom',
      CD: 'coordination',
      HE: 'health',
      CH: 'charisma',
      AP: 'appearance',
    };

    var segments = formula.split('/');
    //console.log(segments.length +" segments in formula")
    var totalModifier = 0;
    var modifiersDetails = [];
    segments.forEach(function (seg) {
      //console.log(seg);
      if (!formulaMatcher.test(seg)) {
        console.log(
          'Formula segment "' + seg + '" did NOT parse!  Part of: ' + formula
        );
        return;
      }
      //console.log(formulaMatcher.test(seg))
      let groups = seg.match(formulaMatcher);
      var att = groups[1];
      var target = groups[2];
      var scaleFactor = groups[3];

      /*
      console.log("attribute: "+att+" ("+attributeMapper[att]+")");
      console.log("target value: "+target);
      console.log("scale factor: "+scaleFactor);
      */

      // process the pieces and apply then to the character
      // 1. Get the relevant attribute from the character
      var charAtt: number = character[attributeMapper[att]];
      //console.log("Character has a "+charAtt);

      // 2. Get the cutoff and figure out how far above or below it we are
      var delta: number = charAtt - Number(target);
      //console.log("Delta is "+delta);

      // 3. Get the modifier and multiply it by the cutoff to get the final value
      var finalXPMod = Number(scaleFactor) * delta;
      //console.log("Character gains a modifier of "+finalXPMod);

      // add to the total modifier value
      if (isNaN(finalXPMod)) {
        console.log("WON'T PROCESS: " + seg);

        console.log(
          'Attribute ' + att + ' which processes to ' + attributeMapper[att]
        );
        console.log('Character has a ' + charAtt);
        console.log('Delta is ' + delta);
        console.log('Character gains a modifier of ' + finalXPMod);
      }
      // originally just rounded the final total, but we might want to display this too
      finalXPMod = Math.round(finalXPMod * 1000) / 1000;

      totalModifier += finalXPMod;
      // also track the details of this particular interaction
      var details = {
        att: attributeMapper[att],
        delta: delta,
        total: finalXPMod,
        formula: seg,
      };
      modifiersDetails.push(details);
    });

    // round the total nicely
    totalModifier = Math.round(totalModifier * 1000) / 1000;

    return { total: totalModifier, details: modifiersDetails };
  }
}
