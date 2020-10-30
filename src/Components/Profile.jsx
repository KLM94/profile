import React, { Component } from "react";
import axios from "axios";
import ProfilePicture from "../Images/profilepic.png";
import Form from "../Components/Form";
import { data } from "../data/data.json";

const { friends, loginHistory } = data;
// Keys extracted from JSON file

class Profile extends Component {
  /* Function changed to class component because of state */
  state = {
    favouriteColour: "#ce7e49",
  };

  setBackgroundColour = () => {
    // Function to call noops API
    return axios
      .get(`http://api.noopschallenge.com/hexbot`)
      .then((response) => {
        //console.log(response.data)
        //console.log(response.data.colors)
        // console.log(response.data.colors[0].value);
        this.setState({ favouriteColour: response.data.colors[0].value });
        // console.log(this.state.favouriteColour);
      });
    /* When clicking the button on the profile page, each response is giving a random colour */
  };

  render() {
    return (
      <div
        className="profile"
        style={{
          backgroundColor: this.state.favouriteColour,
        }}
      >
        {/* Inline styling that sets background colour to the state which calls the function */}

        <div className="login-history">
          <h4>Login History:</h4>
          <ul key={loginHistory}>
            {loginHistory.map((login) => (
              <li key={login.id}>{login.date}</li>
            ))}
          </ul>
        </div>
        <div className="friends">
          <h4>Friends List</h4>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>{friend.name}</li>
            ))}
          </ul>
        </div>
        {/* - Considered extracting friends list into a seperate component, because the data is lightweight, 
        I decided to keep it here */}
        {/* - Data extracted from JSON file */}

        <h1 className="header">My Profile</h1>
        <img className="profilePicture" src={ProfilePicture} alt="Profile" />
        <span className="form-fl">
          <Form />
        </span>
        <div className="friends-list-container"></div>
        <div className="set-background-btn">
          <button onClick={this.setBackgroundColour}>
            Click here to change the background colour!
          </button>
          {/* onClick invoking function to make the request to the API when the button is clicked */}
        </div>

        {/* Removed Form into seperate component as file got larger and untidy. */}
      </div>
    );
  }
}

export default Profile;
