import { createContext, useContext, useReducer } from "react";

export const ListsContext = createContext(null);
export const ListsDispatchContext = createContext(null);

export function ListsProvider({ children }) {
    const [lists, dispatch] = useReducer(listsReducer, {});

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
    const newId = action.id;

    switch (action.type) {
        case "addList": {
            console.log("Added new expense tracker");
            return {...lists, [newId]: {
                id: newId,
                name: action.name,
                transactions: {},
            }};
        }
        case "addTransaction": {
            console.log("Added new transaction");
            const updatedLists = {...lists};

            updatedLists[currentList].transactions[newId] = {
                id: newId,
                text: action.text,
            };

            return updatedLists;
        }
        case "changeTransaction": {
            console.log("Edited transaction");
            return null;
        }
        case "deleteTransaction": {
            console.log("Deleted transaction");
            return null;
        };
    };
};