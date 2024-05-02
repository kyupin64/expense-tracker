import { useSetCurrentList } from "@/contexts/CurrentListContext";
import { useListsDispatch } from "@/contexts/ListsContext";
import { useState } from "react";

export default function HomePage({ showMenu, setIsHome }) {
    const [name, setName] = useState("");
    const showOrHide = showMenu ? "hidden" : "flex";
    const dispatch = useListsDispatch();
    const setCurrentList = useSetCurrentList();

    const handleClick = () => {
        if (name !== "") {
            const newId = Date.now();
            dispatch({
                type: "addList",
                id: newId,
                name: name,
            });
            setCurrentList(newId);
            setIsHome(false);
            setName("");
        };
    };

    return (
        <>
            <form id="new-expense-tracker-form" className={`${showOrHide} flex-col gap-5 pt-10`}>
                <h1>Create a new budget</h1>
                <label htmlFor="name">Name your expense tracker:</label>
                <input id="name" placeholder="Title" value={name} onChange={e => setName(e.target.value)}></input>
                <button className="px-2 py-1" onClick={handleClick}>Submit</button>
            </form>
        </>
    );
};