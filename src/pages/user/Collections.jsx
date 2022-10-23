import React from "react";
import { useTranslation } from "react-i18next";
import CollectionTable from "../../components/CollectionTable";
import UserSections from "../../components/UserSections";

const data = [
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "63396c19a8e448f4b7497f10",
    name: "Index",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    userId: "6338dfe88a3ff5bc722ab442",
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "63396c23a8e448f4b7497f12",
    name: "Collection2",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    userId: "6338dfe88a3ff5bc722ab442",
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "63396c28a8e448f4b7497f14",
    name: "Collection3",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    userId: "6338dfe88a3ff5bc722ab442",
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "633978c3f103fbc3555fb661",
    name: "Collection4",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    userId: "6338dfe88a3ff5bc722ab442",
    __v: 0,
  },
  {
    description: {
      uz: "Bu shuncaki collection",
      en: "This is just collection!",
    },
    topic: {
      uz: "Do'stlar!",
      en: "Friends",
    },
    _id: "633978c7f103fbc3555fb663",
    name: "Coll",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    userId: "6338dfe88a3ff5bc722ab442",
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "633c941603218bad72678991",
    name: "Collection4",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    userId: "6338dfe88a3ff5bc722ab442",
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "635437dec5aab6bac143dc41",
    name: "Collection4",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    user: {
      name: "Abror",
      avatar:
        "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    },
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "635437e6c5aab6bac143dc44",
    name: "Collection4",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    user: {
      name: "Abror",
      avatar:
        "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    },
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "635437e9c5aab6bac143dc47",
    name: "Collection4",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    user: {
      name: "Abror",
      avatar:
        "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    },
    __v: 0,
  },
  {
    description: {
      uz: "Bu do'stlarim bilan tushgan rasmlarimning to'plami!",
      en: "This is a collection of photos with my friends!",
    },
    topic: {
      uz: "Do'stlar davrasi!",
      en: "Friends collection",
    },
    _id: "635437ebc5aab6bac143dc4a",
    name: "Collection4",
    image:
      "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
    user: {
      name: "Abror",
      avatar:
        "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",
    },
    __v: 0,
  },
];

const Collections = () => {
  const { t } = useTranslation();
  return <UserSections header={t("collections")}></UserSections>;
};

export default Collections;
