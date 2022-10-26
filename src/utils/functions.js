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
