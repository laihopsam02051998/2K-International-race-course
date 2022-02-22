import styled from "styled-components";

// start blockCenterLayout
export const HeaderTwoLeft = styled.div`
  position: absolute;
  width: 59%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 2;
  clip-path: polygon(100% 10%, 62% 100%, 0 100%, 0 53%, 20% 10%);
`;

export const HeaderTwoRight = styled.div`
  position: absolute;
  width: 59%;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 2;
  clip-path: polygon(100% 0, 100% 53%, 85% 90%, 0% 90%, 38% 0);
`;

export const LeftImageContainer = styled.div`
  width: 55%;
  clip-path: polygon(0 0, 100% 0%, 63% 100%, 0% 100%);
`;

export const ContainerLayout = styled.div`
  position: relative;
  margin: 1rem 0rem;
  width: 100%;
  height: 33.3rem;
  overflow: hidden;
`;

// end blockCenterLayout

export const TriangleLeftContainer = styled.div`
  display: flex;
  margin: 1rem 0rem;
  height: 25rem;
`;

export const ContentContainer = styled.div`
  padding: 0rem 4rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  width: 45%;
`;

export const TwoRightImageContainer = styled.div`
  width: 55%;
`;

export const RightTwoImageAbove = styled.div`
  clip-path: polygon(60% 0, 100% 0%, 100% 100%, 30.5% 100%);
`;

export const RightTwoImageUnder = styled.div`
  clip-path: polygon(100% 0, 100% 58%, 87% 100%, 0% 100%, 30% 0);
  margin: 0.5rem 0rem;
`;

export const LeftTwoImageAbove = styled.div`
  clip-path: polygon(20% 0, 100% 0, 63.5% 100%, 0 100%, 0 44%);
`;

export const LeftTwoImageUnder = styled.div`
  clip-path: polygon(0 0, 63% 0, 28% 100%, 0% 100%);
  margin: 0.5rem 0rem;
`;

export const TwoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0rem;
`;
