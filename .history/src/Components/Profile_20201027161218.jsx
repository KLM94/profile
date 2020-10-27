import ProfilePicture from "../Images/profilepic.png";

export default function HomePage() {
  return (
    <main>
      <h1 className="header">Profile</h1>

      <img src={ProfilePicture} alt="Logo" />
    </main>
  );
}
