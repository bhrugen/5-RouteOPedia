import { Navigate } from "react-router-dom";
import { getAuthState, hasAnyRole } from "../Utility/authUtility";

function RoleBasedRoute({ children, allowedRoles }) {
  const { isAuthenticated, currentUser } = getAuthState();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!hasAnyRole(allowedRoles)) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Access Denied</h1>
        <p>You don't have permission to access this page.</p>
        <p>
          Your role: <strong>{currentUser?.role}</strong>
        </p>
        <p>
          Required Roles : <strong>{allowedRoles.join(", ")}</strong>
        </p>
        <button
          onClick={() => window.history.back()}
          className="btn btn-secondary"
        >
          Go back
        </button>
      </div>
    );
  }

  return children;
}

export default RoleBasedRoute;
