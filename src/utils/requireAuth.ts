import { isAuthenticated } from "../services/auth";

export function requireAuth(action: () => void) {
  if (!isAuthenticated()) {
    window.location.href = "/login";
    return;
  }
  action();
}