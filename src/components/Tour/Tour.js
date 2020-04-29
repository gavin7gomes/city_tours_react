import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  displayInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { id, city, img, name, info } = this.props.item;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city tour" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i class="fa fa-window-close" aria-hidden="true"></i>
          </span>
        </div>
        <div class="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.displayInfo}>
              <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
