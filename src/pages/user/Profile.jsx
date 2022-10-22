import React from "react";
import { useTranslation } from "react-i18next";
import UserSections from "../../components/UserSections";

const Profile = ({ handleDrawer }) => {
  const { t } = useTranslation();

  return <UserSections header={t("profile")} />;
};

export default Profile;
