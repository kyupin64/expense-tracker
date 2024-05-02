import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists, useListsDispatch } from "@/contexts/ListsContext"
import { useState } from "react";

export default function ExpenseTracker() {
    const [text, setText] = useState("");
    const dispatch = useListsDispatch();
    const lists = useLists();
    const currentList = useCurrentList();

    const handleClick = () => {
        if (text !== "") {
            const newId = Date.now();
            dispatch({
                type: "addTransaction",
                id: newId,
                text: text,
                currentList: currentList,
            });
            setText("");
        };
    };

    return (
        <>
            <h1>{lists[currentList].name}</h1>
            <input placeholder="Placeholder" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={handleClick}>Submit</button>
        </>
    );
};