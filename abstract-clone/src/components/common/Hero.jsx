import React from "react";
import theme from "../../utils/theme";

function Hero(props) {
  const { childern } = props;
  return (
    <div
      style={{
        backgroundColor: theme.colors.primaryPurple,
        padding: "4em 0",
        textAlign: "center",
      }}
    >
      {childern}
    </div>
  );
}

export default Hero;
