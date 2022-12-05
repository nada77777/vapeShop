import { createContext, useContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    // { count: 1, description: "빠져나올수 없는 진한 복숭아의 늪 !", id: "1312", image: "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_zummev.jpg", percent: 32, price: 35000, sale: 24000, title: "[VPS] 피치 홀릭 0.3 (폐호흡)" }
    const onAddCartItems = (item) => {
        console.log('context_item', item);
        console.log('context_item', item.id);
        // cartItems[item.id] = item;
        setCartItems((cartItems) => ([...cartItems, item]))
    };

    const deleteCartItem = (item) => {
        console.log(item.newId);
        setCartItems((cartItems) => cartItems.filter((cartItem) => cartItem.newId !== item.newId));
    };

    console.log(cartItems);

    return (<cartContext.Provider value={{ cartItems, onAddCartItems, deleteCartItem }}>
        {children}
    </cartContext.Provider>)
};

export function useCartContext() {
    return useContext(cartContext);
};