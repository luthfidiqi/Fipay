import React, { useState } from "react";
import Layout from "../../../component/Layout/main";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfilePass() {
  const router = useRouter();

  const handleBack = async () => {
    router.push("profile");
  };

  const handleInput = async () => {
    // router.push("transferConfirm");
  };

  // TODO SHOW PASSWORD
  const [showPass, setShowPass] = useState(false);

  const handleShowPass = () => {
    showPass ? setShowPass(false) : setShowPass(true);
  };
  return (
    <>
      <div>
        <Layout>
          <div className="transfer">
            <div className="menu-title-main d-flex justify-content-between align-items-center mb-3 mt-3">
              <h3>Change Password</h3>
            </div>
            <div className="mb-5">
              <div className="mb-5">
                <p>
                  You must enter your current password and then type your new
                  password twice.
                </p>
              </div>
              <form className="auth-form d-flex justify-content-center mt-5">
                <div className="form-profile-pass">
                  <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
                    <img
                      alt="lock"
                      src="../assets/image/lock.png"
                      className="me-3"
                    />
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      className="form-control"
                      placeholder="Current password"
                    />
                    <img
                      alt="eye"
                      src="../assets/image/eye.png"
                      onClick={handleShowPass}
                    />
                  </div>
                  <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
                    <img
                      alt="lock"
                      src="../assets/image/lock.png"
                      className="me-3"
                    />
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      className="form-control"
                      placeholder="New password"
                    />
                    <img
                      alt="eye"
                      src="../assets/image/eye.png"
                      onClick={handleShowPass}
                    />
                  </div>
                  <div className="auth-form-control mb-3 d-flex align-items-center justify-content-center">
                    <img
                      alt="lock"
                      src="../assets/image/lock.png"
                      className="me-3"
                    />
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      className="form-control"
                      placeholder="Repeat new password"
                    />
                    <img
                      alt="eye"
                      src="../assets/image/eye.png"
                      onClick={handleShowPass}
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-5">
                    <button
                      type="button"
                      className="grey-btn "
                      onClick={handleBack}
                    >
                      <div>Back</div>
                    </button>
                    <button
                      type="button"
                      className="purple-btn"
                      onClick={handleInput}
                    >
                      <div>Change Password</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
