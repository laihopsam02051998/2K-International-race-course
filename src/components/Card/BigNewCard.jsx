import React from "react";
import { Link } from "react-router-dom";
import { ButtonHover } from "../Button/Button";
import { Date, TiTlePostLarge } from "../Typography/index.js";
import { Container, NomalImage } from "./styled";

function BigNewCard({ id, date, title, image }) {
  //id={item.id}
  // props.key
  // props.date
  // props.title
  // props.image
  return (
    <Container>
      <NomalImage src={image} height={"30rem"} />
      <Date>{date}</Date>
      <TiTlePostLarge>{title}</TiTlePostLarge>
      <Link to={`/NewDetail/${id}`}>
        <ButtonHover backgroundColor={"#202020"}>Xem chi tiết</ButtonHover>
      </Link>
    </Container>
  );
}
export default BigNewCard;
