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
            <li>
              <input type="text" name="first name" value="Kirsty" />
            </li>
          </label>
          <label>
            Last name:
            <li>
              <input type="text" name="last name" value="McGlynn" />
            </li>
          </label>
          <label>
            Date of Birth:
            <li>
              {" "}
              <input type="text" name="date of birth" value="17/02/94" />
            </li>
          </label>
          <label>
            Favourite Activity:
            <li>
              {" "}
              <input type="text" name="favourite activity" value="Gaming" />
            </li>
          </label>
        </ul>
      </form>
    </main>
  );
}
