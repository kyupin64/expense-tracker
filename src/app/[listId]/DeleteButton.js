import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists, useListsDispatch } from "@/contexts/ListsContext";
import { useState } from "react";

export default function DeleteButton({ itemKey }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const lists = useLists();
    const currentList = useCurrentList();
    const dispatch = useListsDispatch();
    const currentTrans = lists[currentList].transactions[itemKey];
    
    const handleDelete = () => {
        dispatch({
            type: "deleteTransaction",
            id: itemKey,
            currentList: currentList,
        });
        setIsDeleting(false);
    };

    const confirmDeleteField = (
        <div className="absolute top-1 flex flex-col gap-2 bg-white p-1">
            <p className="confirm-delete w-56 py-2 text-center">Are you sure you want to delete transaction "{currentTrans.text}" of ${currentTrans.amount}?</p>
            <div className="flex justify-between">
                <button onClick={() => setIsDeleting(false)} className="bg-red-700">No, go back</button>
                <button onClick={handleDelete} className="bg-green-700">Yes, delete</button>
            </div>
        </div>
    );

    return (
        <>
            {isDeleting ? confirmDeleteField : null}
            <button className="delete-btn" onClick={() => setIsDeleting(true)}>X</button>
        </>
    );
};