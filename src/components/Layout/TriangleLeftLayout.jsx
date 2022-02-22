import React from "react";
import { ObjectFitImage } from "../Image";
import { Content, ParagraphTitle } from "../Paragraph/styled";
import createDetailStyles from "./style";
import {
  ContentContainer,
  LeftImageContainer,
  TriangleLeftContainer,
} from "./styled";

function TriangleLeftLayout(props) {
  const classes = createDetailStyles();
  console.log(props.image);
  return (
    <TriangleLeftContainer>
      <LeftImageContainer>
        <ObjectFitImage objectFit={"cover"} src={props.image} />
      </LeftImageContainer>
      <ContentContainer>
        <ParagraphTitle>{props.content.title}</ParagraphTitle>
        <Content>{props.content.content}</Content>
      </ContentContainer>
    </TriangleLeftContainer>
  );
}
export default TriangleLeftLayout;
