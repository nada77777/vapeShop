import { createContext, useContext, useState } from "react";

const interestContext = createContext();

export function InterestContextProvider({ children }) {
    const [interestItems, setInterestItems] = useState([{}]);
    const addInterestItem = (item) => {

        setInterestItems((interestItems) => {
            const updated = [...interestItems];
            return updated.map((interestItem) => {
                if (interestItem.id === item.id) {
                    return { interestItem };
                }
                return item;
            });
        });
        console.log(interestItems);
    };
    return (
        <interestContext.Provider value={{ interestItems, addInterestItem }}>
            {children}
        </interestContext.Provider>
    );
};

export function useInterestContext() {
    return useContext(interestContext);
};