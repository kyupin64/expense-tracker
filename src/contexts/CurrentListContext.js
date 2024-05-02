import { createContext, useContext, useState } from "react";

export const CurrentListContext = createContext(null);
export const SetCurrentListContext = createContext(null);

export function CurrentListProvider({ children }) {
    const [currentList, setCurrentList] = useState("");

    return (
        <CurrentListContext.Provider value={currentList}>
            <SetCurrentListContext.Provider value={setCurrentList}>
                {children}
            </SetCurrentListContext.Provider>
        </CurrentListContext.Provider>
    );
};

export function useCurrentList() {
    return useContext(CurrentListContext);
};

export function useSetCurrentList() {
    return useContext(SetCurrentListContext);
};