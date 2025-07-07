"use client";

const PrivacyPolicyPage = () => (
  <div className="flex flex-col items-center min-h-screen py-12 px-4">
    <div className="bg-background/80 rounded-lg shadow-lg max-w-4xl w-full mx-auto p-12 flex flex-col items-center">
      <img
        src="/privacy.png"
        alt="Privacy Policy Illustration"
        className="mb-8 w-64 h-64 object-cover rounded-lg shadow"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center">
        Last updated: July 7, 2025
      </p>
      <p className="mb-8 text-lg text-center max-w-3xl">
        At NextFit, your privacy is our top priority. As an AI-powered fitness and nutrition platform, we are committed to protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data. This Privacy Policy explains our practices and your rights in detail.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">1. Information We Collect</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        <b>Personal Information:</b> When you sign up or interact with NextFit, we may collect your name, email address, age, gender, fitness goals, health data, and other information you provide to personalize your experience.<br />
        <b>Usage Data:</b> We automatically collect information about your interactions with our platform, such as device type, browser, IP address, and usage patterns, to improve our services and ensure security.<br />
        <b>AI Interaction Data:</b> Conversations and interactions with our AI assistant are securely stored to enhance your experience, provide personalized recommendations, and continuously improve our AI models.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">2. How We Use Your Data</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        NextFit uses your data to deliver tailored fitness and nutrition plans, enable seamless voice-based coaching, and provide intelligent insights powered by AI. We analyze your data to personalize your journey, track your progress, and offer adaptive recommendations. Your information also helps us maintain platform security, troubleshoot issues, and develop innovative features that make your experience smarter and more effective.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">3. Data Sharing & Disclosure</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        We do <b>not</b> sell your personal information. Your data may be shared with trusted service providers who assist us in operating NextFit, always under strict confidentiality agreements. We may disclose information if required by law, to protect our rights, or to ensure the safety of our users and platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">4. AI Transparency & Ethics</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        Our AI is designed to empower you with actionable insights while respecting your privacy. All AI-driven recommendations are based on your provided data and industry best practices. We are committed to ethical AI development, transparency in how our models work, and giving you control over your data and experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">5. Data Security</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        We implement advanced security measures—including encryption, secure authentication, and regular audits—to protect your information from unauthorized access, alteration, or disclosure. While we strive for the highest standards, no system is completely immune to risks. We encourage you to use strong passwords and remain vigilant.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">6. Your Rights & Choices</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        You have the right to access, update, or delete your personal information at any time. You can manage your privacy settings within your account or contact us for assistance. We respect your choices regarding data collection and communications, and you may opt out of non-essential notifications at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">7. Children's Privacy</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        NextFit is not intended for children under 16. We do not knowingly collect personal information from minors. If you believe a child has provided us with data, please contact us immediately so we can take appropriate action.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">8. Changes to This Policy</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and your continued use of NextFit constitutes acceptance of the revised policy. We encourage you to review this page regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">9. Contact Us</h2>
      <p className="mb-4 max-w-3xl text-base text-center">
        If you have any questions, concerns, or requests regarding your privacy or our data practices, please contact us at{" "} 
        <a href="mailto:u2108008@student.cuet.ac.bd" className="text-primary underline">
          u2108008@student.cuet.ac.bd
        </a>
        . You can also visit our <a href="/contact" className="text-primary underline">contact page</a>. Our team is dedicated to ensuring your data is handled with care, transparency, and respect.
      </p>
    </div>
  </div>
);

export default PrivacyPolicyPage;