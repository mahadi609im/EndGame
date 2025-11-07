'use client';

import { motion, useSpring, useScroll } from 'framer-motion';

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="border border-[#c313b7] bg-[#c313b7bb] shadow-[0_0_25px_#c313b73c] z-50"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
        }}
      />
      <Content />
    </>
  );
}

/**
 * ==============   Utils   ================
 */

function Content() {
  return <></>;
}
