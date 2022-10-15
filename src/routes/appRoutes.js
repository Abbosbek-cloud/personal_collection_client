import { lazy } from "react";

// main page routes
const Main = lazy(() => import("../pages/Main"));

// protected routes
const AdminDashboard = lazy(() => import("../pages/admin/Profile"));

const routes = [
  // protected routes
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
];

export default routes;
