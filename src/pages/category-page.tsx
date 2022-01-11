import React, { useEffect } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import Container from "elements/Container";
import { Banner } from "blocks/Banner";
import TabNav from "blocks/Tab-Nav";
import Button from "elements/Button";

interface CategoryPageProps {
  category?: string;
}

const cuts = ["BRISKET", "RIBS", "STEAK", "TENDERLOIN", "PRIME RIB"];

export const CategoryPage: React.FunctionComponent<CategoryPageProps> = (
  props
) => {
  const { category } = useParams<{ category?: string; subCategory?: string }>();

  useEffect(() => {
    const getCooks = async () => {
      const docRef = doc(db, "beef", "1");
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    };

    getCooks();
  }, []);

  const renderCutOptions = (cuts: Array<any>) => {
    if (cuts && cuts.length) {
      return cuts.map((cut: string) => {
        const cutRoute = cut.toLowerCase();
        return (
          <TabNav.Tab>
            <Button>{cut}</Button>
          </TabNav.Tab>
        );
      });
    }
  };

  return (
    <>
      <Banner>
        <Banner.Icon />
        <Banner.Title>Hello</Banner.Title>
      </Banner>
      <Container>
        <TabNav>{renderCutOptions(cuts)}</TabNav>
      </Container>
    </>
  );
};
