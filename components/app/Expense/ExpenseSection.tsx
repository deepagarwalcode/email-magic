import React from "react";
import SectionContainer from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Calculator from "./Calculator";
import FromLeft from "../MotionWrappers/FromLeft";
import FromRight from "../MotionWrappers/FromRight";

const ExpenseSection = () => {
  return (
    <SectionContainer className="max-w-7xl">
      <SectionTitle
        title="This Isn’t Just Annoying. It’s Expensive."
        subtitle="Every vague, late, or careless email costs you money. You just don’t see the bill."
        tag="It’s also Expensive"
      />
      <div className="flex gap-20">
        <FromLeft className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          <div className="flex-1 space-y-8">
            <div className="p-8 md:max-w-xl bg-gray-50/20 rounded-xl shadow-inner shadow-gray-200 border border-gray-100">
              <div className="text-4xl font-bold text-red-500 mb-3">$4,200</div>
              <p className="font-medium flex items-center gap-2">
                per employee, per year lost to poor communication{" "}
                <Link
                  href={""}
                  className="text-primary underline flex items-center"
                >
                  (
                  <span className="text-black flex items-center gap-1">
                    SHRM <ArrowUpRight size={16} />
                  </span>
                  )
                </Link>
              </p>
            </div>

            <div className="p-8 md:max-w-xl bg-gray-50/20 rounded-xl shadow-inner shadow-gray-200 border border-gray-100">
              <div className="text-4xl font-bold text-red-500 mb-3">
                $2,000,000
              </div>
              <p className="font-medium flex items-center gap-2">
                lost from one email{" "}
                <Link
                  href={""}
                  className="text-primary underline flex items-center"
                >
                  (
                  <span className="text-black flex items-center gap-1">
                    Inc. <ArrowUpRight size={16} />
                  </span>
                  )
                </Link>
              </p>
            </div>

            <div className="p-8 md:max-w-xl bg-gray-50/20 rounded-xl shadow-inner shadow-gray-200 border border-gray-100">
              <div className="text-4xl font-bold text-red-500 mb-3">82%</div>
              <p className="font-medium flex items-center gap-2">
                of people say they&apos;ve missed an important message{" "}
                <Link
                  href={""}
                  className="text-primary underline flex items-center"
                >
                  (
                  <span className="text-black flex items-center gap-1">
                    PRNewsWire <ArrowUpRight size={16} />
                  </span>
                  )
                </Link>
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <div className="space-y-6 text-xl font-medium">
                <p className="underline decoration-2 decoration-red-500">You&apos;re not just losing deals.</p>
                <p className="underline decoration-2 decoration-red-500 font-bold">You&apos;re bleeding trust and revenue—one email at a time.</p>
              </div>
            </div>
          </div>
        </FromLeft>
        <FromRight className="flex-1 flex items-center justify-center p-12 bg-primary/10 rounded-2xl" >
          <Calculator />
        </FromRight>
      </div>
    </SectionContainer>
  );
};

export default ExpenseSection;
