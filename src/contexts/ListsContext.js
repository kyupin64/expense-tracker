"use client";
import { createContext, useContext, useEffect, useReducer, useRef } from "react";

export const ListsContext = createContext(null);
export const ListsDispatchContext = createContext(null);

export default function saveThings(lists) {
    localStorage.setItem("lists", JSON.stringify(lists));
};

export function ListsProvider({ children }) {
    const [lists, dispatch] = useReducer(listsReducer, {});
    const isInitialRender = useRef(true);

    useEffect(() => {
        const savedLists = JSON.parse(localStorage.getItem("lists"));
        if (savedLists) {
            dispatch({
                type: "restoreSave",
                savedLists: savedLists,
            });
        };
    }, []);
    
    useEffect(() => {
        if (!isInitialRender.current) {
            saveThings(lists);
        } else {
            isInitialRender.current = false;
        };
    }, [lists]);

    return (
        <ListsContext.Provider value={lists}>
            <ListsDispatchContext.Provider value={dispatch}>
                {children}
            </ListsDispatchContext.Provider>
        </ListsContext.Provider>
    );
};

export function useLists() {
    return useContext(ListsContext);
};

export function useListsDispatch() {
    return useContext(ListsDispatchContext);
};

function listsReducer(lists, action) {
    const currentList = action.currentList;
    const id = action.id;

    switch (action.type) {
        case "addList": {
            console.log("Added new expense tracker");
            return {...lists, [id]: {
                id: id,
                name: action.name,
                transactions: {},
            }};
        }
        case "addTransaction": {
            console.log("Added new transaction");
            const updatedLists = {...lists};

            updatedLists[currentList].transactions[id] = {
                id: id,
                text: action.text,
                amount: action.amount,
            };

            return updatedLists;
        }
        case "changeTransaction": {
            console.log("Edited transaction");
            const updatedLists = {...lists};

            updatedLists[currentList].transactions[id] = {
                id: id,
                text: action.text,
                amount: action.amount,
            };

            return updatedLists;
        }
        case "deleteTransaction": {
            console.log("Deleted transaction");
            const updatedLists = {...lists};

            delete updatedLists[currentList].transactions[id];

            return updatedLists;
        }
        case "restoreSave": {
            const savedLists = action.savedLists;

            return savedLists;
        };
    };
};
