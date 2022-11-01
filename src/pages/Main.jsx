import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/loader";
import SectionCreator from "../components/SectionCreator";
import CollectionWrapper from "../components/wrappers/CollectionWrapper";
import ItemWrapper from "../components/wrappers/ItemWrapper";
import Header from "../layouts/app/Header";
import { getLastItems, getLatestCollections } from "../requests/requests";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Main = () => {
  const { t } = useTranslation();
  const [loadingItems, setloadingItems] = React.useState(false);
  const [loadingCollection, setloadingCollection] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [collections, setCollections] = React.useState([]);
  const getData = async () => {
    const latesItems = await getLastItems(setloadingItems);
    const collections = await getLatestCollections(setloadingCollection);
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
        {loadingCollection ? (
          <Loader size={40} height="40vh" />
        ) : (
          <CollectionWrapper data={collections} />
        )}
      </SectionCreator>
      <SectionCreator title="Items">
        {loadingItems ? (
          <Loader size={40} height="40vh" />
        ) : (
          <ItemWrapper data={items} />
        )}
      </SectionCreator>
    </Fragment>
  );
};

export default Main;
