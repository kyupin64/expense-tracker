import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists } from "@/contexts/ListsContext"
import TransactionForm from "./TransactionForm";
import Overview from "./Overview";

export default function ExpenseTracker() {
    const lists = useLists();
    const currentList = useCurrentList();

    return (
        <>
            <h1>{lists[currentList].name}</h1>
            <Overview />
            <TransactionForm />
        </>
    );
};