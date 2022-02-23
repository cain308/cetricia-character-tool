import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Material design components
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// my components
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SkillsComponent } from './skills/skills.component';
import {
  CharacterComponent,
  NewCharacterDialog,
} from './character/character.component';
import { Globals } from '../globals';
import { GuildComponent, AddSkillDialog } from './guild/guild.component';
import { SkillsCalculatorService } from './skills-calculator.service';
import { SpellsComponent } from './spells/spells.component';
import { UtilsService } from './utils.service';
import {
  CharacterDetailComponent,
  EditSkillDetailsDialog,
} from './character-detail/character-detail.component';
import { StateManagementService } from './state-management.service';
import { WeaponsComponent, AddWeaponDialog } from './weapons/weapons.component';
import { ArmorsComponent, AddArmorDialog } from './armors/armors.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTreeModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SkillsComponent,
    CharacterComponent,
    GuildComponent,
    SpellsComponent,
    NewCharacterDialog,
    AddSkillDialog,
    AddWeaponDialog,
    AddArmorDialog,
    CharacterDetailComponent,
    EditSkillDetailsDialog,
    WeaponsComponent,
    ArmorsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    Globals,
    SkillsCalculatorService,
    UtilsService,
    StateManagementService,
  ],
  entryComponents: [
    NewCharacterDialog,
    AddSkillDialog,
    AddWeaponDialog,
    AddArmorDialog,
    EditSkillDetailsDialog,
  ],
})
export class AppModule {}
