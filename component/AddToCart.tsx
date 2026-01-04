"use client"


import { useCartShoppingContext } from "@/context/CartShoppingContext";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from 'axios';
import { IProductItemProps } from '@/component/ProductItem';

interface IAddTocartProps{
    id: string
}
const AddToCart = ({ id } : IAddTocartProps) => {
    const {cartItems, handleIncreaseProductQty , getProductQty , handleDecreaseProductQty , handleRemoveProduct } = useCartShoppingContext();
    const [data, setData] = useState({} as IProductItemProps);

    useEffect(() => {
        axios(`http://localhost:3006/products/${id}`).then(result => {
            const { data } = result;
            setData(data);
        }).catch(error => {
            console.error('Error fetching product:', error);
        });
    }, [id]);

    // console.log(cartItems);
    return (
        <div>
            <div className='flex gap-2 mt-5'>
                        <button onClick={() => handleIncreaseProductQty(parseInt(id), data.price)} className='px-3 py-1 bg-blue-400 rounded-[8px] cursor-pointer'>+</button>
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
