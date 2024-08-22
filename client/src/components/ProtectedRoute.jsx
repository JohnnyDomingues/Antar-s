import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

function ProtectedRoute({ children }) {
  const { user } = useLogin();

  if (!user) {
    // Si l'utilisateur n'est pas connecté, rediriger vers la page de login
    return <Navigate to="/login" />;
  }

  // Si l'utilisateur est connecté, rendre le composant enfant
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
