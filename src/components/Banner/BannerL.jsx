import React from "react";
import { ObjectFitImage } from "../Image";
import useStyleBanner from "./style";

function BannerL({ image }) {
  const classes = useStyleBanner();
  return (
    <div className={classes.containerBannerL}>
      <div className={classes.BannerImage}>
        <ObjectFitImage objectFit={"cover"} src={image} />
      </div>
      <div className={classes.BannerContent}>
        <p>sasm</p>
      </div>
    </div>
  );
}

export default BannerL;
