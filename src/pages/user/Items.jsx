import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ItemTable from "../../components/ItemTable";
import UserSections from "../../components/UserSections";

const data = [
  {
    _id: "633c83923975699393d989fd",
    name: "Football",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c83923975699393d989fe",
      },
      {
        name: "goal",
        _id: "633c83923975699393d989ff",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c839e3975699393d98a03",
    name: "Valleybool",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c839e3975699393d98a04",
      },
      {
        name: "goal",
        _id: "633c839e3975699393d98a05",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c84a2dbb18dffc549ae7b",
    name: "Making",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c84a2dbb18dffc549ae7c",
      },
      {
        name: "goal",
        _id: "633c84a2dbb18dffc549ae7d",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c84acdbb18dffc549ae81",
    name: "Marketing",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c84acdbb18dffc549ae82",
      },
      {
        name: "goal",
        _id: "633c84acdbb18dffc549ae83",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c8829253bc3e7a8ab1dea",
    name: "numbersawdad",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c8829253bc3e7a8ab1deb",
      },
      {
        name: "goal",
        _id: "633c8829253bc3e7a8ab1dec",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c883c253bc3e7a8ab1df7",
    name: "Najot ta'limm",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c883c253bc3e7a8ab1df8",
      },
      {
        name: "goal",
        _id: "633c883c253bc3e7a8ab1df9",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c883c253bc3e7a8ab1df7",
    name: "Iqtisodiyot",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c883c253bc3e7a8ab1df8",
      },
      {
        name: "goal",
        _id: "633c883c253bc3e7a8ab1df9",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c883c253bc3e7a8ab1df7",
    name: "Targetinh",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c883c253bc3e7a8ab1df8",
      },
      {
        name: "goal",
        _id: "633c883c253bc3e7a8ab1df9",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c883c253bc3e7a8ab1df7",
    name: "Junadaw",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c883c253bc3e7a8ab1df8",
      },
      {
        name: "goal",
        _id: "633c883c253bc3e7a8ab1df9",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c883c253bc3e7a8ab1df7",
    name: "wqwdqpwko",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c883c253bc3e7a8ab1df8",
      },
      {
        name: "goal",
        _id: "633c883c253bc3e7a8ab1df9",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
  {
    _id: "633c883c253bc3e7a8ab1df7",
    name: "My name",
    collectionId: "Collection",
    user: {
      name: "Asilbek",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    tags: [
      {
        name: "football",
        _id: "633c883c253bc3e7a8ab1df8",
      },
      {
        name: "goal",
        _id: "633c883c253bc3e7a8ab1df9",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    __v: 0,
    likes: [],
  },
];

const Items = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handler = () => {
    navigate("/user/items/create");
  };
  return (
    <UserSections
      header={t("items")}
      button
      buttonText={t("create")}
      onClick={handler}
    >
      <ItemTable data={data} />
    </UserSections>
  );
};

export default Items;
