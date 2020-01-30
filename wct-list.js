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
    this.users = [{
      name : 'Levhita',
      group : 'Teacher',
      bio : 'Web Developr and Free Software Advocate',
      profession : 'Developer',
      email : 'levhita@gmail.com',
      phone : '33-11-29-38-69',
      picture : {
        large:'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_400x400.jpg',
        medium: 'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_200x200.jpg',
        thumbnail: 'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_normal.jpg'
      }
    }];
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
          ${this.users.map((e, i) => html`<wct-user thumbnail="${e.picture.thumbnail}" name="${e.name}"></wct-user>`)}
        </div>
      </section>
    `;
  }
}

customElements.define('wct-list', WctList);