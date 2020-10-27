import ProfilePicture from "../Images/profilepic.png";

export default function HomePage() {
  return (
    <main>
      <h1 className="header">My Profile</h1>

      <img className="profilePicture" src={ProfilePicture} alt="Profile" />
      <form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" value="John">
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" value="Doe">
  <input type="submit" value="Submit">
</form> 
    </main>
  );
}
