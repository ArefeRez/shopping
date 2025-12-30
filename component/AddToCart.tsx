"use client"


import { useCartShoppingContext } from "@/context/CartShoppingContext";
import { useContext } from "react";

interface IAddTocartProps{
    id: string
}
const AddToCart = ({ id } : IAddTocartProps) => {
    const {cartItems , handleIncreaseProductQty , getProductQty} = useCartShoppingContext();
    console.log(cartItems);
    return (
        <div>
            <div className='flex gap-2 mt-5'>
                        <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='px-3 py-1 bg-blue-400 rounded-[8px]'>+</button>
                        <p>{getProductQty (parseInt(id))}</p>
                        <button className='px-3 py-1 bg-blue-400 rounded-[8px]'>-</button>
                    </div>
        </div>
    );
}

export default AddToCart;
