import React from "react";
import SectionContainer from "./SectionContainer";

// You can change these logo URLs as needed
const logoUrls = [
  "https://img.logo.dev/google.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/slack.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/samsung.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/facebook.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/hp.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/dell.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/snapchat.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  "https://img.logo.dev/instagram.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  // "https://img.logo.dev/google.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  // "https://img.logo.dev/slack.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  // "https://img.logo.dev/samsung.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
  // "https://img.logo.dev/facebook.com?token=pk_QZta1Q6iTfyTrUYhjX6x_w",
];

const Logos = () => {
  return (
    <SectionContainer className="w-full max-w-6xl mx-auto flex flex-col items-center pt-0">
      <span className="block text-black text-base font-medium mb-3  mx-auto text-center">
        Trusted By
      </span>
      <div
        className="w-full bg-white border-t border-gray-100 rounded-xl shadow-sm flex items-center justify-between px-6 py-4"
        style={{ boxShadow: "0 3px 6px 0 rgba(0,0,0,0.06)" }}
      >
        {logoUrls.map((url, idx) => (
          <React.Fragment key={url}>
            <div className="flex items-center justify-center w-12 h-12">
              <img
                src={url}
                alt={`Logo ${idx + 1}`}
                className="object-contain w-12 h-12"
                draggable={false}
              />
            </div>
            {idx < logoUrls.length - 1 && (
              <div className="h-12 w-px bg-black/5 mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Logos;
