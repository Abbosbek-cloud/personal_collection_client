import React, { Fragment } from "react";
import SectionCreator from "../components/SectionCreator";
import ItemWrapper from "../components/wrappers/ItemWrapper";
import Header from "../layouts/app/Header";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Items = () => {
  return (
    <Fragment>
      <Header />
      <SectionCreator title="Items">
        <ItemWrapper data={arr.slice(0, 8)} />
      </SectionCreator>
    </Fragment>
  );
};

export default Items;
