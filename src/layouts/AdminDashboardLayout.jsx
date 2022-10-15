import { Fragment, useState } from "react";
import DashboardNavbar from "./admin/DashboardNavbar";
import DashboardSidebar from "./admin/DashboardSidebar";
import { BodyWrapper, InnerWrapper } from "./styled/Components";

const AdminDashboardLayout = ({ children }) => {
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  // handle sidebar toggle for desktop device

  const handleCompactToggle = () => setSidebarCompact((state) => !state);
  // handle sidebar toggle in mobile device

  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => !state);

  return (
    <Fragment>
      <DashboardSidebar
        sidebarCompact={sidebarCompact}
        showMobileSideBar={showMobileSideBar}
        setSidebarCompact={handleCompactToggle}
        setShowMobileSideBar={handleMobileDrawerToggle}
      />

      <BodyWrapper compact={sidebarCompact ? 1 : 0}>
        <DashboardNavbar handleDrawerToggle={handleMobileDrawerToggle} />
        <InnerWrapper>{children}</InnerWrapper>
      </BodyWrapper>
    </Fragment>
  );
};

export default AdminDashboardLayout;
