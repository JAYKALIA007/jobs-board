import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout,isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <button className=" mobile_s:text-sm sm:text-base border-2 border-slate-200 rounded-lg mobile_s:px-2 sm:px-5 py-1 hover:bg-slate-200 hover:text-blue-500"
      onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};

export default LogoutButton; 

