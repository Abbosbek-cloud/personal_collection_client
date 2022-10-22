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
const AdminUsers = lazy(() => import("../pages/admin/Users"));
const AdminItems = lazy(() => import("../pages/admin/Items"));
const AdminCollections = lazy(() => import("../pages/admin/Collections"));
const AdminPerUser = lazy(() => import("../pages/admin/PerUser"));
const AdminPerItem = lazy(() => import("../pages/admin/PerItem"));
const AdminPerCollection = lazy(() => import("../pages/admin/PerCollection"));

// moderator routes
const ModeratorProfile = lazy(() => import("../pages/moderator/Profile"));
const ModeratorUsers = lazy(() => import("../pages/moderator/Users"));
const ModeratorItems = lazy(() => import("../pages/moderator/Items"));
const ModeratorCollections = lazy(() =>
  import("../pages/moderator/Collections")
);
const ModeratorPerUser = lazy(() =>
  import("../pages/moderator/ModeratorPerUser")
);
const ModeratorPerItem = lazy(() =>
  import("../pages/moderator/ModeratorPerItem")
);
const ModeratorPerCollection = lazy(() =>
  import("../pages/moderator/ModeratorPerCollection")
);

// user routes
const UserProfile = lazy(() => import("../pages/user/Profile"));
const UserItems = lazy(() => import("../pages/user/Items"));
const UserCollections = lazy(() => import("../pages/user/Collections"));
const UserPerItem = lazy(() => import("../pages/user/PerItem"));
const UserPerCollection = lazy(() => import("../pages/user/PerCollection"));

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
  // moderator pages
  {
    path: "/moderator",
    element: <ModeratorProfile />,
  },
  {
    path: "/moderator/users",
    element: <ModeratorUsers />,
  },
  {
    path: "/moderator/items",
    element: <ModeratorItems />,
  },
  {
    path: "/moderator/collections",
    element: <ModeratorCollections />,
  },
  {
    path: "/moderator/users/:id",
    element: <ModeratorPerUser />,
  },
  {
    path: "/moderator/items/:id",
    element: <ModeratorPerItem />,
  },
  {
    path: "/moderator/collections/:id",
    element: <ModeratorPerCollection />,
  },
  // admin pages
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers />,
  },
  {
    path: "/admin/items",
    element: <AdminItems />,
  },
  {
    path: "/admin/collections",
    element: <AdminCollections />,
  },
  {
    path: "/admin/users/:id",
    element: <AdminPerUser />,
  },
  {
    path: "/admin/items/:id",
    element: <AdminPerItem />,
  },
  {
    path: "/admin/collections/:id",
    element: <AdminPerCollection />,
  },
  // user routes
  {
    path: "/user/profile",
    element: <UserProfile />,
  },
  {
    path: "/user/items",
    element: <UserItems />,
  },
  {
    path: "/user/collections",
    element: <UserCollections />,
  },
  {
    path: "/user/items/:id",
    element: <UserPerItem />,
  },
  {
    path: "/user/collections/:id",
    element: <UserPerCollection />,
  },
];

export default routes;
