"use client";

const AboutPage = () => (
  <div className="flex flex-col items-center min-h-screen py-12 px-4">
    <div className="bg-background/80 rounded-lg shadow-lg max-w-6xl w-full mx-auto p-12 flex flex-col md:flex-row items-center gap-12">
      {/* Image on the right for desktop, above for mobile */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/hero-ai3.png" 
          alt="About NextFit Illustration"
          className="w-full max-w-xs md:max-w-md object-cover rounded-lg shadow"
        />
      </div>
      {/* Text content */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">About NextFit</h1>
        <p className="mb-8 text-lg text-center md:text-left max-w-2xl">
          NextFit is your intelligent, AI-powered fitness and nutrition companion, dedicated to helping you achieve your health and wellness goals through personalized, science-backed plans and expert guidance. Our mission is to make fitness accessible, enjoyable, and effective for everyone—regardless of age, experience, or starting point. With NextFit, you receive tailored workout routines, meal plans, and real-time coaching, all designed to fit seamlessly into your lifestyle and empower you to take control of your well-being.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-center md:text-left">Our Vision</h2>
        <p className="mb-6 text-base text-center md:text-left max-w-2xl">
          We envision a world where everyone has the tools and support they need to live a healthier, happier life. By combining advanced artificial intelligence with proven fitness and nutrition science, NextFit empowers users to make informed decisions, track their progress, and stay motivated on their wellness journey. We strive to foster a supportive, inclusive community where every individual can thrive and reach their full potential.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3 text-center md:text-left">What Makes Us Different?</h2>
        <ul className="list-disc list-inside mb-6 space-y-2 max-w-2xl mx-auto md:mx-0 text-base">
          <li>
            <b>Personalized Plans:</b> Receive fitness and diet recommendations that adapt to your unique needs, preferences, and progress, ensuring your journey is always relevant and effective.
          </li>
          <li>
            <b>Conversational Coaching:</b> Enjoy a natural, voice-based experience with our AI assistant, making it easy to ask questions, get feedback, and stay engaged.
          </li>
          <li>
            <b>Continuous Learning:</b> Our platform evolves with you, using your feedback and results to refine your plans and maximize your success.
          </li>
          <li>
            <b>Commitment to Privacy:</b> We prioritize your data security and privacy, ensuring your information is always protected and handled with care.
          </li>
          <li>
            <b>Expert-Driven:</b> Our team combines expertise in fitness, nutrition, and technology to deliver guidance you can trust.
          </li>
        </ul>
      </div>
    </div>
    {/* Team and Contact sections below */}
    <div className="bg-background/80 rounded-lg shadow-lg max-w-6xl w-full mx-auto p-12 flex flex-col items-center mt-12">
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">Meet the Team</h2>
      <p className="mb-6 text-base text-center max-w-3xl">
        NextFit is built by a passionate group of engineers, designers, and certified fitness professionals who share a common goal: to make wellness smarter, more accessible, and more enjoyable for everyone. We are committed to continuous innovation, user-centered design, and delivering real results for our community.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mb-8 justify-center items-center">
        <div className="flex flex-col items-center">
          <img
            src="/assets/angkon.jpg"
            alt="Tasir Mahtab Haque"
            className="w-32 h-32 object-cover rounded-full shadow mb-2"
          />
          <span className="font-semibold text-base">Tasir Mahtab Haque</span>
          <span className="text-sm text-center font-medium">Department of Electronics and Telecommunication Engineering, CUET</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/assets/mueez.jpg"
            alt="Mueez Mejbah"
            className="w-32 h-32 object-cover rounded-full shadow mb-2"
          />
          <span className="font-semibold text-base">Mueez Mejbah</span>
          <span className="text-sm text-center font-medium">Department of Electronics and Telecommunication Engineering, CUET</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-center">Contact Us</h2>
      <p className="text-base text-center max-w-3xl">
        We value your feedback and are always here to help. If you have questions, suggestions, or want to learn more about NextFit, please visit{" "}
        <a href="/contact" className="text-primary underline">
          our contact page
        </a>
        . Together, let's build a healthier future!
      </p>
    </div>
  </div>
);

export default AboutPage;