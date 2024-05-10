import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists, useListsDispatch } from "@/contexts/ListsContext";
import { useState } from "react";

export default function DeleteButton({ itemKey }) {
    const lists = useLists();
    const currentList = useCurrentList();
    const dispatch = useListsDispatch();
    const currentTrans = lists[currentList].transactions[itemKey];

    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleDelete = () => {
        dispatch({
            type: "deleteTransaction",
            id: itemKey,
            currentList: currentList,
        });
        setIsDeleting(false);
    };

    const confirmDeleteField = (
        <div className="absolute top-1 -start-36 flex gap-2">
            <p className="bg-white w-80">Are you sure you want to delete transaction "{currentTrans.text}" of ${currentTrans.amount}?</p>
            <button onClick={() => setIsDeleting(false)} className="bg-red-500">No, go back</button>
            <button onClick={handleDelete} className="bg-green-500">Yes, delete</button>
        </div>
    );

    return (
        <>
            {isDeleting ? confirmDeleteField : null}
            <button className="p-1" onClick={() => setIsDeleting(true)}>X</button>
        </>
    );
};