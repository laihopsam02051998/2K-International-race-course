import styled from "styled-components";

export const TiTle = styled.h4`
  font-size: 1.1rem;
  color: black;
  margin: 0px;
`;
export const TiTlePostLarge = styled.h3`
  font-size: 3rem;
  letter-spacing: 0.0064rem;
  color: black;
  text-transform: uppercase;
`;

export const TiTleProduct = styled(TiTlePostLarge)`
  font-size: 1.5rem;
`;

export const TiTleNews = styled(TiTlePostLarge)`
  font-size: 2rem;
`;

export const TiTleCategory = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: black;
  text-transform: uppercase;
`;

export const TiTlePage = styled.h1`
  font-size: 3.1rem;
  color: black;
  text-transform: uppercase;
  line-height: 3.8rem;
`;

export const Date = styled.p`
  font-size: 1rem;
  letter-spacing: 0.036rem;
`;

export const Path = styled.p`
  font-size: 1rem;
  color: black;
`;

// Dạng chữ cho nội dung
export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.78rem;
  letter-spacing: 0.036rem;
  font-weight: 300
  color: rgb(32, 32, 32)

`;

// Dạng câu hỏi cho bài viết
export const ContentQuestion = styled.em`
  font-size: 1rem;
  line-height: 1.78rem;
  letter-spacing: 0.03rem;
  color: rgb(32, 32, 32);
  font-weight: bold;
`;
