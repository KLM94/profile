
export default function Form() {
    return (
    
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

        {/* Look into JSON file and extract information from there */}
   
    );
  }