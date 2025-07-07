"use client";
import { useEffect } from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  useEffect(() => {
    const isInAppBrowser = /FBAN|FBAV|Instagram|Messenger/i.test(navigator.userAgent);
    if (isInAppBrowser) {
      alert(
        "Google login is not supported in this browser. Please open this page in Chrome, Safari, or another browser to sign up with Google."
      );
    }
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;