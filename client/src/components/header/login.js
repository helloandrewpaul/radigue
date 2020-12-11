import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/user-context";

import { FiLogIn, FiLogOut } from "react-icons/fi";

const Login = (props) => {
  const { toggle, setToggle } = props;
  const { appUser, signInWithGoogle, handleSignOut } = useContext(UserContext);

  const userLogin = () => {
    if (appUser.email) {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: appUser.email }),
      })
        .then((res) => res.json())
        .then((res) => {
          // console.log(res);
          setToggle(true);
        });
    }
  };

  useEffect(() => {
    userLogin();
  }, [appUser.email]);

  return (
    <div>
      {appUser && appUser.email ? (
        <StyledFiLogOut onClick={handleSignOut} />
      ) : (
        <StyledFiLogin onClick={signInWithGoogle} />
      )}
    </div>
  );
};

const StyledFiLogin = styled(FiLogIn)`
  font-size: 24px;
  margin-right: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const StyledFiLogOut = styled(FiLogOut)`
  font-size: 24px;
  margin-right: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export default Login;
