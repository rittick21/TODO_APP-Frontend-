import { useState } from "react";
import { Context } from "./Context";
import App from "../App";

export const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      loading,
      setLoading,
      user,
      setUser
    }}>
      <App />
    </Context.Provider>
  );
};
