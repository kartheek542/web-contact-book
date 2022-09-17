import {BiFilter} from 'react-icons/bi';
import {BsSearch} from 'react-icons/bs'
import "./index.css"


const Header = () => (
    <div className="header-container">
        <h1 className="company-name">DOZ Pharmacy - Contacts</h1>
        <button className="btn btn-danger header-buttons shadow add-contact-button" type="button">ADD CONTACT</button>
        <button className="btn header-buttons shadow filter-button" type="button"><BiFilter /></button>
        <button className="btn btn-primary header-buttons shadow search-button" type="button"><BsSearch /></button>
    </div>
)

export default Header;