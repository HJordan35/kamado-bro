import React from "react";
import styled from "styled-components/macro";
import { breakpoints } from "constants/breakpoints";
import { palette, fonts } from "constants/index";

interface Props {
  children?: React.ReactNode;
}

export const Heading: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return <HeadingOne>{children}</HeadingOne>;
};

const HeadingOne = styled.h1`
  font-family: ${fonts.fun};
  font-size: 56px;
  color: ${palette.primary};
`;

export default Heading;
