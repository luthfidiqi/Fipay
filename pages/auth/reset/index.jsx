import React, { useState } from "react";
import Head from "next/head";

import { useRouter } from "next/router";

export default function Reset() {
  const router = useRouter();

  const handleSend = async () => {
    router.push("/login");
  };

  const [form, setForm] = useState({
    email: "",
  });

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Head>
        <title>Fipay</title>
      </Head>
      <main className="auth d-flex">
        <div className="auth-left">
          <h1>Fipay</h1>
          <img src="../assets/image/auth-img.png" />
          <h2>App that Covering Banking Needs.</h2>
          <p className="zwalet-desc">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
        <div className="auth-right">
          <h2>
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </h2>
          <p>
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <form className="auth-form">
            <div className="auth-form-control mb-5 d-flex align-items-center justify-content-center">
              <img alt="mail" src="../assets/image/mail.png" className="me-3" />
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter your e-mail"
                value={form.email}
                onChange={handleChangeForm}
              />
            </div>

            <button
              type="submit"
              className={
                form.email
                  ? "auth-btn btn btn-primary"
                  : "auth-btn btn-disable btn btn-primary"
              }
              onClick={handleSend}
            >
              Confirm
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
