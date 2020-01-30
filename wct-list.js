import { LitElement, html } from 'lit-element';
import './wct-user.js';

class WctList extends LitElement {

  static get properties() {
    return {
      users: { type: Array },
    };
  }

  constructor() {
    super();
    this.users = [];
  }
  render(){

    return html`
      <section>
        <h1>Users</h1>
        <p>If you want to get contact information to especific user, just select group and then select
        him from the list below.</p>

        <div>
          Select group of users:
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          ${this.users.map((e, i) => html`<wct-user thumbnail=${e.picture.thumbnail} name=${e.name}></wct-user>`)}
        </div>
      </section>
    `;
  }
}

customElements.define('wct-list', WctList);