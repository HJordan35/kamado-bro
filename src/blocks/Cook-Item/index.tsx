import React from "react";
import styled from "styled-components/macro";
import { breakpoints, Palette, PaletteKey, FontSize } from "constants/index";
import { shadowed } from "styles/mixins";
import Icon from "elements/Icon";
import Paragraph from "elements/Paragraph";

interface Props {
  children?: React.ReactNode;
}

export const CookItem: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return (
    <CookItemWrapper>
      <CookImageWrapper>
        <CookImage src="/assets/temp-brisket.png" />
      </CookImageWrapper>
      <CookItemContent>
        <CookItemContentBox>
          <CookItemRating>
            <CookItemRatingStars>
              <li>
                <Icon name="star" height="18" width="18" />
              </li>
              <li>
                <Icon name="star" height="18" width="18" />
              </li>
              <li>
                <Icon name="star" height="18" width="18" />
              </li>
              <li>
                <Icon name="star" height="18" width="18" />
              </li>
              <li>
                <Icon name="star" height="18" width="18" />
              </li>
            </CookItemRatingStars>
          </CookItemRating>
          <Paragraph
            color={PaletteKey.primary}
            fontSize={FontSize.lg}
            align="center"
            fontWeight={"bold"}
          >
            First Brisket
          </Paragraph>
          <Paragraph
            color={PaletteKey.primary}
            fontSize={FontSize.xs}
            align="center"
            fontWeight={"regular"}
          >
            April 21 | 2020
          </Paragraph>

          <CookItemIndicatorList>
            <li>
              <CookItemIndicatorIcon>
                <Icon name="cow" height="24" width="24" />
              </CookItemIndicatorIcon>
              <Paragraph
                color={PaletteKey.primary}
                fontSize={FontSize.xs}
                align="center"
                fontWeight={"regular"}
              >
                13.1 lbs
              </Paragraph>
            </li>
            <li>
              <CookItemIndicatorIcon>
                <Icon name="fire" height="24" width="24" />
              </CookItemIndicatorIcon>
              <Paragraph
                color={PaletteKey.primary}
                fontSize={FontSize.xs}
                align="center"
                fontWeight={"regular"}
              >
                13.1 lbs
              </Paragraph>
            </li>
            <li>
              <CookItemIndicatorIcon>
                <Icon name="time" height="24" width="24" />
              </CookItemIndicatorIcon>
              <Paragraph
                color={PaletteKey.primary}
                fontSize={FontSize.xs}
                align="center"
                fontWeight={"regular"}
              >
                13.1 lbs
              </Paragraph>
            </li>
          </CookItemIndicatorList>
        </CookItemContentBox>
      </CookItemContent>
    </CookItemWrapper>
  );
};

const CookItemWrapper = styled.div`
  position: relative;
  display: flex;
  height: 360px;
  flex: 1;
`;

const CookImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
`;

const CookImage = styled.img`
  width: 100%;
  position: relative;
  z-index: 1;
  ${shadowed};
`;

const CookItemContent = styled.div`
  position: absolute;
  min-height: 126px;
  width: 100%;
  padding: 0 15px;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const CookItemContentBox = styled.div`
  position: relative;
  background-color: var(--pure-white);
  width: 100%;
  padding: 18px;
  border-radius: 4px;
  ${shadowed}
`;

const CookItemRating = styled.div`
  position: absolute;
  right: 8px;
  top: -24px;
  width: 140px;
  height: 34px;
  padding: 7px 14px;
  background-color: ${Palette.primary};
  ${shadowed}
`;

const CookItemRatingStars = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CookItemIndicatorList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const CookItemIndicatorIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default CookItem;
