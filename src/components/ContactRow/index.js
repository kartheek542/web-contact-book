import { Component } from "react";
import {BiMessage, BiPhoneCall} from "react-icons/bi"
import "./index.css";

class ContactRow extends Component {
  state = {
    hover: false,
  };

  renderTag = (eachTag) => <p key={eachTag} className={`tag ${eachTag}`}>{eachTag}</p>;

  setActive = () => {
    this.setState({hover: true})
  }

  setPassive = () => {
    this.setState({hover: false})
  }

  render() {
    const { hover } = this.state;
    const { contactDetails } = this.props;
    const { name, place, status, location, tags } = contactDetails;
    const buttonClassName = hover
      ? "btn action-button active-button"
      : "btn action-button inactive-button";
    const rowClassName = hover ? 'table-row active-row' : 'table-row'
    return (
      <tr
        className={rowClassName}
        onMouseEnter={this.setActive}
        onMouseLeave={this.setPassive}
      >
        <td>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="profile-image"
            alt="profile"
          />
        </td>
        <td>
          <div>
            <p className="contact-name">{name}</p>
            <p className="place-name">{place}</p>
          </div>
        </td>
        <td>{status}</td>
        <td>{location}</td>
        <td className="tags-container">
          {tags.map((eachTag) => this.renderTag(eachTag))}
        </td>
        <td>
          <div>
            <button className={buttonClassName} type="button">
              <BiMessage /> Send message
            </button>
            <button className={buttonClassName} type="button">
              <BiPhoneCall />
              Call
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default ContactRow;
