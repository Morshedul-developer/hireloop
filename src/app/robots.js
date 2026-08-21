export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/brand-guideline"],
    },
    sitemap: "https://hireloop.com/sitemap.xml",
  };
}
