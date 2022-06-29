import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout/main";

const imageProfile = {
  width: "150px",
  backgroundColor: "red",
};

export default function HandleImage() {
  return (
    <Layout title="Handle Image">
      <div className="container text-center">
        <h1>Handle Image</h1>
        <hr />
        <h4>without next image</h4>
        <img src="../vercel.svg" alt="img image" style={imageProfile} />
        <hr />
        <h4>with next image</h4>
        <div style={imageProfile}>
          <Image src="/vercel.svg" alt="img image" width={100} height={200} />
        </div>
        <hr />
        <Image
          src="/vercel.svg"
          alt="img image"
          width={100}
          height={200}
          style={imageProfile}
        />
      </div>
    </Layout>
  );
}
