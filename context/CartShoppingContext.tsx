"use client"
import React, { createContext, useContext, useState } from "react";

type CartShoppingProviderProps = {
    children: React.ReactNode;
};

type CartItem = {
    id: number;
    qty: number;
    price: number;
};

type TCartShoppingContext = {
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: number, price: number) => void;
    getProductQty: (id: number) => number;
    cartTotalQty: number;
    handleDecreaseProductQty: (id: number) => void;
    handleRemoveProduct: (id: number) => void;
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
const handleIncreaseProductQty = (id : number, price: number) => {
    setCartItems((currentItem) => {
        let isNotProductExist = currentItem.find((item) => item.id == id) == null;

        if(isNotProductExist){
            return [...currentItem,{id : id, qty: 1, price: price}];
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
//1.es gibt nur eins
//2.es gibt mher und man will wenig machen
//3.das ist nicht unsere mittel
const handleDecreaseProductQty = (id: number) => {
    setCartItems(currentItem =>{
        let isLastOne = currentItem.find(item => item.id == id)?.qty == 1 
        if(isLastOne){
            return currentItem.filter(item => item.id != id)
        }else{
            return currentItem.map(item=>{
                if(item.id == id) {
                    return {
                        ...item,
                        qty : item.qty - 1,
                    };
                }else{
                      return item;  
                }
            })
        }
    })
}  
const handleRemoveProduct = (id: number) => {
    setCartItems((currentItem) => {
        return currentItem.filter(item => item.id !== id)
    })
}
    return (
        <CartShoppingContext.Provider value={{ cartItems, handleIncreaseProductQty ,getProductQty , cartTotalQty , handleDecreaseProductQty , handleRemoveProduct}}>
            {children}
        </CartShoppingContext.Provider>
    );
}
