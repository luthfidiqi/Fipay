import React from "react";
import Head from "next/head";

export default function Pin() {
  return (
    <>
      <div>
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
            <div>
              <h2>
                Secure Your Account, Your Wallet, and Your Data With 6 Digits
                PIN That You Created Yourself.
              </h2>
              <p>
                Create 6 digits pin to secure all your money and your data in
                Zwallet app. Keep it secret and don’t tell anyone about your
                Zwallet account password and the PIN.
              </p>
              <form className="auth-form">
                <div className="d-flex pin_input">
                  <div className="input-pin mb-3 me-4">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput1"
                      placeholder="__"
                    />
                  </div>
                  <div className="input-pin mb-3 me-4">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="exampleInput2"
                      placeholder="__"
                    />
                  </div>
                  <div className="input-pin mb-3 me-4">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput1"
                      placeholder="__"
                    />
                  </div>
                  <div className="input-pin mb-3 me-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInput2"
                      placeholder="__"
                    />
                  </div>
                  <div className="input-pin mb-3 me-4">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput1"
                      placeholder="__"
                    />
                  </div>
                  <div className="input-pin mb-5">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInput2"
                      placeholder="__"
                    />
                  </div>
                </div>
                <button type="submit" className="auth-btn btn btn-primary">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
