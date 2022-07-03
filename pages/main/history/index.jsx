import React from "react";
import Layout from "../../../component/Layout/main";

export default function History() {
  return (
    <>
      <div>
        <Layout>
          <div className="history">
            <div className="menu-title-main d-flex justify-content-between align-items-center mb-4">
              <h3>Transaction History</h3>
            </div>
            <div className="user-box">
              <div className="d-flex justify-content-between align-items-center">
                <div className="me-3">
                  <img src="../image/main/user.png" />
                </div>
                <div>
                  <h4>Christine</h4>
                  <p>Accept</p>
                </div>
              </div>
              <h5>+Rp150.000</h5>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
