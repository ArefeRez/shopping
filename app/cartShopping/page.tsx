"use client";

import CartShoppingItem from '@/component/CartShoppingItem';
import Container from '@/component/Container';
import { useCartShoppingContext } from "@/context/CartShoppingContext";
import { useEffect, useState } from 'react';

const CartShopping = () => {
  const { cartItems } = useCartShoppingContext();
  return (
    <Container>
      <h1 className="font-bold my-5">Shopping cart</h1>

      {cartItems?.map((item) => (
        <CartShoppingItem key={item.id} {...item} />
      ))}

      <div className="shadow border rounded-[8px] p-[16px]">
        <h3>total price: $
          {
            cartItems.reduce((total, item) => total + item.price * item.qty, 0)
          }
        </h3>
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

