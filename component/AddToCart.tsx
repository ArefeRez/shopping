"use client"


import { useCartShoppingContext } from "@/context/CartShoppingContext";
import { useContext } from "react";

interface IAddTocart{
    id: string
}
const AddToCart = ({ id } : IAddTocart) => {
    const {cartItems , handleIncreaseProductQty} = useCartShoppingContext();
    console.log(cartItems);
    return (
        <div>
            <div className='flex gap-2 mt-5'>
                        <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='px-3 py-1 bg-blue-400 rounded-[8px]'>+</button>
                        <p>2</p>
                        <button className='px-3 py-1 bg-blue-400 rounded-[8px]'>-</button>
                    </div>
        </div>
    );
}

export default AddToCart;
