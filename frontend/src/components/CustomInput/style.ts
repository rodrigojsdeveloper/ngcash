import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 421px;
  height: 55px;

  position: relative;
  margin-bottom: 15px;

  border-radius: var(--border-radius);
  border: 1px solid var(--color-gray);

  input:focus + label {
    transform: translate(-0.3rem, -1rem) scale(0.8);
    color: var(--color-black);
  }

  &:focus-within {
    border-width: 2px;
    border-color: var(--color-black);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 38px;

  font-weight: 500;
  font-size: 16px;

  padding: 0 12px;
  margin-top: 12px;
  transition: border-color 0.2s ease-in-out;

  &:placeholder-shown + label {
    transform: translate(0, 0) scale(1);
    color: var(--color-gray);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 5px;

  color: var(--color-gray);
  padding: 0 5px;

  font-size: 16px;
  pointer-events: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out, top 0.2s ease-in-out;

  &.has-value {
    transform: translate(-0.3rem, -1rem) scale(0.8);
    color: var(--color-gray);
  }
`;

export { InputContainer, Input, Label };
