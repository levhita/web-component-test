import { LitElement, html } from 'lit-element';
import './wct-list.js';
import './wct-details.js';

class WctApp extends LitElement {

  static get properties() {
    return {
      loading: { type: Boolean },
      selectedUser:  { type: Number },
      users: {type: Array }
    };
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.getUsers();
  }
  
  getUsers() {
    this.loading = true;
    fetch('https://randomuser.me/api/?seed=levhita&results=18&inc=name,phone,email,picture')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        this.users = data.results.map( (e) => {
            return {
                name: `${e.name.first} ${e.name.last}`,
                group: 'Not in API',
                bio: 'Not in API',
                profession: 'Not in API',
                email: e.email,
                phone: e.phone,
                picture: e.picture
            }
        });

        this.selectedUser = 0;
        this.loading = false;
    });
  }

  constructor() {
    super();
    this.loading = true;
    this.selected = {};
    this.users = [];
  }
  render(){
    if ( this.loading ) return html `Loading...` ;

    const e = this.users[this.selectedUser];

    return html`
      <wct-list .users=${this.users}></wct-list>
      <hr />
      <wct-details
        name=${e.name}
        group=${e.group}
        bio=${e.bio}
        profession=${e.profession}
        email=${e.email}
        phone=${e.phone}
        .picture=${e.picture}>
      </wct-details>
    `;
  }
}

customElements.define('wct-app', WctApp);     // <wct-list users=${this.users}></wct-list>