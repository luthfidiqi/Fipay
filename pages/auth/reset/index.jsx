import React, { useState } from "react";
import axios from "../../../utils/axios";
import Cookies from "js-cookie";

import Head from "next/head";

export default function Reset() {

  return (
    <>
      <Head>
        <title>Z-Wallet | Login</title>
      </Head>
      <main className="auth d-flex">
        <div className="auth-left">
          <h1>Zwallet</h1>
          <img src="../assets/image/auth-img.png" />
          <h2>App that Covering Banking Needs.</h2>
          <p className="zwalet-desc">
          Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
          </p>
        </div>
        <div class="auth-right">
          <h2>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
          <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
            <form className="auth-form">
              <div className="auth-form-control mb-5 d-flex align-items-center justify-content-center">
                <img
                  alt="mail"
                  src="../assets/image/mail.png"
                  className="me-3"
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter your e-mail"
                />
              </div>

              <button
                type="submit"
                className="auth-btn btn btn-primary"
              >
                Confirm
              </button>
            </form>
        </div>
      </main>
    </>
  );
}
