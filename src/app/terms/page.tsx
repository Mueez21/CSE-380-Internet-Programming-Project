"use client";

const TermsPage = () => (
  <div className="flex flex-col items-center min-h-screen py-12 px-4">
    <div className="bg-background/80 rounded-lg shadow-lg max-w-2xl w-full mx-auto p-8 flex flex-col items-center">
      <img
        src="/terms-hero.png"
        alt="Terms and Conditions Illustration"
        className="mb-6 w-32 h-32 object-cover rounded-lg shadow"
      />
      <h1 className="text-3xl font-bold mb-2 text-center">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center">Last updated: July 7, 2025</p>
      {/* Table of Contents */}
      <nav className="mb-8 w-full">
        <h2 className="text-lg font-semibold mb-2">Contents</h2>
        <ul className="list-disc list-inside space-y-1 text-primary">
          <li><a href="#use-of-service" className="hover:underline">1. Use of Service</a></li>
          <li><a href="#no-medical-advice" className="hover:underline">2. No Medical Advice</a></li>
          <li><a href="#user-responsibilities" className="hover:underline">3. User Responsibilities</a></li>
          <li><a href="#privacy" className="hover:underline">4. Privacy</a></li>
          <li><a href="#changes-to-terms" className="hover:underline">5. Changes to Terms</a></li>
          <li><a href="#contact" className="hover:underline">6. Contact</a></li>
        </ul>
      </nav>
      <hr className="my-6 border-border w-full" />

      <div className="w-full">
        <h2 id="use-of-service" className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
        <p className="mb-4">
          NextFit provides AI-generated fitness and diet plans intended solely for personal, non-commercial use. By accessing or using our services, you acknowledge and agree that you are at least 16 years of age and have the legal capacity to enter into this agreement. You agree not to misuse the platform, attempt unauthorized access, or use the service for any unlawful or prohibited purpose. The content and recommendations provided are designed to support your fitness and wellness journey, but you are responsible for ensuring that your use of the service complies with all applicable laws and regulations in your jurisdiction.
        </p>
        <hr className="my-6 border-border" />

        <h2 id="no-medical-advice" className="text-xl font-semibold mt-6 mb-2">2. No Medical Advice</h2>
        <p className="mb-4">
          The information, guidance, and recommendations provided by NextFit, including but not limited to fitness routines, nutritional advice, and wellness tips, are intended for general informational purposes only. They do not constitute medical advice, diagnosis, or treatment, and should not be relied upon as a substitute for consultation with qualified healthcare professionals. Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition or before starting any new exercise or diet program. Never disregard professional medical advice or delay in seeking it because of something you have read or received from NextFit.
        </p>
        <hr className="my-6 border-border" />

        <h2 id="user-responsibilities" className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p className="mb-4">
          As a user of NextFit, you are solely responsible for your own health, safety, and well-being. You agree to provide accurate and complete information when using our services and to update your details as necessary. You acknowledge that engaging in physical activity involves inherent risks, and you assume full responsibility for any injuries, health issues, or damages that may result from your participation in any fitness or diet program recommended by NextFit. We strongly encourage you to consult with a healthcare professional before making any significant changes to your exercise or dietary habits.
        </p>
        <hr className="my-6 border-border" />

        <h2 id="privacy" className="text-xl font-semibold mt-6 mb-2">4. Privacy</h2>
        <p className="mb-4">
          Your privacy is of utmost importance to us. NextFit is committed to protecting your personal information and handling your data with transparency and care. We collect, use, and store your information in accordance with our <a href="/privacy" className="text-primary underline">Privacy Policy</a>. By using our services, you consent to the collection and use of your data as described therein. We implement industry-standard security measures to safeguard your information, but please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        <hr className="my-6 border-border" />

        <h2 id="changes-to-terms" className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p className="mb-4">
          NextFit reserves the right to update, modify, or revise these Terms & Conditions at any time, at our sole discretion. Any changes will become effective immediately upon posting on this page, and your continued use of the service after such changes constitutes your acceptance of the new terms. We encourage you to review this page periodically to stay informed about any updates or modifications.
        </p>
        <hr className="my-6 border-border" />

        <h2 id="contact" className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
        <p className="mb-4">
          If you have any questions, concerns, or feedback regarding these Terms & Conditions or any aspect of our service, please do not hesitate to contact us. You can reach our support team at{" "}
          <a href="mailto:u2108008@student.cuet.ac.bd" className="text-primary underline">u2108008@student.cuet.ac.bd</a>. or visit our <a href="/contact" className="text-primary underline">contact page</a>. We are committed to addressing your inquiries promptly and professionally.
        </p>
      </div>
    </div>
  </div>
);

export default TermsPage;