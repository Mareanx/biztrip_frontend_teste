import { Navigate } from "react-router-dom";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("ACCESS_TOKEN");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
