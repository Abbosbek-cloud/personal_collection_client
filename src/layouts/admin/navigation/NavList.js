import duotone from "../../../components/icons/duotone";

export const navigations = [
  {
    type: "label",
    label: "Admin",
  },
  {
    name: "Dashboard",
    icon: duotone.Dashboard,
    path: "/admin/dashboard",
  },
  {
    name: "Users",
    icon: duotone.Customers,
    path: "/admin/users",
  },

  {
    name: "Collections",
    icon: duotone.Products,
    path: "/admin/collections",
  },
  {
    name: "Items",
    icon: duotone.ProjectChart,
    path: "/admin/items",
  },
  {
    name: "Profile edit",
    icon: duotone.AccountSetting,
    path: "/admin/profile",
  },
  {
    name: "Logout",
    icon: duotone.Session,
    path: "/",
  },
];
