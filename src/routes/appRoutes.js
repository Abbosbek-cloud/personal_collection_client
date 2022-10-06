import { lazy } from "react";

const AdminDashboard = lazy(() => import("../pages/admin/Profile"));

const routes = [
  // protected routes
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
];

export default routes;
