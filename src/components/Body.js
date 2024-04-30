import { useState } from "react";
import HomePage from "./HomePage";
import ExpenseTracker from "./ExpenseTracker";

export default function Body({ isHome, setIsHome }) {

  return (
    <>
        {isHome ? <HomePage setIsHome={setIsHome} /> : <ExpenseTracker />}
    </>
  )
}