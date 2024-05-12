"use client";
import { useLists } from "@/contexts/ListsContext"
import Overview from "./Overview";
import Transactions from "./Transactions";
import TransactionForm from "./TransactionForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ExpenseTracker({ params }) {
    const router = useRouter();
    const lists = useLists();
    const currentList = params.listId;

    useEffect(() => {
        if (lists[currentList] === undefined) {
            router.push("/");
        };
    }, [currentList, lists, router]);
    
    if (lists[currentList] !== undefined) {
        return (
            <>
                <h1>{lists[currentList].name}</h1>
                <Overview />
                <Transactions />
                <TransactionForm />
            </>
        );
    } else {
        return null;
    };
};