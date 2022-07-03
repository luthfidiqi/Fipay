import React, { useState } from "react";
import Layout from "../../../component/Layout/main";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfilePin() {
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
              <h3>Change PIN</h3>
            </div>
            <div className="mb-5">
              <div className="mb-5">
                <p>Type your new 6 digits security PIN to use in Fipay.</p>
              </div>
              <form className="auth-form d-flex justify-content-center mt-5">
                <div className="form-profile-pin">
                  <div className="d-flex pin_input form-profile-pin-input">
                    <div className="input-pin me-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInput1"
                        placeholder="__"
                      />
                    </div>
                    <div className="input-pin me-3">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        id="exampleInput2"
                        placeholder="__"
                      />
                    </div>
                    <div className="input-pin me-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInput1"
                        placeholder="__"
                      />
                    </div>
                    <div className="input-pin me-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInput2"
                        placeholder="__"
                      />
                    </div>
                    <div className="input-pin me-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInput1"
                        placeholder="__"
                      />
                    </div>
                    <div className="input-pin">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleInput2"
                        placeholder="__"
                      />
                    </div>
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
                      <div>Change PIN</div>
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
