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
    this.name = '';
    this.thumbnail ='';
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

