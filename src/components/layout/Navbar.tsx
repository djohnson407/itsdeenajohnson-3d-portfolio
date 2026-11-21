"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [{href:"#home",label:"Home"},{href:"#projects",label:"Portfolio"},{href:"#about",label:"About"},{href:"#contact",label:"Contact"}];
export default function Navbar() {
 const [isOpen,setIsOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>50);window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
 return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled?"glass py-3":"py-5"}`}>
 <div className="mx-auto max-w-7xl px-6 flex items-center justify-between"><Link href="/" className="text-xl font-bold tracking-tight hover:text-accent transition-colors">Deena<span className="text-accent">.</span></Link><div className="hidden md:flex items-center gap-8">{navLinks.map(link=><a key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">{link.label}</a>)}</div><button className="md:hidden relative z-50 p-2" onClick={()=>setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>{isOpen?<X size={24}/>:<Menu size={24}/>}</button></div>
 <AnimatePresence>{isOpen&&<><motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={()=>setIsOpen(false)}/><motion.div initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.3}} className="fixed top-0 right-0 h-full w-72 bg-background border-l border-border z-40 p-8 pt-24 md:hidden"><div className="flex flex-col gap-6">{navLinks.map(link=><a key={link.href} href={link.href} className="text-lg font-medium hover:text-accent" onClick={()=>setIsOpen(false)}>{link.label}</a>)}</div></motion.div></>}</AnimatePresence>
 </nav>;
}
