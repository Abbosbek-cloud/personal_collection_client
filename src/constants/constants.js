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

// moderator routes
const ModeratorProfile = lazy(() => import("../pages/moderator/Profile"));
const ModeratorUsers = lazy(() => import("../pages/moderator/Users"));
const ModeratorItems = lazy(() => import("../pages/moderator/Items"));
const ModeratorCollections = lazy(() =>
  import("../pages/moderator/Collections")
);

// user routes
const UserProfile = lazy(() => import("../pages/user/Profile"));
const UserItems = lazy(() => import("../pages/user/Items"));
const UserCollections = lazy(() => import("../pages/user/Collections"));
