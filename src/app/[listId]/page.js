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
            <div className="flex flex-col justify-around items-center gap-10 w-full p-5">
                <h1>{lists[currentList].name}</h1>
                <div className="flex flex-wrap justify-evenly gap-10 w-full">
                    <Overview />
                    <Transactions />
                    <TransactionForm />
                </div>
            </div>
        );
    } else {
        return null;
    };
};