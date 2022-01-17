import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import { breakpoints } from "constants/breakpoints";
import { Palette, fonts } from "constants/index";
import { shadowed } from "styles/mixins";
import Icon from "elements/Icon";

interface Props {
  children?: React.ReactNode;
}

const FloatingAction: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;
  const [time, setTime] = useState("0");
  const appRoot = document.getElementsByTagName("body")[0];

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return ReactDOM.createPortal(
    <FloatingActionOne>
      <Icon name="kamado" />
      <Timer>{time}</Timer>
    </FloatingActionOne>,
    appRoot
  );
};

const FloatingActionOne = styled.button`
  position: Fixed;
  bottom: 32px;
  right: 32px;
  height: 64px;
  width: 64px;
  border: none;
  background-color: ${Palette.primary};
  color: ${Palette.pure_white};
  border-radius: 50%;
  display: block;
  padding: 16px;
  font-size: 16px;
  font-family: ${fonts.fun};
  font-style: none;
  text-decoration: none;
  cursor: pointer;
  ${shadowed}
`;

const Timer = styled.div`
  font-family: var(--font-mono);
  position: absolute;
  left: 0;
  bottom: calc(50% - 20px);
  width: 120px;
  padding: 12px;
  border-radius: 12px;
  transform: translateX(-85%);
  background-color: ${Palette.primary};
`;

export default FloatingAction;
