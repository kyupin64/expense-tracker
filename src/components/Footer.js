"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <nav className="flex justify-between items-center w-full p-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
};