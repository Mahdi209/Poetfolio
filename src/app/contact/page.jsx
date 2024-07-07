import ContactMe from "@/components/contact-me";
import React from "react";

export default async function page() {
  return (
    <div className="bg-slate-200 dark:bg-[#112e42] h-screen flex items-center justify-center">
      <ContactMe />
    </div>
  );
}
