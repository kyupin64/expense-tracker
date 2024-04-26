import { useState } from "react";
import HomePage from "./HomePage";
import ExpenseTracker from "./ExpenseTracker";

export default function Body() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
        {isHome ? <HomePage /> : <ExpenseTracker />}
    </>
  )
}