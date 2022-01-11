import { palette } from "constants/index";
import React from "react";
import styled from "styled-components/macro";
import Icon from "./Icon";
import Title from "./Title";

interface Props {
  children?: React.ReactNode;
}

export const Banner: BannerInterface = (props: Props) => {
  const { children } = props;

  return <BannerWrapper>{children}</BannerWrapper>;
};

const BannerWrapper = styled.div`
  width: 100%;
  padding: 24px;
  background-color: ${palette.background};
  text-align: center;
`;

interface BannerInterface extends React.FunctionComponent<Props> {
  Title?: any;
  Icon?: any;
}

Banner.Title = Title;
Banner.Icon = Icon;
