"use client";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
const capabilities = [
  { title: "Data & Business Intelligence", detail: "Power BI, SQL, dashboard development, KPI reporting and executive analytics" },
  { title: "Technology & Transformation", detail: "Technology operations, process improvement, enterprise AI governance and spend oversight" },
  { title: "Finance & Operations", detail: "Financial analysis, operational reporting and technology cost visibility" },
  { title: "Visual Storytelling", detail: "Photography, drone imagery and creative digital experiences" },
];
export default function About() {
  return <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <SplitText as="h2" className="text-3xl md:text-5xl font-bold mb-8" direction="up">About Deena</SplitText>
      <motion.p initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-lg md:text-2xl text-foreground/75 max-w-4xl leading-relaxed mb-8">
        I work at the intersection of business, technology and creative storytelling. My experience spans enterprise technology operations, business intelligence, financial analysis and digital transformation. I turn complex information into clearer decisions and compelling visual experiences.
      </motion.p>
      <p className="text-foreground/55 max-w-3xl leading-relaxed mb-12">My portfolio brings together analytical work and creative projects, including dashboards, consulting, drone imagery and photography. Case studies and image galleries will be added as approved work becomes available.</p>
      <div className="grid md:grid-cols-2 gap-5">{capabilities.map((item,i)=><motion.div key={item.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.09}} className="rounded-2xl border border-border bg-white/3 p-6"><h3 className="font-semibold text-lg mb-3 text-accent">{item.title}</h3><p className="text-foreground/60 leading-relaxed">{item.detail}</p></motion.div>)}</div>
      <div className="mt-12 text-sm text-foreground/55"><strong className="text-foreground/80">Education:</strong> B.S. Accounting · M.S. Management Information Systems</div>
    </div>
  </section>;
}
