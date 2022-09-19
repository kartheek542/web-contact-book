import { Component } from "react";
import Header from "../Header";
import Favourites from "../Favourites";
import SearchContext from "../../context/SearchContext";
import "./index.css";
import ContactListContainer from "../ContactListContainer";

class ContactApp extends Component {
  state = {
    searchInput: "",
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
    console.log("changing state");
  };

  render() {
    const { searchInput } = this.state;
    return (
      <SearchContext.Provider
        value={{
          searchInput,
          onChangeSearchInput: this.onChangeSearchInput,
        }}
      >
        <div className="app-container">
          <div>
            <Header />
            <Favourites />
            <ContactListContainer />
          </div>
        </div>
      </SearchContext.Provider>
    );
  }
}

export default ContactApp;
