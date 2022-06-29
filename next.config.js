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
        source: "/profile/:id",
        destination: "/user/:id",
      },
    ];
  },
};

module.exports = nextConfig;
