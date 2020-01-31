import { LitElement, html, css } from 'lit-element';
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

  static get styles() {
    return css`
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;       /* Remove default arrow */
        background-image: url(...);   /* Add custom arrow */
        height: 48px;
        /*background: #EEE;*/
        color: dimrey;
        border:1px solid grey;
        font-size: 18px;
        border-radius: 4px;
      }
    `;
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