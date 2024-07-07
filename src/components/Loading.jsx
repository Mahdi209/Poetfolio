"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const HelixLoader = dynamic(
  () =>
    import("ldrs").then((mod) => {
      mod.helix.register();
      return (props) => <l-helix {...props}></l-helix>;
    }),
  { ssr: false }
);

export default function LoadingPage() {
  useEffect(() => {
    const loadHelix = async () => {
      const { helix } = await import("ldrs");
      helix.register();
    };

    loadHelix();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <HelixLoader size="45" speed="2.5" color="black" />
    </div>
  );
}
