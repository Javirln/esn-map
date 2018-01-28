import React, { Component } from 'react';
import '../../utils/styles/ProfileCard.css';

class ProfileCard extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.history.push('/map');
  };

  render() {
    return (
      <div className="card-master-container">
        <div className="card-container" onClick={this.handleClick}>
          <div className="card-container__img">
            <img className="rounded-circle"
                 src={this.props.imgUrl}
                 alt={this.props.name}/>
          </div>
          <div className="card-container__description">
            <p
              className="card-container__description__name">{this.props.name}</p>
            <small className="text-muted"> ESN Sevilla</small>
            <div className="card-container__description__social">
              <i className="fa fa-facebook-square" aria-hidden="true"/>
              <i className="fa fa-envelope" aria-hidden="true"/>
              <i className="fa fa-globe" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
