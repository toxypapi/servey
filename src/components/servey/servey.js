import React from "react";
import axios from "axios";

class Servey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      nom: "",
      birthdate: "",
      location: "",
      currentdate: "",
      feedback: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    const {
      title,
      nom,
      birthdate,
      location,
      currentdate,
      feedback
    } = this.state;
  };
  onSubmit = event => {
    event.preventDefault();
    const {
      title,
      nom,
      birthdate,
      location,
      currentdate,
      feedback
    } = this.state;
    axios
      .post("http://localhost:4000/servey", {
        title,
        nom,
        birthdate,
        location,
        currentdate,
        feedback
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      title,
      nom,
      birthdate,
      location,
      currentdate,
      feedback
    } = this.state;
    let secondForm;

    const isTitle = title.length > 0 && title !== '';
    const isNom = nom.length > 0 && nom !== '';
    const isBirthdate = birthdate.length > 0 && birthdate !== '';
    const isLocation = location.length > 0 && location !== '';
    const isCurrentdate = currentdate.length > 0 && currentdate !== '';
    const isFeedback = feedback.length > 0 && feedback !== '';
    

    return (
      <div className="container">
        <h1>SERVEY</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="title"
                value={title}
                onChange={this.onChange}
                autoFocus
              />
              <span className="help-block"></span>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="nom"
                className="form-control"
                placeholder="name"
                value={nom}
                onChange={this.onChange}
              />
              <span className="help-block"></span>
            </div>

            <div className="form-group">
              <input
                type="date"
                name="birthdate"
                className="form-control"
                placeholder="birth of date"
                value={birthdate}
                onChange={this.onChange}
              />
              <span className="help-block"></span>
            </div>
          </div>

         {isTitle && isNom && isBirthdate &&
          <div >
          <div className="form-group">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="current location"
              value={location}
              onChange={this.onChange}
              autoFocus
            />
            <span className="help-block"></span>
          </div>
    
          <div className="form-group">
            <input
              type="date"
              name="currentdate"
              className="form-control"
              placeholder="current date"
              value={currentdate}
              onChange={this.onChange}
            />
            <span className="help-block"></span>
          </div>
    
          <div className="form-group">
            <input
              type="text"
              name="feedback"
              className="form-control"
              placeholder="User feedback"
              value={feedback}
              onChange={this.onChange}
            />
            <span className="help-block"></span>
          </div>
        </div>
         }
          {(isTitle && isNom && isBirthdate && isLocation && isCurrentdate && isFeedback) && <button type="submit">Submit</button>}
        </form>
      </div>
    );
  }
}

export default Servey;
