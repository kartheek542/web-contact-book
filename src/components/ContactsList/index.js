import ContactRow from "../ContactRow";
import "./index.css";

const ContactsList = (props) => {
  const { contacts, page } = props;
  const requiredContacts = contacts.slice((page - 1) * 5, page * 5);
  console.log(requiredContacts);
  return (
    <tbody>
      {requiredContacts.map((eachContact) => (
        <ContactRow key={eachContact.id} contactDetails={eachContact} />
      ))}
    </tbody>
  );
};

export default ContactsList;
