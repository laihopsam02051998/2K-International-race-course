import React from "react";
import { HexagonButtonUnder } from "../Button/HexagonButtonNext";
import useStyleBanner from "./style";

export function BannerFull({ image, title }) {
  const classes = useStyleBanner();
  return (
    <div>
      <div className={classes.containerBanner}>
        <div className={classes.modelImage}>
          <img
            src={
              image != null
                ? image
                : "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Gulf%20Racing%20Livery19.jpg"
            }
          />
        </div>
        <div className={classes.modelContentFull}>
          <div className={classes.modelContentFullTitle}>
            <h4>TRƯỜNG ĐUA 2K</h4>
            <h1>{title != null ? title : "CAR WRAPPING"}</h1>
          </div>
          <div
            className={classes.modelContentButton}
            style={{ paddingLeft: "1rem" }}
          >
            <HexagonButtonUnder />
          </div>
        </div>
      </div>
    </div>
  );
}

// export function BannerImage(props) {
//   const classes = useStyleBanner();
//   //props.image
//   return (
//     <div className={classes.BannerImage}>
//       <img src={props.image} />
//     </div>
//   );
// }
