import React from "react";
import Layout from "../../../component/Layout/main";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function TransferStatus() {
  const router = useRouter();

  const handleBack = async () => {
    router.push("./dashboard");
  };
  return (
    <>
      <div>
        <Layout>
          <div className="transfer">
            <div className="d-flex flex-column justify-content-center align-items-center mb-4">
              <div className="mb-3">
                <img src="../image/main/success-icon.png" />
              </div>
              <h5>Transfer Success</h5>
            </div>

            {/* <div className="d-flex flex-column justify-content-center align-items-center mb-4">
              <div className="mb-3">
                <img src="../image/main/failed-icon.png" />
              </div>
              <h5>Transfer Failed</h5>
              <p>
                We can’t transfer your money at the moment, we recommend you to
                check your internet connection and try again.
              </p>
            </div> */}

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

            <div className="menu-title-main d-flex justify-content-between align-items-center mt-5 mb-4">
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

            <div className="d-flex mt-5">
              <button type="button" className="purple-btn" onClick={handleBack}>
                <div>Back to Dashboard</div>
              </button>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
