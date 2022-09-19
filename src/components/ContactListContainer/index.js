import { Component } from "react";
import ContactsList from "../ContactsList";
import SearchContext from "../../context/SearchContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

let names = [
  {
    name: "Heather Carr",
    profileImageUrl: "",
    place: "Chesapeake",
    status: "Active",
    location: "Cook Islands,Avarua",
    tags: ["CLIENT", "WORKSHOP"],
    id: 0,
  },
  {
    name: "Eric Mckenzie",
    profileImageUrl: "",
    place: "Lexington-Fayette",
    status: "Inactive",
    location: "Thailand,Bangkok",
    tags: ["CLIENT"],
    id: 1,
  },
  {
    name: "Barbara Martin",
    profileImageUrl: "",
    place: "Atlanta",
    status: "Active",
    location: "Kazakhstan,Astana",
    tags: ["WORKSHOP"],
    id: 2,
  },
  {
    name: "Shane Blake",
    profileImageUrl: "",
    place: "Sacramento",
    status: "Inactive",
    location: "Spain,Madrid",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 3,
  },
  {
    name: "Robert Mcgee",
    profileImageUrl: "",
    place: "Anaheim",
    status: "Active",
    location: "Malta,Valletta",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 4,
  },
  {
    name: "Nicole Sanders",
    profileImageUrl: "",
    place: "Wichita",
    status: "Inactive",
    location: "Reunion,Saint-Denis",
    tags: ["INTERNAL WORKS"],
    id: 5,
  },
  {
    name: "Juan Kidd",
    profileImageUrl: "",
    place: "Montgomery",
    status: "Active",
    location: "Saint Pierre and Miquelon,Saint-Pierre",
    tags: ["BOARD ROOM"],
    id: 6,
  },
  {
    name: "Mrs. Rachel Jacobson MD",
    profileImageUrl: "",
    place: "Riverside",
    status: "Inactive",
    location: "Saint Lucia,Castries",
    tags: ["CLIENT", "WORKSHOP"],
    id: 7,
  },
  {
    name: "Frank Bishop",
    profileImageUrl: "",
    place: "El Paso",
    status: "Active",
    location: "Mauritania,Nouakchott",
    tags: ["CLIENT"],
    id: 8,
  },
  {
    name: "Christopher Waters",
    profileImageUrl: "",
    place: "Cincinnati",
    status: "Inactive",
    location: "Vanuatu,Port Vila",
    tags: ["WORKSHOP"],
    id: 9,
  },
  {
    name: "Arthur Sullivan",
    profileImageUrl: "",
    place: "Santa Ana",
    status: "Active",
    location: "Vatican,Vatican City",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 10,
  },
  {
    name: "Shawn Greer",
    profileImageUrl: "",
    place: "Cleveland",
    status: "Inactive",
    location: "British Virgin Islands,Road Town",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 11,
  },
  {
    name: "Mark Alexander",
    profileImageUrl: "",
    place: "Garland",
    status: "Active",
    location: "Djibouti,Djibouti",
    tags: ["INTERNAL WORKS"],
    id: 12,
  },
  {
    name: "Daniel Williamson",
    profileImageUrl: "",
    place: "Norfolk",
    status: "Inactive",
    location: "Comoros,Moroni",
    tags: ["BOARD ROOM"],
    id: 13,
  },
  {
    name: "Jasmin Moore",
    profileImageUrl: "",
    place: "Los Angeles",
    status: "Active",
    location: "Sri Lanka,Colombo",
    tags: ["CLIENT", "WORKSHOP"],
    id: 14,
  },
  {
    name: "Brian Myers",
    profileImageUrl: "",
    place: "Anchorage",
    status: "Inactive",
    location: "Zimbabwe,Harare",
    tags: ["CLIENT"],
    id: 15,
  },
  {
    name: "Alexis Moody",
    profileImageUrl: "",
    place: "Orlando",
    status: "Active",
    location: "Qatar,Doha",
    tags: ["WORKSHOP"],
    id: 16,
  },
  {
    name: "Susan Murray",
    profileImageUrl: "",
    place: "Arlington",
    status: "Inactive",
    location: "Cuba,Havana",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 17,
  },
  {
    name: "Casey Ramos",
    profileImageUrl: "",
    place: "Tulsa",
    status: "Active",
    location: "Estonia,Tallinn",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 18,
  },
  {
    name: "Sarah Robertson",
    profileImageUrl: "",
    place: "St. Petersburg",
    status: "Inactive",
    location: "North Korea,Pyongyang",
    tags: ["INTERNAL WORKS"],
    id: 19,
  },
  {
    name: "Mary Bowman",
    profileImageUrl: "",
    place: "Buffalo",
    status: "Active",
    location: "Bulgaria,Sofia",
    tags: ["BOARD ROOM"],
    id: 20,
  },
  {
    name: "Alexandra Reyes",
    profileImageUrl: "",
    place: "Phoenix",
    status: "Inactive",
    location: "Pitcairn,Adamstown",
    tags: ["CLIENT", "WORKSHOP"],
    id: 21,
  },
  {
    name: "Catherine Crawford",
    profileImageUrl: "",
    place: "Bakersfield",
    status: "Active",
    location: "Japan,Tokyo",
    tags: ["CLIENT"],
    id: 22,
  },
  {
    name: "Kathy Yates",
    profileImageUrl: "",
    place: "Las Vegas",
    status: "Inactive",
    location: "Ireland,Dublin",
    tags: ["WORKSHOP"],
    id: 23,
  },
  {
    name: "Kelly Zhang",
    profileImageUrl: "",
    place: "Memphis",
    status: "Active",
    location: "Aruba,Oranjestad",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 24,
  },
  {
    name: "Debra Wright",
    profileImageUrl: "",
    place: "Rochester",
    status: "Inactive",
    location: "Burundi,Bujumbura",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 25,
  },
  {
    name: "Andrew Wilkinson",
    profileImageUrl: "",
    place: "Baton Rouge",
    status: "Active",
    location: "Lesotho,Maseru",
    tags: ["INTERNAL WORKS"],
    id: 26,
  },
  {
    name: "Tammy Scott",
    profileImageUrl: "",
    place: "Madison",
    status: "Inactive",
    location: "American Samoa,Pago Pago",
    tags: ["BOARD ROOM"],
    id: 27,
  },
  {
    name: "Erik Singleton",
    profileImageUrl: "",
    place: "Virginia Beach",
    status: "Active",
    location: "Samoa,Apia",
    tags: ["CLIENT", "WORKSHOP"],
    id: 28,
  },
  {
    name: "Colleen Adams",
    profileImageUrl: "",
    place: "Newark",
    status: "Inactive",
    location: "Bonaire, Saint Eustatius and Saba",
    tags: ["CLIENT"],
    id: 29,
  },
  {
    name: "Michael Buchanan",
    profileImageUrl: "",
    place: "Chandler",
    status: "Active",
    location: "British Indian Ocean Territory,Diego Garcia",
    tags: ["WORKSHOP"],
    id: 30,
  },
  {
    name: "April Brown",
    profileImageUrl: "",
    place: "Long Beach",
    status: "Inactive",
    location: "Cyprus,Nicosia",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 31,
  },
  {
    name: "Marcus Garza",
    profileImageUrl: "",
    place: "Plano",
    status: "Active",
    location: "Portugal,Lisbon",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 32,
  },
  {
    name: "Danielle Hanson",
    profileImageUrl: "",
    place: "Arlington",
    status: "Inactive",
    location: "Iran,Tehran",
    tags: ["INTERNAL WORKS"],
    id: 33,
  },
  {
    name: "Mark Massey",
    profileImageUrl: "",
    place: "Toledo",
    status: "Active",
    location: "Andorra,Andorra la Vella",
    tags: ["BOARD ROOM"],
    id: 34,
  },
  {
    name: "Brenda Conrad DVM",
    profileImageUrl: "",
    place: "Stockton",
    status: "Inactive",
    location: "Nauru,Yaren",
    tags: ["CLIENT", "WORKSHOP"],
    id: 35,
  },
  {
    name: "Stacy Mendoza PhD",
    profileImageUrl: "",
    place: "Oklahoma City",
    status: "Active",
    location: "Brunei,Bandar Seri Begawan",
    tags: ["CLIENT"],
    id: 36,
  },
  {
    name: "Tim Jenkins",
    profileImageUrl: "",
    place: "Henderson",
    status: "Inactive",
    location: "Slovakia,Bratislava",
    tags: ["WORKSHOP"],
    id: 37,
  },
  {
    name: "Kimberly Mccarty",
    profileImageUrl: "",
    place: "New Orleans",
    status: "Active",
    location: "Angola,Luanda",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 38,
  },
  {
    name: "Teresa Berry",
    profileImageUrl: "",
    place: "Nashville-Davidson",
    status: "Inactive",
    location: "Croatia,Zagreb",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 39,
  },
  {
    name: "Rickey Robinson",
    profileImageUrl: "",
    place: "Indianapolis",
    status: "Active",
    location: "Gibraltar,Gibraltar",
    tags: ["INTERNAL WORKS"],
    id: 40,
  },
  {
    name: "Meghan Fox",
    profileImageUrl: "",
    place: "Huntington",
    status: "Inactive",
    location: "Uzbekistan,Tashkent",
    tags: ["BOARD ROOM"],
    id: 41,
  },
  {
    name: "Joseph Moore",
    profileImageUrl: "",
    place: "Jacksonville",
    status: "Active",
    location: "Sint Maarten,Philipsburg",
    tags: ["CLIENT", "WORKSHOP"],
    id: 42,
  },
  {
    name: "Christopher Burch",
    profileImageUrl: "",
    place: "Mesa",
    status: "Inactive",
    location: "Cayman Islands,George Town",
    tags: ["CLIENT"],
    id: 43,
  },
  {
    name: "Chad Hutchinson",
    profileImageUrl: "",
    place: "Durham",
    status: "Active",
    location: "Barbados,Bridgetown",
    tags: ["WORKSHOP"],
    id: 44,
  },
  {
    name: "John Carter",
    profileImageUrl: "",
    place: "Honolulu",
    status: "Inactive",
    location: "Sao Tome and Principe,Sao Tome",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 45,
  },
  {
    name: "John Cox",
    profileImageUrl: "",
    place: "San Jose",
    status: "Active",
    location: "Wallis and Futuna,Mata Utu",
    tags: ["CLIENT", "BOARD ROOM"],
    id: 46,
  },
  {
    name: "Joyce Herrera",
    profileImageUrl: "",
    place: "Laredo",
    status: "Inactive",
    location: "Italy,Rome",
    tags: ["INTERNAL WORKS"],
    id: 47,
  },
  {
    name: "Kenneth Lewis",
    profileImageUrl: "",
    place: "Boston",
    status: "Active",
    location: "San Francisco,USA",
    tags: ["BOARD ROOM"],
    id: 48,
  },
  {
    name: "Andrew Price",
    profileImageUrl: "",
    place: "Dallas",
    status: "Inactive",
    location: "Paris, France",
    tags: ["CLIENT", "WORKSHOP"],
    id: 49,
  },
];

class ContactListContainer extends Component {
  state = {
    pageNo: 1,
    contacts: names,
  };
  onClickLeft = () => {
    const { pageNo } = this.state;
    if (pageNo !== 1) {
      this.setState((prevState) => ({ pageNo: prevState.pageNo - 1 }));
    }
  };
  onClickRight = () => {
    const { pageNo } = this.state;
    if (pageNo !== 10) {
      this.setState((prevState) => ({ pageNo: prevState.pageNo + 1 }));
    }
  };
  
  onDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(eachContact => eachContact.id !== id)
    }))
  }
  
  render() {
    const { pageNo, contacts } = this.state;
    return (
      <SearchContext.Consumer>
        {(value) => {
          const { searchInput } = value;
          const filteredContacts = contacts.filter((eachContact) =>
            eachContact.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          const totalPages = Math.ceil(filteredContacts.length / 5);
          return (
            <div>
              <h1 className="section-header">Contacts list</h1>
              <div>
                  <ContactsList contacts={filteredContacts} page={pageNo} deleteContact={this.onDeleteContact} />
                {totalPages > 0 && (
                  <div className="bottom-container">
                    <button
                      className="btn controllers"
                      type="button"
                      onClick={this.onClickLeft}
                    >
                      <AiOutlineLeft />
                    </button>
                    Page {pageNo} of {totalPages}
                    <button
                      className="btn controllers"
                      type="button"
                      onClick={this.onClickRight}
                    >
                      <AiOutlineRight />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        }}
      </SearchContext.Consumer>
    );
  }
}

export default ContactListContainer;
