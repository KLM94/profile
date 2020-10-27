import ProfilePicture from "../Images/profilepic.png";

export default function HomePage() {
  return (
    <main>
      <h1 className="header">My Profile</h1>

      <img className="profilePicture" src={ProfilePicture} alt="Profile" />

      <form>
        <label>
          First name:
          <br />
          <input type="text" name="first name" value="Kirsty" />
        </label>
        <br />
        <label>
          Last name:
          <input type="text" name="last name" value="McGlynn" />
        </label>
      </form>
    </main>
  );
}
