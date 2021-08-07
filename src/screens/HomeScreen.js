import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import UserContext from "../Context";

export default function HomeScreen() {
  const history = useHistory();
  const [user, setUser] = useState(true);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user]);

  function logout() {
    setUser(!user);
  }
  return (
    <div className="d-flex  justify-content-center">
      {user && (
        <button onClick={logout} className="btn btn-warning logout">
          Log out
        </button>
      )}
      <h4 className="mt-5">Home Screen</h4>
    </div>
  );
}
