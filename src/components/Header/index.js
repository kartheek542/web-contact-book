import { Component } from "react";
import SearchContext from "../../context/SearchContext";
import { BiFilter } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import "./index.css";

class Header extends Component {
  render() {
    return (
        <SearchContext.Consumer>
            {
                value => {
                    const {searchInput, onChangeSearchInput} = value;
                    return (
                      <div className="header-container">
                        <h1 className="company-name">
                          DOZ Pharmacy - Contacts
                        </h1>
                        <button
                          className="btn btn-danger header-buttons shadow add-contact-button"
                          type="button"
                        >
                          ADD CONTACT
                        </button>
                        <button
                          className="btn header-buttons shadow filter-button"
                          type="button"
                        >
                          <BiFilter />
                        </button>
                        <div className="search-section-container">
                          <input
                            id="searchInput"
                            className="form-control search-input"
                            type="search"
                            value={searchInput}
                            onChange={onChangeSearchInput}
                            placeholder="Search contact"
                          />
                          <label
                            htmlFor="searchInput"
                            className="btn btn-primary header-buttons shadow search-button"
                            type="button"
                          >
                            <BsSearch />
                          </label>
                        </div>
                      </div>
                    );
                }
            }
        </SearchContext.Consumer>
    );
  }
}
export default Header;
