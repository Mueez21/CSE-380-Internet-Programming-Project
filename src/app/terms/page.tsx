"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Users, Eye, AlertTriangle, Mail } from "lucide-react";

const TermsPage = () => (
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
        { top: 15, left: 10 },
        { top: 75, left: 85 },
        { top: 45, left: 30 },
        { top: 85, left: 55 },
        { top: 25, left: 70 },
        { top: 65, left: 15 },
        { top: 35, left: 90 },
        { top: 55, left: 40 }
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
        className="text-center mb-8 max-w-3xl relative"
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
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Terms & Conditions
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
            Your rights and responsibilities when using NextFit
          </p>
          <p className="text-sm text-muted-foreground/80">Last updated: July 7, 2025</p>
        </motion.div>
      </motion.div>

      {/* Compact Terms Image with Cyberpunk Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6"
      >
        <div className="relative w-48 h-48 mx-auto">
          {/* Cyberpunk styling container */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 shadow-2xl">
            {/* Scan lines effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse rounded-2xl"></div>
            
            {/* Corner elements */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary/50"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary/50"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary/50"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary/50"></div>
            
            <img
              src="/terms-hero.png"
              alt="Terms and Conditions"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            
            {/* Targeting overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-primary/60 rounded-full animate-ping"></div>
          </div>
        </div>
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
              { id: "use-of-service", title: "Use of Service", icon: Users, color: "from-blue-500/20 to-cyan-500/20", iconColor: "text-blue-500" },
              { id: "no-medical-advice", title: "No Medical Advice", icon: AlertTriangle, color: "from-orange-500/20 to-red-500/20", iconColor: "text-orange-500" },
              { id: "user-responsibilities", title: "User Responsibilities", icon: Shield, color: "from-green-500/20 to-emerald-500/20", iconColor: "text-green-500" },
              { id: "privacy", title: "Privacy", icon: Eye, color: "from-purple-500/20 to-indigo-500/20", iconColor: "text-purple-500" },
              { id: "changes-to-terms", title: "Changes to Terms", icon: FileText, color: "from-blue-500/20 to-cyan-500/20", iconColor: "text-blue-500" },
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
        {/* Use of Service */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="use-of-service" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          {/* Background glow effect */}
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
            <h2 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">1. Use of Service</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              NextFit provides cutting-edge AI-generated fitness and diet plans designed to transform your health and wellness journey. Our platform is intended solely for personal, non-commercial use by individuals seeking to improve their fitness, nutrition, and overall well-being through personalized recommendations and intelligent coaching.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Eligibility Requirements:</span> By accessing or using our services, you acknowledge and agree that you are at least 16 years of age and have the legal capacity to enter into this binding agreement. Users under 18 should obtain parental or guardian consent before using NextFit.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Acceptable Use:</span> You agree to use NextFit responsibly and in accordance with its intended purpose. This includes providing accurate personal information, following recommended guidelines, and respecting the intellectual property rights of NextFit and third parties. You agree not to misuse the platform, attempt unauthorized access, reverse engineer our AI systems, or use the service for any unlawful, harmful, or prohibited purpose.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Compliance:</span> The content and recommendations provided are designed to support your fitness and wellness journey within legal and ethical boundaries. You are responsible for ensuring that your use of the service complies with all applicable laws, regulations, and local restrictions in your jurisdiction.
            </p>
          </motion.div>
        </motion.div>

        {/* No Medical Advice */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="no-medical-advice" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          {/* Background glow effect */}
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
                <AlertTriangle className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-orange-500 transition-colors duration-300">2. No Medical Advice</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              <span className="font-bold text-orange-500 text-lg">IMPORTANT MEDICAL DISCLAIMER:</span> The information, guidance, and recommendations provided by NextFit, including but not limited to fitness routines, nutritional advice, meal plans, exercise programs, and wellness tips, are intended for general informational and educational purposes only.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Not Professional Medical Advice:</span> These recommendations do not constitute medical advice, diagnosis, treatment, or professional consultation, and should never be relied upon as a substitute for consultation with qualified healthcare professionals, licensed physicians, registered dietitians, or certified fitness trainers.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Consult Healthcare Professionals:</span> Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition, existing health issues, dietary restrictions, or before starting any new exercise or diet program. This is especially crucial if you have pre-existing medical conditions, injuries, allergies, or are taking medications.
            </p>
            <p>
              <span className="font-semibold text-orange-500">No Delay in Medical Care:</span> Never disregard professional medical advice or delay in seeking it because of something you have read, heard, or received from NextFit. If you think you may have a medical emergency, call your doctor or emergency services immediately.
            </p>
            <p>
              <span className="font-semibold text-orange-500">Individual Results May Vary:</span> Results from following NextFit's recommendations may vary significantly between individuals based on factors including but not limited to age, gender, current fitness level, medical history, genetics, and adherence to the program.
            </p>
          </motion.div>
        </motion.div>

        {/* User Responsibilities */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="user-responsibilities" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          {/* Background glow effect */}
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
                <Shield className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-green-500 transition-colors duration-300">3. User Responsibilities</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              As a user of NextFit, you acknowledge and accept complete responsibility for your own health, safety, and well-being while using our platform and following our recommendations. Your participation in any fitness program involves inherent risks and requires careful consideration of your personal circumstances.
            </p>
            <p>
              <span className="font-semibold text-green-500">Accurate Information:</span> You agree to provide truthful, accurate, and complete information when creating your profile, setting fitness goals, and updating your health metrics. This includes disclosing relevant medical conditions, physical limitations, dietary restrictions, and current fitness level to ensure appropriate recommendations.
            </p>
            <p>
              <span className="font-semibold text-green-500">Personal Safety:</span> You are solely responsible for assessing your own physical capabilities and limitations before engaging in any recommended activities. Listen to your body, start gradually, and modify or discontinue exercises if you experience pain, discomfort, or unusual symptoms.
            </p>
            <p>
              <span className="font-semibold text-green-500">Medical Consultation:</span> We strongly encourage and recommend that you consult with qualified healthcare professionals, including physicians, registered dietitians, and certified fitness trainers, before making any significant changes to your exercise routine, dietary habits, or lifestyle based on NextFit's recommendations.
            </p>
            <p>
              <span className="font-semibold text-green-500">Assumption of Risk:</span> You understand and acknowledge that engaging in physical activity, following dietary recommendations, and making lifestyle changes involves inherent risks. You voluntarily assume full responsibility for any injuries, health issues, adverse reactions, or damages that may result from your participation in any fitness or diet program recommended by NextFit.
            </p>
            <p>
              <span className="font-semibold text-green-500">Account Security:</span> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use or security breach.
            </p>
          </motion.div>
        </motion.div>

        {/* Privacy */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="privacy" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          {/* Background glow effect */}
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
            <h2 className="text-2xl font-bold text-foreground group-hover:text-purple-500 transition-colors duration-300">4. Privacy</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              Your privacy and data security are fundamental priorities at NextFit. We are committed to protecting your personal information and handling your data with the highest standards of transparency, security, and care in accordance with applicable privacy laws and regulations.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Data Collection and Use:</span> We collect, use, and store your information strictly in accordance with our comprehensive <a href="/privacy" className="text-purple-500 underline hover:text-purple-400 transition-colors duration-300 font-semibold">Privacy Policy</a>, which details what information we collect, how we use it, and your rights regarding your personal data.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Consent and Control:</span> By using our services, you provide informed consent to the collection and use of your data as described in our Privacy Policy. You maintain control over your personal information and can access, modify, or delete your data at any time through your account settings.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Security Measures:</span> We implement industry-standard security measures, including encryption, secure data transmission, access controls, and regular security audits to safeguard your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Third-Party Services:</span> When we work with trusted third-party service providers to enhance our platform, we ensure they adhere to strict data protection standards and confidentiality agreements to protect your information.
            </p>
            <p>
              <span className="font-semibold text-purple-500">Limitation of Security:</span> While we strive for the highest security standards, please be aware that no method of transmission over the Internet or electronic storage system is 100% secure. We encourage you to use strong, unique passwords and remain vigilant about your account security.
            </p>
          </motion.div>
        </motion.div>

        {/* Changes to Terms */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="changes-to-terms" 
          className="group relative bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border border-border/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          {/* Background glow effect */}
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
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-blue-500 transition-colors duration-300">5. Changes to Terms</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              NextFit reserves the right to update, modify, revise, or completely rewrite these Terms & Conditions at any time, at our sole discretion, to reflect changes in our services, legal requirements, business practices, or industry standards.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Effective Date of Changes:</span> Any changes to these terms will become effective immediately upon posting the updated version on this page, with the "Last updated" date at the top of the document reflecting the most recent revision.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Notification of Significant Changes:</span> For material changes that significantly affect your rights or obligations, we may provide additional notice through email notifications, in-app announcements, or prominent notices on our platform.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Continued Use Constitutes Acceptance:</span> Your continued use of NextFit's services after any changes are posted constitutes your acknowledgment, understanding, and acceptance of the new terms. If you do not agree with the modified terms, you should discontinue use of our services.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Regular Review Recommended:</span> We encourage you to review this page periodically to stay informed about any updates, modifications, or new provisions that may affect your use of NextFit.
            </p>
            <p>
              <span className="font-semibold text-blue-500">Historical Versions:</span> Previous versions of these terms may be available upon request for users who need to reference earlier agreements or understand the evolution of our policies.
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
          {/* Background glow effect */}
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
            <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">6. Contact</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed space-y-4"
          >
            <p>
              We value open communication with our users and are committed to providing excellent customer support. If you have any questions, concerns, feedback, or need assistance regarding these Terms & Conditions or any aspect of our service, we encourage you to reach out to us.
            </p>
            <p>
              <span className="font-semibold text-primary">Multiple Contact Options:</span> Visit our comprehensive <a href="/contact" className="text-primary underline hover:text-primary/80 transition-colors duration-300 font-semibold">contact page</a> to get in touch with our dedicated support team through various channels including email, contact forms, and live chat support.
            </p>
            <p>
              <span className="font-semibold text-primary">Response Commitment:</span> We are committed to addressing your inquiries promptly and professionally, typically responding to most queries within 24-48 hours during business days. For urgent matters, please use our priority contact methods outlined on our contact page.
            </p>
            <p>
              <span className="font-semibold text-primary">Feedback and Suggestions:</span> We welcome your feedback, suggestions for improvement, and ideas for new features. Your input helps us enhance NextFit and provide better service to our community.
            </p>
            <p>
              <span className="font-semibold text-primary">Legal and Compliance Matters:</span> For legal inquiries, compliance questions, or formal notices, please use the designated legal contact information provided on our contact page to ensure proper handling and documentation.
            </p>
            <p>
              <span className="font-semibold text-primary">Community Support:</span> Consider joining our user community forums and social media channels where you can connect with other NextFit users, share experiences, and get peer support alongside official assistance.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default TermsPage;