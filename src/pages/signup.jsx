import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const name = "Marry Doe";
  const phone = "Marry Doe";
  const email = "Marry Doe";
  const password = "Marry Doe";
  const company = "Marry Doe";
  const [agency, setAgency] = useState("Yes");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      phone,
      email,
      password,
      company,
      agency,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/account");
  };
  return (
    <div className="container">
      <div className="mobile">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Create your PopX account</h2>
          <label>Full Name</label>
          <input type="text" value={name} readOnly />
          <label>Phone Number</label>
          <input type="text" value={phone} readOnly />
          <label>Email Address</label>
          <input type="text" value={email} readOnly />
          <label>Password</label>
          <input type="text" value={password} readOnly />
          <label>Company Name</label>
          <input type="text" value={company} readOnly />
          <div className="radio-group">
            <p>Are you Agency?</p>
            <div className="radio-options">
              <label
                className={`radio-btn ${agency === "Yes" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={agency === "Yes"}
                  onChange={(e) => setAgency(e.target.value)}
                />
                Yes
              </label>
              <label className={`radio-btn ${agency === "No" ? "active" : ""}`}>
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={agency === "No"}
                  onChange={(e) => setAgency(e.target.value)}
                />
                No
              </label>
            </div>
          </div>
          <button type="submit" className="submitBtn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
