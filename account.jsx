import { useEffect, useState } from "react";

function Account() {

  const [user, setUser] = useState({});

  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }

  }, []);

  return (

    <div className="container">

      <div className="mobile">

        <div className="account">

          <h2>Account Settings</h2>

          <div className="profile">

            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
            />

            <div>

              <h3>{user.name}</h3>

              <p>{user.email}</p>

            </div>

          </div>

          <p className="description">

            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Account;