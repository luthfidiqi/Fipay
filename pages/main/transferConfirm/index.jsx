import React from "react";
import Layout from "../../../component/Layout/main";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function TransferConfirm() {
  const router = useRouter();

  const handleBack = async () => {
    router.push("./transferInput");
  };

  const handleInput = async () => {
    router.push("./transferStatus");
  };
  return (
    <>
      <div>
        <Layout>
          <div className="transfer">
            <div className="menu-title-main d-flex justify-content-between align-items-center mb-4">
              <h3>Transfer To</h3>
            </div>
            <button className="transaction-user" onClick={handleBack}>
              <div className="user-box">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="me-3">
                    <img src="../image/main/user.png" />
                  </div>
                  <div>
                    <h4>Christine</h4>
                    <p>+62 813-8492-9994</p>
                  </div>
                </div>
              </div>
            </button>

            <div className="menu-title-main d-flex justify-content-between align-items-center mt-4 mb-3">
              <h3>Details</h3>
            </div>

            <div className="details-box">
              <div className="transfer-details">
                <p>Amount</p>
                <h4>Rp100.000</h4>
              </div>
            </div>

            <div className="details-box mt-3">
              <div className="transfer-details">
                <p>Balance Left</p>
                <h4>Rp20.000</h4>
              </div>
            </div>

            <div className="details-box mt-3">
              <div className="transfer-details">
                <p>Date & Time</p>
                <h4>May 11, 2020 - 12.20</h4>
              </div>
            </div>

            <div className="details-box mt-3">
              <div className="transfer-details">
                <p>Notes</p>
                <h4>For buying some groceries</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-5">
              <button type="button" className="grey-btn" onClick={handleBack}>
                <div>Back</div>
              </button>
              <button
                type="button"
                className="purple-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <div>Continue</div>
              </button>
            </div>

            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Enter PIN to Transfer
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      Enter your 6 digits PIN for confirmation to continue
                      transferring money.
                    </p>
                    <form className="auth-form">
                      <div className="d-flex pin_input">
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
                      {/* <button
                        type="submit"
                        className="auth-btn btn btn-primary"
                      >
                        Confirm
                      </button> */}
                    </form>
                  </div>
                  <div className="modal-footer">
                    {/* <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button> */}
                    <button
                      type="button"
                      className="purple-btn"
                      data-bs-dismiss="modal"
                      onClick={handleInput}
                    >
                      <div>Continue</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
