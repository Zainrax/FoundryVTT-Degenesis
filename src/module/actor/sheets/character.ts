interface DegenesisActorSheetData extends ActorSheetData {
  conceptIcon?: string;
  cultIcon?: string;
  cultureIcon?: string;
}

export class DegenesisActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["degenesis", "sheet", "actor"],
      template: "systems/degenesis/templates/actor/actor-sheet.html",
      width: 800,
      height: 650,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".tab-content",
          initial: "main",
        },
      ],
    });
  }

  /* -------------------------------------------- */

  /** @override */
  getData() {
    const data: DegenesisActorSheetData = super.getData();

    this.loadConfigData(data);

    data.conceptIcon = this.actor.data.data.details.concept.value
      ? `systems/degenesis/icons/concept/${this.actor.data.data.details.concept.value}.svg`
      : "systems/degenesis/icons/blank.png";
    data.cultIcon = this.actor.data.data.details.cult.value
      ? `systems/degenesis/icons/cult/${this.actor.data.data.details.cult.value}.svg`
      : "systems/degenesis/icons/blank.png";
    data.cultureIcon = this.actor.data.data.details.culture.value
      ? `systems/degenesis/icons/culture/${this.actor.data.data.details.culture.value}.svg`
      : "systems/degenesis/icons/blank.png";

    // mergeObject(data, this.actor.prepare());
    return data;
  }

  /* -------------------------------------------- */

  loadConfigData(sheetData) {
    // sheetData.concepts = DEGENESIS.concepts;
    // sheetData.cults = DEGENESIS.cults;
    // sheetData.cultures = DEGENESIS.cultures;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
  }
  /* -------------------------------------------- */
}
