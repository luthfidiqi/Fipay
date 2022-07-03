import React from "react";
import Layout from "../../../component/Layout/main";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function InputTransfer() {
  const router = useRouter();

  const handleBack = async () => {
    router.push("transfer");
  };

  const handleInput = async () => {
    router.push("transferConfirm");
  };
  return (
    <>
      <div>
        <Layout>
          <div className="transfer">
            <div className="menu-title-main d-flex justify-content-between align-items-center mb-4">
              <h3>Transfer Money</h3>
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
            <div className="mt-4 mb-5">
              <p>
                Type the amount you want to transfer and then press continue to
                the next steps.
              </p>
              <form className="topup-form mt-5">
                <div className="mb-3 d-flex justify-content-between">
                  <label>Amount Transfer</label>
                  <p>Rp120.000 Available</p>
                </div>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="0.00"
                />
                <label className="mb-3 mt-3">Add some notes</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Type notes here..."
                />
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="grey-btn mt-5"
                    onClick={handleBack}
                  >
                    <div>Back</div>
                  </button>
                  <button
                    type="button"
                    className="purple-btn mt-5"
                    onClick={handleInput}
                  >
                    <div>submit</div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
