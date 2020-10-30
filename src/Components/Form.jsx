export default function Form() {
  // Function as data is static
  // readOnly property added to form inputs after research due to an error in the console

  return (
    <span>
      <form>
        <label className="form-contents">
          First Name:
          <br />
          <input type="text" name="first name" value="Kirsty" readOnly />
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input type="text" name="last name" value="McGlynn" readOnly />
        </label>
        <br />
        <label>
          Date of Birth:
          <br />
          <input type="text" name="date of birth" value="17/02/94" readOnly />
        </label>
        <br />
        <label>
          Favourite Activity:
          <br />
          <input
            type="text"
            name="favourite activity"
            value="Gaming"
            readOnly
          />
        </label>
        <br />
      </form>
    </span>
  );
}
