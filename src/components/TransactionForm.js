import { useCurrentList } from "@/contexts/CurrentListContext";
import { useListsDispatch } from "@/contexts/ListsContext"
import { useState } from "react";

export default function TransactionForm() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const dispatch = useListsDispatch();
    const currentList = useCurrentList();

    const handleClick = () => {
        if (text !== "") {
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
        <div className="flex flex-col gap-3">
            <h2>Add new transaction</h2>
            <label>Description:</label>
            <input placeholder="Name/description" value={text} onChange={e => setText(e.target.value)}></input>
            <label>Amount:</label>
            <p>(negative = expense; positive = income)</p>
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};