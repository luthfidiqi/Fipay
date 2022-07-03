/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_BACKEND: "https://fazzpay.herokuapp.com",
    URL_BACKEND2: "https://jsonplaceholder.typicode.com",
  },
  async rewrites() {
    return [
      {
        source: "/landing",
        destination: "/landing",
      },
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/reset",
        destination: "/auth/reset",
      },
      {
        source: "/pin",
        destination: "/auth/pin",
      },
      {
        source: "/home",
        destination: "/main/home",
      },
      {
        source: "/history",
        destination: "/main/history",
      },
      {
        source: "/dashboard",
        destination: "/main/dashboard",
      },
      {
        source: "/transfer",
        destination: "/main/transfer",
      },
      {
        source: "/transferInput",
        destination: "/main/transferInput",
      },
      {
        source: "/transferConfirm",
        destination: "/main/transferConfirm",
      },
      {
        source: "/transferStatus",
        destination: "/main/transferStatus",
      },
      {
        source: "/topup",
        destination: "/main/topup",
      },
      {
        source: "/profile",
        destination: "/main/profile",
      },
      {
        source: "/profile/:id",
        destination: "/user/:id",
      },
    ];
  },
};

module.exports = nextConfig;
