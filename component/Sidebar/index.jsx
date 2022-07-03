import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="sidebar me-4">
          <div className="sidebar-box">
            <div className="sidebar-top">
              <div className="sidebar-btn">
                <img src="../image/main/dashboard.svg" />
                <Link href="/dashboard">Dashboard</Link>
              </div>
              <div className="sidebar-btn">
                <img src="../image/main/transfer.svg" />
                <Link href="/transfer">Transfer</Link>
              </div>
              <div className="sidebar-btn">
                <img src="../image/main/topup.svg" />
                <Link href="/topup">Top Up</Link>
              </div>
              <div className="sidebar-btn">
                <img src="../image/main/profile.svg" />
                <Link href="/profile">Profile</Link>
              </div>
            </div>
            <div className="sidebar-btn">
              <img src="../image/main/logout.svg" />
              <Link href="/">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
