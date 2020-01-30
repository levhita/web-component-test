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
    this.name = 'Levhita';
    this.group = 'Teacher';
    this.bio = 'Web Developr and Free Software Advocate';
    this.profession = 'Developer';
    this.email = 'levhita@gmail.com';
    this.phone = '33-11-29-38-69';
    this.picture = {
      large:'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_400x400.jpg',
      medium: 'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_200x200.jpg',
      thumbnail: 'https://pbs.twimg.com/profile_images/1214948725359071234/Bm4T4-cg_normal.jpg'
    };
  }

  render(){
    return html`
      <section>
        <div>
          <h1>${this.name}</h1>
          <p>${this.status}</p>
          <img src="${this.picture.medium}" />
          <img src="${this.picture.large}" />
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

