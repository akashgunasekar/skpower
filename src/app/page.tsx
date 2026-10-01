import React from "react";
import HomeClient from "./HomeClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "SK Power Cook Machinery | Commercial Mixing Machines",
  description:
    "SK Power Cook Machinery provides professional commercial mixing machines including Planetary Mixer Machine – Gas and Colino Mixer Machine for professional food preparation environments.",
  canonicalPath: "",
});

export default function HomePage() {
  return <HomeClient />;
}
