import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Head from "next/head";
// import Link from "next/link";
import axios from "../../../utils/axios";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // console.log("Submit Login");
      // Input = email password di siapkan
      // console.log(form);
      // Proses = memanggil axios
      const resultLogin = await axios.post("auth/login", form);
      // proses get data user by id
      //   const resultUser = await axios.get(`user/${resultLogin.data.data.id}`)
      const resultUser = [
        {
          id: 1,
          name: "Luthfi",
          role: "admin",
        },
      ];
      // console.log(resultLogin);
      // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
      setIsError(false);
      setMessage(resultLogin.data.msg);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      localStorage.setItem("dataUser", JSON.stringify(resultUser[0]));
      // navigate("../../main/home");
      router.push("../../main/dashboard");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };

  // TODO SHOW PASSWORD
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    showPass ? setShowPass(false) : setShowPass(true);
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
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h2>
          <p>
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
          <form
            className="auth-form"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
              <img alt="mail" src="../assets/image/mail.png" className="me-3" />
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your e-mail"
                value={form.email}
                onChange={handleChangeForm}
              />
            </div>
            <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
              <img alt="lock" src="../assets/image/lock.png" className="me-3" />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChangeForm}
              />
              <img
                alt="eye"
                src="../assets/image/eye.png"
                onClick={handleShowPass}
              />
            </div>

            {/* Alert */}
            {!message ? null : isError ? (
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            ) : (
              <div className="alert alert-primary" role="alert">
                {message}
              </div>
            )}

            <div className="forgot-pass d-flex justify-content-end mb-5">
              <Link className="forgot-pass" href="/auth/reset">
                Forgot Password ?
              </Link>
            </div>

            <button
              type="submit"
              className={
                form.email && form.password
                  ? "auth-btn btn btn-primary"
                  : "auth-btn btn-disable btn btn-primary"
              }
            >
              Login
            </button>
          </form>
          <div className="signup-link">
            <p>
              Don’t have an account? Let’s
              <span>
                <Link href="/auth/register"> Sign Up </Link>
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
