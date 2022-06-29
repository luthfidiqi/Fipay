import React, { useState } from "react";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";

// import NavbarSignIn from "../../../components/NavbarSignIn";

export default function Home() {
  return (
    <>
      <div className="home">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="../home">
              <img src="../assets/image/navbar-logo.png" />
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
        <div className="container">
          <img className="mb-5 mt-4" src="../assets/image/home-main.png" />
        </div>
        <footer className="d-flex">
          <div className="container d-flex footer-cont">
            <p>2020 Zwallet. All right reserved.</p>
            <div className="d-flex">
              <p className="me-3">+62 5637 8882 9901</p>
              <p>contact@zwallet.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
