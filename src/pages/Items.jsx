import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/loader";
import SectionCreator from "../components/SectionCreator";
import ItemWrapper from "../components/wrappers/ItemWrapper";
import Header from "../layouts/app/Header";
import { getAllItems } from "../requests/requests";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Items = () => {
  const { t } = useTranslation();
  const [items, setItems] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    const list = await getAllItems(setLoading);
    setItems(list);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <Header />
      <SectionCreator title={t("items")}>
        {loading ? (
          <Loader size={40} height="50vh" />
        ) : (
          <ItemWrapper data={items} />
        )}
      </SectionCreator>
    </Fragment>
  );
};

export default Items;
