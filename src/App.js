import * as _ from 'lodash';
import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import SortingButton from './components/buttons/SortingButton';
import ProfileCard from './components/profile-card/ProfileCard';
import './utils/styles/App.css';

class App extends Component {

  localProfiles = [];

  constructor() {
    super();

    this.state = {
      profiles: [],
      search: '',
      sortingMethod: 'asc'
    };
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          const actualData = data.results[0];
          this.setState({
            profiles: [...this.state.profiles, actualData]
          });
        })
        .catch(err => console.log(err));
    }
  }

  handleClick = () => {
    this.setState({
      sortingMethod: this.state.sortingMethod === 'asc' ? 'desc' : 'asc',
      profiles: _.orderBy(this.state.profiles, el => el.name.first, [this.state.sortingMethod])
    });
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  renderProfiles() {
    return this.localProfiles.map((item, index) => {
      return (
        <Fade bottom key={index} delay={Number(`${index}00`)}>
          <ProfileCard
            name={`${item.name.first} ${item.name.last}`}
            imgUrl={item.picture.medium}/>
        </Fade>);
    });
  }

  render() {
    this.localProfiles = this.state.profiles
      .filter(item => item.name.first.toLowerCase().indexOf(this.state.search) !== -1);
    return (
      <div className="App">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-9 ml-md-auto">
              <input type="text" placeholder="Search by name..."
                     onChange={this.handleSearch}/>
            </div>
            <div className="col col-lg-3 ml-auto">
              <SortingButton
                sortingMethod={this.state.sortingMethod}
                click={this.handleClick}/>
            </div>
          </div>
        </div>
        <div className="profile-container">
          {this.renderProfiles()}
        </div>
      </div>
    );
  }
}

export default App;
