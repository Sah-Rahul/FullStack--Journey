import { Navigate, Outlet } from "react-router-dom";

const isAuth = () => {
  return localStorage.getItem("token") !== null;
};

function ProtectedRoute() {
  return isAuth() ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
