import React from "react";
import SectionContainer from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";
import LearnCard, { LearnCardProps } from "./LearnCard";

const learnCards: LearnCardProps[] = [
  {
    title: "Master the CCA Framework",
    subtitle: "Write emails people actually want to read—and respond to.",
    items: [
      {
        bold: "Be clear.",
        light: "Learn how to strip the fluff so your message lands instantly.",
      },
      {
        bold: "Be concise.",
        light: "Get to the point—without sounding blunt or rushed.",
      },
      {
        bold: "Be actionable.",
        light:
          "Discover how to end every email with clarity, direction, and momentum.",
      },
    ],
  },
  {
    title: "Apply The Magic Method™",
    subtitle:
      "Build trust, earn respect, and create loyalty—one email at a time.",
    items: [
      {
        bold: "Trust starts with being reliable.",
        light:
          "Discover how to follow through in a way people notice—and remember.",
      },
      {
        bold: "Make it personal.",
        light:
          "Learn how to build relationships people remember—and want to keep.",
      },
      {
        bold: "Respond like it matters.",
        light:
          "Master the kind of urgency that shows you care without chasing.",
      },
      {
        bold: "Deliver value every time.",
        light: "See how small shifts in your wording lead to outsized impact.",
      },
    ],
  },
  {
    title: "Get Results Without Being Pushy",
    subtitle: "Move things forward with urgency and professionalism.",
    items: [
      {
        bold: "Follow up the right way.",
        light:
          "Learn when to nudge, how to do it, and what to say when they go silent.",
      },
      {
        bold: "Create momentum.",
        light: "Use timing and tone to keep deals—and decisions—moving.",
      },
      {
        bold: "Write with confidence.",
        light: "Handle complexity with clarity so no one's left guessing.",
      },
    ],
  },
];

const LearnSection = () => {
  return (
    <div className="bg-primary/5">
      <SectionContainer className="">
        <SectionTitle
          title="What You Will Learn"
          subtitle="This isn’t about email, it’s about becoming the person people trust, promote, and want to work with."
          tag="Outcomes"
        />
        <div className="flex flex-col gap-12">
          {learnCards.map((card, index) => (
            <LearnCard key={index} {...card} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default LearnSection;
