import { palette } from "constants/index";
import React from "react";
import styled from "styled-components/macro";
import { Aperture } from "react-feather";

interface Props {
  children?: React.ReactNode;
}

export const Icon: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return (
    <IconWrapper>
      <div>
        <Aperture height={32} width={32} />
      </div>
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${palette.secondary};

  div {
    position: relative;
    height: 32px;
    width: 32px;

    &:before {
      position: absolute;
      background-color: ${palette.secondary};
      content: "";
      width: 56px;
      height: 2px;
      left: -60px;
      top: 50%;
    }
    &:after {
      position: absolute;
      background-color: ${palette.secondary};
      content: "";
      width: 56px;
      height: 2px;
      right: -60px;
      top: 50%;
    }
  }
`;

export default Icon;
