"use client";

const developers = [
  {
    name: "Tasir Mahtab Haque",
    email: "u2108008@student.cuet.ac.bd",
    facebook: "https://www.facebook.com/angkonnn/",
    instagram: "https://www.instagram.com/angkonn/",
    linkedin: "https://www.linkedin.com/in/angkonnn/",
    photo: "/assets/angkon.jpg", 
  },
  {
    name: "Mueez Mejbah",
    email: "u2108010@student.cuet.ac.bd",
    facebook: "https://www.facebook.com/mueezmejbah.mmg.3",
    instagram: "https://www.instagram.com/__mejbah__275/",
    linkedin: "https://www.linkedin.com/in/mueez-mejbah-214807306/",
    photo: "/assets/mueez.jpg", 
  },
];

const iconClass =
  "w-7 h-7 transition-transform hover:scale-110 hover:shadow-lg";

const ContactPage = () => (
  <div className="flex flex-col items-center min-h-screen py-12 px-4">
    <div className="bg-background/80 rounded-lg shadow-lg max-w-2xl w-full mx-auto p-10 flex flex-col items-center">
      <img
        src="/contact.png"
        alt="Contact NextFit"
        className="mb-8 w-32 h-32 object-cover rounded-lg shadow"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        We’d love to hear from you! Whether you have questions, feedback, or
        partnership ideas, reach out to our team through any of the channels
        below.
      </p>
      <div className="w-full flex flex-col gap-10">
        {developers.map((dev) => (
          <div
            key={dev.name}
            className="flex flex-col items-center border border-border rounded-lg p-6 bg-background/70"
          >
            <img
              src={dev.photo}
              alt={dev.name}
              className="w-24 h-24 object-cover rounded-full shadow mb-3"
            />
            <span className="text-xl font-semibold mb-2">{dev.name}</span>
            <span className="text-sm mb-4 text-muted-foreground">
              Department of Electronics and Telecommunication Engineering, CUET
            </span>
            <div className="flex gap-6 mt-2">
              <a
                href={`mailto:${dev.email}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
              >
                <svg className={iconClass} fill="#38bdf8" viewBox="0 0 24 24">
                  <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L12 13 20 4.01V4H4zm16 2.236l-7.071 7.071a1 1 0 01-1.415 0L4 6.236V20h16V6.236z" />
                </svg>
              </a>
              <a
                href={dev.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <svg className={iconClass} fill="#1877f3" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a
                href={dev.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <svg
                  className={iconClass}
                  fill="none"
                  stroke="#e1306c"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="6"
                    stroke="#e1306c"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#e1306c"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="17" cy="7" r="1.5" fill="#e1306c" />
                </svg>
              </a>
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg className={iconClass} fill="#0a66c2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ContactPage;