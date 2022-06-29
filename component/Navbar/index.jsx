import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div>
      <Link href="/home">Home</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
