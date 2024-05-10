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
        <div className="absolute top-1 flex gap-2">
            <input placeholder={currentTrans.text} value={text} onChange={e => setText(e.target.value)} className="w-24"></input>
            <input type="number" placeholder={currentTrans.amount} value={amount} onChange={e => setAmount(e.target.value)} className="w-10"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

    return (
        <>
            {isEditing ? editField : null}
            <button className="p-1" onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );
};