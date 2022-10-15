import { lazy } from "react";

// main page routes
const Main = lazy(() => import("../pages/Main"));
const Items = lazy(() => import("../pages/Items"));
const Collections = lazy(() => import("../pages/Collections"));

// protected routes
const AdminDashboard = lazy(() => import("../pages/admin/Profile"));

const routes = [
  // protected routes
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/items",
    element: <Items />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
];

export default routes;
