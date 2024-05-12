import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists, useListsDispatch } from "@/contexts/ListsContext";
import { useState } from "react";

export default function EditButton({ itemKey }) {
    const lists = useLists();
    const currentList = useCurrentList();
    const dispatch = useListsDispatch();
    const currentTrans = lists[currentList].transactions[itemKey];

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(currentTrans.text);
    const [amount, setAmount] = useState(currentTrans.amount);
    
    const handleSubmit = () => {
        if (text !== "" && Number(amount) !== 0) {
            dispatch({
                type: "changeTransaction",
                id: itemKey,
                text: text,
                amount: amount,
                currentList: currentList,
            });
            setIsEditing(false);
        };
    };

    const editField = (
        <div className="absolute flex flex-col w-56 p-1 gap-1 bg-white">
            <label className="text-black">Editing...</label>
            <input placeholder={text} value={text} onChange={e => setText(e.target.value)} className="w-full"></input>
            <input type="number" placeholder={amount} value={amount} onChange={e => setAmount(e.target.value)} className="w-full"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

    return (
        <>
            {isEditing ? editField : null}
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );
};