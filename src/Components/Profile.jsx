import React, { Component } from "react";
import ProfilePicture from "../Images/profilepic.png";
import Form from "../Components/Form";
import { data } from "../data/data.json";

const { friendsList, loginHistory } = data;

class Profile extends Component {
  /* Changed to Class component because will be using state  -- consider extracting into seperate component*/

  render() {
    return (
      <main>
        <h1 className="header">My Profile</h1>

        <img className="profilePicture" src={ProfilePicture} alt="Profile" />
        {/* Profile picture maybe needs adding to JSON file and extracted from there. */}

        <Form />

        <p>Friends List:</p>
        <ul>
          {friendsList.map((fl) => (
            <li>{fl}</li>
          ))}
        </ul>

        {/* Removed Form into seperate component as file got larger and untidy. */}
        {/* Look into JSON file and extract information from there. */}
      </main>
    );
  }
}

export default Profile;
