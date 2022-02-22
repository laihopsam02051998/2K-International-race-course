import React from "react";
import { useStyleVideo } from "./style";

import video from "./../assets/video/Aventador SVJ_ (1080p).mp4";
import { ButtonHover } from "../Button/Button";

function Video() {
  const classes = useStyleVideo();
  return (
    <div className={classes.backgroundVideo}>
      <div className={classes.videoScreen}>
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={classes.videoContent}>
        <h3>
          KING DRAG <br /> 2K International circuit <br />
        </h3>
        <ButtonHover backgroundColor={"red"}>Tìm hiểu thêm</ButtonHover>
      </div>
    </div>
  );
}

export default Video;
