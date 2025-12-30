"use client"
import React, { createContext, useContext, useState } from "react";

type CartShoppingProviderProps = {
    children: React.ReactNode;
};

type CartItem = {
    id: number;
    qty: number;
};

type TCartShoppingContext = {
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: number) => void;
    getProductQty: (id: number) => number;
    cartTotalQty: number;
};

const CartShoppingContext = createContext({} as TCartShoppingContext);

// custom hook
export const useCartShoppingContext = () => {
    return useContext(CartShoppingContext);
};

export function CartShoppingProvider({ children }: CartShoppingProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);



    const cartTotalQty = cartItems.reduce((totalQty , item)=>{
        return totalQty + item.qty
    } , 0)  


    const getProductQty= (id : number) => {
        return cartItems.find(item => item.id == id)?.qty || 0
    }

//1.es gibt
//2. es gibt und wir wollen mehr machen
//3.es gibt nicht
const handleIncreaseProductQty = (id : number) => {
    setCartItems((currentItem) => {
        let isNotProductExist = currentItem.find((item) => item.id == id) == null;

        if(isNotProductExist){
            return [...currentItem,{id : id, qty: 1}];
        } else {
            return currentItem.map((item) => {
                if(item.id == id) {
                    return {
                        ...item,
                        qty : item.qty + 1,
                    };
                    
                }else{
                        return item;
                    }
            })
        }
    }
)}    
    return (
        <CartShoppingContext.Provider value={{ cartItems, handleIncreaseProductQty ,getProductQty , cartTotalQty }}>
            {children}
        </CartShoppingContext.Provider>
    );
}
