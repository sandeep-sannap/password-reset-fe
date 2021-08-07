import React, { createContext, useState } from "react";

let UserContext = createContext();
export default UserContext;

export function ContextProvider({ children }) {
  const [user, setUser] = useState({
    user: null,
    error: false,
    success: false,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
