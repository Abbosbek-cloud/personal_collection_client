import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CollectionTable from "../../components/CollectionTable";
import UserSections from "../../components/UserSections";
import { getUserCollections } from "../../requests/requests";

const Collections = () => {
  const [data, setData] = React.useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handler = () => {
    navigate("/user/collections/create");
  };

  const getCollectionData = async () => {
    const list = await getUserCollections();
    setData(list);
  };

  React.useEffect(() => {
    getCollectionData();
  }, []);

  return (
    <UserSections
      header={t("collections")}
      button
      buttonText={t("create")}
      onClick={handler}
    >
      <CollectionTable data={data} callBack={getCollectionData} />
    </UserSections>
  );
};

export default Collections;
