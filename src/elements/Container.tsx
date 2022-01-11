import React from "react";
import styled from "styled-components/macro";
import { breakpoints } from "constants/breakpoints";

interface Props {
  children?: React.ReactNode;
}

export const Container: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  flex: 1;
  max-width: 1170px;
  padding: 0px 22px;
  margin: 0 auto;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.tablet_sm}) {
    padding: 0px 32px;
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    padding: 0px 48px;
  }

  @media only screen and (min-width: ${breakpoints.container}) {
    padding: 0px 16px;
  }
`;

export default Container;
