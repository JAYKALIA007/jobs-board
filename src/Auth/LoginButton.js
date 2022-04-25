import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();

  return !isAuthenticated && (
        <button className=" border-2 border-slate-200 rounded-lg text-underline px-5 py-1 hover:bg-slate-200 hover:text-blue-500 underline-offset-2"
            onClick={() => loginWithRedirect()}>
                Log In
        </button>)
};

export default LoginButton;