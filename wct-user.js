import { LitElement, html } from 'lit-element';

class WctUser extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      thumbnail: { type: String },
      index: { type: Number }

    };
  }

  constructor() {
    super();
    this.name = '';
    this.thumbnail = '';
    this.index = 0;
  }

  handleClick(){
    let event = new CustomEvent('user-clicked', {
      detail: {
        index: this.index
      },
      bubbles: true, 
      composed: true
    });
    this.dispatchEvent(event);
  }

  render(){

    return html`
      <div>
        <img src="${this.thumbnail}" />
        <button @click="${this.handleClick}" >${this.name}</button>
      </div>
    `;
  }
}

customElements.define('wct-user', WctUser);

