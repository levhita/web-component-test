import { LitElement, html, css } from 'lit-element';
import './wct-list.js';
import './wct-details.js';

const groups = ['Student','Teacher','Administrative'];
const professions = [
  'Accountant','Actor','Actress','Air Traffic Controller','Architect','Artist','Attorney',
  'Banker','Bartender','Barber','Bookkeeper','Builder','Businessman'
];

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
    fetch('https://randomuser.me/api/?seed=Levhita&results=50&inc=name,phone,email,picture')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        this.users = data.results.map( (e, index) => {

            return {
                name: `${e.name.first} ${e.name.last}`,
                group: groups[Math.floor(Math.random()*groups.length)],
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                profession: professions[Math.floor(Math.random()*groups.length)],
                email: e.email,
                phone: e.phone,
                picture: e.picture,
                index,
                selected: false
            }
        });

        this.selectedUser = 0;
        this.users[0].selected = true;
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
    this.users[this.selectedUser].selected = false;
    this.users[e.detail.index].selected = true;
    // Force new reference for wtc-list to trigger render
    this.users=[...this.users];

    this.selectedUser = e.detail.index;
  }

  static get styles() {
    return css`
      wct-details {
        position: fixed;
        right:0;
        top:0;
        width: 400px;
        float: right;
      }
    `;
  }

  render(){
    if ( this.loading ) return html `Loading...` ;

    const e = this.users[this.selectedUser];

    return html`
      <wct-details
        name=${e.name}
        group=${e.group}
        bio=${e.bio}
        profession=${e.profession}
        email=${e.email}
        phone=${e.phone}
        .picture=${e.picture}>
      </wct-details>
      <wct-list @user-clicked=${this.userClicked} .groups=${groups} .users=${this.users}></wct-list>
    `;
  }
}

customElements.define('wct-app', WctApp);     // <wct-list users=${this.users}></wct-list>