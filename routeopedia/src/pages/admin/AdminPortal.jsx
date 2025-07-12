import { Link } from "react-router-dom";

function AdminPortal() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">
        <i className="bi bi-person-gear me-2"></i>Admin Portal
      </h1>
      <div className="border rounded shadow p-4">
        <p>Welcome, !</p>
        <p>This page is only accessible to admins.</p>
        <div className="alert alert-danger mt-4">
          <h3>
            <i className="bi bi-tools me-2"></i>Admin Features
          </h3>
          <ul className="mb-0">
            <li>User Management</li>
            <li>System Settings</li>
            <li>Analytics Dashboard</li>
            <li>Content Moderation</li>
          </ul>
        </div>
        <h3 className="mt-4">Quick Actions:</h3>
        <Link to="/customer" className="btn btn-warning">
          Customer Portal <i className="bi bi-person-badge ms-1"></i> (try this
          as admin)
        </Link>
      </div>
    </div>
  );
}

export default AdminPortal;
