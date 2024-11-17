import React from "react";
import theme from "../../utils/theme";
import styles from "./Button.module.css";

const Button = (props) => {
  const { buttonText, handleClick, variant } = props;
  const isFilled = variant === "filled";
  return (
    <button
      className={isFilled ? styles.filled : ""}
      style={{
        backgroundColor: isFilled
          ? theme.colors.primaryBlue
          : theme.colors.black,
        border: isFilled ? "none" : `1px solid ${theme.colors.white}`,
        color: theme.colors.white,
        padding: "0.5em 1em",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};
export default Button;
