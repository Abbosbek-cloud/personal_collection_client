import { lazy } from "react";

// main page routes
const Main = lazy(() => import("../pages/Main"));
const Items = lazy(() => import("../pages/Items"));
const Collections = lazy(() => import("../pages/Collections"));

// one item and collections pages
const PerCollection = lazy(() => import("../pages/PerCollection"));
const PerItem = lazy(() => import("../pages/PerItem"));

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
    path: "/collection/:id",
    element: <PerCollection />,
  },
  {
    path: "/item/:id",
    element: <PerItem />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
];

export default routes;
