import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

export default function MainLayout(props) {
  return (
    <>
      <div className="main-layout">
        <Head>
          <title>Fipay</title>
        </Head>
        <Navbar />
        <div className="content-main container d-flex mt-5 mb-5">
          <Sidebar />
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
