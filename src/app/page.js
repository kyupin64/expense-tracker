"use client";
import { useSetCurrentList } from "@/contexts/CurrentListContext";
import { useListsDispatch } from "@/contexts/ListsContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  const dispatch = useListsDispatch();
  const setCurrentList = useSetCurrentList();

  const handleClick = async () => {
    if (name !== "") {
      const newId = Date.now();
      dispatch({
        type: "addList",
        id: newId,
        name: name,
      });
      setName("");
      await setCurrentList(newId);
      router.push(`/${newId}`);
    };
  };

  return (
    <form id="new-expense-tracker-form" className={`flex flex-col gap-5 pt-10`}>
      <h1>Create a new budget</h1>
      <label htmlFor="name">Name your expense tracker:</label>
      <input id="name" placeholder="Title" value={name} onChange={e => setName(e.target.value)}></input>
      <button className="px-2 py-1" onClick={e => {e.preventDefault(); handleClick();}}>Submit</button>
    </form>
  );
};
