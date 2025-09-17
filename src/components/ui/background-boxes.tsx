"use client";
import React from "react";
import { motion } from "framer-motion";

export function Boxes() {
  const rows = 12;
  const cols = 12;

  return (
    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px z-10">
      {[...Array(rows * cols)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-800/60"
          whileHover={{ scale: 1.5, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
      ))}
    </div>
  );
}
