import { useState } from "react";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        HEADER
        <main className="container flex-grow-1 d-flex flex-column">
          CONTENT
        </main>
        <footer
          className="mt-auto py-3 border-top text-center text-muted"
          style={{ width: "100%" }}
        >
          <p className="mb-0">
            © 2025 React Router Demo. Built with ❤️ and React Router.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
