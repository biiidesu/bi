import { Component } from "react";

import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/searchBox/search-box.component";
import CardContainer from "./components/card-container/card-container.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }; //set the searchBox string setState return
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { cats: users };
        })
      );
  }

  render() {
    const { cats, searchField } = this.state;

    //copy mosnters array
    const filteredCats = cats.filter((cat) => {
      return cat.name.toLowerCase().includes(searchField);
      //filter and return a new array every time search box
    });

    return (
      <div className="App">
        <h1 className="app-title">Cats Directory</h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder={"Search Cat"}
          className={"search-box"}
        />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
