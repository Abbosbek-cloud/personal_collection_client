import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CollectionTable from "../../components/CollectionTable";
import UserSections from "../../components/UserSections";
import { getUserCollections } from "../../requests/requests";

// const data = [
//   {
//     description: {
//       uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
//       en: "This is a collection of photos with my friends!",
//     },
//     _id: "635ae53f43b37e1f694ad139",
//     name: "Ikkinchisai",
//     topic: {
//       name: {
//         uz: "Futbol",
//         en: "Football",
//       },
//       _id: "635ae1f895509b9105992bdf",
//     },
//     image:
//       "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
//     user: {
//       _id: "635adde2553822de54f94f31",
//       name: "Abek01",
//       email: "aaa@gmail.com",
//       avatar:
//         "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
//     },
//     __v: 0,
//   },
//   {
//     description: {
//       uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
//       en: "This is a collection of photos with my friends!",
//     },
//     _id: "635ae7d04d80206f0867fe05",
//     name: "Ikkinchisai",
//     topic: {
//       name: {
//         uz: "Futbol",
//         en: "Football",
//       },
//       _id: "635ae1f895509b9105992bdf",
//     },
//     image:
//       "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
//     user: {
//       _id: "635adde2553822de54f94f31",
//       name: "Abek01",
//       email: "aaa@gmail.com",
//       avatar:
//         "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
//     },
//     __v: 0,
//   },
//   {
//     description: {
//       uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
//       en: "This is a collection of photos with my friends!",
//     },
//     _id: "635ae7d84d80206f0867fe07",
//     name: "Ikkinchisai",
//     topic: {
//       name: {
//         uz: "Futbol",
//         en: "Football",
//       },
//       _id: "635ae1f895509b9105992bdf",
//     },
//     image:
//       "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
//     user: {
//       _id: "635adde2553822de54f94f31",
//       name: "Abek01",
//       email: "aaa@gmail.com",
//       avatar:
//         "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
//     },
//     __v: 0,
//   },
// ];

const Collections = () => {
  const [data, setData] = React.useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handler = () => {
    navigate("/user/collections/create");
  };

  React.useEffect(() => {
    getUserCollections(setData);
  }, []);
  return (
    <UserSections
      header={t("collections")}
      button
      buttonText={t("create")}
      onClick={handler}
    >
      <CollectionTable data={data} />
    </UserSections>
  );
};

export default Collections;
