"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Users, Lock, FileText, AlertTriangle, Mail, Settings } from "lucide-react";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
    {/* Enhanced Animated background elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-16 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-44 h-44 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500/15 rounded-full blur-3xl animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-4000"></div>
      <div className="absolute top-3/4 right-1/3 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-5000"></div>
    </div>

    {/* Floating elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[
        { top: 12, left: 15 },
        { top: 80, left: 90 },
        { top: 40, left: 25 },
        { top: 90, left: 60 },
        { top: 20, left: 75 },
        { top: 70, left: 10 },
        { top: 30, left: 85 },
        { top: 60, left: 45 }
      ].map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            top: `${position.top}%`,
            left: `${position.left}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + (i * 0.3),
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>

    <div className="relative z-10 flex flex-col items-center py-8 px-4">
      {/* Compact Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-4 max-w-3xl relative"
      >
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur-lg animate-pulse"></div>
            <div className="relative p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-primary/30">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Privacy Policy
        </motion.h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-0.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full mx-auto mb-3"
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative"
        >
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-2">
            Protecting your data with transparency and trust
          </p>
          <p className="text-sm text-muted-foreground/80">Last updated: July 7, 2025</p>
        </motion.div>
      </motion.div>

      {/* Compact Table of Contents */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-8 max-w-4xl w-full"
      >
        <motion.div 
          className="relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-2xl p-6 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-lg blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-primary/30">
                <Eye className="w-5 h-5 text-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Contents
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: "information-we-collect", title: "Information We Collect", icon: Users, color: "from-blue-500/20 to-cyan-500/20", iconColor: "text-blue-500" },
              { id: "how-we-use-data", title: "How We Use Your Data", icon: Settings, color: "from-green-500/20 to-emerald-500/20", iconColor: "text-green-500" },
              { id: "data-sharing", title: "Data Sharing & Disclosure", icon: Shield, color: "from-orange-500/20 to-red-500/20", iconColor: "text-orange-500" },
              { id: "ai-transparency", title: "AI Transparency & Ethics", icon: Eye, color: "from-purple-500/20 to-indigo-500/20", iconColor: "text-purple-500" },
              { id: "data-security", title: "Data Security", icon: Lock, color: "from-cyan-500/20 to-blue-500/20", iconColor: "text-cyan-500" },
              { id: "your-rights", title: "Your Rights & Choices", icon: FileText, color: "from-emerald-500/20 to-green-500/20", iconColor: "text-emerald-500" },
              { id: "children-privacy", title: "Children's Privacy", icon: AlertTriangle, color: "from-red-500/20 to-orange-500/20", iconColor: "text-red-500" },
              { id: "contact", title: "Contact", icon: Mail, color: "from-primary/20 to-blue-500/20", iconColor: "text-primary" }
            ].map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-blue-500/5 hover:from-primary/10 hover:to-blue-500/10 rounded-xl transition-all duration-300 border border-border/30 hover:border-primary/30"
              >
                <div className={`relative p-2 bg-gradient-to-r ${item.color} rounded-lg group-hover:scale-110 transition-transform duration-300 border border-border/30`}>
                  <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>
                <div className="relative">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300 text-sm">
                    {index + 1}. {item.title}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Content Sections */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-5xl w-full space-y-8"
      >
        {/* Information We Collect */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="information-we-collect" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl backdrop-blur-sm border border-blue-500/30">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">1. Information We Collect</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              At NextFit, we are committed to transparency about the information we collect to provide you with the most personalized and effective fitness experience possible. We collect various types of data to ensure our AI-powered recommendations are tailored specifically to your unique needs and goals.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Personal Information:</span> When you create your NextFit account, we collect essential details including your full name, email address, date of birth, gender, contact information, and profile picture. Additionally, we gather comprehensive health and fitness data such as your current fitness level, specific fitness goals, health conditions, dietary preferences, allergies, physical limitations, and any medications that might affect your workout routines.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Usage Analytics & Technical Data:</span> We automatically collect detailed interaction data to enhance our services and maintain robust security protocols. This includes device specifications (operating system, browser type, device model), IP address, location data (with your permission), session duration, feature usage patterns, click behavior, search queries within the app, and performance metrics.
            </p>
            <p>
              <span className="font-semibold text-blue-500">AI Conversation Data:</span> Your interactions with our AI assistant, including voice commands, chat conversations, questions asked, and feedback provided, are securely stored and analyzed. This data helps us provide increasingly personalized recommendations and continuously improve our machine learning models to better serve you and our community.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Fitness & Health Metrics:</span> We collect workout completion data, progress tracking information, biometric data (if provided), nutrition logging, sleep patterns, stress levels, and any health monitoring device integrations you choose to connect with NextFit.
            </p>
          </motion.div>
        </motion.div>

        {/* How We Use Your Data */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="how-we-use-data" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl backdrop-blur-sm border border-green-500/30">
                <Settings className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-green-500 transition-colors duration-300">2. How We Use Your Data</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              NextFit leverages your data responsibly and strategically to deliver cutting-edge, personalized fitness and nutrition experiences powered by advanced artificial intelligence. Our primary goal is to transform your health journey through intelligent, data-driven insights that evolve with your progress.
            </p>
            <p>
              <span className="font-semibold text-green-500">Personalized Recommendations:</span> We analyze your fitness level, goals, preferences, and progress to create highly customized workout plans, nutrition guidance, and wellness strategies. Our AI continuously learns from your feedback and results to refine and optimize your experience over time.
            </p>
            <p>
              <span className="font-semibold text-green-500">Intelligent Voice Coaching:</span> Your voice interactions help our AI provide real-time coaching, motivation, and guidance during workouts. We use this data to understand your communication preferences and deliver more effective, personalized verbal support.
            </p>
            <p>
              <span className="font-semibold text-green-500">Progress Tracking & Analytics:</span> We track your fitness journey with precision, analyzing patterns in your workouts, nutrition, sleep, and overall health metrics to provide meaningful insights and help you achieve your goals more efficiently.
            </p>
            <p>
              <span className="font-semibold text-green-500">Platform Improvement:</span> We use aggregated, anonymized data to enhance our AI algorithms, develop new features, improve user experience, fix bugs, and ensure optimal platform performance for all users.
            </p>
            <p>
              <span className="font-semibold text-green-500">Communication & Support:</span> We use your contact information to send important updates, respond to your inquiries, provide customer support, and deliver optional newsletters and educational content about fitness and wellness.
            </p>
          </motion.div>
        </motion.div>

        {/* Data Sharing & Disclosure */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="data-sharing" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl backdrop-blur-sm border border-orange-500/30">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors duration-300">3. Data Sharing & Disclosure</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              <span className="font-bold text-orange-500 text-lg">We do NOT sell your personal information.</span> Your privacy and trust are fundamental to our mission, and we maintain strict policies about data sharing to protect your personal information while still providing you with exceptional service.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Trusted Service Providers:</span> Your data may be shared with carefully vetted third-party service providers who assist us in operating NextFit, including cloud hosting providers, payment processors, analytics services, and customer support platforms. All these partners operate under strict confidentiality agreements and are required to maintain the same high standards of data protection that we uphold.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Legal Compliance:</span> We may disclose your information when required by law, court order, or government regulation. This includes cooperating with law enforcement investigations, responding to legal subpoenas, or complying with regulatory requirements in jurisdictions where we operate.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Safety & Protection:</span> We may share information to protect our rights, property, or safety, as well as the rights, property, and safety of our users and the general public. This includes detecting and preventing fraud, abuse, security threats, or other harmful activities on our platform.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, but only with continued protection under the same privacy standards outlined in this policy.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Aggregated & Anonymized Data:</span> We may share aggregated, anonymized data that cannot be linked back to individual users for research, industry analysis, or partnership purposes to advance fitness and health technology.
            </p>
          </motion.div>
        </motion.div>

        {/* AI Transparency & Ethics */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="ai-transparency" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl backdrop-blur-sm border border-purple-500/30">
                <Eye className="w-6 h-6 text-purple-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-purple-500 transition-colors duration-300">4. AI Transparency & Ethics</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              At NextFit, we believe in complete transparency about how our AI systems operate and make decisions that affect your fitness journey. Our commitment to ethical AI development means putting your privacy, autonomy, and well-being at the center of everything we do.
            </p>
            <p>
              <span className="font-semibold text-purple-500">AI Decision Making:</span> Our AI is designed to empower you with actionable insights while respecting your privacy and maintaining human oversight. All AI-driven recommendations are based on your voluntarily provided data, established fitness science, and industry best practices, not on invasive tracking or manipulation.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Ethical AI Principles:</span> We are committed to developing AI that is fair, unbiased, and inclusive. Our algorithms are regularly audited for bias, and we actively work to ensure our recommendations work effectively for users of all backgrounds, fitness levels, and health conditions.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Transparency & Explainability:</span> We strive to make our AI recommendations understandable and explainable. You can always access information about why certain recommendations were made and how our AI models work, giving you the knowledge to make informed decisions about your health.
            </p>
            <p>
              <span className="font-semibold text-purple-500">User Control & Consent:</span> You maintain complete control over your data and AI interactions. You can adjust privacy settings, opt out of certain AI features, provide feedback on recommendations, and delete your AI conversation history at any time.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Continuous Improvement:</span> We continuously update our AI ethics practices based on user feedback, industry developments, and emerging best practices in responsible AI development to ensure we're always serving your best interests.
            </p>
          </motion.div>
        </motion.div>

        {/* Data Security */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="data-security" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-cyan-500/30">
                <Lock className="w-6 h-6 text-cyan-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-cyan-500 transition-colors duration-300">5. Data Security</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              Protecting your personal information is our highest priority, and we implement comprehensive, multi-layered security measures that meet and exceed industry standards to safeguard your data against unauthorized access, alteration, or disclosure.
            </p>
            <p>
              <span className="font-semibold text-cyan-500">Advanced Encryption:</span> All your data is protected using state-of-the-art encryption both in transit and at rest. We use AES-256 encryption for stored data and TLS 1.3 for data transmission, ensuring your information remains secure whether it's being stored on our servers or transmitted between your device and our platform.
            </p>
            <p>
              <span className="font-semibold text-cyan-500">Secure Authentication:</span> We implement multi-factor authentication options, secure password requirements, and advanced session management to ensure only you can access your account. We also monitor for suspicious login attempts and unusual account activity.
            </p>
            <p>
              <span className="font-semibold text-cyan-500">Regular Security Audits:</span> Our security infrastructure undergoes regular penetration testing, vulnerability assessments, and third-party security audits to identify and address potential vulnerabilities before they can be exploited.
            </p>
            <p>
              <span className="font-semibold text-cyan-500">Access Controls:</span> We maintain strict internal access controls, ensuring that only authorized personnel who need access to your data for legitimate business purposes can view it. All access is logged and monitored for compliance and security purposes.
            </p>
            <p>
              <span className="font-semibold text-cyan-500">Data Backup & Recovery:</span> We maintain secure, encrypted backups of your data and have comprehensive disaster recovery procedures to ensure your information remains safe and accessible even in unlikely emergency scenarios.
            </p>
            <p>
              <span className="font-semibold text-cyan-500">Security Limitations:</span> While we strive for the highest security standards and invest heavily in protection measures, no system is completely immune to all risks. We encourage you to use strong, unique passwords, enable two-factor authentication, and remain vigilant about your account security.
            </p>
          </motion.div>
        </motion.div>

        {/* Your Rights & Choices */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="your-rights" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl backdrop-blur-sm border border-emerald-500/30">
                <FileText className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-emerald-500 transition-colors duration-300">6. Your Rights & Choices</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              Your privacy rights are fundamental, and we are committed to ensuring you have complete control over your personal information and how it's used. We believe that transparency and user control are essential components of privacy protection.
            </p>
            <p>
              <span className="font-semibold text-emerald-500">Access & Portability:</span> You have the right to access, download, and review all personal information we have collected about you. You can request a comprehensive copy of your data in a portable format that allows you to transfer it to other services if desired.
            </p>
            <p>
              <span className="font-semibold text-emerald-500">Correction & Updates:</span> You can access, update, correct, or modify your personal information at any time through your account settings. If you notice any inaccuracies or outdated information, you can easily make changes or contact our support team for assistance.
            </p>
            <p>
              <span className="font-semibold text-emerald-500">Deletion Rights:</span> You have the right to request deletion of your personal information at any time. You can delete specific data elements or request complete account deletion. We will process deletion requests promptly while retaining only the minimum necessary information for legal compliance.
            </p>
            <p>
              <span className="font-semibold text-emerald-500">Privacy Settings Control:</span> You can manage detailed privacy settings within your account, including data sharing preferences, communication preferences, AI feature settings, and third-party integrations. These settings give you granular control over how your data is used.
            </p>
            <p>
              <span className="font-semibold text-emerald-500">Communication Preferences:</span> You have complete control over communications from NextFit. You can opt in or out of marketing emails, push notifications, SMS messages, and other communications. Essential account and security notifications will still be sent for your protection.
            </p>
            <p>
              <span className="font-semibold text-emerald-500">Support & Assistance:</span> Our dedicated privacy team is available to help you exercise your rights, answer questions about your data, and provide guidance on privacy settings. We are committed to responding to all privacy-related requests promptly and professionally.
            </p>
          </motion.div>
        </motion.div>

        {/* Children's Privacy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="children-privacy" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl backdrop-blur-sm border border-red-500/30">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-red-500 transition-colors duration-300">7. Children's Privacy</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              NextFit is designed for and intended to be used by individuals who are at least 16 years of age. We take the protection of children's privacy very seriously and are committed to complying with all applicable laws regarding the collection and use of information from minors.
            </p>
            <p>
              <span className="font-semibold text-red-500">Age Restrictions:</span> NextFit is not intended for children under 16 years of age. We do not knowingly collect, store, or process personal information from anyone under 16. Our services, content, and AI recommendations are specifically designed for users who are at least 16 years old.
            </p>
            <p>
              <span className="font-semibold text-red-500">Parental Oversight:</span> If you are between 16 and 18 years old, we strongly recommend that you use NextFit under the supervision and with the consent of a parent or legal guardian. Parents should review this privacy policy and monitor their teen's use of our platform.
            </p>
            <p>
              <span className="font-semibold text-red-500">Inadvertent Collection:</span> If we become aware that we have inadvertently collected personal information from a child under 16, we will take immediate steps to delete that information from our records. We encourage parents and guardians to monitor their children's online activities and help enforce our age restrictions.
            </p>
            <p>
              <span className="font-semibold text-red-500">Reporting & Action:</span> If you believe that a child under 16 has provided us with personal information, or if you are a parent or guardian who wants to review, modify, or delete your child's information, please contact us immediately through our privacy team. We will investigate promptly and take appropriate action to protect the child's privacy.
            </p>
            <p>
              <span className="font-semibold text-red-500">Educational Resources:</span> We support digital literacy and privacy education for young people and families. We encourage parents to discuss online privacy, data sharing, and digital citizenship with their children as part of a comprehensive approach to online safety.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="contact" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur-lg animate-pulse"></div>
              <div className="relative p-2 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-primary/30">
                <Mail className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">8. Contact</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              We value open communication with our users and are committed to providing exceptional support for all privacy-related questions and concerns. Your privacy is our responsibility, and we want to make it easy for you to understand and control how your information is handled.
            </p>
            <p>
              <span className="font-semibold text-primary">Dedicated Privacy Team:</span> If you have any questions, concerns, or feedback regarding this Privacy Policy or any aspect of our data practices, please do not hesitate to reach out to our dedicated privacy team. Visit our comprehensive <a href="/contact" className="text-primary underline hover:text-primary/80 transition-colors duration-300 font-semibold">contact page</a> to get in touch through various channels designed specifically for privacy inquiries.
            </p>
            <p>
              <span className="font-semibold text-primary">Privacy Request Processing:</span> We are committed to addressing your privacy inquiries promptly and professionally, typically responding to privacy-related requests within 24-48 hours and completing data requests within 30 days as required by applicable privacy laws.
            </p>
            <p>
              <span className="font-semibold text-primary">Multiple Contact Methods:</span> You can reach our privacy team through secure email, encrypted contact forms, live chat support, or postal mail. For sensitive privacy matters, we recommend using our secure contact forms to ensure your communications are properly protected.
            </p>
            <p>
              <span className="font-semibold text-primary">Privacy Advocacy:</span> Our privacy team serves as your advocate within NextFit, ensuring that your privacy rights are respected and that any concerns are addressed comprehensively. We're here to help you understand your rights and exercise them effectively.
            </p>
            <p>
              <span className="font-semibold text-primary">Feedback & Improvement:</span> We welcome your feedback about our privacy practices and continuously work to improve our policies and procedures based on user input, legal developments, and industry best practices. Your voice helps us maintain the highest standards of privacy protection.
            </p>
            <p>
              <span className="font-semibold text-primary">Emergency Privacy Concerns:</span> For urgent privacy matters or suspected data breaches affecting your account, we provide priority contact methods to ensure immediate attention and rapid response to protect your information.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default PrivacyPolicyPage;