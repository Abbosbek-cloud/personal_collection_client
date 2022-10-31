import { lazy } from "react";
import ProtectedRoutes from "./ProtectedRoutes";

const Signin = lazy(() => import("../pages/auth/Signin"));
const Signup = lazy(() => import("../pages/auth/Signup"));

// main page routes
const Main = lazy(() => import("../pages/Main"));
const Items = lazy(() => import("../pages/Items"));
const Collections = lazy(() => import("../pages/Collections"));

// one item and collections pages
const PerCollection = lazy(() => import("../pages/PerCollection"));
const PerItem = lazy(() => import("../pages/PerItem"));

// protected routes
const AdminDashboard = lazy(() => import("../pages/admin/Profile"));
const EditProfile = lazy(() => import("../pages/admin/EditProfil"));
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
const CreateCollection = lazy(() => import("../pages/user/CreateCollection"));
const CreateItem = lazy(() => import("../pages/user/CreateItem"));

const routes = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
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
    path: "/items/:id",
    element: <PerItem />,
  },
  // moderator pages
  {
    path: "/moderator",
    element: (
      <ProtectedRoutes>
        <ModeratorProfile />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/moderator/users",
    element: (
      <ProtectedRoutes>
        <ModeratorUsers />,
      </ProtectedRoutes>
    ),
  },
  {
    path: "/moderator/items",
    element: (
      <ProtectedRoutes>
        <ModeratorItems />,
      </ProtectedRoutes>
    ),
  },
  {
    path: "/moderator/collections",
    element: (
      <ProtectedRoutes>
        <ModeratorCollections />,
      </ProtectedRoutes>
    ),
  },
  {
    path: "/moderator/users/:id",
    element: <ProtectedRoutes>

      <ModeratorPerUser />,
    </ProtectedRoutes>
  },
  {
    path: "/moderator/items/:id",
    element: <ProtectedRoutes>

      <ModeratorPerItem />,
    </ProtectedRoutes>
  },
  {
    path: "/moderator/collections/:id",
    element: <ProtectedRoutes>

      <ModeratorPerCollection />,
    </ProtectedRoutes>
  },
  // admin pages
  {
    path: "/admin/dashboard",
    element: <ProtectedRoutes>

      <AdminDashboard />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/profile",
    element: <ProtectedRoutes>

      <EditProfile />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/users",
    element: <ProtectedRoutes>

      <AdminUsers />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/collections",
    element: <ProtectedRoutes>

      <AdminCollections />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/collections/:id",
    element: <ProtectedRoutes>

      <AdminPerCollection />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/items",
    element: <ProtectedRoutes>

      <AdminItems />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/users/:id",
    element: <ProtectedRoutes>

      <AdminPerUser />,
    </ProtectedRoutes>
  },
  {
    path: "/admin/items/:id",
    element: <ProtectedRoutes>

      <AdminPerItem />,
    </ProtectedRoutes>
  },
  // user routes
  {
    path: "/user/profile",
    element: <ProtectedRoutes>

      <UserProfile />,
    </ProtectedRoutes>
  },
  {
    path: "/user/collections",
    element: <ProtectedRoutes>

      <UserCollections />,
    </ProtectedRoutes>
  },
  {
    path: "/user/collections/create",
    element: <ProtectedRoutes>

      <CreateCollection />,
    </ProtectedRoutes>
  },
  {
    path: "/user/collections/:id",
    element: <ProtectedRoutes>

      <UserPerCollection />,
    </ProtectedRoutes>
  },
  {
    path: "/user/items",
    element: <ProtectedRoutes>

      <UserItems />,
    </ProtectedRoutes>
  },
  {
    path: "/user/items/create",
    element: <ProtectedRoutes>

      <CreateItem />,
    </ProtectedRoutes>
  },
  {
    path: "/user/items/:id",
    element: <ProtectedRoutes>

      <UserPerItem />,
    </ProtectedRoutes>
  },
];

export default routes;
