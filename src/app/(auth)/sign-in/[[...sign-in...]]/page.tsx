"use client";
import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  useEffect(() => {
    const isInAppBrowser = /FBAN|FBAV|Instagram|Messenger/i.test(navigator.userAgent);
    if (isInAppBrowser) {
      alert(
        "Google login is not supported in this browser. Please open this page in Chrome, Safari, or another browser to sign in with Google."
      );
    }
  }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;