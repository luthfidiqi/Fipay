import React from "react";
import Layout from "../../../component/Layout/main";

import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const handleInfo = async () => {
    router.push("./profileInfo");
  };

  const handlePass = async () => {
    router.push("./profilePass");
  };

  const handlePin = async () => {
    router.push("./profilePin");
  };

  const handleLogout = async () => {
    router.push("/");
  };
  return (
    <>
      <div>
        <Layout>
          <div className="profile">
            <div>
              <img src="../image/main/profile-user.png" />
            </div>
            <div className="edit-btn mt-3 mb-4">
              <button type="button">
                <img src="../image/main/edit-icon.png" />{" "}
                <span className="ms-2"> Edit</span>
              </button>
            </div>
            <h1>Robert Chandler</h1>
            <p>+62 813-9387-7946</p>
            <div className="profile-menu mt-4">
              <button type="button" onClick={handleInfo}>
                <span> Personal Information </span>
                <img src="../image/main/arrow-left.png" />
              </button>
              <button type="button" className="mt-3" onClick={handlePass}>
                <span> Change Password </span>
                <img src="../image/main/arrow-left.png" />
              </button>
              <button type="button" className="mt-3" onClick={handlePin}>
                <span> Change PIN </span>
                <img src="../image/main/arrow-left.png" />
              </button>
              <button type="button" className="mt-3" onClick={handleLogout}>
                <span> Logout </span>
                {/* <img src="../image/main/arrow-left.png" /> */}
              </button>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}
