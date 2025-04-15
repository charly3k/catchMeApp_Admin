import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "admin_auth"],
    },
    sitemap: "https://www.thecatchmeapp.co/sitemap.xml",
  };
}
