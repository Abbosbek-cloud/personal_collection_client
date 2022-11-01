import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/loader";
import SectionCreator from "../components/SectionCreator";
import CollectionWrapper from "../components/wrappers/CollectionWrapper";
import Header from "../layouts/app/Header";
import { getAllCollections } from "../requests/requests";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Collections = () => {
  const [collections, setCollections] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();
  const getAllData = async () => {
    const list = await getAllCollections(setLoading);
    setCollections(list);
  };

  React.useEffect(() => {
    getAllData();
  }, []);

  return (
    <Fragment>
      <Header />
      <SectionCreator title={t("collections")}>
        {loading ? (
          <Loader size={40} height="50vh" />
        ) : (
          <CollectionWrapper data={collections} />
        )}
      </SectionCreator>
    </Fragment>
  );
};

export default Collections;
