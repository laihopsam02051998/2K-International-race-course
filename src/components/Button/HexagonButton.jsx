import React, { useState } from "react";
import styleHexagon from "./styleHexagonButton";

function HexagonButton(props) {
  const classes = styleHexagon();

  return (
    <div
      style={{ display: props.ttButton === false ? "inline" : "none" }}
      onClick={props.playVideo}
      className={classes.Icon}
    >
      <svg
        width="5rem"
        height="5rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50.464 58.271"
      >
        <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
          <path
            d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z"
            transform="translate(1623.5 187.345)"
            style={{
              stroke: "white",
              strokeWidth: "1.5",
            }}
          />
          <path
            d="M22.732 24.713, 32.732 30.713, 22.732 36.713Z"
            transform="translate(1623 186.923)"
          />
        </g>
      </svg>
    </div>
  );
}
export default HexagonButton;
