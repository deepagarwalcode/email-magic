"use client";
import React from "react";
import { motion } from "framer-motion";

const FromTransparent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.6, delay: 0.4 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FromTransparent;
