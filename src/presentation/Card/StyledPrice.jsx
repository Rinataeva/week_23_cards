import { styled } from "styled-components";

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 0px;
`;

export const StyledText = styled.span`
  font-size: 18px;
  color: #fafafa;
  ${(props) => props.end && "align-self: end;"}
`;

export const StyledValue = styled.h1`
  font-size: 45px;
  color: #fafafa;
  font-weight: bold;
  margin-bottom: 0px;
`;
