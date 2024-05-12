"use client";
import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center w-full py-7 px-10">
        <h1><Link href="/" onClick={() => setShowMenu(false)}>Expense Tracker</Link></h1>
        <button className="px-2 py-1" onClick={() => setShowMenu(!showMenu)}>{showMenu ? "Close Menu" : "Open Menu"}</button>
      </nav>

        {showMenu ? <Menu setShowMenu={setShowMenu}/> : null}
    </>
  );
}