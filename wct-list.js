import { LitElement, html } from 'lit-element';
import './wct-user.js';

class WctList extends LitElement {

  static get properties() {
    return {
      users: { type: Array },
      groups: { type: Array }
    };
  }

  constructor() {
    super();
    this.users = [];
    this.groups = [];
    this.selectedGroup = 'Student';
  }

  handleChange(e){
    this.selectedGroup = e.target.value;
    this.requestUpdate();
  }

  render(){
    return html`
      <section>
        <h1>Users</h1>
        <p>If you want to get contact information to especific user, just select group and then select
        him from the list below.</p>
        <div>
          Select group of users:
          <select @change=${this.handleChange}>
            ${this.groups.map((e, i) => html`<option @value="${e}">${e}</option>`)}
          </select>
        </div>
        <div>
          ${this.users.filter(e=>e.group==this.selectedGroup).map((e, i) => html`<wct-user index=${e.index} thumbnail=${e.picture.thumbnail} name=${e.name}></wct-user>`)}
        </div>
      </section>
    `;
  }
}

customElements.define('wct-list', WctList);