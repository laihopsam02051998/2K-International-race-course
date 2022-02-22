import React, { useRef, useState } from "react";
import { useStyleVideo } from "./style";

import video from "./../assets/video/Aventador SVJ_ (1080p).mp4";
import HexagonButton from "../Button/HexagonButton";

function ShortVideo(props) {
  const vidRef = useRef(null);
  const [buttonVideo, setButtonVideo] = useState(false);
  const handlePlayVideo = () => {
    buttonVideo === false ? vidRef.current.play() : vidRef.current.pause();
    setButtonVideo(!buttonVideo);
  };
  const classes = useStyleVideo();
  // console.log(props.poster);
  return (
    <div
      className={
        props.video === null ? classes.shortVideoHide : classes.shortVideo
      }
    >
      <div className={classes.shortVideoScreen}>
        <video
          loop
          ref={vidRef}
          poster={props.poster}
          width="100%"
          height="100%"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={classes.shortVideoContent} onClick={handlePlayVideo}>
        <HexagonButton playVideo={handlePlayVideo} ttButton={buttonVideo} />
      </div>
    </div>
  );
}
export default ShortVideo;
