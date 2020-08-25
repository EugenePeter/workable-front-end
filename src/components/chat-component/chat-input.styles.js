import styled, { createGlobalStyle, css } from "styled-components";

const subColor = "grey";
const mainColor = "black";
export const mainColorGreen = "#9000CF";

export const Modifiers = createGlobalStyle`
.full-with {
              width: 100%;
}
`;

// export const ChatInputField = styled.input`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 4.8rem;
//   align-items: center;
//   /* background-color: blue; */
//   border: none;
//   /* padding: 2rem 0 0 0; */
//   margin: 0%;
//   box-sizing: border-box !important;
//   background-color: lightblue;
// `;

const shrinkLabelStyles = css`
  top: 10px !important;
  font-size: 12px;
  color: ${mainColor};
`;

export const ChatInputField = styled.input`
  position: fixed;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 18px 10px 18px 26px;
  /* display: block; */
  min-width: 62%;
  height: 70px;
  border-radius: 4px;
  border: 0.1px solid ${subColor};
  box-sizing: border-box !important;
  margin-bottom: 2rem;
  bottom: 0;
  -webkit-box-shadow: inset 0px -19px 20px -25px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: inset 0px -19px 20px -25px rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px -19px 20px -25px rgba(0, 0, 0, 0.1);

  background-color: #fbfbfb;

  &:focus {
    outline: blue;
    border: solid 0.1px ${mainColorGreen};
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: green; */
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 80px;
  input[type="password"] {
    letter-spacing: 0.3em;
  }

  @media screen and (min-width: 992px) {
    max-width: 50rem;
  }
`;
