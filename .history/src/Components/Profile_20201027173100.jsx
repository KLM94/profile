import ProfilePicture from "../Images/profilepic.png";
import Form from "../Components/Form";

export default function Profile() {
  return (
    <main>
      <h1 className="header">My Profile</h1>

      <img className="profilePicture" src={ProfilePicture} alt="Profile" />

      <Form />

      {/* Removed into seperate component as the file got larger and untidy */}
      {/* Look into JSON file and extract information from there */}
    </main>
  );
}
