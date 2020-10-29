import React, { Component } from "react";
import axios from "axios";
import ProfilePicture from "../Images/profilepic.png";
import Form from "../Components/Form";
import { data } from "../data/data.json";

const { friends, loginHistory } = data;

class Profile extends Component {
  /* Changed to Class component because will be using state  -- consider extracting into seperate component*/
  state = {
    favouriteColour: "#ce7e49",
  };

  setBackgroundColour = () => {
    return axios
      .get(`http://api.noopschallenge.com/hexbot`)
      .then((response) => {
        // console.log(response.data.colors[0].value);
        this.setState({ favouriteColour: response.data.colors[0].value });
        // console.log(this.state.favouriteColour);
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.favouriteColour,
        }}
      >
        <h1 className="header">My Profile</h1>

        <img className="profilePicture" src={ProfilePicture} alt="Profile" />
        {/* Profile picture maybe needs adding to JSON file and extracted from there. */}

        <Form />
        <div className="set-background-btn">
          <button onClick={this.setBackgroundColour}>Change background</button>
        </div>

        <h4>Friends List:</h4>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>{friend.name}</li>
          ))}
        </ul>

        <h4>Login History:</h4>
        <ul key={loginHistory}>
          {loginHistory.map((login) => (
            <li key={login.id}>{login.date}</li>
          ))}
        </ul>

        {/* Removed Form into seperate component as file got larger and untidy. */}
        {/* Look into JSON file and extract information from there. */}
      </div>
    );
  }
}

export default Profile;
