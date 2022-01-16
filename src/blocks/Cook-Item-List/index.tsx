import React from "react";
import styled from "styled-components/macro";
import { breakpoints } from "constants/index";
import Text from "elements/Paragraph";
import Container from "elements/Container";
import CookItem from "blocks/Cook-Item";

interface Props {
  children?: React.ReactNode;
}

export const CookItemList: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return (
    <Container>
      <ul>
        <ListSection>
          <ListSectionTitle>
            <Text align={"center"}>DECEMBER | 2022</Text>
          </ListSectionTitle>
          <SectionItems>
            <SectionItem>
              <CookItem />
            </SectionItem>
          </SectionItems>
        </ListSection>
      </ul>
    </Container>
  );
};

const ListSection = styled.li`
  position: relative;
  width: 100%;
`;

const ListSectionTitle = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;

  p {
    color: var(--tertiary-color);
  }

  &:after {
    content: "";
    height: 48px;
    width: 100%;
    position: absolute;
    top: 0;
    left: calc(-100% + 206px);
    background-color: var(--secondary-color);
    z-index: -1;
  }
`;

const SectionItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -16px 0 0;
  padding: 32px 0;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${breakpoints.tablet_sm}) {
    justify-content: space-between;
  }
`;

const SectionItem = styled.li`
  flex: 1;
  min-width: 300px;
  max-width: 330px;
  margin: 16px;
`;

export default CookItemList;
