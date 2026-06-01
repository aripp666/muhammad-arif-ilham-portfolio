"use client";

import { motion } from "framer-motion";
import { FaLaravel, FaReact, FaPhp, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si";

export default function FloatingTech() {
  const items = [
    { icon: <FaLaravel />, className: "left-[8%] top-[22%]" },
    { icon: <FaReact />, className: "right-[10%] top-[25%]" },
    { icon: <SiNextdotjs />, className: "left-[15%] bottom-[20%]" },
    { icon: <SiTailwindcss />, className: "right-[18%] bottom-[18%]" },
    { icon: <SiMysql />, className: "left-[45%] top-[14%]" },
    { icon: <SiMongodb />, className: "right-[42%] bottom-[12%]" },
    { icon: <FaPhp />, className: "left-[5%] bottom-[45%]" },
    { icon: <FaPython />, className: "right-[5%] bottom-[45%]" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden lg:block">
      {items.map((item, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${item.className} text-4xl text-cyan-300/20 blur-[0.2px]`}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
}