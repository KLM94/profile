import ProfilePicture from "../Images/profilepic.png";

export default function HomePage() {
  return (
    <main>
      <h1 className="header">My Profile</h1>

      <img className="profilePicture" src={ProfilePicture} alt="Profile" />

      <form>
        <label>
          First name:
          <input type="text" name="first name" value="Kirsty" />
        </label>
      </form>
    </main>
  );
}

<form action="/action_page.php">
  <label for="fname">First name:</label><br>

  <input type="text" id="fname" name="fname" value="John"><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
