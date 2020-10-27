import ProfilePicture from "../Images/profilepic.png";

export default function HomePage() {
  return (
    <main>
      <h1 className="header">My Profile</h1>

      <img className="profilePicture" src={ProfilePicture} alt="Profile" />

      <form>
        <ul>
          <label>
            First name:
            <input type="text" name="first name" value="Kirsty" />
          </label>
          <label>
            Last name:
            <input type="text" name="last name" value="McGlynn" />
          </label>
          <label>
            Date of Birth:
            <input type="text" name="date of birth" value="17/02/94" />
          </label>
          <label>
            Favourite Activity:
            <input type="text" name="favourite activity" value="Gaming" />
          </label>
        </ul>
      </form>
    </main>
  );
}
