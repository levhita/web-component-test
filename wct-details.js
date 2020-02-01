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
        box-sizing: border-box;
        border-left: 1px solid grey;
        overflow:hidden;
      }
      
      div.intro {
        text-align:center;
        color: white;
        padding: 0;
        height: 300px;
        overflow:hidden;
      }
      div.intro > h1 {
        font-size: 18px;
      }
      div.intro > p {
        font-size:14px;
      }


      div.back {
        position:absolute;
        height: 330px;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        
        filter: blur(8px) brightness(70%);
        -webkit-filter: blur(8px) brightness(70%);
        z-index:-1;
      }

      img.detail {
        border: 4px solid white;
        border-radius: 50%;
        margin-top: 40px;
        margin-bottom:20px;
      }

      div.details {
        background:white;
        padding:5px;
      }
      dl {
        padding:0;
        margin:0;
        margin: 1em;
      }
      dt {
        color: gray;
        font-size: 14px;
      }
      dd {
        margin: 10px 0 30 0;
        color: #222;
      }

    `;
  }

  render(){
    return html`
        <div class="intro">
          <div class="back" style="background-image: url(${this.picture.large})"></div>  
          <img class="detail" src="${this.picture.large}"/>
          <h1>${this.name}</h1>
          <p>${this.group}</p>
        </div>
        <div class="details">
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
        </div>
    `;
  }
}

customElements.define('wct-details', WctDetails);

