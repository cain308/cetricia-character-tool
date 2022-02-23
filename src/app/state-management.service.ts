import { Injectable } from '@angular/core';

import { Character, ChosenSkill, HeldItem } from '../chardata';
import { ALL_GUILDS } from '../guilds';
import { GET_NODES_BY_NAME } from '../skillsdata';
import { ITEM_LOOKUP } from '../itemdata';

class HeldItemReference {
  // if it's a straight purchase or discovery of a stock item
  originalItemKey = '';
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

  numItems: Number = 1;
}

// This is the actual class that'll be written--we'll have to look up the skillNode objects once they have been loaded again.
class ChosenSkillReference {
  // the combination of guild name + skill can uniquely identify a chosen skill
  guildName;
  skillName;
  level;
  points;
  unspentXP;
  mod;
  notes;
}

// Note: it does not want to be contacted if you apply for new jobs
class CharacterReference {
  name: string;

  primaryGuildName: string;
  secondaryGuildName: string;

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

  acquiredSkillReferences: ChosenSkillReference[] = [];
  spellBook: string[] = [];
  inventoryReferences: HeldItemReference[] = [];
}

function convertCharToReference(character: Character) {
  var characterReference: CharacterReference = new CharacterReference();

  characterReference.name = character.name;
  characterReference.primaryGuildName = character.primaryGuild.name;
  characterReference.secondaryGuildName = character.secondaryGuild.name;

  // core attributes
  characterReference.strength = character.strength;
  characterReference.intelligence = character.intelligence;
  characterReference.wisdom = character.wisdom;
  characterReference.coordination = character.coordination;
  characterReference.health = character.health;
  characterReference.charisma = character.charisma;
  characterReference.appearance = character.appearance;

  // calculated attributes
  characterReference.reflex = character.reflex;
  characterReference.fortitude = character.fortitude;
  characterReference.will = character.will;
  characterReference.social = character.social;
  characterReference.hitPoints = character.hitPoints;
  characterReference.basicSocial = character.basicSocial;

  characterReference.totalRawXP = character.totalRawXP;
  characterReference.unspentGenericXP = character.unspentGenericXP;

  characterReference.acquiredSkillReferences = character.acquiredSkills.map(
    function (cs: ChosenSkill) {
      var ref = new ChosenSkillReference();
      ref.guildName = cs.guildName;
      ref.skillName = cs.skillNode.getParameterizedName();
      ref.level = cs.level;
      ref.points = cs.points;
      ref.unspentXP = cs.unspentXP;
      ref.mod = cs.mod;
      ref.notes = cs.notes;
      return ref;
    }
  );

  characterReference.inventoryReferences = character.inventory.map(function (
    item: HeldItem
  ) {
    var ref = new HeldItemReference();
    ref.originalItemKey = item.originalItemKey;
    ref.isIdentified = item.isIdentified;
    ref.idCode = item.idCode;
    ref.isCustom = item.isCustom;
    ref.overrideObject = item.overrideObject;
    ref.notes = item.notes;
    ref.numItems = item.numItems;
    return ref;
  });

  characterReference.spellBook = character.spellBook;

  return characterReference;
}

function convertCharReferenceToChar(characterReference: CharacterReference) {
  var character: Character = new Character();

  character.name = characterReference.name;
  character.primaryGuild = ALL_GUILDS.find(
    (x) => x.name == characterReference.primaryGuildName
  );
  character.secondaryGuild = ALL_GUILDS.find(
    (x) => x.name == characterReference.secondaryGuildName
  );

  // core attributes
  character.strength = characterReference.strength;
  character.intelligence = characterReference.intelligence;
  character.wisdom = characterReference.wisdom;
  character.coordination = characterReference.coordination;
  character.health = characterReference.health;
  character.charisma = characterReference.charisma;
  character.appearance = characterReference.appearance;

  // calculated attributes
  character.reflex = characterReference.reflex;
  character.fortitude = characterReference.fortitude;
  character.will = characterReference.will;
  character.social = characterReference.social;
  character.hitPoints = characterReference.hitPoints;
  character.basicSocial = characterReference.basicSocial;

  // a late addition
  character.totalRawXP = characterReference.totalRawXP
    ? characterReference.totalRawXP
    : 0;
  character.unspentGenericXP = characterReference.unspentGenericXP;

  character.acquiredSkills = characterReference.acquiredSkillReferences.map(
    function (ref: ChosenSkillReference) {
      var cs = new ChosenSkill();
      cs.guildName = ref.guildName;
      cs.skillNode = GET_NODES_BY_NAME(ref.skillName)[0];
      cs.level = ref.level;
      cs.points = ref.points;
      cs.unspentXP = ref.unspentXP;
      cs.mod = ref.mod;
      cs.notes = ref.notes;
      return cs;
    }
  );
  // a late addition
  if (characterReference.inventoryReferences) {
    character.inventory = characterReference.inventoryReferences.map(function (
      ref: HeldItemReference
    ) {
      var item = new HeldItem();

      item.originalItemKey = ref.originalItemKey;
      item.originalRef = ITEM_LOOKUP[ref.originalItemKey];
      item.isIdentified = ref.isIdentified;
      item.idCode = ref.idCode;
      item.isCustom = ref.isCustom;
      item.overrideObject = ref.overrideObject;
      item.notes = ref.notes;
      item.numItems = ref.numItems;
      return item;
    });
  } else {
    character.inventory = [];
  }

  character.spellBook = characterReference.spellBook;

  return character;
}

@Injectable()
export class StateManagementService {
  constructor() {}

  getSaveCharacterData(character) {
    console.log('Generating saved character data!');
    var charRef: CharacterReference = convertCharToReference(character);
    return JSON.stringify(charRef);
  }

  saveCharacter(character) {
    console.log('Saving character!');
    var charData = this.getSaveCharacterData(character);
    localStorage.setItem('SavedCelestriaCharacter', charData);
  }

  loadCharacter() {
    console.log('Loading character!');
    var charReferenceData = localStorage.getItem('SavedCelestriaCharacter');
    // console.log(charReferenceData);
    if (!charReferenceData) {
      // console.log("There is no character.  Returning null");
      return null;
    }

    // console.log("There is a saved character.  Parsing it now");
    var newChar = convertCharReferenceToChar(JSON.parse(charReferenceData));
    newChar.calculateDerivedSkills();
    // console.log("Converted character");
    return newChar;
  }
}

export const StateManagementService_GLOBAL = new StateManagementService();
