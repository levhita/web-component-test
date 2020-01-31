import { LitElement, html, css } from 'lit-element';

class WctUser extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      thumbnail: { type: String },
      index: { type: Number }

    };
  }
  
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: block;
        width: 40%;
        height: 48px;
        float: left;
        margin:20px 10px;
      }
      button {
        font-size:18px;
        width: 100%;
        height: 50px;
        border:none;
        box-sizing: border-box;
        border-radius: 24px;
        background: white;
        display: inline-block;
        text-align:left;
        padding:12px 0px;
 
      }
      button:hover{
        border: 1px solid grey;
        cursor: pointer;
        background: #EEE;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        float:left;
        border-radius: 50%;
        margin: -12px 15px -12px 0px
      }
    `;
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
        <button @click=${this.handleClick}><img src="${this.thumbnail}" /> ${this.name}</button>
    `;
  }
}

customElements.define('wct-user', WctUser);

