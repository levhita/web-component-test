import { LitElement, html } from 'lit-element';

class WctUser extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      thumbnail: { type: String }
    };
  }

  constructor() {
    super();
    this.name = 'Levhita';
    this.thumbnail ='https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_normal.jpg';
  }

  render(){

    return html`
      <div>
        <img src="${this.thumbnail}" />
        <span>${this.name}</span>
      </div>
    `;
  }
}

customElements.define('wct-user', WctUser);

