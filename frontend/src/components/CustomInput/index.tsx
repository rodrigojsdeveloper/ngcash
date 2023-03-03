import { InputContainer, Input, Label } from "./style";
import { InputProps } from "../../interfaces";
import { useState } from "react";

const CustomInput = ({ label, type, register, name }: InputProps) => {
  const [hasValue, setHasValue] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(event.target.value));
  };

  return (
    <InputContainer>
      <Input
        type={type}
        {...register(name)}
        autoComplete="off"
        onChange={handleInputChange}
        className={hasValue ? "has-value" : ""}
        required={true}
      />
      <Label className={hasValue ? "has-value" : ""}>{label}</Label>
    </InputContainer>
  );
};

export { CustomInput };
