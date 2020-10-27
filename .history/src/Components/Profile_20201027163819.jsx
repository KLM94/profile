import ProfilePicture from "../Images/profilepic.png";

export default function HomePage() {
  return (
    <main>
      <h1 className="header">Profile</h1>

      <img
        className="profilePicture"
        src={ProfilePicture}
        alt="Profile Picture"
      />
    </main>
  );
}
