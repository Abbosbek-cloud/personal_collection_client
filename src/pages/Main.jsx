import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import SectionCreator from "../components/SectionCreator";
import CollectionWrapper from "../components/wrappers/CollectionWrapper";
import ItemWrapper from "../components/wrappers/ItemWrapper";
import Header from "../layouts/app/Header";
import { getLastItems, getLatestCollections } from "../requests/requests";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Main = () => {
  const { t } = useTranslation();
  const [items, setItems] = React.useState([]);
  const [collections, setCollections] = React.useState([]);
  const getData = async () => {
    const latesItems = await getLastItems();
    const collections = await getLatestCollections();
    console.log(collections);
    setItems(latesItems);
    setCollections(collections);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <Header />
      <SectionCreator title={t("collections")}>
        <CollectionWrapper data={collections} />
      </SectionCreator>
      <SectionCreator title="Items">
        <ItemWrapper data={items} />
      </SectionCreator>
    </Fragment>
  );
};

export default Main;
