import { Component } from "react";
import './card-list.styles.css'
import CardContainer from "../card-container/card-container.component";


class CardList extends Component {
  render() {
    const { cats } = this.props;

    return (
      <div className="card-list" key={"list"}>
        {cats.map((cat) => {
         return (
          <CardContainer cat = {cat}/> )
        })}
      </div>
    );
  }
}



export default CardList;
