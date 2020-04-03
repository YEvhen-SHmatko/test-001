import React from "react";
import SectionServices from "./SectionServices/SectionServices";
import SectionManaging from "./SectionManaging/SectionManaging";
import SectionPricing from "./SectionPricing/SectionPricing";

export default function Main() {
  return (
    <main>
      <SectionServices />
      <SectionManaging />
      <SectionPricing />
    </main>
  );
}
