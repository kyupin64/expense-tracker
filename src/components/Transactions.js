import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists } from "@/contexts/ListsContext";

export default function Transactions() {
    const lists = useLists();
    const currentList = useCurrentList();

    const currentTrans = lists[currentList].transactions;
    const transactionsArr = Object.keys(currentTrans).map((key) => {
        return (
            <div key={currentTrans[key].id} className="flex justify-between gap-10 border-2 border-white p-1">
                <p>{currentTrans[key].text}</p>
                <p>${currentTrans[key].amount}</p>
            </div>
        );
    });

    return (
        <div className="p-4">
            <h2>History</h2>
            <div className="flex flex-col-reverse gap-4 p-2">{transactionsArr}</div>
        </div>
    );
};