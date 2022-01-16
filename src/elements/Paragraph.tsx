import React from "react";
import styled from "styled-components/macro";
import { breakpoints } from "constants/breakpoints";
import { PaletteKey, Palette, fonts, FontSize } from "constants/index";

enum Weight {
  "regular" = 400,
  "semi-bold" = 600,
  "bold" = 700,
}

interface Props {
  align?: string;
  children?: React.ReactNode;
  fontSize?: FontSize;
  fontWeight?: "regular" | "bold";
  color?: PaletteKey;
}

export const Heading: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    fontSize = FontSize.sm,
    color,
    align = "left",
    fontWeight = "regular",
  } = props;

  return (
    <ParagraphContent
      color={color}
      fontSize={fontSize}
      align={align}
      fontWeight={Weight[fontWeight]}
    >
      {children}
    </ParagraphContent>
  );
};

type ParagraphProps = {
  align?: string;
  fontSize?: FontSize;
  fontWeight?: Weight;
  color?: PaletteKey;
};

const ParagraphContent = styled.p<ParagraphProps>`
  font-family: ${fonts.mono};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => Palette[props?.color ?? "primary"]};
  text-align: ${(props) => props.align};
  font-weight: ${(props) => props.fontWeight};
`;

export default Heading;
