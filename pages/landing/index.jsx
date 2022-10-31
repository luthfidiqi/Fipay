import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();

  const handleLogin = async () => {
    router.push("../../auth/login");
  };

  const handleSignup = async () => {
    router.push("../../auth/register");
  };
  return (
    <>
      <div>
        <Head>
          <title>Fipay</title>
        </Head>
        <div className="navbar">
          <div className="container">
            <img src="../image/landing/fipay-nav.png" />
            <div>
              <button
                type="button"
                className="btn-white-outline me-3"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                type="button"
                className="btn-white-solid"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="header-content container">
            <div className="header-text">
              <h1>Awesome App For Saving Time.</h1>
              <p>
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </p>
              <button
                type="button"
                className="btn-white-solid"
                onClick={handleSignup}
              >
                Try It Free
              </button>
            </div>

            <div className="header-img">
              <img src="../image/landing/phone-img.png" />
            </div>
          </div>
        </div>

        <div className="logo-client ">
          <div className="d-flex justify-content-between align-items-center container">
            <img src="../image/landing/microsoft.png" />
            <img src="../image/landing/dropbox.png" />
            <img src="../image/landing/hm.png" />
            <img src="../image/landing/airbnb.png" />
          </div>
        </div>

        <div className="about">
          <div className="about-content container">
            <h2>
              <span className="blue"> About </span> the Application.
            </h2>
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
            <div className="d-flex mt-5">
              <div className="about-card me-3">
                <img src="../image/landing/support.png" />
                <h3>24/7 Support</h3>
                <p>
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
              <div className="about-card me-3">
                <img src="../image/landing/support.png" />
                <h3>24/7 Support</h3>
                <p>
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
              <div className="about-card">
                <img src="../image/landing/support.png" />
                <h3>24/7 Support</h3>
                <p>
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="feature-content container">
            <div className="feature-img">
              <img src="../image/landing/phone-img.png" />
            </div>
            <div className="feature-text">
              <h2 className="sub-tittle">
                All The <span className="blue"> Great </span> Fipay Features.
              </h2>
              <div className="card-feature mb-4">
                <h4>
                  <span className="blue"> 1. </span> Small Fee
                </h4>
                <p>
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>
              <div className="card-feature mb-4">
                <h4>
                  <span className="blue"> 2. </span> Data Secured
                </h4>
                <p>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
              <div className="card-feature">
                <h4>
                  <span className="blue"> 3. </span> User Friendly
                </h4>
                <p>
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimoni">
          <div className="container">
            <h2 className="sub-tittle">
              What Users are <span className="blue"> Saying. </span>
            </h2>
            <p>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </p>
            <div className="testi-card">
              <img src="../image/landing/testi-user.png" />
              <h4>Luthfi Thufail Asiddiqi</h4>
              <h5>Designer</h5>
              <p>
                “This is the most outstanding app that I’ve ever try in my live,
                this app is such an amazing masterpiece and it’s suitable for
                you who is bussy with their bussiness and must transfer money to
                another person aut there. Just try this app and see the power!”
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <img className="mb-4" src="../image/landing/fipay-footer.png" />
            <p className="mb-4">
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
            <hr />
            <div className="d-flex justify-content-between mt-5">
              <p>2022 Fipay. All right reserved.</p>
              <div className="d-flex">
                <p className="me-3">+62 5637 8882 9901</p>
                <p>luthfidiqi@fipay.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
