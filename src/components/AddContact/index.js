import { Component } from "react";
import "./index.css";

const tags = ["CLIENT", "WORK SHOP", "INTERNAL WORKS", "BOARD ROOM"];

class AddContact extends Component {
  state = {
    isSubmitted: false,
    addedTags: [],
    fullName: "",
    compName: "",
    nameErr: false,
    compErr: false,
  };
  onClickedTag = (event) => {
    if (event.target.checked) {
      this.setState((prevState) => ({
        addedTags: [...prevState.addedTags, event.target.value],
      }));
    } else {
      this.setState((prevState) => ({
        addedTags: prevState.addedTags.filter(
          (eachTag) => eachTag !== event.target.value
        ),
      }));
    }
  };

  onChangeFullName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  onChangeCompanyName = (event) => {
    this.setState({
      compName: event.target.value,
    });
  };

  onBlurName = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ nameErr: true });
    } else {
      this.setState({ nameErr: false });
    }
  };
  onBlurComp = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ compErr: true });
    } else {
      this.setState({ compErr: false });
    }
  };

  submitForm = (event) => {
    event.preventDefault();
    const { fullName, compName } = this.state;
    if (fullName.length === 0) {
      this.setState({ nameErr: true });
    } else if (compName.length === 0) {
      this.setState({ compErr: true });
    } else {
      this.setState({ isSubmitted: true });
    }
  };

  renderForm = () => {
    const { nameErr, compErr } = this.state;
    return (
      <>
        <h1 className="form-heading">Add New Contact</h1>
        <form onSubmit={this.submitForm}>
          <div className="element-container">
            <label className="label-text" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter full name"
              onBlur={this.onBlurName}
              onChange={this.onChangeFullName}
            />
            {nameErr && <p className="error-message">*Required</p>}
          </div>
          <div className="element-container">
            <label className="label-text" htmlFor="compName">
              Company
            </label>
            <input
              type="text"
              id="compName"
              className="form-control"
              placeholder="Enter company name"
              onBlur={this.onBlurComp}
              onChange={this.onChangeCompanyName}
            />
            {compErr && <p className="error-message">*Required</p>}
          </div>
          <div className="element-contaienr">
            <label>Choose any tags</label>
            <div className="checkboxes-container">
              {tags.map((eachTag) => (
                <div key={eachTag} className="checkbox-container">
                  <input
                    type="checkbox"
                    id={eachTag}
                    value={eachTag}
                    onChange={this.onClickedTag}
                  />
                  <label htmlFor={eachTag} className="checkbox-label">{eachTag}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button type="submit" className="form-control btn-primary">
              Submit
            </button>
          </div>
        </form>
      </>
    );
  };
  renderSuccess = () => (
    <div className="success-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" className="tick" alt="success" />
      <h1 className="succes-heading">Success</h1>
    </div>
  );

  render() {
    const { isSubmitted } = this.state;
    return (
      <div className="add-contact-container">
        <div className="form-container shadow">
          {isSubmitted ? this.renderSuccess() : this.renderForm()}
        </div>
      </div>
    );
  }
}

export default AddContact;
