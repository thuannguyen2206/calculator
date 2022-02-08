import React from "react";

function Button({ text, classes, onClickBtn }) {
  return (
    <li className={classes ? classes : ""}>
      <button onClick={onClickBtn}>{text}</button>
    </li>
  );
}

export default Button;
