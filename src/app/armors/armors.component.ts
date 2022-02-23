import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Inject,
} from '@angular/core';

// getting the current character
import { Globals } from '../../globals';

// for displaying the table and allowing sorting
import { MatTableDataSource } from '@angular/material/table';
import { Sort, MatSort } from '@angular/material/sort';

import { ALL_ARMORS, ITEM_LOOKUP } from '../../itemdata';
import { Character, ChosenSkill, HeldItem } from '../../chardata';

// the dialogue stuff
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.css'],
})
export class ArmorsComponent implements OnInit, AfterViewInit {
  globals: Globals;
  allArmors = ALL_ARMORS;
  headers = [];

  // the datasource feeding the table
  sortedData: MatTableDataSource;
  // for the automatic sorting
  @ViewChild(MatSort) sort: MatSort;

  // add armor dialogue
  dialog: MatDialog;

  /*
    'Armor Type': 'Quilted Silk',
    Classification: 'Garment, fabric',
    'approx weight': '190',
    'approx cost ELP': '40',
    commonality: '92',
    'Base AV': '8',
    'Base PR': '7',
    */

  constructor(globals: Globals, dialog: MatDialog) {
    this.globals = globals;
    this.headers = [
      'Add',
      'Armor Type',
      'Classification',
      'approx weight',
      'approx cost ELP',
      'commonality',
      'Base AV',
      'Base PR',
    ];
    this.dialog = dialog;
  }

  ngOnInit() {
    this.sortedData = new MatTableDataSource(this.allArmors.slice());
  }

  ngAfterViewInit() {
    this.sortedData.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sortedData.filter = filterValue.trim().toLowerCase();
  }

  addArmor(armor) {
    console.log(armor);
    console.log(
      this.globals.currentCharacter.name +
        ' is adding armor ' +
        armor['Armor Type']
    );
    this.openDialog(armor);
  }

  openDialog(armorData): void {
    // create an empty HeldItem for it to work with and fill outer
    let heldItem: HeldItem = new HeldItem();
    heldItem.originalItemKey = armorData.KEY;
    heldItem.originalRef = armorData;
    heldItem.isCustom = false;

    const dialogRef = this.dialog.open(AddArmorDialog, {
      width: '500px',
      data: heldItem,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // there are lots of ways to close that don't yield a result
      if (result) {
        console.log('Got the armor to add!');
        result.numItems = Number(result.numItems);
        console.log(result);
        this.globals.currentCharacter.addItem(result);
        console.log(this.globals.currentCharacter);
      }
    });
  }
}

@Component({
  selector: 'add-armor-dialog',
  templateUrl: 'add-armor-dialog.html',
})
export class AddArmorDialog {
  data;
  constructor(
    public dialogRef: MatDialogRef<AddArmorDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
