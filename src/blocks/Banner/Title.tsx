import React from "react";
import Container from "elements/Container";
import Heading from "elements/Heading";

interface Props {
  children?: React.ReactNode;
}

export const Title: React.FunctionComponent<Props> = (props: Props) => {
  const { children } = props;

  return (
    <Container>
      <Heading>{children}</Heading>
    </Container>
  );
};

export default Title;
