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
        <nav class="navbar-main navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <Link class="navbar-brand" href="../dashboard">
              <img src="../image/fipay-blue.png" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="../dashboard"
                  ></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/"></a>
                </li>
              </ul>
              <button
                type="button"
                className="btn-profile-user"
                onClick={handleProfile}
              >
                <div class="profile-user">
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
