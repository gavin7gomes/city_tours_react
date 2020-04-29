import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: tourData,
    };
  }

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedList = tours.filter((item) => item.id !== id);
    this.setState({
      tours: sortedList,
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tourList">
        {tours.map((item) => (
          <Tour key={item.id} item={item} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
