import { useCurrentList } from "@/contexts/CurrentListContext";
import { useListsDispatch } from "@/contexts/ListsContext"
import { useState } from "react";

export default function TransactionForm() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const dispatch = useListsDispatch();
    const currentList = useCurrentList();

    const handleClick = () => {
        if (text !== "" && Number(amount) !== 0) {
            const newId = Date.now();
            dispatch({
                type: "addTransaction",
                id: newId,
                text: text,
                amount: amount,
                currentList: currentList,
            });
            setText("");
            setAmount(0);
        };
    };

    return (
        <div className="flex flex-col gap-4 w-64 items-center">
            <h2>Add new transaction</h2>
            <div className="flex flex-col items-center w-full gap-2">
                <label>Description:</label>
                <input placeholder="Name/description" value={text} className="w-full" onChange={e => setText(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-center w-full gap-2">
                <label>Amount:</label>
                <p className="text-center">(negative = expense; positive = income)</p>
                <input type="number" placeholder="Amount" value={amount} className="w-full" onChange={e => setAmount(e.target.value)}></input>
            </div>
            <button className="w-full" onClick={handleClick}>Submit</button>
        </div>
    );
};