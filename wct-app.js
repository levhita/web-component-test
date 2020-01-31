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
    const groups = ['Student','Teacher','Administrative'];
    const professions = [
      'Accountant','Actor','Actress','Air Traffic Controller','Architect','Artist','Attorney',
      'Banker','Bartender','Barber','Bookkeeper','Builder','Businessman'
    ];

    this.loading = true;
    fetch('https://randomuser.me/api/?seed=levhita&results=18&inc=name,phone,email,picture')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        this.users = data.results.map( (e) => {
            return {
                name: `${e.name.first} ${e.name.last}`,
                group: groups[Math.floor(Math.random()*groups.length)],
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                profession: professions[Math.floor(Math.random()*groups.length)],
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
  
  userClicked(e){
    this.selectedUser = e.detail.index;
  }

  render(){
    if ( this.loading ) return html `Loading...` ;

    const e = this.users[this.selectedUser];

    return html`
      <wct-list @user-clicked=${this.userClicked} .users=${this.users}></wct-list>
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