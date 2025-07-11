import { Navigate } from "react-router-dom";
import { getAuthState } from "../Utility/authUtility";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = getAuthState();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
