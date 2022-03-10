import { useState } from "react";

import "./App.css";

function App() {
  const [userData, setUserData] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setUserData(data);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm} className="form" id="userForm">
        <label htmlFor="firstName">First name</label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" />

        <label htmlFor="streetAddress">Street address</label>
        <input type="text" name="streetAddress" id="streetAddress" />

        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />

        <label htmlFor="postalCode">Postal code</label>
        <input type="text" name="postalCode" id="postalCode" />

        <label htmlFor="country">Country code</label>
        <select name="country" id="country">
          <option value="finland">Finland</option>
          <option value="sweden">Sweden</option>
          <option value="norway">Norway</option>
        </select>

        <div className="line">
          <label htmlFor="termsOfService">Terms of service</label>
          <input
            type="checkbox"
            value="accepted"
            name="termsOfService"
            id="termsOfService"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>{userData && <pre>{JSON.stringify(userData)}</pre>}</div>
    </div>
  );
}

export default App;
