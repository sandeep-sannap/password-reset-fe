import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../Context";

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    setUser({
      user: null,
      error: false,
      success: false,
    });
    history.push("/login");
  };

  // useEffect(() => {
  //   const { user, setUser } = useContext(UserContext);
  // }, [user]);

  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <h5>Home</h5>{" "}
      </Link>
      <ul>
        {success ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <div id="auth">
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              <li>Sign In</li>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              {" "}
              <li>Sign Up</li>
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
