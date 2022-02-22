import { createUseStyles } from "react-jss";

const useStyleCarousel = createUseStyles({
  carouselThree: {
    textAlign: "center",
    padding: "2rem 0rem",
    width: "100%",
    overflow: "hidden",
    "& li": {
      listStyle: "none",
    },
  },
  containerCarousel: {
    overflow: "hidden",
    position: "relative",
  },
  navigationCustomize: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: "9",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: "0px 1rem",
  },
});
export default useStyleCarousel;
