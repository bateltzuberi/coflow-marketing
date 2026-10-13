import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // The waitlist is gone: sign-up is open. Old links go to the Studio sign-up.
  async redirects() {
    return [
      { source: "/waitlist", destination: "https://studio.coflow.social/signup?lang=he", permanent: true },
      { source: "/he/waitlist", destination: "https://studio.coflow.social/signup?lang=he", permanent: true },
      { source: "/en/waitlist", destination: "https://studio.coflow.social/signup?lang=en", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
