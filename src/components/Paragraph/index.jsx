import React from "react";
import { Content, ContentQuestion, TiTleCategory } from "../Typography";

export function Paragraph(props) {
  // <Paragraph title={} question={} content={}/>;
  // props.title
  // props.question
  // props.content
  return (
    <div>
      <TiTleCategory
        style={{ display: props.title === " " ? "none" : "block" }}
      >
        {props.title}
      </TiTleCategory>
      <ContentQuestion
        style={{ display: props.question === " " ? "none" : "block" }}
      >
        {props.question}
      </ContentQuestion>
      <Content style={{ display: props.content === " " ? "none" : "inline" }}>
        {props.content}
      </Content>
    </div>
  );
}
