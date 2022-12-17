import { IButtonProps } from "../../interfaces";
import { Container } from "./style";

const Button = ({
  children,
  onClick,
  type,
  disabled,
  buttonStyle,
}: IButtonProps) => {
  return (
    <Container
      buttonStyle={buttonStyle}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};

export { Button };
