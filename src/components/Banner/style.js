import { createUseStyles } from "react-jss";

const useStyleBanner = createUseStyles({
  //START CONTAINER BANNER
  containerBanner: {
    position: "relative",
    height: "40rem",
    overflow: "hidden",
  },

  modelImage: {
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "contain",
      objectPosition: "0px -100px",
    },
  },
  modelContent: {
    position: "absolute",
    padding: "2rem",
    top: "0px",
    left: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.671)",
    clipPath: "polygon(0 0, 74% 0, 37% 100%, 0% 100%)",
  },
  modelContentTitle: {
    width: "50%",

    "& h4": { fontSize: "2rem", margin: "1rem 0rem" },
    "& h1": {
      fontSize: "4rem",
      margin: "1rem 0rem",
    },
    "& p": {
      lineHeight: "2rem",
    },
  },
  //END CONTAINER BANNER

  //START CONTAINER BANNERL
  containerBannerL: {
    position: "relative",
    height: "20rem",
    overflow: "hidden",
  },

  BannerImage: {
    width: "100%",
    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
      // objectPosition: "0px -300px",
    },
  },
  //END CONTAINER BANNERL

  modelContentFullTitle: {
    width: "100%",

    "& h4": { fontSize: "2rem", margin: "1rem 0rem" },
    "& h1": {
      fontSize: "4rem",
      margin: "1rem 0rem",
    },
    "& p": {
      lineHeight: "2rem",
    },
  },
  modelContentFull: {
    position: "absolute",
    padding: "2rem",
    top: "0px",
    left: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.671)",
  },
});

export default useStyleBanner;
