import { html, render } from 'https://unpkg.com/lit-html';
export default class PocketMonster extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    get monster() {
        return this._monster;
    }
    set monster(newValue) {
        this._monster = newValue;
        this.render();
    }
    get template() {
        return html `<div><input value="${this.monster.name}"></div>`;
    }
    render() {
        render(this.template, this.shadowRoot);
    }
}
window.customElements.define('pocket-monster', PocketMonster);
