/** @type {import('next').NextConfig} */

// Update basePath and assetPrefix to match your GitHub Pages repo name
// e.g. if deployed to github.com/user/my-portfolio → "/my-portfolio"
// For local dev or Vercel, leave them as empty strings ""
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
}

export default nextConfig
