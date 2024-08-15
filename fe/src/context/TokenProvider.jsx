import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const TokenContext = createContext();
function TokenProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );
  const [decoded, setDecoded] = useState(
    Cookies.get("token") ? jwtDecode(Cookies.get("token")) : null
  );

  function logOut() {
    Cookies.remove("token");
    setToken(null);
    setDecoded(null);
    navigate("/");
  }
  return (
    <div>
      <TokenContext.Provider
        value={{ token, setToken, decoded, setDecoded, logOut }}
      >
        {children}
      </TokenContext.Provider>
    </div>
  );
}

export default TokenProvider;
