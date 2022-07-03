import React, { useState } from "react";
import axios from "../../../utils/axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    axios
      .post("/auth/register", form)
      .then((res) => {
        // console.log(res.data.data);
        toast.success(
          res.data.msg + ", check your email for activation accounts"
        );

        router.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // TODO SHOW PASSWORD
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    showPass ? setShowPass(false) : setShowPass(true);
  };

  const errMsg = (event, msg) => {
    event.preventDefault();
    toast.error(msg);
  };

  return (
    <>
      <ToastContainer />
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
        <div class="auth-right">
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
            onSubmit={
              !form.email || !form.password
                ? (event) => errMsg(event, "Enter Email & Password")
                : (event) => handleSubmit(event)
            }
            className="auth-form"
          >
            <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
              <img
                alt="mail"
                src="../assets/image/person.png"
                className="me-3"
              />
              <input
                name="firstName"
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                onChange={() => handleChangeText(event)}
              />
            </div>
            <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
              <img
                alt="mail"
                src="../assets/image/person.png"
                className="me-3"
              />
              <input
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                onChange={() => handleChangeText(event)}
              />
            </div>
            <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
              <img alt="mail" src="../assets/image/mail.png" className="me-3" />
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your e-mail"
                onChange={(event) => handleChangeText(event)}
              />
            </div>
            <div className="auth-form-control mb-5 d-flex align-items-center justify-content-center">
              <img alt="lock" src="../assets/image/lock.png" className="me-3" />
              <input
                name="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(event) => handleChangeText(event)}
                type={showPass ? "text" : "password"}
              />
              <img
                alt="eye"
                src="../assets/image/eye.png"
                onClick={handleShowPass}
              />
            </div>

            <button
              type="submit"
              className={
                form.email && form.password
                  ? "auth-btn btn btn-primary"
                  : "auth-btn btn-disable btn btn-primary"
              }
            >
              Sign Up
            </button>
          </form>
          <div className="signup-link">
            <p>
              Already have an account? Let’s
              <span>
                <Link href="/auth/login"> Login </Link>
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
