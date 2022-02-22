import styled from "styled-components";

export const NormalImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ObjectFitImage = styled(NormalImage)`
  object-fit: ${(props) => props.objectFit};
  object-position: 50% 50%;
`;
