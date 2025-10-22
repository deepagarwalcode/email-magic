import React from "react";
import { SectionTitle } from "./SectionTitle";
import SectionContainer from "./SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import FromRight from "./MotionWrappers/FromRight";
import FromLeft from "./MotionWrappers/FromLeft";

const targetAudienceData = [
  {
    title: "Working Professionals",
    subtitle:
      "Stand out, get promoted, and become the person leadership trusts.",
    points: [
      "Tired of being overlooked? Your emails are part of your brand.",
      "Learn how to sound sharp, clear, and on top of things—every time.",
      "Make follow-through, clarity, and care your competitive advantage.",
    ],
  },
  {
    title: "Sales & Customer-Facing Teams",
    subtitle: "Shorten sales cycles. Build loyalty. Protect the brand.",
    points: [
      "Most deals die in the inbox. Fix that.",
      "Earn trust faster with emails that show urgency and professionalism.",
      "Follow up without sounding pushy or robotic.",
    ],
  },
  {
    title: "Executives & Team Leaders",
    subtitle: "Raise the floor for your entire team.",
    points: [
      "Poor emails are costing you time, revenue, and reputation.",
      "This program teaches your team to write like professionals and respond like pros.",
      "Fewer dropped balls. Faster turnaround. Stronger brand.",
    ],
  },
  {
    title: "New Hires & Early-Career Talent",
    subtitle: "Accelerate your reputation. Make fewer mistakes.",
    points: [
      "Learn in days what takes others years to figure out.",
      "Build habits that make managers notice—and promote—you.",
      "Get the tone, timing, and clarity right from the start.",
    ],
  },
  {
    title: "Business Owners",
    subtitle: "Protect your brand in every inbox.",
    points: [
      "Every message your team sends either builds trust—or breaks it.",
      "Stop losing deals and damaging relationships because of bad communication.",
      "This is training that pays for itself in speed, trust, and results.",
    ],
  },
];

const TargetAudience = () => {
  return (
    <SectionContainer className="max-w-7xl">
      <SectionTitle
        title="Who This Is For"
        subtitle="If you use email to communicate, this course is for you."
        tag="Our ICP"
      />
      <div className="flex gap-20">
        <FromLeft className="flex-1">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {targetAudienceData.map((item, index) => (
              <AccordionItem className="py-2" value={`item-${index + 1}`}>
                <AccordionTrigger className="text-2xl font-bold text-primary">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-xl font-semibold">{item.subtitle}</p>
                  <ul className="text-lg list-disc space-y-3 marker:text-primary pl-6">
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FromLeft>

        <FromRight className="flex-1 md:relative min-h-full bg-primary/10 flex items-center justify-center p-8 rounded-xl">
          <p>AI Image placeholder</p>
        </FromRight>
      </div>
    </SectionContainer>
  );
};

export default TargetAudience;
