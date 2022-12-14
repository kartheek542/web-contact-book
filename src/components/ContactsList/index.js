import ContactRow from "../ContactRow";
import "./index.css";

const ContactsList = (props) => {
  const { contacts, page, deleteContact } = props;
  const requiredContacts = contacts.slice((page - 1) * 5, page * 5);
  if (requiredContacts.length > 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>LOCATION</th>
            <th>TAGS</th>
            <th>ACTIONS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {requiredContacts.map((eachContact) => (
            <ContactRow key={eachContact.id} contactDetails={eachContact} removeContact={deleteContact} />
          ))}
        </tbody>
      </table>
    );
  }
  return (
      <div className="not-found-container">
        <div>
          <h1>Sorry, No Results found</h1>
          <p>Try searching for a different name</p>
        </div>
      </div>
  );
};

export default ContactsList;
