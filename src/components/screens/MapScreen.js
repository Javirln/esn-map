import React, { Component } from "react";
import "../../utils/styles/MapScreen.css";
import Map from "../map/Map";
import ProfileCard from "../profile-card/ProfileCard";

class MapScreen extends Component {
  localProfiles = [];

  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      search: "",
      sortingMethod: "asc",
      markers: []
    };
  }

  componentDidMount() {
    for (let i = 0; i < 20; i++) {
      fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
          const actualData = data.results[0];
          this.setState({
            profiles: [...this.state.profiles, actualData].sort()
          });
        })
        .catch(err => console.log(err));
    }
  }

  renderProfiles() {
    return this.localProfiles.map((item, index) => {
      return (
        <ProfileCard
          key={index}
          name={`${item.name.first} ${item.name.last}`}
          imgUrl={item.picture.medium}
        />
      );
    });
  }

  render() {
    this.localProfiles = this.state.profiles;
    return (
      <div className="main-container">
        <div className="map-panel">
          <Map markers={this.state.markers} />
        </div>
        <div className="profile-panel" style={{ height: window.innerHeight }}>
          {this.renderProfiles()}
        </div>
      </div>
    );
  }
}

export default MapScreen;
