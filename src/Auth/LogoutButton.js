import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout,isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <button className="text-underline px-10 hover:underline underline-offset-2" 
        onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;