"use client";

import { ZapIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const footerLinks = [
    
    { href: "/about", label: "About" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
    { href: "/profile", label: "Profile" }
  ];

  return (
    <footer className="relative border-t border-border/60 bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl">
      {/* Enhanced top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <ZapIcon className="w-4 h-4 text-primary" />
                </div>
              </div>
              <span className="text-xl font-bold font-mono group-hover:text-primary transition-colors duration-300">
                Ne<span className="text-primary">xt</span>Fit
              </span>
            </Link>
            <p className="text-sm text-muted-foreground/80">
              © 2025 NextFit - All rights reserved
            </p>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-y-3 text-sm"
          >
            {/* Top row - Generate Program and Profile */}
            <div className="flex justify-center gap-x-8">
              {isClient && footerLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                >
                  {link.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
            
            {/* Bottom row - About, Terms, Privacy, Contact in same line */}
            <div className="flex justify-center gap-x-6">
              {isClient && footerLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                >
                  {link.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Status */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm border border-border/60 rounded-xl shadow-lg"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500/30 animate-ping"></div>
            </div>
            <span className="text-xs font-mono text-foreground/90">SYSTEM OPERATIONAL</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;