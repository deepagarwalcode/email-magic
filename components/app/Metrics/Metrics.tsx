import React from "react";
import SectionContainer from "../SectionContainer";
import StatsSection from "./StatsSection";
import { SectionTitle } from "../SectionTitle";

const Metrics = () => {
  return (
    <div className="bg-primary">
      <SectionContainer className="max-w-7xl py-0 mt-0">
        <div className="py-16">
          <StatsSection />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Metrics;
