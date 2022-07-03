import React from "react";

// Assets IMG

function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar-main navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="../home">
              <img src="../image/fipay-blue.png" />
            </a>
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
                    href="../home"
                  ></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/"></a>
                </li>
              </ul>
              <a href="../profile_accountSet">
                <div class="d-flex">
                  <img src="../assets/image/user-nav.png" />
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
