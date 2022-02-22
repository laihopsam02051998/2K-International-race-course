import { createUseStyles } from "react-jss";

const styleHexagon = createUseStyles({
  Icon: {
    cursor: "pointer",
    // maxWidth: "0%",
    "&:hover path:nth-child(2)": {
      stroke: "black",
      fill: "transparent",
      transition: "0.3s ease",
    },
    "&:hover path:nth-child(1)": {
      fill: "white",
      transition: "0.3s ease",
    },
    "& svg": {
      "& g": {
        "& path": {
          fill: "transparent",
          transition: "0.3s ease",
        },
      },
      "& path:nth-child(2)": {
        stroke: "white",
      },
    },
  },
});
export default styleHexagon;
