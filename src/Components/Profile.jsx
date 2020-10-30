import React, { Component } from "react";
import axios from "axios";
import ProfilePicture from "../Images/profilepic.png";
import Form from "../Components/Form";
import LoginHistory from "./LoginHistory";
import { data } from "../data/data.json";

const { friends } = data;
// Key extracted from JSON file

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
        <LoginHistory />

        <div>
          <h1 className="header">My Profile</h1>

          <img className="profilePicture" src={ProfilePicture} alt="Profile" />
          {/* Import picture from Images file*/}
          <Form />
          <div className="set-background-btn">
            <button onClick={this.setBackgroundColour}>
              Click here to change the background colour!
            </button>
            {/* onClick invoking function to make the request to the API when the button is clicked */}

            {/* Removed Form into seperate component as file got larger and untidy. */}
          </div>
        </div>

        <div>
          <p className="friends-list-header">
            <strong>Friends List</strong>
          </p>
          <ul>
            {friends.map((friend) => (
              <li className="friend-li" key={friend.id}>
                {friend.name}
              </li>
            ))}
          </ul>
        </div>
        {/* - Considered extracting friends list into a seperate component, because the data is lightweight, 
        I decided to keep it here */}
        {/* - Data extracted from JSON file */}
      </div>
    );
  }
}

export default Profile;
