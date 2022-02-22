import React from "react";
import { Content, ParagraphTitle } from "../Paragraph/styled";
import BlockCenterLayout from "./BlockCenterLayout";

import { ContainerLayout, ContentContainer } from "./styled";

function BlockLayout(props) {
  return (
    <div style={{ display: props.status === null ? "none" : "block" }}>
      <ContentContainer>
        <ParagraphTitle>TOUR OF THE PRODUCTION LINES</ParagraphTitle>
        <Content>
          From the historic entrance to the future: touring the production lines
          is a unique journey to witness the birth of the Lamborghini sports
          cars. From the V12 line where the Aventador’s engine and frame come
          together for the first time and on to the V10 line where the Huracán
          is born. The guided tours that start from Mudetec make the tour an
          unforgettable experience in search of the company’s most amazing
          places.
        </Content>
      </ContentContainer>
      <ContainerLayout>
        <BlockCenterLayout
          image1={props.images.image1}
          image2={props.images.image2}
        />
      </ContainerLayout>
      <ContentContainer>
        <ParagraphTitle>TOUR OF THE PRODUCTION LINES</ParagraphTitle>
        <Content>
          From the historic entrance to the future: touring the production lines
          is a unique journey to witness the birth of the Lamborghini sports
          cars. From the V12 line where the Aventador’s engine and frame come
          together for the first time and on to the V10 line where the Huracán
          is born. The guided tours that start from Mudetec make the tour an
          unforgettable experience in search of the company’s most amazing
          places.
        </Content>
      </ContentContainer>
    </div>
  );
}
export default BlockLayout;
