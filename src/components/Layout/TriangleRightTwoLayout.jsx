import React from "react";
import { ObjectFitImage } from "../Image";
import { Content, ParagraphTitle } from "../Paragraph/styled";
import {
  TwoContainer,
  ContentContainer,
  RightTwoImageAbove,
  RightTwoImageUnder,
  TwoRightImageContainer,
} from "./styled";

function TriangleRightTwoLayout() {
  return (
    <TwoContainer>
      <ContentContainer>
        <ParagraphTitle>ĐẶT LỊCH</ParagraphTitle>
        <Content>
          From the historic entrance to the future: touring the production lines
          is a unique journey to witness the birth of the Lamborghini sports
          cars. From the V12 line where the Aventador’s engine and frame come
          together for the first time and on to the V10 line where the Huracán
          is born. The guided tours that start from Mudetec make the tour an
          unforgettable experience in search of the company’s most amazing
          places. From the historic entrance to the future: touring the
          production lines is a unique journey to witness the birth of the
          Lamborghini sports cars. From the V12 line where the Aventador’s
          engine and frame come together for the first time and on to the V10
          line where the Huracán is born.
        </Content>
      </ContentContainer>
      <TwoRightImageContainer>
        <RightTwoImageAbove>
          <ObjectFitImage
            objectFit={"cover"}
            src="https://wrapstylevietnam.com/images/media/50.jpg"
          />
        </RightTwoImageAbove>
        <RightTwoImageUnder>
          <ObjectFitImage
            objectFit={"cover"}
            src="https://wrapstylevietnam.com/images/media/50.jpg"
          />
        </RightTwoImageUnder>
      </TwoRightImageContainer>
    </TwoContainer>
  );
}

export default TriangleRightTwoLayout;
