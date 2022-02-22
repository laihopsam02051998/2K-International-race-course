import React from "react";

import styleHexagon from "./styleHexagonButton";

export function HexagonButtonNext(props) {
  const classes = styleHexagon();
  return (
    <div className={classes.Icon}>
      <svg
        width="3.5rem"
        height="3.5rem"
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
            d="M0 0l7.432 5.674L14.864 0"
            transform="rotate(-90 935.432 -711.068)"
          />
        </g>
      </svg>
    </div>
  );
}

export function HexagonButtonPrev(props) {
  const classes = styleHexagon();
  return (
    <div className={classes.Icon}>
      <svg
        width="3.5rem"
        height="3.5rem"
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
            class="icon on-dark"
            d="M0 5.675L7.432 0l7.432 5.675"
            transform="rotate(-90 935.432 -711.068)"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export function HexagonButtonUnder(props) {
  const classes = styleHexagon();
  return (
    <div className={classes.Icon}>
      <svg
        width="3.5rem"
        height="3.5rem"
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
            class="icon on-dark"
            d="M1641.906,214.094l7.354,5.666,7.518-5.666"
            transform="translate(-0.406 0.406)"
          ></path>
        </g>
      </svg>
    </div>
  );
}
