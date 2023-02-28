import { Component } from "react";
import "./card-container.styles.css";

class CardContainer extends Component {
  render() {
    const { cat } = this.props;
    const { name, id, email } = cat;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`cat ${name}`}
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardContainer;
