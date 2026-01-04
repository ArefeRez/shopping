"use client";

import CartShoppingItem from '@/component/CartShoppingItem';
import Container from '@/component/Container';
import { IProductItemProps } from '@/component/ProductItem';
import { useCartShoppingContext } from "@/context/CartShoppingContext";
import axios from 'axios';
import { useEffect, useState } from 'react';

const CartShopping = () => {
  const { cartItems } = useCartShoppingContext();
  const [data, setData] = useState<IProductItemProps[]>([]);

  useEffect(() => {
    axios(`http://localhost:3005/products`).then(result => {
      const { data } = result;
      setData(data)
    })

  }, []);
  return (
    <Container>
      <h1 className="font-bold my-5">Shopping cart</h1>

      {cartItems?.map((item) => (
        <CartShoppingItem key={item.id} {...item} />
      ))}

      <div className="shadow border rounded-[8px] p-[16px]">
        <h3>total price <span>
          {
            cartItems.reduce((total, items) => {
              let selectedProduct = data.find((product) => product.id === items.id)
              return total + (selectedProduct ? selectedProduct.price * items.qty : 0)
            }, 0)
          }
        </span></h3>
        <p>discount</p>
        <p>final price</p>
        <input
          className="border py-1 px-3 rounded-[8px] mt-4"
          type="text"
          placeholder="Enter discount code ..."
        />
        <button className="py-1 px-3 bg-sky-500 rounded-[8px] ml-3">
          Apply
        </button>
      </div>
    </Container>
  );
};

export default CartShopping;

