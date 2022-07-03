import React from "react";
import Layout from "../../../component/Layout/main";
import Link from "next/link";

import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const handleTransfer = async () => {
    router.push("../transfer");
  };

  const handleTopup = async () => {
    router.push("../topup");
  };
  return (
    <>
      <div>
        <Layout>
          <div className="dashboard">
            <div className="dash-top">
              <div>
                <h2>Balance</h2>
                <h1>Rp120.000</h1>
                <p>+62 813-9387-7946</p>
              </div>
              <div className="d-flex flex-column">
                <button type="button" className="mb-3" onClick={handleTransfer}>
                  Transfer
                </button>
                <button type="button" onClick={handleTopup}>
                  Top Up
                </button>
              </div>
            </div>
            <div className="dash-down mt-4">
              <div className="dash-down-left me-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <img src="../image/main/arrow-up.png" />
                    <p>Income</p>
                    <h3>Rp2.120.000</h3>
                  </div>
                  <div>
                    <img src="../image/main/arrow-down.png" />
                    <p>Expense</p>
                    <h3>Rp2.120.000</h3>
                  </div>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <img src="../image/main/graphic.png" />
                </div>
              </div>
              <div className="dash-down-right">
                <div className="menu-title-main d-flex justify-content-between align-items-center mb-4">
                  <h3>Transaction History</h3>
                  <Link href="/">See all</Link>
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
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
