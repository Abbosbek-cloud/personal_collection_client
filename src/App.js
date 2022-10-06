import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import languages from "./i-18/resources";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AppLayout from "./layouts/AppLayout";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import routes from "./routes/appRoutes";

function App() {
  const content = useRoutes(routes);
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  if (pathname.includes("/admin/")) {
    return <AdminDashboardLayout>{content}</AdminDashboardLayout>;
  }

  if (pathname.includes("/user/dashboard")) {
    return <UserDashboardLayout>{content}</UserDashboardLayout>;
  }
  return <AppLayout>{content}</AppLayout>;
}

export default App;
