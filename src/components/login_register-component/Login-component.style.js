import styled, { css } from "styled-components";

export const FormInner = styled.div`
  transform: ${({ clicked }) => (clicked ? "translateY(-100%)" : "null")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  width: 100%;
  margin: 0 auto;
  box-shadow: 15px 20px 70px -10px;
  background-color: white;
  box-sizing: border-box;
`;

const subColor = "grey";
const mainColor = "black";
export const mainColorGreen = "#3BC453";

const shrinkLabelStyles = css`
  top: 10px !important;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* background-color: green; */
  flex-shrink:1;
  flex-grow: 1;
  align-items: center
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

export const RadioInput = styled.input``;

export const Span = styled.span``;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: yellow; */
  width: 100% !important;

  cursor: pointer;
  position: relative;

  ${Span} {
    color: red;
    padding: 0.5rem 0.25rem;
  }

  .titleLabel {
    /* background-color: yellow; */
    text-align: center;
    width: 100%;
    height: 32px;
  }

  .titleRadioInputContainer {
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .titleCheckboxItems {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border: 0.5px solid black;
    box-sizing: border-box;
    width: 33.33%;
    height: 70px;
    padding-left: 26px;

    label {
      margin-left: 26px;
    }
    &__Mr {
      background-color: pink;
    }
    &__Mrs {
      background-color: pink;
    }
    &__Miss {
      background-color: pink;
    }
    /* background-color: green; */
  }

  .titleCheckboxItems:nth-of-type(2) {
    border-right: none;
    border-left: none;
  }

  ${RadioInput} {
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #34495e;
    border-radius: 4px;
    outline: none;
    transition-duration: 0.2s;
    background-color: whitesmoke;
    cursor: pointer;
    user-select: none;
  }

  ${RadioInput}:checked {
    border: 2px solid #41b883;
    background-color: #3bc453;
    outline: none;
    transform: scale(1.4);
  }
`;

export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
  /* background-color: blue; */
`;

export const FormInput = styled.input`
  position: relative;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 18px 10px 18px 26px;
  /* display: block; */
  width: 100%;
  height: 70px;
  border: none;
  /* border-radius: 4px; */
  border-bottom: 1px solid ${subColor};
  /* margin: 15px 0 15px 0; */

  box-sizing: border-box;

  &:focus {
    outline: blue;
    border: solid 2px ${mainColorGreen};
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

const ha = (props) => {
  if (props.value) {
    return shrinkLabelStyles;
  } else {
    return;
  }
};

export const FormInputSpan = styled.label`
  display: ${({ label, value }) => (label && value ? "none" : "")};
  display: flex;
  flex-direction: column;
  color: ${subColor};
  /* background-color: red; */
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 26px;
  top: 30px;
  /* transform: translateY(200px) */
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }

  ${ha}
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin-top: 8%;
  /* margin-bottom: 8%; */
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  align-self: flex-end;
  cursor: pointer;

  -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
  box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
`;
