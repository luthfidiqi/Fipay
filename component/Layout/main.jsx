import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";

export default function MainLayout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}
