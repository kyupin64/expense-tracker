import { useCurrentList } from "@/contexts/CurrentListContext";
import { useLists } from "@/contexts/ListsContext";
import { useEffect, useState } from "react";

export default function Overview() {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const lists = useLists();
    const currentList = useCurrentList();

    useEffect(() => {
        const currentTrans = lists[currentList]?.transactions || {};
        let incomeCount = 0;
        let expenseCount = 0;

        if (Object.keys(currentTrans).length > 0) {
            Object.entries(currentTrans).forEach(([key, value]) => {
                if (currentTrans[key]) {
                    const amount = Number(value.amount);
                    if (amount > 0) {
                        incomeCount += amount;
                    } else if (amount < 0) {
                        expenseCount += amount;
                    };
                };
            });
        };

        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [lists]);

    return (
        <div className="flex flex-col gap-4 items-center w-64 px-4">
            <div className="balance w-full">
                <h2>Balance</h2>
                <p>${income + expense}</p>
            </div>
            <div className="flex justify-between w-full">
                <div className="income">
                    <h3>Income:</h3>
                    <p>${income}</p>
                </div>
                <div className="expense">
                    <h3>Expense:</h3>
                    <p>${expense}</p>
                </div>
            </div>
        </div>
    );
};