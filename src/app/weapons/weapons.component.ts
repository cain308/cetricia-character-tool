import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { Globals } from '../../globals';

import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { WEAPON_LOOKUP, WEAPON_TYPES, ALL_WEAPONS } from '../../itemdata';
import { Character, ChosenSkill, HeldItem } from '../../chardata';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css'],
})
export class WeaponsComponent implements OnInit, AfterViewInit {
  globals: Globals;
  allWeapons = ALL_WEAPONS;
  headers = [];

  dialog: MatDialog;

  // the datasource feeding the table
  sortedData: MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(globals: Globals, dialog: MatDialog) {
    this.globals = globals;
    this.headers = [
      'Add',
      'Name',
      'Cost ep',
      'Weight',
      'Size',
      'Range',
      'Speed, Missle',
      'Speed, Melee',
      'Speed, Readied',
      'Protection',
      'Threat Range',
      'STN, 1H',
      'STN, 2H',
      'STMOD',
      'CDN, 1H',
      'CDN, 2H',
      'CDMOD',
      'Damage Dice',
      'Dividing Die',
      'Real min',
      'Max Dam',
      'Av Dam',
    ];
    this.dialog = dialog;
  }

  ngOnInit() {
    this.sortedData = new MatTableDataSource(this.allWeapons.slice());
  }

  ngAfterViewInit() {
    this.sortedData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sortedData.filter = filterValue.trim().toLowerCase();
  }

  addWeapon(weapon) {
    console.log(
      this.globals.currentCharacter.name + ' is Adding weapon ' + weapon.Name
    );

    this.openDialog(weapon);
  }

  openDialog(weaponData): void {
    // create an empty HeldItem for it to work with and fill outer
    let heldItem: HeldItem = new HeldItem();
    heldItem.originalItemKey = weaponData.KEY;
    heldItem.originalRef = weaponData;
    heldItem.isCustom = false;

    const dialogRef = this.dialog.open(AddWeaponDialog, {
      width: '500px',
      data: heldItem,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // there are lots of ways to close that don't yield a result
      if (result) {
        console.log('Got the weapon to add!');
        result.numItems = Number(result.numItems);
        console.log(result);
        this.globals.currentCharacter.addItem(result);
        console.log(this.globals.currentCharacter);
        /*
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
        */
      }
    });
  }
}

/*
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
}
*/

@Component({
  selector: 'add-weapon-dialog',
  templateUrl: 'add-weapon-dialog.html',
})
export class AddWeaponDialog {
  data;
  constructor(
    public dialogRef: MatDialogRef<AddWeaponDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/*
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

  unspentGenericXP: number = 0;

  acquiredSkills: ChosenSkill[] = [];
  spellBook: string[] = [];

  // this is something we need to calculate from an item list!!
  currentEncumbrance: number = 0;
  weightPossible: number = 0;
  baseSpeed: number = 0;
*/
