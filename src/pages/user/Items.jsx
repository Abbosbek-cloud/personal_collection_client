import React from "react";
import { useTranslation } from "react-i18next";
import UserSections from "../../components/UserSections";

import React, { useEffect } from "react";

const Items = () => {
  const { t } = useTranslation();

  return <UserSections header={t("items")}></UserSections>;
};

export default Items;
