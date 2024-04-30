"use client";
import { useState } from "react";
import Header from "../components/Header";
import Body from "@/components/Body";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [isHome, setIsHome] = useState(true);

  return (
    <main className="flex h-full flex-col items-center">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} setIsHome={setIsHome} />
      {!showMenu ? <Body isHome={isHome} setIsHome={setIsHome} /> : null}
    </main>
  );
};
