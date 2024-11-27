import { StyledDiv, StyledText, StyledValue } from "../Card/StyledPrice.jsx";


// eslint-disable-next-line react/prop-types
export default function Price({ price }) {

  return (
    <StyledDiv>
      <StyledText>руб.</StyledText>
      <StyledValue>{price}</StyledValue>
      <StyledText end>/мес</StyledText>
    </StyledDiv>
  );
}
