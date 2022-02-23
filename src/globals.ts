import { Injectable } from '@angular/core';
import { Character, currentChar } from './chardata'

@Injectable()
export class Globals {
  role: string = 'test';
  currentCharacter:Character = currentChar;
  characters:Character[] = [];

  constructor() {
    this.currentCharacter = currentChar;

    this.characters.push(this.currentCharacter);
  }
}