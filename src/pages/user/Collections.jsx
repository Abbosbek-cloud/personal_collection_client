import React from "react";
import { useTranslation } from "react-i18next";
import UserSections from "../../components/UserSections";

const Collections = () => {
  const { t } = useTranslation();
  return <UserSections header={t("collections")}></UserSections>;
};

export default Collections;
