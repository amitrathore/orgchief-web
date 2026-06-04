import type { NextConfig } from "next";
import path from "path";

// When deploying to a custom domain (orgchief.com), remove basePath and assetPrefix.
// While on GitHub Pages subdirectory (amitrathore.github.io/orgchief-web), these are required.
const isProd = process.env.NODE_ENV === "production";
const repoName = "orgchief-web";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
