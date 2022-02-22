import styled from "styled-components";

// styled compornent

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 3px;
  border: none;
  color: white;
  width: 100%;
  padding: 1em 2em;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonStyle = styled.button`
  background: red;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 1em 2em;
`;

export const ButtonHover = styled.button`
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1;
  font-weight: 300;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  &:before {
    position: absolute;
    top: 0px;
    left: -30px;
    content: " ";
    background-color: ${(props) => props.backgroundColor};
    transform: skewX(40deg);
    z-index: -1;
    width: 0%;
    height: 200%;
    transition: 0.5s all ease;
  }

  &:hover {
    border: 1px solid ${(props) => props.backgroundColor};
    color: white;
    &:before {
      width: 200%;
      height: 110%;
      transition: 0.5s all ease;
    }
  }
`;

export const SquareButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0em;
  margin: 0rem 1rem;
`;
export const BlackButton = styled(Button)`
  width: 14rem;
  height: 2.2rem;
  padding: 0em;
`;
export const ContainerButton = styled.div`
  display: flex;
`;
