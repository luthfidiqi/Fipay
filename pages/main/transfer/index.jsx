import React from "react";
import Layout from "../../../component/Layout/main";
import Link from "next/link";

export default function Transfer() {
  return (
    <>
      <div>
        <Layout>
          <div className="transfer">
            <div className="menu-title-main d-flex justify-content-between align-items-center mb-4">
              <h3>Search Receiver</h3>
            </div>
            <button className="transaction-user">
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
          </div>
        </Layout>
      </div>
    </>
  );
}
