import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ItemTable from "../../components/ItemTable";
import UserSections from "../../components/UserSections";
import { getUserItems } from "../../requests/requests";

const Items = () => {
  const [data, setData] = React.useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handler = () => {
    navigate("/user/items/create");
  };

  const getData = async () => {
    const list = await getUserItems();
    console.log(list);
    setData(list);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <UserSections
      header={t("items")}
      button
      buttonText={t("create")}
      onClick={handler}
    >
      <ItemTable data={data} callBack={getData} />
    </UserSections>
  );
};

export default Items;
