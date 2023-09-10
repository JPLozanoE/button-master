import styled from "styled-components"

const StyledButton = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
//   background: ${props => props.$primary ? "#BF4F74" : "white"};
//   color: ${props => props.$primary ? "white" : "#BF4F74"};
background: #E0E0E0;
box-shadow: 0px 2px 3px 0px #33333333;
color:#3F3F3F;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export const Button = () => {
  return (
    <StyledButton>Button</StyledButton>
  )
}
