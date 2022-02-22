import { createUseStyles } from "react-jss";

const useStyleHeader = createUseStyles({
  header: {
    backgroundColor: "#181818",
    width: "100%",
    overflow: "hidden",
    fontSize: "1rem",
    transition: " all 0.6s ease",
    zIndex: "99",
  },
  header__menu: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
  },
  header__left: {
    "& ul": {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      margin: "0rem 0rem",
      "& li": {
        position: "relative",
        color: "aliceblue",
        listStyle: "none",
        margin: "15px",
        display: "inline",
        cursor: "pointer",
        "&:before": {
          content: '""',
          position: "absolute",
          width: "0%",
          height: "10%",
          background: "white",
          // linear-gradient(-90deg, #64acff 40%, #3b6aee 50%, #d9352b 10%)
          transition: "all 0.5s ease",
          bottom: "-18px",
          left: " -5px",
        },
        "& img": {
          width: "100%",
          height: "4rem",
        },
        "& a": {
          textDecoration: "none",
          color: "aliceblue",
          fontWeight: "300",
        },

        "&:nth-child(2):hover::before ,&:nth-child(3):hover::before ,&:nth-child(4):hover::before,&:nth-child(5):hover::before":
          {
            width: "110%",
            height: "10%",
            transition: " all 0.5s ease",
          },
      },
    },
  },
  header__right: {
    "& ul": {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      "& li": {
        position: "relative",
        color: "aliceblue",
        listStyle: "none",
        margin: "15px",
        display: "inline",
        cursor: "pointer",
        "&:before": {
          content: '""',
          position: "absolute",
          width: "0%",
          height: "10%",
          background: "white",
          // linear-gradient(-90deg, #64acff 40%, #3b6aee 50%, #d9352b 10%)
          transition: "all 0.5s ease",
          bottom: "-10px",
          left: " -5px",
        },
        "& a": {
          textDecoration: "none",
          color: "aliceblue",
          fontWeight: "300",
        },

        "&:first-child:hover::before, &:nth-child(2):hover::before , &:nth-child(3):hover::before":
          {
            width: "110%",
            height: "10%",
            transition: " all 0.5s ease",
          },
        "& #svgNumber": {
          position: "absolute",
          top: "-10px",
          right: "-20px",
          borderRadius: " 50% 50%",
          width: "21px",
          height: "21px",
          backgroundColor: "transparent",
        },
      },
    },
  },

  showTouch: {
    display: "none",
    backgroundColor: "red",
  },

  // START BUTTON TOUCH
  Touch: {
    position: "relative",
    width: "50px",
    height: "50px",
    background: "#181818",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: " 0.2s",
    "&::before": {
      content: '" "',
      position: "absolute",
      width: "28px",
      height: "2px",
      backgroundColor: "white",
      transition: " 0.2s",
      transform: "translateY(0px) rotate(-45deg)",
    },
    "&::after": {
      content: '" "',
      position: "absolute",
      width: " 28px",
      height: "2px",
      backgroundColor: "white",
      transition: "0.2s",
      transform: "translateY(0px) rotate(45deg)",
    },
    "&.active::before": {
      transform: "translateY(10px)",
      boxShadow: "0 -10px 0 #fff",
    },
    " &.active::after": {
      // transform: "translateY(0px) rotate(-45deg)",
      transform: " translateY(-10px)",
    },
  },
  touchContent: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "space-between",
    textAlign: "left",
    padding: "0rem 0rem 0rem 6rem",
    height: "70vh",
    overflow: "hidden",
    transition: "0.6s ease",
    color: "white",
    "& h2": {
      margin: "0rem",
      fontSize: "0.8rem",
      color: "gray",
    },
    "& p": {
      color: "white",
      cursor: "pointer",
      fontSize: "1.3rem",
      fontWeight: "700",
      letterSpacing: "0.5px",
    },
    "& a": {
      textDecoration: "none",
    },
  },
  touchContentHide: {
    height: "0vh",
    overflow: "hidden",
    transition: "0.6s ease",
    "& h2": {
      display: "none",
    },
    "& p": {
      display: "none",
    },
    "& a": {
      textDecoration: "none",
    },
  },

  avatarContent: {
    display: "block",
    color: "white",
    width: "100%",
    height: "45vh",
    padding: "0rem 4rem",
    transition: "0.6s ease",
  },
  avatarContentHide: {
    height: "0vh",
    overflow: "hidden",
    transition: "0.6s ease",
  },
  showButton: {
    display: "block",
    transition: " all 0.6s ease-out",
    height: "30rem",
  },
  // END BUTTON TOUCH

  serviceTop: {
    display: "flex",
  },
});

export default useStyleHeader;
