"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });
export default function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-background via-background to-accent/5" />
    <div className="absolute inset-0 hidden md:block"><Suspense fallback={null}><Scene /></Suspense></div>
    <div className="absolute inset-0 md:hidden bg-linear-to-br from-accent/10 via-background to-cyan/10" aria-hidden="true" />
    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <SplitText as="p" className="text-accent text-xs md:text-sm font-mono tracking-[0.2em] uppercase mb-6" direction="right" scrollTrigger={false} delay={0.4}>DATA · TECHNOLOGY · CREATIVE WORK</SplitText>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
        <SplitText as="span" className="block" direction="up" scrollTrigger={false} delay={0.7}>Where Strategy</SplitText>
        <SplitText as="span" className="block gradient-text" direction="center" scrollTrigger={false} delay={1}>Meets Creativity.</SplitText>
      </h1>
      <p className="text-foreground/75 text-lg font-medium mb-3">Deena Johnson</p>
      <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto mb-10">Transforming complex ideas into meaningful digital experiences through data, technology, strategy, and visual storytelling.</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4"><MagneticButton href="#projects">Explore My Work <ArrowDown size={16}/></MagneticButton><MagneticButton href="#contact" className="bg-transparent! border! border-foreground/20! text-foreground! hover:border-accent!">Connect</MagneticButton></div>
    </div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"><span className="text-xs text-foreground/50 uppercase tracking-widest">Scroll to explore</span><ArrowDown size={16} className="text-foreground/50"/></motion.div>
  </section>;
}
