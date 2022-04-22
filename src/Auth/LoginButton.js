import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();

  return !isAuthenticated && (<button className="text-underline px-10 hover:underline underline-offset-2"
            onClick={() => loginWithRedirect()}>
                Log In
        </button>)
};

export default LoginButton;