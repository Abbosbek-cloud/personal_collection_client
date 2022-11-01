export function getUserRoleRoute(role) {
  switch (role) {
    case "USER":
      return "/user";

    case "ADMIN":
      return "/admin";

    case "MODERATOR":
      return "/moderator";

    default:
      return "";
  }
}

export function getUserRoleRouteMenu(role) {
  switch (role) {
    case "USER":
      return "/user/profile";

    case "ADMIN":
      return "/admin/dashboard";

    case "MODERATOR":
      return "/moderator";

    default:
      return "";
  }
}
