import { ButtonSubmit } from "./styled";

export type IButtonProps = {
  size?: "small" | "large";
  children: string;
};

const Button = ({ size = "small", children }: IButtonProps) => (
  <ButtonSubmit size={size}>{children}</ButtonSubmit>
);
export default Button;
