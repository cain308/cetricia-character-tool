import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Sort, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

import { SpellSchool, ALL_SPELL_SCHOOLS } from '../../spelldata';
import { GET_NODES_BY_NAME } from '../../skillsdata';
import { Globals } from '../../globals';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SpellsComponent implements OnInit {
  selectedSchool: SpellSchool;
  globals: Globals;
  allSpellSchools: SpellSchool[] = ALL_SPELL_SCHOOLS;

  skillNodeLookupFn = GET_NODES_BY_NAME;

  all_headers = [];
  // the columns didsplayed at any moment
  displayedHeaders = [];

  // these four are for supporting the hiding and showing of certain columns
  baseHeaders = [];
  descriptionHeaders = [];
  costHeaders = [];
  assortedHeaders = [];

  // for turning costs into skills
  costMapping = {};

  // These control what's showing in the ui
  showingDescription: boolean = true;
  showingCosts: boolean = false;
  showingAssorted: boolean = false;

  // the datasource feeding the table
  sortedData: MatTableDataSource;

  // for selecting spells and viewing them as a batch
  selection = new SelectionModel(true, []);

  // for having the dynamic expansion
  expandedElement;

  constructor(globals: Globals) {
    this.globals = globals;
    this.all_headers = [
      'SPELL NAME',
      'COUNTER',
      'FIRE COST',
      'EARTH COST',
      'LIFE COST',
      'SPIRIT COST',
      'DEATH COST',
      'DURATION',
      'TOTAL COST',
      'AREA OF EFFECT',
      'DESCRIPTION',
      'SPELL SOURCE',
      'CHAOS COST',
      'WATER COST',
      'AIR COST',
      'LAW COST',
      'RANGE',
      'INITIATIVE',
      'ANIMIST COST',
      'SAVE EFFECT',
      'MENTALIST COST',
      'NECROMANTIC COST',
      'RESTORATIVE COST',
      'ARTIFICER COST',
      'SAVE',
      'SPELL SUCCESS',
    ];

    this.costHeaders = [
      'FIRE COST',
      'EARTH COST',
      'LIFE COST',
      'SPIRIT COST',
      'DEATH COST',
      'CHAOS COST',
      'WATER COST',
      'AIR COST',
      'LAW COST',
      'ANIMIST COST',
      'MENTALIST COST',
      'NECROMANTIC COST',
      'RESTORATIVE COST',
      'ARTIFICER COST',
    ];

    this.assortedHeaders = [
      'COUNTER',
      'DURATION',
      'AREA OF EFFECT',
      'SPELL SOURCE',
      'RANGE',
      'INITIATIVE',
      'SAVE EFFECT',
      'SAVE',
      'SPELL SUCCESS',
    ];

    // for getting started
    this.baseHeaders = ['select', 'SPELL NAME', 'TOTAL COST'];

    this.descriptionHeaders = ['DESCRIPTION'];

    this.costMapping = {
      'FIRE COST': 'SPELL_HOUSE_OF_FIRE_SP',
      'EARTH COST': 'SPELL_HOUSE_OF_EARTH_SP',
      'LIFE COST': 'SPELL_HOUSE_OF_LIFE_SP',
      'SPIRIT COST': 'SPELL_SPIRIT_SP',
      'DEATH COST': 'SPELL_HOUSE_OF_DEATH_SP',
      'CHAOS COST': 'SPELL_HOUSE_OF_CHAOS_SP',
      'WATER COST': 'SPELL_HOUSE_OF_WATER_SP',
      'AIR COST': 'SPELL_HOUSE_OF_AIR_SP',
      'LAW COST': 'SPELL_HOUSE_OF_ORDER_SP',
      'ANIMIST COST': 'SPELL_ANIMIST_SP',
      'MENTALIST COST': 'SPELL_MENTALIST_SP',
      'NECROMANTIC COST': 'SPELL_NECROMANTIC_SP',
      'RESTORATIVE COST': 'SPELL_RESTORATIVE_SP',
      'ARTIFICER COST': 'SPELL_ARTIFICER_SP',
    };
  }

  ngOnInit() {
    this.selectedSchool = this.allSpellSchools[0];
    this.sortedData = new MatTableDataSource(
      this.selectedSchool.spells.slice()
    );

    this.buildHeaders();
  }

  buildHeaders() {
    // always have the essential base ones
    this.displayedHeaders = this.baseHeaders.slice();
    // costs?
    if (this.showingCosts) {
      this.displayedHeaders = this.displayedHeaders.concat(this.costHeaders);
    }
    if (this.showingAssorted) {
      this.displayedHeaders = this.displayedHeaders.concat(
        this.assortedHeaders
      );
    }
    if (this.showingDescription) {
      this.displayedHeaders = this.displayedHeaders.concat(
        this.descriptionHeaders
      );
    }
  }

  checkElement(el) {
    console.log(
      'Expanded element: ' +
        this.expandedElement +
        (el === this.expandedElement ? ' IS this one' : " isn't this one")
    );
  }

  toggleDescription() {
    this.showingDescription = !this.showingDescription;
    // console.log("toggleDescription to "+this.showingDescription);
    this.buildHeaders();
  }

  toggleCosts() {
    this.showingCosts = !this.showingCosts;
    // console.log("toggleCosts to "+this.showingCosts);
    this.buildHeaders();
  }

  toggleAssorted(event: MatButtonToggleChange) {
    this.showingAssorted = !this.showingAssorted;
    // console.log("toggleAssorted to "+this.showingAssorted);
    this.buildHeaders();
  }

  makeBetterCostName(str) {
    var idx = str.toLowerCase().indexOf('cost');
    if (idx != -1) {
      str = str.substr(0, idx);
    }
    return this.toTitleCase(str);
  }

  addSpellsToSpellbook() {
    var spellList = [];
    this.selection.selected.forEach(function (spell) {
      spellList.push(spell.KEY);
    });
    if (spellList.length > 0) {
      console.log('Adding spells to spellbook!');
      console.log(spellList);
      var char = this.globals.currentCharacter;
      spellList.forEach(function (spellKey) {
        char.addSpell(spellKey);
      });
    }
  }

  showSelectedSpellCosts() {
    let spellNames = [];
    let allTotals = {};
    let allMaxes = {};
    // init.  Unnecessary?
    this.costHeaders.forEach(function (costField) {
      allTotals[costField] = 0;
      allMaxes[costField] = 0;
    });

    var masterTotal = 0;
    var ch = this.costHeaders;
    var costFN = this.safeRetriveSpellCost;
    this.selection.selected.forEach(function (spell) {
      spellNames.push(spell['SPELL NAME']);
      ch.forEach(function (costField) {
        let thisCost = costFN(spell, costField);
        masterTotal += thisCost;
        allTotals[costField] += Number(thisCost);
        allMaxes[costField] = Math.max(Number(thisCost), allMaxes[costField]);
      });
    });

    let summaryString = 'Spells: ' + spellNames.join(',');
    let totals = [];
    for (let category in allTotals) {
      let thisCatCost = allTotals[category];
      if (thisCatCost != 0) {
        var skillName = this.costMapping[category];
        var skillNode = this.skillNodeLookupFn(skillName)[0];
        // yank out the lower and upper bounds from the range given above, which look like 1-7
        var pieces = skillNode.skill['Roll Per Level'].split('-');
        var lower = Number(pieces[0]);
        var upper = Number(pieces[1]);
        var median = (upper + lower) / 2;
        // the minimum needed to be able to cast the stuff once, assuming a reasonable median
        var likelyNeedForMin = Math.ceil(allMaxes[category] / median);
        // console.log(costType+" is "+allMaxes[costType]+" and requires at least "+likelyNeedForMin + " levels in "+skillNode.getParameterizedName()+" using average gain of " + median);

        totals.push(
          this.makeBetterCostName(category) +
            ': ' +
            allMaxes[category] +
            ', (total ' +
            thisCatCost +
            '), recommending at least ' +
            likelyNeedForMin +
            ' levels in ' +
            skillNode.getParameterizedName()
        );
      }
    }
    totals.push('Total Spell Points: ' + masterTotal);

    // give skill recommendations
    for (var costType of this.costHeaders) {
      // don't do work that doesn't have to be done
      if (allMaxes[costType] == 0) {
        continue;
      }
      // console.log("Calculating skills to satisfy "+costType);
      var skillName = this.costMapping[costType];
      var skillNode = this.skillNodeLookupFn(skillName)[0];
      // var range = skillNode.skill["Roll Per Level"];
      // console.log(skillNode.getParameterizedName() + ": " + range);
      // yank out the lower and upper bounds from the range given above, which look like 1-7
      // var pieces = range.split("-");
      var pieces = skillNode.skill['Roll Per Level'].split('-');
      var lower = Number(pieces[0]);
      var upper = Number(pieces[1]);
      var median = (upper + lower) / 2;

      // the minimum needed to be able to cast the stuff once, assuming a reasonable median
      var likelyNeedForMin = Math.ceil(allMaxes[costType] / median);
      console.log(
        costType +
          ' is ' +
          allMaxes[costType] +
          ' and requires at least ' +
          likelyNeedForMin +
          ' levels in ' +
          skillNode.getParameterizedName() +
          ' using average gain of ' +
          median
      );

      // console.log("lower: "+lower);
      // console.log("upper: "+upper);

      // console.log(skillNode);
      // console.log("Checking skill "+skillName);
    }

    return { summary: summaryString, totals: totals };
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  calculateTotalSpellCost(spell) {
    var totalCost = 0;
    var costFN = this.safeRetriveSpellCost;
    this.costHeaders.forEach(function (costField) {
      let thisCost = costFN(spell, costField);
      totalCost += Number(thisCost);
    });
    return totalCost;
  }

  safeRetriveSpellCost(spell, costField) {
    let thisCost = spell[costField];
    if (thisCost == '' || isNaN(thisCost)) {
      thisCost = 0;
    }
    return Number(thisCost);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sortedData.filter = filterValue.trim().toLowerCase();
  }

  onSelectedSchoolChanged() {
    // console.log("Selected school changed to "+this.selectedSchool.name);
    this.sortedData.data = this.selectedSchool.spells.slice();
  }

  sortData(sort: Sort) {
    // console.log("inside old sort");
    const data = this.selectedSchool.spells.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData.data = data;
      return;
    }

    this.sortedData.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';

      if (this.costHeaders.indexOf(sort.active) != -1) {
        return this.compare(
          this.safeRetriveSpellCost(a, sort.active),
          this.safeRetriveSpellCost(b, sort.active),
          isAsc
        );
      }
      switch (sort.active) {
        case 'SPELL NAME':
          return this.compare(a['SPELL NAME'], b['SPELL NAME'], isAsc);
        case 'TOTAL COST':
          return this.compare(
            this.calculateTotalSpellCost(a),
            this.calculateTotalSpellCost(b),
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

  /** Support for selecting spells */

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.sortedData.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.sortedData.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
