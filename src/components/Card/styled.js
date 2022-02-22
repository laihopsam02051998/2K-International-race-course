import styled from "styled-components";

export const NomalImage = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  ${"" /* display: block;  */}
  object-fit: cover;
  margin: ${(props) => props.margin};
  display: block;
`;
export const Container = styled.div`
  padding: 4rem 4rem;
`;
