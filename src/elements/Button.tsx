import React from "react";
import styled from "styled-components/macro";
import { breakpoints, Palette, fonts } from "constants/index";

interface Props {
  children?: React.ReactNode;
}

export const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return <ButtonWrapper>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  border: none;
  background-color: transparent;
  color: ${Palette.primary};
  display: block;
  padding: 24px 32px;
  font-size: 16px;
  font-family: ${fonts.fun};
  font-style: none;
  text-decoration: none;
  cursor: pointer;
`;

export default Button;
