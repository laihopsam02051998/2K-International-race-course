import styled from "styled-components";

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  text-align: ${(props) => props.textAlign};
`;

export const ContainerColumn = styled(ContainerFlex)`
  flex-direction: ${(props) => props.justifyContent};
`;
