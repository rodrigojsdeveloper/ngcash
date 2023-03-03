import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 421px;
  height: 60px;

  position: relative;
  margin-bottom: 10px;

  input:focus + label {
    transform: translate(-0.5rem, -1.6rem) scale(0.8);
    color: var(--color-black);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;

  font-weight: 500;
  font-size: 15px;

  padding: 18px;
  border: 1px solid var(--color-gray);
  outline: none;

  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-width: 2px;
    border-color: var(--color-black);
  }

  &:placeholder-shown + label {
    transform: translate(0, 0) scale(1);
    color: var(--color-gray);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 10px;

  font-size: 16px;
  color: var(--color-gray);
  background-color: var(--color-white);

  padding: 0 5px;
  pointer-events: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out, top 0.2s ease-in-out;

  &.has-value {
    transform: translate(-0.5rem, -1.6rem) scale(0.8);
    color: var(--color-gray);
  }
`;

export { InputContainer, Input, Label };
