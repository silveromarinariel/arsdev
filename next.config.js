module.exports = {
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  reactStrictMode: true,
  experimental: { css: true },
  images: {
    domains: ["arsdev.ar"],
    loader: "imgix",
    path: "",
  },
};
