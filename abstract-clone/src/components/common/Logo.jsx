import React from "react";
import theme from "../../utils/theme";

function Logo() {
  return (
    <>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            letterSpacing: "3px",
            fontSize: "1.5em",
            color: theme.colors.white,
          }}
        >
          Abstract
        </p>
      </button>
    </>
  );
}

export default Logo;
