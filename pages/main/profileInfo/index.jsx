import React from "react";
import Layout from "../../../component/Layout/main";
// import Link from "next/link";
import { useRouter } from "next/router";

export default function InputTransfer() {
  const router = useRouter();

  const handleBack = async () => {
    router.push("profile");
  };

  const handleInput = async () => {
    // router.push("transferConfirm");
  };
  return (
    <>
      <div>
        <Layout>
          <div className="transfer">
            <div className="menu-title-main d-flex justify-content-between align-items-center mb-3">
              <h3>Personal Information</h3>
            </div>
            <div>
              <p>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <form className="prof-info-form mt-4">
                <label className="mb-3 mt-3">First Name</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Type here..."
                />
                <label className="mb-3 mt-3">Last Name</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Type here..."
                />
                <label className="mb-3 mt-3">Verified E-mail</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Type here..."
                />
                <label className="mb-3 mt-3">Phone Number</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Type here..."
                />
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
                    <div>Update Profile</div>
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
