"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedListProps = {
  children: ReactNode;
  stagger?: number;
};

export default function AnimatedList({
  children,
  stagger = 0.15,
}: AnimatedListProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
