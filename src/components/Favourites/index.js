import { Component } from "react";
import FavouriteCard from "../FavouriteCard";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css";

const favouriteContacts = [
  {
    name: "Mark Alexander",
    profileImageUrl: "",
    place: "Garland",
    status: "Active",
    location: "Djibouti,Djibouti",
    tags: ["INTERNAL WORKS"],
    id: 1,
  },
  {
    name: "Daniel Williamson",
    profileImageUrl: "",
    place: "Norfolk",
    status: "Inactive",
    location: "Comoros,Moroni",
    tags: ["BOARD ROOM"],
    id: 2,
  },
  {
    name: "Jasmin Moore",
    profileImageUrl: "",
    place: "Los Angeles",
    status: "Active",
    location: "Sri Lanka,Colombo",
    tags: ["CLIENT", "WORKSHOP"],
    id: 3,
  },
  {
    name: "Brian Myers",
    profileImageUrl: "",
    place: "Anchorage",
    status: "Inactive",
    location: "Zimbabwe,Harare",
    tags: ["CLIENT"],
    id: 4,
  },
  {
    name: "Alexis Moody",
    profileImageUrl: "",
    place: "Orlando",
    status: "Active",
    location: "Qatar,Doha",
    tags: ["WORKSHOP"],
    id: 5,
  },
  {
    name: "Susan Murray",
    profileImageUrl: "",
    place: "Arlington",
    status: "Inactive",
    location: "Cuba,Havana",
    tags: ["INTERNAL WORKS", "BOARD ROOM"],
    id: 6,
  },
];

class Favourites extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 3,
    }
    return (
      <div>
        <h1 className="section-header">Favourite</h1>
        <div className="slider-container">
        <Slider {...settings}>
          {
            favouriteContacts.map(eachContact => (
              <FavouriteCard key={eachContact.id} contactDetails={eachContact} />
            ))
          }
        </Slider>
        </div>
        
      </div>
    );
  }
}

export default Favourites;
