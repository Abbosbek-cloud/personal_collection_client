import React, { Fragment } from "react";
import SectionCreator from "../components/SectionCreator";
import CollectionWrapper from "../components/wrappers/CollectionWrapper";
import ItemWrapper from "../components/wrappers/ItemWrapper";
import Header from "../layouts/app/Header";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Main = () => {
  return (
    <Fragment>
      <Header />
      <SectionCreator title="Collection">
        <CollectionWrapper data={arr.slice(0, 8)} />
      </SectionCreator>
      <SectionCreator title="Items">
        <ItemWrapper data={arr.slice(0, 8)} />
      </SectionCreator>
    </Fragment>
  );
};

export default Main;
