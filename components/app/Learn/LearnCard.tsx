import React from "react";

export interface LearnCardProps {
  title: string;
  items: { bold: string; light: string }[];
  subtitle: string;
  imageUrl?: string;
  imageAlt?: string;
}

const LearnCard: React.FC<LearnCardProps> = ({
  title,
  items,
  subtitle,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="w-full h-auto bg-white rounded-2xl shadow-md flex pl-16 px-12 py-12 border-t border-gray-200 gap-20">
      {/* Left Content Section */}
      <div className="flex-[2] flex flex-col gap-5 py-8">
        {/* Title */}
        <h3 className="text-2xl font-bold text-black leading-tight">{title}</h3>
        <h4 className="text-xl font-bold text-primary">{subtitle}</h4>
        {/* List Items */}
        <div className="flex flex-col gap-4 mb-8">
          <ul className="list-disc space-y-3 marker:text-primary pl-6">
            {items.map((item, index) => (
              <li className="text-lg" key={index}>
                <strong>{item.bold}</strong> {item.light}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="flex items-center bg-primary border border-[#1566f1] text-white rounded-xl px-6 py-2.5 font-semibold text-base shadow hover:bg-[#2051a7] transition-colors group mt-auto w-max"
        >
          Get Started
        </a>
      </div>

      {/* Right Image Section */}

      {/* {imageUrl && (
        <div className="w-[440px] h-[320px] bg-gradient-to-br from-white to-blue-50 rounded-lg overflow-hidden flex-shrink-0">
          
        </div>
      )} */}

      <div className="flex-[2] md:relative min-h-full bg-primary/10 flex items-center justify-center p-8 rounded-xl">
        {/* <p>Image placeholder</p> */}
        <img
          src={
            "https://cdn.jsdelivr.net/gh/deepagarwalcode/images/tam-to-target/sdrhero.png"
          }
          className="w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LearnCard;
