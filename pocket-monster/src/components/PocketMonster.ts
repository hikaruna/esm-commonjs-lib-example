import { html, render } from 'https://unpkg.com/lit-html';
import Monster from '../Monster';

export default class PocketMonster extends HTMLElement {

  get monster(): Monster {
    return this._monster;
  }

  set monster(newValue: Monster) {
    this._monster = newValue

    this.render();
  }

  private _monster: Monster

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  get template() {
    return html`<div><input value="${this.monster.name}"></div>`;
  }

  render() {
    render(this.template, this.shadowRoot);
  }
}

window.customElements.define('pocket-monster', PocketMonster);
