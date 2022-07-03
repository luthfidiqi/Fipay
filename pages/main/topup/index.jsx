import React from "react";
import Layout from "../../../component/Layout/main";

export default function Topup() {
  return (
    <>
      <div>
        <Layout>
          <div className="topup">
            <div className="menu-title-main d-flex justify-content-between align-items-center">
              <h3>Topup</h3>
            </div>
            <p className="mt-2 mb-4">
              Enter the amount of money, and click submit
            </p>
            <form className="topup-form">
              <input type="email" className="form-control" />
              <button type="submit" className="purple-btn mt-4">
                submit
              </button>
            </form>
          </div>
        </Layout>
      </div>
    </>
  );
}
