import { createUseStyles } from "react-jss";

const styleIcon = createUseStyles({
  container: {
    "& i": {
      color: "rgb(32, 32, 32)",
      fontSize: "1.7rem",
      cursor: "pointer",
      transition: "0.2s ease",
      "&:hover": {
        color: "#4267B2",
        fontSize: "2.3rem",
        transition: "0.2s ease",
      },
    },
  },
  containerYoutube: {
    "& i": {
      color: "rgb(32, 32, 32)",
      fontSize: "1.7rem",
      cursor: "pointer",
      transition: "0.2s ease",
      "&:hover": {
        color: "#FF0000",
        fontSize: "2.3rem",
        transition: "0.2s ease",
      },
    },
  },
  containerShare: {
    "& i": {
      color: "rgb(32, 32, 32)",
      fontSize: "1.7rem",
      cursor: "pointer",
      transition: "0.2s ease",
      "&:hover": {
        color: "gray",
        fontSize: "2.3rem",
        transition: "0.2s ease",
      },
    },
  },
});

export default styleIcon;
