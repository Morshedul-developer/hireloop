const BASE_URL = "https://hireloop.com";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/jobs", changeFrequency: "daily", priority: 0.9 },
  { path: "/companies", changeFrequency: "weekly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/ai", changeFrequency: "monthly", priority: 0.6 },
  { path: "/salary", changeFrequency: "monthly", priority: 0.6 },
  { path: "/career-library", changeFrequency: "weekly", priority: 0.6 },
  { path: "/help-center", changeFrequency: "monthly", priority: 0.5 },
  { path: "/newsroom", changeFrequency: "weekly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
