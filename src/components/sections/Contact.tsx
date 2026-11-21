"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
export default function Contact() {
  return <section id="contact" className="relative py-24 md:py-32 px-6"><div className="max-w-4xl mx-auto text-center">
    <SplitText as="h2" className="text-3xl md:text-5xl font-bold" direction="center">Let's Connect</SplitText>
    <motion.p initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-foreground/60 mt-6 leading-relaxed">Interested in collaborating on technology, analytics or visual storytelling? Contact details will be added once verified.</motion.p>
    <div className="mt-10 inline-flex rounded-xl border border-border px-6 py-4 text-foreground/60">Contact links coming soon</div>
  </div></section>;
}
