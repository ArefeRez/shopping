import axios from "axios";
import { useEffect, useState } from "react";
import { IProductItemProps } from "./ProductItem";
import AddToCart from "./AddToCart";

interface ICartItemProps{
    id: number,
    qty: number,
}
const CartShoppingItem = ({id, qty}:ICartItemProps) => {
    const [data, setData] = useState({} as IProductItemProps);

    useEffect(() => {
        axios(`http://localhost:3006/products/${id}`).then(result => { const {data} = result;
        setData(data)})
        
    }, []);

    return (
      
            <div className='bg-gray-300 grid grid-cols-12 rounded-[8px] mb-5 '>
            <img className='col-span-3' src={data.image} alt="" />
            <div className='col-span-9 p-[32px]'>
                <h2 className='font-bold'>Name Product:  <span>{data.title}</span></h2>
                <p>Number: {qty}</p>
                <p>Price: $<span>{data.price}</span> </p>
                <AddToCart id={id.toString()} />
            </div>
          </div>
        
    );
}

export default CartShoppingItem;
