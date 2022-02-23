export class Guild {
  name: string;
  skills;

  constructor(name:string, skills) {
    this.name = name;
    this.skills = skills;
  }
}

export const ALL_GUILDS : Guild[] = [
  new Guild("Collegium Arcana", 
    [
      {
        "rawSkillName": "Basic Actor", 
        "This School": "0.4", 
        "Bad School": "0.35", 
        "Skill Type": "ACTING", 
        "COMMONALITY": "", 
        "Skill Name": "ACTING_BASIC_ACTOR"
      }, 
      {
        "rawSkillName": "imitate", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "ACTING", 
        "COMMONALITY": "", 
        "Skill Name": "ACTING_IMITATE"
      }, 
      {
        "rawSkillName": "project voice", 
        "This School": "0.25", 
        "Bad School": "0.15", 
        "Skill Type": "ACTING", 
        "COMMONALITY": "", 
        "Skill Name": "ACTING_PROJECT_VOICE"
      }, 
      {
        "rawSkillName": "Stagecraft", 
        "This School": "0.4", 
        "Bad School": "0.3", 
        "Skill Type": "ACTING", 
        "COMMONALITY": "", 
        "Skill Name": "ACTING_STAGECRAFT"
      }, 
      {
        "rawSkillName": "Basic Chemistry", 
        "This School": "0.45", 
        "Bad School": "0.25", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_BASIC_CHEMISTRY"
      }, 
      {
        "rawSkillName": "Acid ID", 
        "This School": "0.5", 
        "Bad School": "0.275", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_ACID_ID"
      }, 
      {
        "rawSkillName": "Poison ID", 
        "This School": "0.34", 
        "Bad School": "0.3", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_POISON_ID"
      }, 
      {
        "rawSkillName": "Potion ID", 
        "This School": "0.45", 
        "Bad School": "0.25", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_POTION_ID"
      }, 
      {
        "rawSkillName": "Acid Mastery", 
        "This School": "0.23", 
        "Bad School": "0.1", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_ACID_MASTERY"
      }, 
      {
        "rawSkillName": "Create Acid", 
        "This School": "0.23", 
        "Bad School": "0.03", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_CREATE_ACID"
      }, 
      {
        "rawSkillName": "Poison Creation", 
        "This School": "0.23", 
        "Bad School": "0.165", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_POISON_CREATION"
      }, 
      {
        "rawSkillName": "Poison Immunity", 
        "This School": "0.2", 
        "Bad School": "0.125", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_POISON_IMMUNITY"
      }, 
      {
        "rawSkillName": "Potion Creation", 
        "This School": "0.12", 
        "Bad School": "0.03", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_POTION_CREATION"
      }, 
      {
        "rawSkillName": "Potion Intensification", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_POTION_INTENSIFICATION"
      }, 
      {
        "rawSkillName": "Neutralize Poison", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "ALCHEMIC", 
        "COMMONALITY": "", 
        "Skill Name": "ALCHEMIC_NEUTRALIZE_POISON"
      }, 
      {
        "rawSkillName": "Basic Artist", 
        "This School": "0.45", 
        "Bad School": "0.35", 
        "Skill Type": "ART", 
        "COMMONALITY": "", 
        "Skill Name": "ART_BASIC_ARTIST"
      }, 
      {
        "rawSkillName": "Art Knolwdge", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "ART", 
        "COMMONALITY": "", 
        "Skill Name": "ART_ART_KNOWLEDGE"
      }, 
      {
        "rawSkillName": "Colors", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "COMMONALITY": "", 
        "Skill Name": "ART_COLORS"
      }, 
      {
        "rawSkillName": "Drawing", 
        "This School": "0.35", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "COMMONALITY": "", 
        "Skill Name": "ART_DRAWING"
      }, 
      {
        "rawSkillName": "Sculpture", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "COMMONALITY": "", 
        "Skill Name": "ART_SCULPTURE"
      }, 
      {
        "rawSkillName": "Painting", 
        "This School": "0.25", 
        "Bad School": "0.15", 
        "Skill Type": "ART", 
        "COMMONALITY": "", 
        "Skill Name": "ART_PAINTING"
      }, 
      {
        "rawSkillName": "Basic Agriculture", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_AGRICULTURE"
      }, 
      {
        "rawSkillName": "Basic Appraisal", 
        "This School": "0.12", 
        "Bad School": "0.12", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_APPRAISAL"
      }, 
      {
        "rawSkillName": "Basic Beurocrat", 
        "This School": "0.45", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_BEUROCRAT"
      }, 
      {
        "rawSkillName": "Basic cooking", 
        "This School": "0.45", 
        "Bad School": "0.45", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_COOKING"
      }, 
      {
        "rawSkillName": "Basic Horseman", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_HORSEMAN"
      }, 
      {
        "rawSkillName": "Basic Hospitality", 
        "This School": "0.45", 
        "Bad School": "0.45", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_HOSPITALITY"
      }, 
      {
        "rawSkillName": "Basic merchant", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_MERCHANT"
      }, 
      {
        "rawSkillName": "Basic Teacher", 
        "This School": "0.6", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_TEACHER"
      }, 
      {
        "rawSkillName": "Basic Woodwork", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BASIC_WOODWORK"
      }, 
      {
        "rawSkillName": "Bowyer", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BOWYER"
      }, 
      {
        "rawSkillName": "Butcher", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BUTCHER"
      }, 
      {
        "rawSkillName": "Chandeler", 
        "This School": "0.55", 
        "Bad School": "0.55", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_CHANDELER"
      }, 
      {
        "rawSkillName": "Distiller", 
        "This School": "0.55", 
        "Bad School": "0.4", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_DISTILLER"
      }, 
      {
        "rawSkillName": "Gemsmith", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_GEMSMITH"
      }, 
      {
        "rawSkillName": "Guild Lore", 
        "This School": "0.5", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_GUILD_LORE"
      }, 
      {
        "rawSkillName": "Metalsmith", 
        "This School": "0.55", 
        "Bad School": "0.55", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_METALSMITH"
      }, 
      {
        "rawSkillName": "Penmanship", 
        "This School": "0.55", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_PENMANSHIP"
      }, 
      {
        "rawSkillName": "Public Speaking", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_PUBLIC_SPEAKING"
      }, 
      {
        "rawSkillName": "Weaver", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_WEAVER"
      }, 
      {
        "rawSkillName": "Agriculture KN.", 
        "This School": "0.33", 
        "Bad School": "0.335", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_AGRICULTURE_KN"
      }, 
      {
        "rawSkillName": "Art Appraisal", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_ART_APPRAISAL"
      }, 
      {
        "rawSkillName": "Blacksmith", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_BLACKSMITH"
      }, 
      {
        "rawSkillName": "calligraphy", 
        "This School": "0.65", 
        "Bad School": "0.275", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_CALLIGRAPHY"
      }, 
      {
        "rawSkillName": "Camp Cooking", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_CAMP_COOKING"
      }, 
      {
        "rawSkillName": "Chef", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_CHEF"
      }, 
      {
        "rawSkillName": "create recipe", 
        "This School": "0.14", 
        "Bad School": "0.14", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_CREATE_RECIPE"
      }, 
      {
        "rawSkillName": "Gm Appraisal", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_GEM_APPRAISAL"
      }, 
      {
        "rawSkillName": "Guild secrets", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_GUILD_SECRETS"
      }, 
      {
        "rawSkillName": "Haggling", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_HAGGLING"
      }, 
      {
        "rawSkillName": "Mass cooking", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_MASS_COOKING"
      }, 
      {
        "rawSkillName": "Teach Spell", 
        "This School": "0.3", 
        "Bad School": "0.01", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_TEACH_SPELL"
      }, 
      {
        "rawSkillName": "Vintner", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_VINTNER"
      }, 
      {
        "rawSkillName": "Woodbuilding", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_WOODBUILDING"
      }, 
      {
        "rawSkillName": "woodcarving", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_WOODCARVING"
      }, 
      {
        "rawSkillName": "Music Inst. Carving", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "ARTISAN", 
        "COMMONALITY": "", 
        "Skill Name": "ARTISAN_MUSIC_INST._CARVING"
      }, 
      {
        "rawSkillName": "basic axe", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_AXE"
      }, 
      {
        "rawSkillName": "basic blunt weapons", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_BLUNT_WEAPONS"
      }, 
      {
        "rawSkillName": "basic bows", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_BOWS"
      }, 
      {
        "rawSkillName": "Basic Crossbow", 
        "This School": "0.15", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_CROSSBOW"
      }, 
      {
        "rawSkillName": "basic curved swords", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_CURVED_SWORDS"
      }, 
      {
        "rawSkillName": "basic dagger", 
        "This School": "0.17", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_DAGGER"
      }, 
      {
        "rawSkillName": "Basic Defense", 
        "This School": "0.2", 
        "Bad School": "0.15", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_DEFENSE"
      }, 
      {
        "rawSkillName": "basic dress swords", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_DRESS_SWORDS"
      }, 
      {
        "rawSkillName": "basic martial", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_MARTIAL_ARTIST"
      }, 
      {
        "rawSkillName": "basic pole weapons", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_POLE_WEAPONS"
      }, 
      {
        "rawSkillName": "basic spears", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_SPEARS"
      }, 
      {
        "rawSkillName": "basic straight swords", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BASIC_STRAIGHT_SWORDS"
      }, 
      {
        "rawSkillName": "Charge", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_CHARGE"
      }, 
      {
        "rawSkillName": "Hit Points", 
        "This School": "0.1", 
        "Bad School": "0.05", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_HIT_POINTS"
      }, 
      {
        "rawSkillName": "Attack versus", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_ATTACK_VERSUS"
      }, 
      {
        "rawSkillName": "Avoidance", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_AVOIDANCE"
      }, 
      {
        "rawSkillName": "Critical Hit Bonus", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_CRITICAL_HIT_BONUS"
      }, 
      {
        "rawSkillName": "Damage Bonus", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_DAMAGE_BONUS"
      }, 
      {
        "rawSkillName": "Initiative bonus", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_INITIATIVE_BONUS"
      }, 
      {
        "rawSkillName": "Multiple attack", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_MULTPLE_ATTACK"
      }, 
      {
        "rawSkillName": "Protection", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_PROTECTION"
      }, 
      {
        "rawSkillName": "quicknock", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_QUICKNOCK"
      }, 
      {
        "rawSkillName": "Shield Use", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_SHIELD_USE"
      }, 
      {
        "rawSkillName": "Single weap spec", 
        "This School": "0.002", 
        "Bad School": "0.002", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_SINGLE_WEAP_SPEC"
      }, 
      {
        "rawSkillName": "Sniper", 
        "This School": "0.1", 
        "Bad School": "0.2", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_SNIPER"
      }, 
      {
        "rawSkillName": "Autohit", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_AUTOHIT"
      }, 
      {
        "rawSkillName": "Blind Fighting", 
        "This School": "0.002", 
        "Bad School": "0.002", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_BLIND_FIGHTING"
      }, 
      {
        "rawSkillName": "Call Damage", 
        "This School": "0.06", 
        "Bad School": "0.06", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_CALL_DAMAGE"
      }, 
      {
        "rawSkillName": "Catch/deflect missle", 
        "This School": "0.025", 
        "Bad School": "0.025", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_CATCH/DEFLECT_MISSLE"
      }, 
      {
        "rawSkillName": "Dodge", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_DODGE"
      }, 
      {
        "rawSkillName": "Frenzy", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_FRENZY"
      }, 
      {
        "rawSkillName": "Parry", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_PARRY"
      }, 
      {
        "rawSkillName": "Quickdraw", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_QUICKDRAW"
      }, 
      {
        "rawSkillName": "Shield Rush", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_SHIELD_RUSH"
      }, 
      {
        "rawSkillName": "Slay", 
        "This School": "0.001", 
        "Bad School": "0.001", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_SLAY_(PERFECT_ATTACK"
      }, 
      {
        "rawSkillName": "Stunning Attack", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_STUNNING_ATTACK"
      }, 
      {
        "rawSkillName": "Swarm", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "COMBAT", 
        "COMMONALITY": "", 
        "Skill Name": "COMBAT_SWARM"
      }, 
      {
        "rawSkillName": "Basic First Aid", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_BASIC_FIRST_AID"
      }, 
      {
        "rawSkillName": "Basic Cure/Bind Wounds", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_BASIC_CURE/BIND_WOUNDS"
      }, 
      {
        "rawSkillName": "Midwifery", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_MIDWIFERY"
      }, 
      {
        "rawSkillName": "Cure Disease", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_CURE_DISEASE"
      }, 
      {
        "rawSkillName": "Lay On Hands", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_LAY_ON_HANDS"
      }, 
      {
        "rawSkillName": "Contagion/Anti", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_CONTAGION/ANTI"
      }, 
      {
        "rawSkillName": "Strengthen", 
        "This School": "0.02", 
        "Bad School": "0.02", 
        "Skill Type": "CURATIVE", 
        "COMMONALITY": "", 
        "Skill Name": "CURATIVE_STRENGTHEN"
      }, 
      {
        "rawSkillName": "Basic Dance", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "DANCE", 
        "COMMONALITY": "", 
        "Skill Name": "DANCE_BASIC_DANCE"
      }, 
      {
        "rawSkillName": "Courtly Dance", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "DANCE", 
        "COMMONALITY": "", 
        "Skill Name": "DANCE_COURTLY_DANCE"
      }, 
      {
        "rawSkillName": "Kensai sword dance", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "DANCE", 
        "COMMONALITY": "", 
        "Skill Name": "DANCE_KENSAI_SWORD_DANCE"
      }, 
      {
        "rawSkillName": "Mysteriarch Slide", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "DANCE", 
        "COMMONALITY": "", 
        "Skill Name": "DANCE_MYSTERIARCH_SLIDE"
      }, 
      {
        "rawSkillName": "Basic Detect", 
        "This School": "0.35", 
        "Bad School": "0.2", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_BASIC_DETECT"
      }, 
      {
        "rawSkillName": "Detecrt scent", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECRT_SCENT"
      }, 
      {
        "rawSkillName": "detect Noise", 
        "This School": "0.02", 
        "Bad School": "0.25", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_NOISE"
      }, 
      {
        "rawSkillName": "Visual detect", 
        "This School": "0.2", 
        "Bad School": "0.25", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_VISUAL_DETECT"
      }, 
      {
        "rawSkillName": "Darksight", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DARKSIGHT"
      }, 
      {
        "rawSkillName": "Detect Hidden", 
        "This School": "0.34", 
        "Bad School": "0.275", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_HIDDEN"
      }, 
      {
        "rawSkillName": "Detect ill intent", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_ILL_INTENT"
      }, 
      {
        "rawSkillName": "Detect Skill", 
        "This School": "0.2", 
        "Bad School": "0.15", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_SKILL"
      }, 
      {
        "rawSkillName": "Detect Slope/Direction", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_SLOPE/DIRECTION"
      }, 
      {
        "rawSkillName": "Falsify scent", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_FALSIFY_SCENT"
      }, 
      {
        "rawSkillName": "Scent recognition", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_SCENT_RECOGNITION"
      }, 
      {
        "rawSkillName": "Detect Illusiion.Invis", 
        "This School": "0.35", 
        "Bad School": "0.19", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_ILLUSIION.INVIS"
      }, 
      {
        "rawSkillName": "Detect Lie", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "DETECT", 
        "COMMONALITY": "", 
        "Skill Name": "DETECT_DETECT_LIE"
      }, 
      {
        "rawSkillName": "Basic Hand skills", 
        "This School": "0.17", 
        "Bad School": "0.17", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_BASIC_HAND_SKILLS"
      }, 
      {
        "rawSkillName": "Basic Trap", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_BASIC_TRAP"
      }, 
      {
        "rawSkillName": "Engineer", 
        "This School": "0.35", 
        "Bad School": "0.2", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_ENGINEER"
      }, 
      {
        "rawSkillName": "Architecht", 
        "This School": "0.35", 
        "Bad School": "0.3", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_ARCHITECHT"
      }, 
      {
        "rawSkillName": "Find Trap", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_FIND_TRAP"
      }, 
      {
        "rawSkillName": "Mechanic", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_MECHANIC"
      }, 
      {
        "rawSkillName": "Miner", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_MINER"
      }, 
      {
        "rawSkillName": "Open Locks", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_OPEN_LOCKS"
      }, 
      {
        "rawSkillName": "Remove trap", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_REMOVE_TRAP"
      }, 
      {
        "rawSkillName": "Set trap", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_SET_TRAP"
      }, 
      {
        "rawSkillName": "Sleight of hand", 
        "This School": "0.25", 
        "Bad School": "0.2", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_SLEIGHT_OF_HAND"
      }, 
      {
        "rawSkillName": "Avoid Trap", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_AVOID_TRAP"
      }, 
      {
        "rawSkillName": "Enliven", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "ENGINEER", 
        "COMMONALITY": "", 
        "Skill Name": "ENGINEER_ENLIVEN"
      }, 
      {
        "rawSkillName": "Anarch", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_ANARCH"
      }, 
      {
        "rawSkillName": "Hobyt", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_HOBYT"
      }, 
      {
        "rawSkillName": "Klaxik", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_KLAXIK"
      }, 
      {
        "rawSkillName": "Magetongue", 
        "This School": "0.5", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_MAGETONGUE"
      }, 
      {
        "rawSkillName": "Odop", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_ODOP"
      }, 
      {
        "rawSkillName": "Omwo~", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_OMWO"
      }, 
      {
        "rawSkillName": "Sauroid", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_SAUROID"
      }, 
      {
        "rawSkillName": "Vox (Southern Common)", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_VOX_(SOUTHERN_COMMON"
      }, 
      {
        "rawSkillName": "Westic (north common)", 
        "This School": "0.5", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_WESTIC_(NORTH_COMMON"
      }, 
      {
        "rawSkillName": "Harnic", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_HARNIC"
      }, 
      {
        "rawSkillName": "Marcher (grey March)", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_MARCHER_(GREY_MARCH"
      }, 
      {
        "rawSkillName": "Omnian", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_OMNIAN"
      }, 
      {
        "rawSkillName": "Orcash", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_ORCASH"
      }, 
      {
        "rawSkillName": "Silverwood", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_SILVERWOOD"
      }, 
      {
        "rawSkillName": "Venolvian (coom)", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_VENOLVIAN_(COOM"
      }, 
      {
        "rawSkillName": "Suprosian", 
        "This School": "0.33", 
        "Bad School": "0.335", 
        "Skill Type": "LANGUAGE", 
        "COMMONALITY": "", 
        "Skill Name": "LANGUAGE_SUPROSIAN"
      }, 
      {
        "rawSkillName": "Affect others", 
        "This School": "0.1", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_AFFECT_OTHERS"
      }, 
      {
        "rawSkillName": "Basic meditate", 
        "This School": "0.24", 
        "Bad School": "0.07", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_BASIC_MEDITATE"
      }, 
      {
        "rawSkillName": "Confuse", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_CONFUSE"
      }, 
      {
        "rawSkillName": "Distract", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_DISTRACT"
      }, 
      {
        "rawSkillName": "Mind Over Body", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_MIND_OVER_BODY"
      }, 
      {
        "rawSkillName": "Resist", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_RESIST"
      }, 
      {
        "rawSkillName": "Body Composition", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_BODY_COMPOSITION"
      }, 
      {
        "rawSkillName": "Resist Magic", 
        "This School": "0.13", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "COMMONALITY": "", 
        "Skill Name": "MIND_RESIST_MAGIC"
      }, 
      {
        "rawSkillName": "Basic Move", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MOVEMENT", 
        "COMMONALITY": "", 
        "Skill Name": "MOVEMENT_BASIC_MOVE"
      }, 
      {
        "rawSkillName": "Amored Move", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "MOVEMENT", 
        "COMMONALITY": "", 
        "Skill Name": "MOVEMENT_AMORED_MOVE"
      }, 
      {
        "rawSkillName": "FreeMove", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "MOVEMENT", 
        "COMMONALITY": "", 
        "Skill Name": "MOVEMENT_FREEMOVE"
      }, 
      {
        "rawSkillName": "reduce weight", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "MOVEMENT", 
        "COMMONALITY": "", 
        "Skill Name": "MOVEMENT_REDUCE_WEIGHT"
      }, 
      {
        "rawSkillName": "Speed Move", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "MOVEMENT", 
        "COMMONALITY": "", 
        "Skill Name": "MOVEMENT_SPEED_MOVE"
      }, 
      {
        "rawSkillName": "Ignore encumbrance", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MOVEMENT", 
        "COMMONALITY": "", 
        "Skill Name": "MOVEMENT_IGNORE_ENCUMBRANCE"
      }, 
      {
        "rawSkillName": "Basic Song", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_BASIC_SONG"
      }, 
      {
        "rawSkillName": "Bard", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_BARD"
      }, 
      {
        "rawSkillName": "Write music", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_WRITE_MUSIC"
      }, 
      {
        "rawSkillName": "ArcanicBard", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_ARCANICBARD"
      }, 
      {
        "rawSkillName": "Battlebard", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_BATTLEBARD"
      }, 
      {
        "rawSkillName": "Nature's Bard", 
        "This School": "0.18", 
        "Bad School": "0.185", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_NATURE'S_BARD"
      }, 
      {
        "rawSkillName": "Vestedbard", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "MUSIC", 
        "COMMONALITY": "", 
        "Skill Name": "MUSIC_VESTEDBARD"
      }, 
      {
        "rawSkillName": "basic nature", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_BASIC_NATURE"
      }, 
      {
        "rawSkillName": "Basic Outdoor", 
        "This School": "0.3", 
        "Bad School": "0.35", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_BASIC_OUTDOOR"
      }, 
      {
        "rawSkillName": "AnimalEmpathy", 
        "This School": "0.21", 
        "Bad School": "0.215", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_ANIMALEMPATHY"
      }, 
      {
        "rawSkillName": "Botanist", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_BOTANIST"
      }, 
      {
        "rawSkillName": "Tracking", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_TRACKING"
      }, 
      {
        "rawSkillName": "Instill Dread", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_INSTILL_DREAD"
      }, 
      {
        "rawSkillName": "Mind track", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_MIND_TRACK"
      }, 
      {
        "rawSkillName": "Plant Lore", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_PLANT_LORE"
      }, 
      {
        "rawSkillName": "Detect tracker", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "OUTDOOR", 
        "COMMONALITY": "", 
        "Skill Name": "OUTDOOR_DETECT_TRACKER"
      }, 
      {
        "rawSkillName": "Basic Priest", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_BASIC_PRIEST"
      }, 
      {
        "rawSkillName": "Affect Undead", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_AFFECT_UNDEAD"
      }, 
      {
        "rawSkillName": "Ceremony", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_CEREMONY"
      }, 
      {
        "rawSkillName": "Conversion", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_CONVERSION"
      }, 
      {
        "rawSkillName": "Detect Undead", 
        "This School": "0.09", 
        "Bad School": "0.09", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_DETECT_UNDEAD"
      }, 
      {
        "rawSkillName": "Corruption", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_CORRUPTION"
      }, 
      {
        "rawSkillName": "Create Undead", 
        "This School": "0.075", 
        "Bad School": "0.075", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_CREATE_UNDEAD"
      }, 
      {
        "rawSkillName": "Mass Conversion", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_MASS_CONVERSION"
      }, 
      {
        "rawSkillName": "Resist Conversion", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_RESIST_CONVERSION"
      }, 
      {
        "rawSkillName": "Sanctify", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "COMMONALITY": "", 
        "Skill Name": "PRIEST_SANCTIFY"
      }, 
      {
        "rawSkillName": "Basic Math", 
        "This School": "0.6", 
        "Bad School": "0.4", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_BASIC_MATH"
      }, 
      {
        "rawSkillName": "Basic Scholar", 
        "This School": "0.12", 
        "Bad School": "0.01", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_BASIC_SCHOLAR"
      }, 
      {
        "rawSkillName": "Astronomy", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_ASTRONOMY"
      }, 
      {
        "rawSkillName": "Hstorical knowledge", 
        "This School": "0.3", 
        "Bad School": "0.225", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_HISTORICAL_KNOWLEDGE"
      }, 
      {
        "rawSkillName": "Read/write", 
        "This School": "0.45", 
        "Bad School": "0.35", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_READ/WRITE"
      }, 
      {
        "rawSkillName": "Legend/Lore", 
        "This School": "0.16", 
        "Bad School": "0.095", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_LEGEND/LORE"
      }, 
      {
        "rawSkillName": "Literature", 
        "This School": "0.4", 
        "Bad School": "0.25", 
        "Skill Type": "SCHOLAR", 
        "COMMONALITY": "", 
        "Skill Name": "SCHOLAR_LITERATURE"
      }, 
      {
        "rawSkillName": "Basic Carnal", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_BASIC_CARNAL"
      }, 
      {
        "rawSkillName": "Basic Leader", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_BASIC_LEADER"
      }, 
      {
        "rawSkillName": "Basic social", 
        "This School": "0.4", 
        "Bad School": "0.35", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_BASIC_SOCIAL"
      }, 
      {
        "rawSkillName": "Courtly Manners", 
        "This School": "0.34", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_COURTLY_MANNERS"
      }, 
      {
        "rawSkillName": "Social Dynamic", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_SOCIAL_DYNAMIC"
      }, 
      {
        "rawSkillName": "Contact", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_CONTACT"
      }, 
      {
        "rawSkillName": "Exhort", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_EXHORT"
      }, 
      {
        "rawSkillName": "Friendship", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_FRIENDSHIP"
      }, 
      {
        "rawSkillName": "Organize", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_ORGANIZE"
      }, 
      {
        "rawSkillName": "Bonding", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_BONDING"
      }, 
      {
        "rawSkillName": "Fight to Oblivion", 
        "This School": "0.11", 
        "Bad School": "0.11", 
        "Skill Type": "SOCIAL", 
        "COMMONALITY": "", 
        "Skill Name": "SOCIAL_FIGHT_TO_OBLIVION"
      }, 
      {
        "rawSkillName": "Amnimist SP", 
        "This School": "0.3", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_ANIMIST_SP"
      }, 
      {
        "rawSkillName": "Artificer SP", 
        "This School": "0.29", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_ARTIFICER_SP"
      }, 
      {
        "rawSkillName": "House of Air SP", 
        "This School": "0.35", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_AIR_SP"
      }, 
      {
        "rawSkillName": "House of Chaos SP", 
        "This School": "0.3", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_CHAOS_SP"
      }, 
      {
        "rawSkillName": "House of Death SP", 
        "This School": "0.25", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_DEATH_SP"
      }, 
      {
        "rawSkillName": "House of Earth SP", 
        "This School": "0.25", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_EARTH_SP"
      }, 
      {
        "rawSkillName": "House of Fire SP", 
        "This School": "0.4", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_FIRE_SP"
      }, 
      {
        "rawSkillName": "House of Life SP", 
        "This School": "0.25", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_LIFE_SP"
      }, 
      {
        "rawSkillName": "House of Order SP", 
        "This School": "0.25", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_ORDER_SP"
      }, 
      {
        "rawSkillName": "House of Water SP", 
        "This School": "0.35", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOUSE_OF_WATER_SP"
      }, 
      {
        "rawSkillName": "Mentalist SP", 
        "This School": "0.4", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_MENTALIST_SP"
      }, 
      {
        "rawSkillName": "Necromantic SP", 
        "This School": "0.24", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_NECROMANTIC_SP"
      }, 
      {
        "rawSkillName": "Restorative SP", 
        "This School": "0.19", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_RESTORATIVE_SP"
      }, 
      {
        "rawSkillName": "Shade Sp", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_SHADE_SP"
      }, 
      {
        "rawSkillName": "Spirit SP", 
        "This School": "0.55", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_SPIRIT_SP"
      }, 
      {
        "rawSkillName": "HOW sp knoledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_HOW_SP_KNOWLEDGE"
      }, 
      {
        "rawSkillName": "Mentalist sp knowledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_MENTALIST_SP_KNOWLEDGE"
      }, 
      {
        "rawSkillName": "Necromantic sp knowle", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_NECROMANTIC_SP_KNOWLE"
      }, 
      {
        "rawSkillName": "Restorative sp knowledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_RESTORATIVE_SP_KNOWLEDGE"
      }, 
      {
        "rawSkillName": "Spirit Reclamation", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_SPIRIT_RECLAMATION"
      }, 
      {
        "rawSkillName": "Spirit Success", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "COMMONALITY": "", 
        "Skill Name": "SPELL_SPIRIT_SUCCESS"
      }, 
      {
        "rawSkillName": "Ascend", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_ASCEND"
      }, 
      {
        "rawSkillName": "Basic Sneak", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_BASIC_SNEAK"
      }, 
      {
        "rawSkillName": "Surpirse", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_SURPRISE"
      }, 
      {
        "rawSkillName": "Backstab", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_BACKSTAB"
      }, 
      {
        "rawSkillName": "Climb Sheer", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_CLIMB_SHEER"
      }, 
      {
        "rawSkillName": "Disguise", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_DISGUISE"
      }, 
      {
        "rawSkillName": "Hide", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_HIDE"
      }, 
      {
        "rawSkillName": "Mis with crowd", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_MIX_WITH_CROWD"
      }, 
      {
        "rawSkillName": "Move Silent", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_MOVE_SILENT"
      }, 
      {
        "rawSkillName": "Assassinate", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_ASSASSINATE"
      }, 
      {
        "rawSkillName": "Fall", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_FALL"
      }, 
      {
        "rawSkillName": "Impersonate", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_IMPERSONATE"
      }, 
      {
        "rawSkillName": "Shadowheal", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_SHADOWHEAL"
      }, 
      {
        "rawSkillName": "Shadowsight", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "COMMONALITY": "", 
        "Skill Name": "THIEVES_TREE_SHADOWSIGHT"
      }, 
      {
        "rawSkillName": "basic Torture", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "TORTURER", 
        "COMMONALITY": "", 
        "Skill Name": "TORTURER_BASIC_TORTURE"
      }, 
      {
        "rawSkillName": "Conviction", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "TORTURER", 
        "COMMONALITY": "", 
        "Skill Name": "TORTURER_CONVICTION"
      }, 
      {
        "rawSkillName": "Terror", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "TORTURER", 
        "COMMONALITY": "", 
        "Skill Name": "TORTURER_TERROR"
      }, 
      {
        "rawSkillName": "Shadow of the Torturer", 
        "This School": "0.0001", 
        "Bad School": "0.0001", 
        "Skill Type": "TORTURER", 
        "COMMONALITY": "", 
        "Skill Name": "TORTURER_SHADOW_OF_THE_TORTURER"
      }
    ]),
  new Guild("Bowyers of Ceminiar", 
    [
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Actor", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_BASIC_ACTOR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Imitate", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_IMITATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Project Voice", 
        "This School": "0.015", 
        "Bad School": "0.15", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_PROJECT_VOICE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Stagecraft", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_STAGECRAFT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Chemistry", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_BASIC_CHEMISTRY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Acid ID", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_ACID_ID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Poison ID", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POISON_ID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Potion ID", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POTION_ID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Acid Mastery", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_ACID_MASTERY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Create Acid", 
        "This School": "0.03", 
        "Bad School": "0.03", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_CREATE_ACID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Poison Creation", 
        "This School": "0.1", 
        "Bad School": "0.165", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POISON_CREATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Poison Immunity", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POISON_IMMUNITY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Potion Creation", 
        "This School": "0.03", 
        "Bad School": "0.03", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POTION_CREATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Potion Intensification", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POTION_INTENSIFICATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Neutralize Poison", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_NEUTRALIZE_POISON"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Artist", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "ART", 
        "Skill Name": "ART_BASIC_ARTIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Art Knowledge", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "ART", 
        "Skill Name": "ART_ART_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Colors", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "Skill Name": "ART_COLORS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Drawing", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "Skill Name": "ART_DRAWING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sculpture", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "Skill Name": "ART_SCULPTURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Painting", 
        "This School": "0.25", 
        "Bad School": "0.15", 
        "Skill Type": "ART", 
        "Skill Name": "ART_PAINTING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Agriculture", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_AGRICULTURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Appraisal", 
        "This School": "0.12", 
        "Bad School": "0.12", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_APPRAISAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Bureaucrat", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_BEUROCRAT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Cooking", 
        "This School": "0.45", 
        "Bad School": "0.45", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_COOKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Horseman", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_HORSEMAN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Hospitality", 
        "This School": "0.45", 
        "Bad School": "0.45", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_HOSPITALITY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Merchant", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_MERCHANT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Teacher", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_TEACHER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Woodwork", 
        "This School": "0.35", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_WOODWORK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Bowyer", 
        "This School": "0.65", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BOWYER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Butcher", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BUTCHER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Chandler", 
        "This School": "0.55", 
        "Bad School": "0.55", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CHANDELER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Distiller", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_DISTILLER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Gem Smith", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GEMSMITH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Guild Lore", 
        "This School": "0.3", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GUILD_LORE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Metal Smith", 
        "This School": "0.55", 
        "Bad School": "0.55", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_METALSMITH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Penmanship", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_PENMANSHIP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Public Speaking", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_PUBLIC_SPEAKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Weaver", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_WEAVER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Agriculture Knowledge", 
        "This School": "0.33", 
        "Bad School": "0.335", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_AGRICULTURE_KN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Art Appraisal", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_ART_APPRAISAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Blacksmith", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BLACKSMITH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Calligraphy", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CALLIGRAPHY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Camp Cooking", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CAMP_COOKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Chef", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CHEF"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Create Recipe", 
        "This School": "0.14", 
        "Bad School": "0.14", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CREATE_RECIPE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Gem Appraisal", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GEM_APPRAISAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Guild Secrets", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GUILD_SECRETS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Haggling", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_HAGGLING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mass Cooking", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_MASS_COOKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Teach Spell", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_TEACH_SPELL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Vintner", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_VINTNER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Wood Building", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_WOODBUILDING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Wood Carving", 
        "This School": "0.5", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_WOODCARVING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Musical Instrument Carving", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_MUSIC_INST._CARVING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Axe", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_AXE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Blunt Weapon", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_BLUNT_WEAPONS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Bow", 
        "This School": "0.26", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_BOW"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Crossbow", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_CROSSBOW"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Curved Sword", 
        "This School": "0.18", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_CURVED_SWORDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Dagger", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_DAGGER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Defense", 
        "This School": "0.25", 
        "Bad School": "0.15", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_DEFENSE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Dress Sword", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_DRESS_SWORDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Martial", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_MARTIAL_ARTIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Pole Weapons", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_POLE_WEAPONS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Spear", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_SPEARS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Straight Sword", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_STRAIGHT_SWORDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Charge", 
        "This School": "0.12", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CHARGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hit Points", 
        "This School": "0.1", 
        "Bad School": "0.05", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_HIT_POINTS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Attack Versus", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_ATTACK_VERSUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Avoidance", 
        "This School": "0.25", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_AVOIDANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Critical Hit Bonus", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CRITICAL_HIT_BONUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Damage Bonus", 
        "This School": "0.15", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_DAMAGE_BONUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Initiative Bonus", 
        "This School": ".2(.4)", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_INITIATIVE_BONUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Multiple Attack", 
        "This School": ".13(.24)", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_MULTPLE_ATTACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Protection", 
        "This School": "0.16", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_PROTECTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Quick Nock", 
        "This School": "0.3", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_QUICKNOCK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shield Use", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SHIELD_USE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Single Weapon Specialization", 
        "This School": ".05(.2)", 
        "Bad School": "0.002", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SINGLE_WEAP_SPEC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sniper", 
        "This School": "0.1", 
        "Bad School": "0.2", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SNIPER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Auto Hit", 
        "This School": ".1(.15)", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_AUTOHIT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Blind Fighting", 
        "This School": "0.002", 
        "Bad School": "0.002", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BLIND_FIGHTING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Call Damage", 
        "This School": "0.06", 
        "Bad School": "0.06", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CALL_DAMAGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Catch/Deflect Missile", 
        "This School": "0.14", 
        "Bad School": "0.025", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CATCH/DEFLECT_MISSLE-MED_ARMOR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Dodge", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_DODGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Frenzy", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_FRENZY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Parry", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_PARRY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Quick Draw", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_QUICKDRAW"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shield Rush", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SHIELD_RUSH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Slay", 
        "This School": "0.001", 
        "Bad School": "0.001", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SLAY_(PERFECT_ATTACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Stunning Attack", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_STUNNING_ATTACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Swarm", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SWARM"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic First Aid", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_BASIC_FIRST_AID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Cure/Bind Wounds", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_BASIC_CURE/BIND_WOUNDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Midwifery", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_MIDWIFERY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Cure Disease", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_CURE_DISEASE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Lay On Hands", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_LAY_ON_HANDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Contagion/Anti", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_CONTAGION/ANTI"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Strengthen", 
        "This School": "0.02", 
        "Bad School": "0.02", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_STRENGTHEN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Dance", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_BASIC_DANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Courtly Dance", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_COURTLY_DANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Kensai Sword Dance", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_KENSAI_SWORD_DANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mysteriarch Slide", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_MYSTERIARCH_SLIDE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Detect", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_BASIC_DETECT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Scent", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECRT_SCENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Noise", 
        "This School": "0.02", 
        "Bad School": "0.25", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_NOISE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Visual Detect", 
        "This School": "0.2", 
        "Bad School": "0.25", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_VISUAL_DETECT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Darksight", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DARKSIGHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Hidden", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_HIDDEN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Ill Intent", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_ILL_INTENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Skill", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_SKILL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Slope/Direction", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_SLOPE/DIRECTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Falsify Scent", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_FALSIFY_SCENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Scent Recognition", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_SCENT_RECOGNITION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Illusion/Invisible", 
        "This School": "0.19", 
        "Bad School": "0.19", 
        "Skill Type": "DETECT", 
        "Skill Name": "MIND_DETECT_ILLUSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Lie", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_LIE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Hand", 
        "This School": "0.23", 
        "Bad School": "0.17", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_BASIC_HAND"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Trap", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_BASIC_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Engineer", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_ENGINEER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Architect", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_ARCHITECHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Find Trap", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_FIND_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mechanic", 
        "This School": "0.35", 
        "Bad School": "0.3", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_MECHANIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Miner", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_MINER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Open Locks", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_OPEN_LOCKS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Remove Trap", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_REMOVE_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Set Trap", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_SET_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sleight of Hand", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_SLEIGHT_OF_HAND"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Avoid Trap", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_AVOID_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Enliven", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_ENLIVEN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Anarch", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_ANARCH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hobyt", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_HOBYT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Klaxik", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_KLAXIK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Magetongue", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_MAGETONGUE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Odop", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_ODOP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Omwo~", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_OMWO"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sauroid", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_SAUROID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Vox (Southern Common)", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_VOX_(SOUTHERN_COMMON"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Westic (north common)", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_WESTIC_(NORTH_COMMON"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Harnic", 
        "This School": "0.27", 
        "Bad School": "0.275", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_HARNIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Marcher (grey March)", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_MARCHER_(GREY_MARCH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Omnian", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_OMNIAN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Orcash", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_ORCASH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Silverwood", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_SILVERWOOD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Venolvian (coom)", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_VENOLVIAN_(COOM"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Suprosian", 
        "This School": "0.33", 
        "Bad School": "0.335", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_SUPROSIAN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Affect Others", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_AFFECT_OTHERS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Meditate", 
        "This School": "0.07", 
        "Bad School": "0.07", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_BASIC_MEDITATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Confuse", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_CONFUSE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Distract", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_DISTRACT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mind Over Body", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_MIND_OVER_BODY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Resist", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_RESIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Body Composition", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_BODY_COMPOSITION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Resist Magic", 
        "This School": "0.07", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_RESIST_MAGIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Move", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_BASIC_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Armored Move", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_ARMORED_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Free Move", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_FREE_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Reduce Weight", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_REDUCE_WEIGHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Speed Move", 
        "This School": "0.17", 
        "Bad School": "0.175", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_SPEED_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Ignore Encumbrance", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_IGNORE_ENCUMBRANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Song", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_BASIC_SONG"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Bard", 
        "This School": "0.04", 
        "Bad School": "0.04", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_BARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Write Music", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_WRITE_MUSIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Arcanic Bard", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_ARCANIC_BARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Battle Bard", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_BATTLEBARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Nature's Bard", 
        "This School": "0.18", 
        "Bad School": "0.185", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_NATURE'S_BARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Vested Bard", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_VESTEDBARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Nature", 
        "This School": "0.4", 
        "Bad School": "0.2", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_BASIC_NATURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Outdoor", 
        "This School": "0.55", 
        "Bad School": "0.35", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_BASIC_OUTDOOR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Animal Empathy", 
        "This School": "0.21", 
        "Bad School": "0.215", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_ANIMAL_EMPATHY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Botanist", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_BOTANIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Tracking", 
        "This School": "0.4", 
        "Bad School": "0.3", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_TRACKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Instill Dread", 
        "This School": "0.12", 
        "Bad School": "0.125", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_INSTILL_DREAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mind Track", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_MIND_TRACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Plant Lore", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_PLANT_LORE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Tracker", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_DETECT_TRACKER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Priest", 
        "This School": "0.1", 
        "Bad School": "0.05", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_BASIC_PRIEST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Affect Undead", 
        "This School": "0.1", 
        "Bad School": "0.04", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_AFFECT_UNDEAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Ceremony", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CEREMONY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Conversion", 
        "This School": "0.1", 
        "Bad School": "0.04", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CONVERSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Undead", 
        "This School": "0.09", 
        "Bad School": "0.09", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_DETECT_UNDEAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Corruption", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CORRUPTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Create Undead", 
        "This School": "0.075", 
        "Bad School": "0.075", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CREATE_UNDEAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mass Conversion", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_MASS_CONVERSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Resist Conversion", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_RESIST_CONVERSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sanctify", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_SANCTIFY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Math", 
        "This School": "0.4", 
        "Bad School": "0.4", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_BASIC_MATH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Scholar", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_BASIC_SCHOLAR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Astronomy", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_ASTRONOMY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Historical knowledge", 
        "This School": "0.22", 
        "Bad School": "0.225", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_HISTORICAL_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Read/Write", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_READ/WRITE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Legend/Lore", 
        "This School": "0.09", 
        "Bad School": "0.095", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_LEGEND/LORE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Literature", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_LITERATURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Carnal", 
        "This School": "0.35", 
        "Bad School": "0.35", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BASIC_CARNAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Leader", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BASIC_LEADER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Social", 
        "This School": "0.4", 
        "Bad School": "0.35", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BASIC_SOCIAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Courtly Manners", 
        "This School": "0.4", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_COURTLY_MANNERS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Social Dynamic", 
        "This School": "0.15", 
        "Bad School": "0.15", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_SOCIAL_DYNAMIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Contact", 
        "This School": "0.3", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_CONTACT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Exhort", 
        "This School": "0.25", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_EXHORT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Friendship", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_FRIENDSHIP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Organize", 
        "This School": "0.25", 
        "Bad School": "0.25", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_ORGANIZE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Bonding", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BONDING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Fight to Oblivion", 
        "This School": "0.11", 
        "Bad School": "0.11", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_FIGHT_TO_OBLIVION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Animist SP", 
        "This School": "0.3", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_ANIMIST_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Artificer SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_ARTIFICER_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Air SP", 
        "This School": "0.2", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_AIR_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Chaos SP", 
        "This School": "0.2", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_CHAOS_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Death SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_DEATH_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Earth SP", 
        "This School": "0.35", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_EARTH_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Fire SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_FIRE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Life SP", 
        "This School": "0.2", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_LIFE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Order SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_ORDER_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Water SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_WATER_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mentalist SP", 
        "This School": "0.15", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_MENTALIST_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Necromantic SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_NECROMANTIC_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Restorative SP", 
        "This School": "0.27", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_RESTORATIVE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shade SP", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SHADE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Spirit SP", 
        "This School": "0.25", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SPIRIT_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "HOW SP Knowledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOW_SP_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mentalist SP Knowledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_MENTALIST_SP_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Necromantic SP Knowledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_NECROMANTIC_SUCCESS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Restorative SP Knowledge", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_RESTORATIVE_SP_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Spirit Reclamation", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SPIRIT_RECLAMATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Spirit Success", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SPIRIT_SUCCESS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Ascend", 
        "This School": "0.29", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_ASCEND"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Sneak", 
        "This School": "0.35", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_BASIC_SNEAK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Surprise", 
        "This School": "0.3", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_SURPRISE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Back Stab", 
        "This School": "0.2", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_BACKSTAB"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Climb Sheer", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_CLIMB_SHEER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Disguise", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_DISGUISE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hide", 
        "This School": "0.15", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_HIDE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mix with crowd", 
        "This School": "0.2", 
        "Bad School": "0.2", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_MIX_WITH_CROWD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Move Silent", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_MOVE_SILENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Assassinate", 
        "This School": "0.1", 
        "Bad School": "0.04", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_ASSASSINATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Fall", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_FALL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Impersonate", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_IMPERSONATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shadow Heal", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_SHADOW_HEAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shadow Sight", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_SHADOWSIGHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Torture", 
        "This School": "0.1", 
        "Bad School": "0.1", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_BASIC_TORTURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Conviction", 
        "This School": "0.01", 
        "Bad School": "0.01", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_CONVICTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Terror", 
        "This School": "0.05", 
        "Bad School": "0.05", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_TERROR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shadow of the Torturer", 
        "This School": "0.0001", 
        "Bad School": "0.0001", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_SHADOW_OF_THE_TORTURER"
      }
    ]),
  new Guild("The Tower of Steel Isle", 
    [
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Actor", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_BASIC_ACTOR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "imitate", 
        "This School": "0.27", 
        "ethermage": "", 
        "Bad School": "0.275", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_IMITATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "project voice", 
        "This School": "0.015", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_PROJECT_VOICE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Stagecraft", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ACTING", 
        "Skill Name": "ACTING_STAGECRAFT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Chemistry", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_BASIC_CHEMISTRY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Acid ID", 
        "This School": "0.27", 
        "ethermage": "", 
        "Bad School": "0.275", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_ACID_ID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Poison ID", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POISON_ID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Potion ID", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POTION_ID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Acid Mastery", 
        "This School": "0.16", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_ACID_MASTERY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Create Acid", 
        "This School": "0.03", 
        "ethermage": "", 
        "Bad School": "0.03", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_CREATE_ACID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Poison Creation", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.165", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POISON_CREATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Poison Immunity", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POISON_IMMUNITY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Potion Creation", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.03", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POTION_CREATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Potion Intensification", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_POTION_INTENSIFICATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Neutralize Poison", 
        "This School": "0.07", 
        "ethermage": "", 
        "Bad School": "0.075", 
        "Skill Type": "ALCHEMIC", 
        "Skill Name": "ALCHEMIC_NEUTRALIZE_POISON"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Artist", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "ART", 
        "Skill Name": "ART_BASIC_ARTIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Art Knolwdge", 
        "This School": "0.17", 
        "ethermage": "", 
        "Bad School": "0.175", 
        "Skill Type": "ART", 
        "Skill Name": "ART_ART_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Colors", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "Skill Name": "ART_COLORS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Drawing", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "Skill Name": "ART_DRAWING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sculpture", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ART", 
        "Skill Name": "ART_SCULPTURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Painting", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "ART", 
        "Skill Name": "ART_PAINTING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Agriculture", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_AGRICULTURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Appraisal", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.12", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_APPRAISAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Beurocrat", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_BEUROCRAT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic cooking", 
        "This School": "0.45", 
        "ethermage": "", 
        "Bad School": "0.45", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_COOKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Horseman", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_HORSEMAN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Hospitality", 
        "This School": "0.45", 
        "ethermage": "", 
        "Bad School": "0.45", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_HOSPITALITY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic merchant", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_MERCHANT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Teacher", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_TEACHER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Woodwork", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BASIC_WOODWORK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Bowyer", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BOWYER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Butcher", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BUTCHER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Chandeler", 
        "This School": "0.55", 
        "ethermage": "", 
        "Bad School": "0.55", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CHANDELER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Distiller", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.4", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_DISTILLER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Gemsmith", 
        "This School": "0.27", 
        "ethermage": "", 
        "Bad School": "0.275", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GEMSMITH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Guild Lore", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GUILD_LORE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Metalsmith", 
        "This School": "0.55", 
        "ethermage": "", 
        "Bad School": "0.55", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_METALSMITH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Penmanship", 
        "This School": "0.5", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_PENMANSHIP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Public Speaking", 
        "This School": "0.37", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_PUBLIC_SPEAKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Weaver", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.4", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_WEAVER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Agriculture KN.", 
        "This School": "0.33", 
        "ethermage": "", 
        "Bad School": "0.335", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_AGRICULTURE_KN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Art Appraisal", 
        "This School": "0.22", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_ART_APPRAISAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Blacksmith", 
        "This School": "0.22", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_BLACKSMITH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "calligraphy", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.275", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CALLIGRAPHY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Camp Cooking", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CAMP_COOKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Chef", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CHEF"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "create recipe", 
        "This School": "0.14", 
        "ethermage": "", 
        "Bad School": "0.14", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_CREATE_RECIPE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Gm Appraisal", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GEM_APPRAISAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Guild secrets", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_GUILD_SECRETS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Haggling", 
        "This School": "0.22", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_HAGGLING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mass cooking", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_MASS_COOKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Teach Spell", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_TEACH_SPELL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Vintner", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_VINTNER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Woodbuilding", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_WOODBUILDING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "woodcarving", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_WOODCARVING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Music Inst. Carving", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "ARTISAN", 
        "Skill Name": "ARTISAN_MUSIC_INST._CARVING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic axe", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_AXE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic blunt weapons", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_BLUNT_WEAPONS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic bows", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_BOWS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Crossbow", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_CROSSBOW"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic curved swords", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_CURVED_SWORDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic dagger", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_DAGGER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Defense", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_DEFENSE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic dress swords", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_DRESS_SWORDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic martial", 
        "This School": "0.07", 
        "ethermage": "", 
        "Bad School": "0.075", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_MARTIAL_ARTIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic pole weapons", 
        "This School": "0.16", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_POLE_WEAPONS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic spears", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_SPEARS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic straight swords", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BASIC_STRAIGHT_SWORDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Charge", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CHARGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hit Points", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_HIT_POINTS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Attack versus", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_ATTACK_VERSUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Avoidance", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_AVOIDANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Critical Hit Bonus", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CRITICAL_HIT_BONUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Damage Bonus", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_DAMAGE_BONUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Initiative bonus", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_INITIATIVE_BONUS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Multiple attack", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_MULTPLE_ATTACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Protection", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_PROTECTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "quicknock", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_QUICKNOCK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shield Use", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SHIELD_USE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Single weap spec", 
        "This School": "0.002", 
        "ethermage": "", 
        "Bad School": "0.002", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SINGLE_WEAP_SPEC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sniper", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SNIPER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Autohit", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_AUTOHIT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Blind Fighting", 
        "This School": "0.002", 
        "ethermage": "", 
        "Bad School": "0.002", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_BLIND_FIGHTING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Call Damage", 
        "This School": "0.06", 
        "ethermage": "", 
        "Bad School": "0.06", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CALL_DAMAGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Catch/deflect missle", 
        "This School": "0.025", 
        "ethermage": "", 
        "Bad School": "0.025", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_CATCH/DEFLECT_MISSLE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Dodge", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_DODGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Frenzy", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_FRENZY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Parry", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_PARRY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Quickdraw", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_QUICKDRAW"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shield Rush", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SHIELD_RUSH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Slay", 
        "This School": "0.001", 
        "ethermage": "", 
        "Bad School": "0.001", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SLAY_(PERFECT_ATTACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Stunning Attack", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_STUNNING_ATTACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Swarm", 
        "This School": "0.04", 
        "ethermage": "", 
        "Bad School": "0.04", 
        "Skill Type": "COMBAT", 
        "Skill Name": "COMBAT_SWARM"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic First Aid", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.4", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_BASIC_FIRST_AID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Cure/Bind Wounds", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_BASIC_CURE/BIND_WOUNDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Midwifery", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_MIDWIFERY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Cure Disease", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_CURE_DISEASE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Lay On Hands", 
        "This School": "0.04", 
        "ethermage": "", 
        "Bad School": "0.04", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_LAY_ON_HANDS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Contagion/Anti", 
        "This School": "0.01", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_CONTAGION/ANTI"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Strengthen", 
        "This School": "0.02", 
        "ethermage": "", 
        "Bad School": "0.02", 
        "Skill Type": "CURATIVE", 
        "Skill Name": "CURATIVE_STRENGTHEN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Dance", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_BASIC_DANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Courtly Dance", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_COURTLY_DANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Kensai sword dance", 
        "This School": "0.22", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_KENSAI_SWORD_DANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mysteriarch Slide", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "DANCE", 
        "Skill Name": "DANCE_MYSTERIARCH_SLIDE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Detect", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_BASIC_DETECT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detecrt scent", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECRT_SCENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "detect Noise", 
        "This School": "0.02", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_NOISE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Visual detect", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_VISUAL_DETECT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Darksight", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DARKSIGHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Hidden", 
        "This School": "0.27", 
        "ethermage": "", 
        "Bad School": "0.275", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_HIDDEN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect ill intent", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_ILL_INTENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Skill", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_SKILL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Slope/Direction", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.4", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_SLOPE/DIRECTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Falsify scent", 
        "This School": "0.22", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_FALSIFY_SCENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Scent recognition", 
        "This School": "0.17", 
        "ethermage": "", 
        "Bad School": "0.175", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_SCENT_RECOGNITION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Illusiion.Invis", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.19", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_ILLUSIION.INVIS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Lie", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "DETECT", 
        "Skill Name": "DETECT_DETECT_LIE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Hand skills", 
        "This School": "0.17", 
        "ethermage": "", 
        "Bad School": "0.17", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_BASIC_HAND_SKILLS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Trap", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_BASIC_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Engineer", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_ENGINEER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Architecht", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_ARCHITECHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Find Trap", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_FIND_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mechanic", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_MECHANIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Miner", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_MINER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Open Locks", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_OPEN_LOCKS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Remove trap", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_REMOVE_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Set trap", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_SET_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sleight of hand", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_SLEIGHT_OF_HAND"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Avoid Trap", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_AVOID_TRAP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Enliven", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "ENGINEER", 
        "Skill Name": "ENGINEER_ENLIVEN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Anarch", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_ANARCH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hobyt", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_HOBYT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Klaxik", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_KLAXIK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Magetongue", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_MAGETONGUE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Odop", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_ODOP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Omwo~", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_OMWO"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sauroid", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_SAUROID"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Vox (Southern Common)", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_VOX_(SOUTHERN_COMMON"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Westic (north common)", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_WESTIC_(NORTH_COMMON"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Harnic", 
        "This School": "0.27", 
        "ethermage": "", 
        "Bad School": "0.275", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_HARNIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Marcher (grey March)", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_MARCHER_(GREY_MARCH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Omnian", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_OMNIAN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Orcash", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_ORCASH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Silverwood", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_SILVERWOOD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Venolvian (coom)", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_VENOLVIAN_(COOM"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Suprosian", 
        "This School": "0.33", 
        "ethermage": "", 
        "Bad School": "0.335", 
        "Skill Type": "LANGUAGE", 
        "Skill Name": "LANGUAGE_SUPROSIAN"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Affect others", 
        "This School": "0.07", 
        "ethermage": "", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_AFFECT_OTHERS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic meditate", 
        "This School": "0.07", 
        "ethermage": "", 
        "Bad School": "0.07", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_BASIC_MEDITATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Confuse", 
        "This School": "0.07", 
        "ethermage": "", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_CONFUSE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Distract", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_DISTRACT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mind Over Body", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_MIND_OVER_BODY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Resist", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_RESIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Body Composition", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_BODY_COMPOSITION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Resist Magic", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.075", 
        "Skill Type": "MIND", 
        "Skill Name": "MIND_RESIST_MAGIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Move", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_BASIC_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Amored Move", 
        "This School": "0.17", 
        "ethermage": "", 
        "Bad School": "0.175", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_AMORED_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "FreeMove", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_FREEMOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "reduce weight", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_REDUCE_WEIGHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Speed Move", 
        "This School": "0.17", 
        "ethermage": "", 
        "Bad School": "0.175", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_SPEED_MOVE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Ignore encumbrance", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "MOVEMENT", 
        "Skill Name": "MOVEMENT_IGNORE_ENCUMBRANCE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Song", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_BASIC_SONG"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Bard", 
        "This School": "0.04", 
        "ethermage": "", 
        "Bad School": "0.04", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_BARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Write music", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_WRITE_MUSIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "ArcanicBard", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_ARCANICBARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Battlebard", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_BATTLEBARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Nature's Bard", 
        "This School": "0.18", 
        "ethermage": "", 
        "Bad School": "0.185", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_NATURE'S_BARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Vestedbard", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "MUSIC", 
        "Skill Name": "MUSIC_VESTEDBARD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic nature", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_BASIC_NATURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Outdoor", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_BASIC_OUTDOOR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "AnimalEmpathy", 
        "This School": "0.21", 
        "ethermage": "", 
        "Bad School": "0.215", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_ANIMALEMPATHY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Botanist", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_BOTANIST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Tracking", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_TRACKING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Instill Dread", 
        "This School": "0.12", 
        "ethermage": "", 
        "Bad School": "0.125", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_INSTILL_DREAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mind track", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_MIND_TRACK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Plant Lore", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_PLANT_LORE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect tracker", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "OUTDOOR", 
        "Skill Name": "OUTDOOR_DETECT_TRACKER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Priest", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_BASIC_PRIEST"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Affect Undead", 
        "This School": "0.04", 
        "ethermage": "", 
        "Bad School": "0.04", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_AFFECT_UNDEAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Ceremony", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CEREMONY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Conversion", 
        "This School": "0.04", 
        "ethermage": "", 
        "Bad School": "0.04", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CONVERSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Detect Undead", 
        "This School": "0.09", 
        "ethermage": "", 
        "Bad School": "0.09", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_DETECT_UNDEAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Corruption", 
        "This School": "0.01", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CORRUPTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Create Undead", 
        "This School": "0.075", 
        "ethermage": "", 
        "Bad School": "0.075", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_CREATE_UNDEAD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mass Conversion", 
        "This School": "0.01", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_MASS_CONVERSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Resist Conversion", 
        "This School": "0.01", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_RESIST_CONVERSION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Sanctify", 
        "This School": "0.01", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "PRIEST", 
        "Skill Name": "PRIEST_SANCTIFY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Math", 
        "This School": "0.6", 
        "ethermage": "", 
        "Bad School": "0.4", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_BASIC_MATH"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Scholar", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_BASIC_SCHOLAR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Astronomy", 
        "This School": "0.5", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_ASTRONOMY"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hstorical knowledge", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.225", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_HISTORICAL_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Read/write", 
        "This School": "0.6", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_READ/WRITE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Legend/Lore", 
        "This School": "0.13", 
        "ethermage": "", 
        "Bad School": "0.095", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_LEGEND/LORE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Literature", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "SCHOLAR", 
        "Skill Name": "SCHOLAR_LITERATURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Carnal", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BASIC_CARNAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Leader", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BASIC_LEADER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic social", 
        "This School": "0.35", 
        "ethermage": "", 
        "Bad School": "0.35", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BASIC_SOCIAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Courtly Manners", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_COURTLY_MANNERS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Social Dynamic", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_SOCIAL_DYNAMIC"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Contact", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.3", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_CONTACT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Exhort", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_EXHORT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Friendship", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_FRIENDSHIP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Organize", 
        "This School": "0.25", 
        "ethermage": "", 
        "Bad School": "0.25", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_ORGANIZE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Bonding", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_BONDING"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Fight to Oblivion", 
        "This School": "0.11", 
        "ethermage": "", 
        "Bad School": "0.11", 
        "Skill Type": "SOCIAL", 
        "Skill Name": "SOCIAL_FIGHT_TO_OBLIVION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Amnimist SP", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_ANIMIST_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Artificer SP", 
        "This School": "0.3", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_ARTIFICER_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Air SP", 
        "This School": "0.49", 
        "ethermage": "0.41", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_AIR_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Chaos SP", 
        "This School": "0.16", 
        "ethermage": "0.29", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_CHAOS_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Death SP", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_DEATH_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Earth SP", 
        "This School": "0.22", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_EARTH_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Fire SP", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_FIRE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Life SP", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_LIFE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Order SP", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_ORDER_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "House of Water SP", 
        "This School": "0.6", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOUSE_OF_WATER_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mentalist SP", 
        "This School": "0.4", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_MENTALIST_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Necromantic SP", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_NECROMANTIC_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Restorative SP", 
        "This School": "0.09", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_RESTORATIVE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shade Sp", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SHADE_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Spirit SP", 
        "This School": "0.55", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SPIRIT_SP"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "HOW sp knoledge", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_HOW_SP_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mentalist sp knowledge", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_MENTALIST_SP_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Necromantic sp knowle", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_NECROMANTIC_SP_KNOWLE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Restorative sp knowledge", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_RESTORATIVE_SP_KNOWLEDGE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Spirit Reclamation", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SPIRIT_RECLAMATION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Spirit Success", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "SPELL", 
        "Skill Name": "SPELL_SPIRIT_SUCCESS"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Ascend", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_ASCEND"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Basic Sneak", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_BASIC_SNEAK"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Surpirse", 
        "This School": "0.15", 
        "ethermage": "", 
        "Bad School": "0.15", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_SURPRISE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Backstab", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_BACKSTAB"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Climb Sheer", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_CLIMB_SHEER"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Disguise", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_DISGUISE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Hide", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_HIDE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Mis with crowd", 
        "This School": "0.2", 
        "ethermage": "", 
        "Bad School": "0.2", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_MIX_WITH_CROWD"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Move Silent", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_MOVE_SILENT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Assassinate", 
        "This School": "0.04", 
        "ethermage": "", 
        "Bad School": "0.04", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_ASSASSINATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Fall", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_FALL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Impersonate", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_IMPERSONATE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shadowheal", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_SHADOWHEAL"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shadowsight", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "THIEVES_TREE", 
        "Skill Name": "THIEVES_TREE_SHADOWSIGHT"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "basic Torture", 
        "This School": "0.1", 
        "ethermage": "", 
        "Bad School": "0.1", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_BASIC_TORTURE"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Conviction", 
        "This School": "0.01", 
        "ethermage": "", 
        "Bad School": "0.01", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_CONVICTION"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Terror", 
        "This School": "0.05", 
        "ethermage": "", 
        "Bad School": "0.05", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_TERROR"
      }, 
      {
        "COMMONALITY": "", 
        "rawSkillName": "Shadow of the Torturer", 
        "This School": "0.0001", 
        "ethermage": "", 
        "Bad School": "0.0001", 
        "Skill Type": "TORTURER", 
        "Skill Name": "TORTURER_SHADOW_OF_THE_TORTURER"
      }
    ])

    // Add other guilds here...
  ];
