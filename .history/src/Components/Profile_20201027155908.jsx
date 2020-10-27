import ProfilePicture from "../Images/profilepic";

export default function HomePage() {
  return (
    <main>
      <h1>Profile</h1>

      <img src={ProfilePicture} alt="Logo" />

      <p>This is your awesome HomePage subtitle</p>
    </main>
  );
}
