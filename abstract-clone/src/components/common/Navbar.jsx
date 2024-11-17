import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import theme from "../../utils/theme";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        width: "100vw",
        minHeight: "10vw",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2em",
        backgroundColor: theme.colors.black,
        color: theme.colors.white,
      }}
    >
      <NavBarButtonSection>
        <Logo />

        <div
          style={{
            height: "100%",
            borderLeft: "solid 2px white ",
            paddingTop: "20px",
          }}
        ></div>

        <a href="#">Help Center</a>
      </NavBarButtonSection>

      <NavBarButtonSection>
        <Button buttonText="Submit a request" handleClick={() => {}} />
        <Button buttonText="Sign in" handleClick={() => {}} variant="filled" />
      </NavBarButtonSection>
    </nav>
  );
}

const NavBarButtonSection = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Navbar;
