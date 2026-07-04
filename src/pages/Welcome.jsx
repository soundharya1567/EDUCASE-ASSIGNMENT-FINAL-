import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="mobile welcome-screen">
        <div className="bottom">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="createBtn" onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <button className="loginBtn" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
