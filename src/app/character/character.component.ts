import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {
  StateManagementService,
  StateManagementService_GLOBAL,
} from '../../app/state-management.service';

import { Character } from '../../chardata';
import { Globals } from '../../globals';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  globals: Globals;

  dialog: MatDialog;

  allColumns = [];
  columnNames = [];
  columnNames2 = [];

  skillsArray = [];

  selectedCharacter: Character;

  stateManagementService: StateManagementService =
    StateManagementService_GLOBAL;

  constructor(globals: Globals, dialog: MatDialog) {
    this.globals = globals;
    this.dialog = dialog;
  }

  ngOnInit() {
    this.allColumns = [
      'strength',
      'intelligence',
      'wisdom',
      'coordination',
      'health',
      'charisma',
      'appearance',
      'reflex',
      'fortitude',
      'will',
      'social',
      'weightPossible',
      'baseSpeed',
    ];

    this.columnNames = [
      'strength',
      'intelligence',
      'wisdom',
      'coordination',
      'health',
      'charisma',
      'appearance',
    ];

    this.columnNames2 = ['reflex', 'fortitude', 'will', 'social'];
    this.calculateSkillsArrayFromCurrentCharacter();
    this.selectedCharacter = this.globals.currentCharacter;
  }

  calculateSkillsArrayFromCurrentCharacter() {
    this.skillsArray = [this.globals.currentCharacter];
  }

  onCharacterSelectionChanged() {
    console.log('Selection changed to ' + this.selectedCharacter.name);
    this.globals.currentCharacter = this.selectedCharacter;

    // this.sortedData = new MatTableDataSource(this.selectedGuild.skills.slice());
    // this.sortedData.data = this.selectedGuild.skills.slice();
    this.calculateSkillsArrayFromCurrentCharacter();
  }

  saveCharacterData(): void {
    this.stateManagementService.saveCharacter(this.globals.currentCharacter);
  }

  openDialog(): void {
    var newChar: Character = new Character();
    newChar.name = 'New Character';
    const dialogRef = this.dialog.open(NewCharacterDialog, {
      width: '500px',
      data: newChar,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // there are lots of ways to close that don't yield a result
      if (result) {
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
      }
    });
  }
}

@Component({
  selector: 'new-char-dialog',
  templateUrl: 'new-char-dialog.html',
})
export class NewCharacterDialog {
  constructor(
    public dialogRef: MatDialogRef<NewCharacterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Character
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
