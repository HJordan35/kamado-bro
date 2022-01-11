import React from "react";
import styled from "styled-components/macro";
import Tab from "./Tab";

interface Props {
  children?: React.ReactNode;
}

export const TabNav: TabInterface = (props: Props) => {
  const { children } = props;

  return (
    <TabNavWrapper>
      <ul>{children}</ul>
    </TabNavWrapper>
  );
};

const TabNavWrapper = styled.nav`
  display: block;
  position: relative;
  overflow-x: scroll;
  width: 100%;
  height: 120px;

  > ul {
    padding: 16px 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    min-width: 100%;
    justify-content: center;
  }
`;

interface TabInterface extends React.FunctionComponent<Props> {
  Tab?: any;
}

TabNav.Tab = Tab;

export default TabNav;
