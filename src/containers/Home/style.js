import { createUseStyles } from "react-jss";

const useHomeStyle = createUseStyles({
  homeAcessory: {
    textAlign: "center",
    padding: "3rem 0rem",
    "& h2": {
      fontSize: "2.5rem",
    },
  },
  homeCourse: {
    textAlign: "center",
    padding: "3rem 0rem",
    "& h2": {
      fontSize: "2.5rem",
    },
  },
});

export default useHomeStyle;
