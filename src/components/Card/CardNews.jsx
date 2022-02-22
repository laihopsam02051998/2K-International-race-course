import React from "react";
import { Link } from "react-router-dom";
import { ButtonHover } from "../Button/Button";
import { TiTleNews } from "../Typography";
import { styleNews } from "./style";

function CardNews(props) {
  // props.key
  // props.date
  // props.title
  // props.image
  const classes = styleNews();

  return (
    <div className={classes.cardNew}>
      <div className={classes.imageNew}>
        <img src={props.image != null ? props.image : " "} alt />
      </div>
      <div className={classes.contentNew}>
        <div className={classes.contentTimeNew}>
          <p>{props.date != null ? props.date : "17 JUNE 2021"}</p>
        </div>
        <div className={classes.contentTitleNew}>
          <TiTleNews>
            {props.title != null
              ? props.title
              : "WRAPSTYLE HCM LỘT XÁC PORSCHE 911 CARRERA VỚI BỘ CÁNH ĐƯỢC CÁ NHÂN HOÁ"}
          </TiTleNews>
        </div>
        <div className={classes.contentButtonNew}>
          <Link to={`/NewDetail/${props.id}`}>
            <ButtonHover backgroundColor={"#202020"}>Xem chi tiết</ButtonHover>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CardNews;
