function Contact() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 text-success">
        <i className="bi bi-telephone-fill me-2"></i>Contact
      </h1>
      <div className="border rounded shadow p-4">
        <p>Get in touch with us!</p>
        <div className="card mt-4">
          <div className="card-body">
            <h3 className="card-title">
              <i className="bi bi-info-circle me-2"></i>Contact Information
            </h3>
            <p>
              <i className="bi bi-envelope me-2"></i>Email: contact@demo.com
            </p>
            <p>
              <i className="bi bi-phone me-2"></i>Phone: (555) 123-4567
            </p>
            <p>
              <i className="bi bi-geo-alt me-2"></i>Address: 123 Demo Street,
              Example City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
