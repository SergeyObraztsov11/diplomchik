import React, { Component } from "react";
import PlaceIcon from "./PlaceIcon";
import { Link } from "react-router-dom";

export class placesWrapper extends Component {
  render() {
    return (
      <div className="placesBlock">
        <div className="BlockTitleWrapper">
          <p className="BlockTitleText">{this.props.WrapperText}</p>
          {this.props.WrapperButtonEnabled && (
            <Link to="/allplaces">
              <div className="AllplacesButton">Все места</div>
            </Link>
          )}
        </div>

        <div className="placesWrapper">
          {this.props.places?.map((CurrentPlace) => (
            <PlaceIcon key={CurrentPlace.id} place={CurrentPlace} />
          ))}
        </div>
      </div>
    );
  }
}

export default placesWrapper;
