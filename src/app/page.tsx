import React from "react";
import HomeClient from "./HomeClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "SK Power Cook Machinery | Commercial Food Processing Machinery & Solutions",
  description:
    "SK Power Cook Machinery provides commercial food processing solution machinery including Planetary Mixer Machine – Gas / Induction and Colino Mixer Machine – Gas / Induction for professional food preparation environments.",
  canonicalPath: "",
});

export default function HomePage() {
  return <HomeClient />;
}
