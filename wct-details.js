import { LitElement, html } from 'lit-element';

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

  render(){
    return html`
      <section>
        <div>
          <h1>${this.name}</h1>
          <p>${this.group}</p>
          <img src=${this.picture.medium} />
          <img src=${this.picture.large} />
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

