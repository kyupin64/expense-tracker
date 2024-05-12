import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists } from "@/contexts/ListsContext";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function Transactions() {
    const lists = useLists();
    const currentList = useCurrentList();
    const currentTrans = lists[currentList]?.transactions || {};
    
    const handleMouseEnter = e => {
        const buttons = e.currentTarget.childNodes[0];
        buttons.classList.remove("hidden");
        buttons.classList.add("flex");
    };
    
    const handleMouseLeave = e => {
        const buttons = e.currentTarget.childNodes[0];
        buttons.classList.remove("flex");
        buttons.classList.add("hidden");
    };

    let transactionsArr;
    if (Object.keys(currentTrans).length > 0) {
        transactionsArr = Object.keys(currentTrans).map((key) => {
            if (currentTrans[key]) {
                return (
                    <div key={currentTrans[key].id} className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="hidden absolute -top-7 z-10 gap-1">
                            <DeleteButton itemKey={currentTrans[key].id} />
                            <EditButton itemKey={currentTrans[key].id} />
                        </div>
                        <div className="transactions flex justify-between gap-10 w-full p-1">
                            <p>{currentTrans[key].text}</p>
                            <p>${currentTrans[key].amount}</p>
                        </div>
                    </div>
                );
            };
        });
    };

    return (
        <div className="history w-64 flex flex-col items-center gap-4 p-4">
            <h2>History</h2>
            {Object.keys(currentTrans).length > 0 ? (
                <div className="flex flex-col-reverse gap-4 w-full">{transactionsArr}</div>
            ) : (
                <p>No transactions yet</p>
            )}
        </div>
    );
};