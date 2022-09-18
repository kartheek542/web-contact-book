import {AiFillStar} from 'react-icons/ai'
import {BiMessage, BiPhoneCall} from "react-icons/bi"
import "./index.css"

const FavouriteCard = props => {
    const {contactDetails} = props;
    const {name, place, location, status} = contactDetails;

    return (
      <div className="fav-contact-container ">
        <div className="favourite-head-container">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="profile-image"
            alt="profile"
          />
          <div className="names-container">
            <p className="contact-name">{name}</p>
            <p className="place-name">{place}</p>
          </div>
          <div className="star-container">
            <div className="star-background">
              <AiFillStar />
            </div>
          </div>
        </div>
        <div className="meta-container">
          <p className="status-text">{status}</p>
          <p className="location-text">{location}</p>
        </div>
        <div className='buttons-container'>
          <button className="btn action-button inactive-button" type="button">
            <BiMessage /> Send message
          </button>
          <button className="btn action-button inactive-button" type="button">
            <BiPhoneCall />
            Call
          </button>
        </div>
      </div>
    );
}

export default FavouriteCard;