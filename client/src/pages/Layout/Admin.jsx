import { Outlet, Navigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";
import "../../styles/styles-admin/Admin.css";

function Admin() {
  const { user } = useLogin();

  if (user && user.is_admin) {
    return (
      <div className="admin-container">
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/" replace />;
}

export default Admin;
