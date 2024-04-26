"use client";
import { useState } from "react";
import Header from "../components/Header";
import Body from "@/components/Body";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="flex h-full flex-col items-center">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      {!showMenu ? <Body /> : null}
    </main>
  );
};
