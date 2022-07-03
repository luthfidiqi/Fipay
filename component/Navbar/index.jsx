import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const handleProfile = async () => {
    router.push("../profile");
  };
  return (
    <>
      <div>
        <nav className="navbar-main navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" href="../dashboard">
              <img src="../image/fipay-blue.png" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="../dashboard"
                  ></a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  ></a>
                </li>
              </ul>
              <button
                type="button"
                className="btn-profile-user"
                onClick={handleProfile}
              >
                <div className="profile-user">
                  <div>
                    <img src="../image/nav-user.png" />
                  </div>
                  <div className="ms-3">
                    <h3>Robert Chandler</h3>
                    <p>+62 8139 3877 7946</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
