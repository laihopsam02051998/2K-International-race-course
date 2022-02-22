import React from "react";
import { BlackButton } from "../Button/Button";
import useStyleBanner from "./style";

function Banner({ titleBanner, imageBanner }) {
  const classes = useStyleBanner();
  return (
    <div className={classes.containerBanner}>
      <div className={classes.modelImage}>
        <img
          src={
            imageBanner != null
              ? imageBanner
              : "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Gulf%20Racing%20Livery19.jpg"
          }
        />
      </div>
      <div className={classes.modelContent}>
        <div className={classes.modelContentTitle}>
          <h4>TRƯỜNG ĐUA 2K</h4>
          <h1>{titleBanner != null ? titleBanner : "CAR WRAPPING"}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            quasi at. Aspernatur dignissimos sunt voluptates provident laborum
            inventore excepturi atque culpa, eum earum distinctio explicabo
            magnam veritatis ab totam quasi!
          </p>
        </div>
        <div className={classes.modelContentButton}>
          <BlackButton backgroundColor={"black"}>ĐẶT LỊCH NGAY</BlackButton>
        </div>
      </div>
    </div>
  );
}

export default Banner;
