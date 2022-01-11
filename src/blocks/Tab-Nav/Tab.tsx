import React from "react";
import styled from "styled-components/macro";
import { palette } from "constants/index";

interface Props {
  children?: React.ReactNode;
}

export const Tab: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return <TabWrapper>{children}</TabWrapper>;
};

const TabWrapper = styled.li`
  border-right: 2px solid ${palette.secondary};
  &:last-child {
    border-right: none;
  }
`;

export default Tab;
