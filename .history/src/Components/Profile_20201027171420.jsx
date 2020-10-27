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
          <br />
          <input type="text" name="last name" value="McGlynn" />
        </label>
        <br />
        <label>
          Date of Birth:
          <br />
          <input type="text" name="date of birth" value="17/02/94" />
        </label>
        <br />
        <label>
          Favourite Activity:
          <br />
          <input type="text" name="favourite activity" value="Gaming" />
        </label>
        <br />
      </form>

      {/* Possibly remove into seperate component as the file gets larger */}
      {/* Look into JSON file and extract information from there */}
    </main>
  );
}
