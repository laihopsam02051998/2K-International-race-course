import React from "react";
import BlockCenterLayout from "./BlockCenterLayout";
import createDetailStyles from "./style";

function Detail(props) {
  const classes = createDetailStyles();

  return (
    <div
      className={
        props.status === null
          ? classes.containerDetailHide
          : classes.containerDetail
      }
    >
      <div className={classes.detailHeaderOne}>
        <div className={classes.headerOneLeft}>
          <h1>{props.content.firstTitle}</h1>
          <p>{props.content.firstContent}</p>
        </div>
        <div className={classes.headerOneRight}>
          <img src={props.images.image1} />
        </div>
      </div>
      <BlockCenterLayout
        image1={props.images.image2}
        image2={props.images.image3}
      />
      <div className={classes.detailHeaderThree}>
        <div className={classes.headerThreeLeft}>
          <img src={props.images.image4} />
        </div>
        <div className={classes.headerThreeRight}>
          <h1>{props.content.secondTitle}</h1>
          <p>{props.content.secondContent}</p>
        </div>
      </div>
    </div>
  );
}
export default Detail;
