import * as core from "../../../core";
import './bearings-card.scss'

export class BearingsCard extends core.Component {
  static get observedAttributes() {
    return ["title", "poster", "cost", "id", "quanity"];
  }

  render() {
    return `
          <section class="Bearings-section">
              <div class="Bearings-header">
                  <p>${this.props.title}</p>
                  <img src="${this.props.poster}" alt="${this.props.title}">
              </div>
              <div class="Bearings-cost">
                  <p>Количество:<strong>${this.props.quanity}</strong> шт.</p>
                  <p>Стоимость без НДС, бел. руб. за 1 единицу:<strong>${this.props.cost}</strong> руб.</p></p>
              </div>
          </section>
        `;
  }
}

customElements.define("bearings-card", BearingsCard);
