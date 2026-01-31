import { useState } from "react";

export function sendEmailHook() {
  //object with data from front end
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    //validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setIsLoading("error");
      return;
    }

    setIsLoading("loading");
    try {
      //call backend route to send email
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsLoading("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading("error");
    } finally {
      setIsLoading("idle");
    }
  };

  return { email, isLoading, sendEmail, setEmail };
}
