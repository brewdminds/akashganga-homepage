import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akashganga Constructional Machines | VSI Crushers & Artificial Sand Making Machines" },
      { name: "description", content: "Akashganga manufactures patented VSI crushers, artificial sand making machines, jaw and cone crushers, and dust separation equipment in Satara, India." },
      { property: "og:title", content: "Akashganga Constructional Machines | VSI Crushers & Artificial Sand Making Machines" },
      { property: "og:description", content: "Patented VSI crushers and artificial sand making machines engineered and manufactured in Satara, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
