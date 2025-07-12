"use client";

import { motion } from "framer-motion";
import { ZapIcon, Users, Target, Shield, Cpu, Heart } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>

    <div className="relative z-10 flex flex-col items-center py-12 px-4">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl max-w-6xl w-full mx-auto p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Image section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative">
            {/* CORNER PIECES */}
            <div className="absolute -inset-4 pointer-events-none">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
            </div>

            {/* IMAGE CONTAINER */}
            <div className="relative aspect-square max-w-xs md:max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-lg bg-cyber-black">
                <img
                  src="/hero-ai3.png"
                  alt="About NextFit Illustration"
                  className="size-full object-cover object-center"
                />
                {/* SCAN LINE  */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />
              </div>

              {/* DECORATIONS ON TOP OF THE IMAGE  */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full" />

                {/* Targeting lines */}
                <div className="absolute top-1/2 left-0 w-1/4 h-px bg-primary/50" />
                <div className="absolute top-1/2 right-0 w-1/4 h-px bg-primary/50" />
                <div className="absolute top-0 left-1/2 h-1/4 w-px bg-primary/50" />
                <div className="absolute bottom-0 left-1/2 h-1/4 w-px bg-primary/50" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex flex-col items-center md:items-start"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-xl">
              <ZapIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About NextFit
            </h1>
          </div>
          
          <p className="mb-8 text-lg text-muted-foreground text-center md:text-left max-w-2xl leading-relaxed">
            NextFit is your intelligent, AI-powered fitness and nutrition companion, dedicated to helping you achieve your health and wellness goals through personalized, science-backed plans and expert guidance. Our mission is to make fitness accessible, enjoyable, and effective for everyone—regardless of age, experience, or starting point.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
          >
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Personalized Experience</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
              <Cpu className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-medium">AI-Powered Insights</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vision Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl max-w-6xl w-full mx-auto p-8 md:p-12 mt-8"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Our Vision
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We envision a world where everyone has the tools and support they need to live a healthier, happier life. By combining advanced artificial intelligence with proven fitness and nutrition science, NextFit empowers users to make informed decisions, track their progress, and stay motivated on their wellness journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Heart, title: "Personalized Plans", desc: "Fitness and diet recommendations that adapt to your unique needs and progress." },
            { icon: Users, title: "Conversational Coaching", desc: "Natural, voice-based experience with our AI assistant for seamless interaction." },
            { icon: Cpu, title: "Continuous Learning", desc: "Platform evolves with you, using feedback to refine plans and maximize success." },
            { icon: Shield, title: "Privacy First", desc: "Your data security and privacy are our top priorities, always protected." },
            { icon: Target, title: "Expert-Driven", desc: "Combining expertise in fitness, nutrition, and technology for trusted guidance." },
            { icon: ZapIcon, title: "Real Results", desc: "Proven methodologies and real-world success stories from our community." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
              className="p-6 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm border border-border/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl max-w-6xl w-full mx-auto p-8 md:p-12 mt-8"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Meet the Team
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            NextFit is built by a passionate group of engineers, designers, and certified fitness professionals who share a common goal: to make wellness smarter, more accessible, and more enjoyable for everyone.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center mb-16">
          {[
            { 
              name: "Tasir Mahtab Haque", 
              image: "/assets/angkon.jpg",
              role: "Lead Developer & Co-Founder",
              description: "Passionate about creating innovative solutions for health and wellness technology.",
              gradient: "from-primary/20 to-blue-500/20"
            },
            { 
              name: "Mueez Mejbah", 
              image: "/assets/mueez.jpg",
              role: "AI Engineer & Co-Founder", 
              description: "Specializing in machine learning and AI-driven fitness recommendations.",
              gradient: "from-blue-500/20 to-purple-500/20"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + (index * 0.2) }}
              className="group relative flex flex-col items-center p-8 bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-sm border border-border/30 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/30 max-w-sm w-full"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              
              {/* Profile image with enhanced styling */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-2xl animate-pulse`}></div>
                <div className="relative p-2 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-36 h-36 object-cover rounded-full shadow-2xl border-4 border-background group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Online status indicator */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background shadow-lg"></div>
              </div>

              {/* Member info */}
              <div className="text-center space-y-3">
                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {member.description}
                </p>
                <div className="text-xs text-muted-foreground font-medium pt-2 border-t border-border/30">
                  Department of Electronics and Telecommunication Engineering, CUET
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 rounded-2xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-background/70 to-background/50 backdrop-blur-xl border border-border/40 rounded-2xl p-6 md:p-8 text-center shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-2 right-2 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              {/* Header with icon */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
              </div>

              {/* Decorative line */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full mx-auto mb-5"></div>

              {/* Main content */}
              <div className="space-y-4 max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We value your feedback and are always here to help. Whether you have questions, suggestions, or want to learn more about NextFit, we'd love to hear from you!
                </p>
                
                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a 
                    href="/contact" 
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                  >
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Get in Touch
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </a>
                </motion.div>

                {/* Subtitle */}
                <p className="text-xs text-muted-foreground italic">
                  Together, let's build a healthier future! 🚀
                </p>
              </div>

              {/* Bottom decorative elements */}
              <div className="flex justify-center gap-1.5 mt-4">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default AboutPage;