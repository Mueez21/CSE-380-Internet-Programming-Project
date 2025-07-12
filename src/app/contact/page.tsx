"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Phone, Send, MessageSquare, Users, Star } from "lucide-react";

const developers = [
  {
    name: "Tasir Mahtab Haque",
    email: "u2108008@student.cuet.ac.bd",
    facebook: "https://www.facebook.com/angkonnn/",
    instagram: "https://www.instagram.com/angkonn/",
    linkedin: "https://www.linkedin.com/in/angkonnn/",
    photo: "/assets/angkon.jpg",
    role: "Lead Developer & Co-Founder",
    speciality: "Full-Stack Development"
  },
  {
    name: "Mueez Mejbah",
    email: "u2108010@student.cuet.ac.bd",
    facebook: "https://www.facebook.com/mueezmejbah.mmg.3",
    instagram: "https://www.instagram.com/_mueez_21/",
    linkedin: "https://www.linkedin.com/in/mueez-mejbah-214807306/",
    photo: "/assets/mueez.jpg",
    role: "AI Engineer & Co-Founder",
    speciality: "Machine Learning"
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    details: "Chittagong University of Engineering & Technology",
    subtext: "Chattogram, Bangladesh"
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Within 24 hours",
    subtext: "Monday - Friday, 9 AM - 6 PM"
  },
  {
    icon: Phone,
    title: "Support",
    details: "Available via Email",
    subtext: "Quick response guaranteed"
  }
];

const ContactPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
    </div>

    <div className="relative z-10 flex flex-col items-center py-16 px-4">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 max-w-3xl"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        
        <div className="w-20 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Ready to start your fitness journey? Our team is here to help you achieve your goals.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl w-full"
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            className="group p-6 bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{info.title}</h3>
            </div>
            <p className="text-foreground font-medium mb-2">{info.details}</p>
            <p className="text-sm text-muted-foreground">{info.subtext}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl w-full"
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Team
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate developers behind NextFit, ready to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
              className="group relative p-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/30"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Profile Section */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative p-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full">
                    <img
                      src={dev.photo}
                      alt={dev.name}
                      className="w-32 h-32 object-cover rounded-full shadow-2xl border-4 border-background group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Online status indicator */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg"></div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {dev.name}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                    {dev.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {dev.speciality}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Department of Electronics and Telecommunication Engineering, CUET
                  </p>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                {/* Social Media Icons */}
                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={`mailto:${dev.email}`}
                    className="p-3 bg-green-600/10 hover:bg-green-600/20 rounded-xl transition-all duration-300"
                    title="Send Email"
                  >
                    <Mail className="w-6 h-6 text-green-600" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={dev.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600/10 hover:bg-blue-600/20 rounded-xl transition-all duration-300"
                    title="Facebook"
                  >
                    <svg className="w-6 h-6" fill="#1877f3" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={dev.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-600/10 hover:bg-pink-600/20 rounded-xl transition-all duration-300"
                    title="Instagram"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#e1306c" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="6" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17" cy="7" r="1.5" fill="#e1306c" />
                    </svg>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-700/10 hover:bg-blue-700/20 rounded-xl transition-all duration-300"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="#0a66c2" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-16 text-center max-w-2xl"
      >
        <div className="p-8 bg-gradient-to-br from-background/70 to-background/50 backdrop-blur-xl border border-border/40 rounded-3xl shadow-2xl">
          <Star className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Fitness Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Connect with our team through any of the channels above. We're here to support you every step of the way!
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

export default ContactPage;