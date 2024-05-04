import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists } from "@/contexts/ListsContext"
import TransactionForm from "./TransactionForm";

export default function ExpenseTracker() {
    const lists = useLists();
    const currentList = useCurrentList();

    return (
        <>
            <h1>{lists[currentList].name}</h1>
            <TransactionForm />
        </>
    );
};