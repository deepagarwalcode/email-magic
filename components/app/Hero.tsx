import React from "react";
import { DotPattern } from "../magicui/dot-pattern";
import { Spotlight } from "../ui/spotlight";
import FromRight from "./MotionWrappers/FromRight";
import FromLeft from "./MotionWrappers/FromLeft";

const Hero = () => {
  return (
    <section className="w-full relative flex md:min-h-screen justify-center pt-[8vh] items-center bg-white mx-auto">
      <DotPattern
        glow={true}
        className={
          "[mask-image:radial-gradient(70vw_60vh_ellipse_at_center,white,transparent)]"
        }
      />
      <Spotlight
        className="-top-40  left-[-20vw] rotate-12 md:left-[-36vw] md:-top-40 h-[300%] md:h-[60%] z-[1] opacity-60"
        fill="#306de2"
      />
      <Spotlight
        className="-top-40  left-[-20vw] md:left-[-48vw] md:-top-40 h-[300%] md:h-[75%] z-[1] opacity-60"
        fill="#306de2"
      />
      <div className="flex max-w-6xl gap-16 items-center">
        {/* Left: Text Content */}
        <FromLeft className="flex flex-col justify-center gap-8 my-auto">
          <div className="flex flex-col gap-4">
            <span className="text-primary text-base font-semibold">
              Grow Easily
            </span>
            <h1 className="text-5xl font-bold leading-tight text-black">
              Professional Email Training{" "}
              <span className="text-primary">That Grows Revenue</span>
            </h1>
            <p className="text-base text-black">
              Micro-learning at its best, this fast-paced, personalized and
              gamified training teaches employees&nbsp;how to
              send&nbsp;professional email
            </p>
          </div>
          <div className="mt-0">
            <button className="bg-primary text-white rounded-xl px-8 py-3 text-lg font-semibold shadow hover:bg-[#2051a7] transition-colors">
              Sign Up Now
            </button>
          </div>
        </FromLeft>
        {/* Right: Image/Visual */}
        <FromRight className="relative w-[480px] h-[480px] ml-auto flex items-center justify-center">
          {/* Placeholder for image */}
          <div className="w-[500px] h-[500px] bg-transparent rounded-2xl flex items-center justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/deepagarwalcode/images/tam-to-target/email.png"
              alt=""
            />
          </div>
        </FromRight>
      </div>
    </section>
  );
};

export default Hero;
