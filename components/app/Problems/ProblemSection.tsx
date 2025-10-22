import React from "react";
import SectionContainer from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";
import Comparison from "./Comparison";
import FromLeft from "../MotionWrappers/FromLeft";
import FromRight from "../MotionWrappers/FromRight";

const ProblemSection = () => {
  return (
    <SectionContainer>
      <SectionTitle
        title="You’re Losing Deals, Respect, and Revenue—and You Don’t Even Know It"
        subtitle="Most teams don’t have an email problem—they have a trust problem.
Even AI can’t fix that."
        tag="The Problem"
      />
      <div className="flex flex-col md:flex-row gap-20">
        <FromLeft className="max-w-3xl mx-auto py-8 space-y-6 text-xl text-black font-medium flex-1">
          <p>AI can make your emails sound more polished.</p>
          <p>But it can't make them sound like someone who cares.</p>
          <p>
            And it definitely can't build trust, follow up with urgency, or
            repair a damaged relationship.
          </p>

          <div className="space-y-3 mt-8">
            <ul className="list-disc space-y-3 marker:text-primary pl-6">
              <li>93% of professionals admit to email mistakes</li>
              <li>50% say their messages are misunderstood</li>
              <li>Only 7% feel confident their emails are clear</li>
              <li>
                And companies lose $4,200 per employee, per year to poor
                communication
              </li>
            </ul>
          </div>

          <p className="mt-8">
            The problem isn't writing—it's responsiveness, tone, and
            follow-through.
          </p>
          <p>If your emails feel vague, late, or careless… trust dies. Fast.</p>

          <p className="underline decoration-primary decoration-2">
            AI can fix grammar, <span className="font-bold">only people can build trust.</span>
          </p>
          
        </FromLeft>
        <FromRight className="flex-1 md:relative min-h-full bg-primary/10 flex items-center justify-center p-8 rounded-xl">
          <Comparison />
        </FromRight>
      </div>
    </SectionContainer>
  );
};

export default ProblemSection;
