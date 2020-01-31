import { LitElement, html, css } from 'lit-element';

class WctDetails extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      group: { type: String },
      bio: { type: String },
      profession: { type: String },
      email: { type: String },
      phone: { type: String },
      picture: { type: Object },
    };
  }

  constructor() {
    super();
    this.name = '';
    this.group = '';
    this.bio = '';
    this.profession = '';
    this.email = '';
    this.phone = '';
    this.picture = {large:'',medium:''};
  }

  static get styles() {
    return css`
      :host {
        position:relative;
      }
      section {
        box-sizing: border-box;
        border-left: 3px solid grey;
      }
      div.container {
        background-color:black;
        overflow:none;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        z-index: -1;
      }

      img.back {
        width: 100%;
        -webkit-filter: blur(5px) brightness(50%);
        filter: blur(5px)brightness(50%);
      }
      div.intro {
        text-align:center;
        color: white;
      }
      img.detail {
        margin-top:50px;
        border: 3px solid white;
        border-radius: 50%;
      }
      dl {
        margin: 1em;
      }
    `;
  }

  render(){
    return html`
      <section>
        <div class="intro">
          <img class="detail" src=${this.picture.large} />
          <div class="container">
            <img class="back" src=${this.picture.large} />
          </div>
          <h1>${this.name}</h1>
          <p>${this.group}</p>
        </div>
        <dl>
          <dt>Short Bio</dt>
          <dd>${this.bio}</dd>
          <dt>Profession</dt>
          <dd>${this.profession}</dd>
          <dt>Email</dt>
          <dd>${this.email}</dd>
          <dt>Phone</dt>
          <dd>${this.phone}</dd>
        </dl>
      </section>
    `;
  }
}

customElements.define('wct-details', WctDetails);

