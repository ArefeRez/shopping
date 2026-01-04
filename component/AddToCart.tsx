"use client"


import { useCartShoppingContext } from "@/context/CartShoppingContext";
import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface IAddTocartProps{
    id: string
}
const AddToCart = ({ id } : IAddTocartProps) => {
    const {cartItems, handleIncreaseProductQty , getProductQty , handleDecreaseProductQty , handleRemoveProduct } = useCartShoppingContext();
    // console.log(cartItems);
    return (
        <div>
            <div className='flex gap-2 mt-5'>
                        <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='px-3 py-1 bg-blue-400 rounded-[8px] cursor-pointer'>+</button>
                        <p>{getProductQty (parseInt(id))}</p>
                        <button onClick={() => handleDecreaseProductQty(parseInt(id))} className='px-3 py-1 bg-blue-400 rounded-[8px] cursor-pointer'>-</button>
                    </div>
                    <button className="text-red-600 font-bold text-2xl mt-3 cursor-pointer" onClick={() => handleRemoveProduct(parseInt(id))}>
                        <RiDeleteBin6Fill/>
                    </button>
                    
        </div>
    );
}

export default AddToCart;
