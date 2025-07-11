function CustomerPortal() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">
        <i className="bi bi-person-badge-fill me-2"></i>Customer Portal
      </h1>
      <div className="border rounded shadow p-4">
        <p>Welcome, !</p>
        <p>This page is only accessible to customers.</p>
        <div className="alert alert-info mt-4">
          <h3>
            <i className="bi bi-bag-check me-2"></i>Customer Features
          </h3>
          <ul className="mb-0">
            <li>Order History</li>
            <li>Account Settings</li>
            <li>Support Tickets</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <h3 className="mt-4">Quick Actions:</h3>
        <a href="#" className="btn btn-warning">
          Admin Dashboard <i className="bi bi-person-gear ms-1"></i> (try this
          as customer)
        </a>
      </div>
    </div>
  );
}

export default CustomerPortal;
