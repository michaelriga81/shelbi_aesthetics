import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
