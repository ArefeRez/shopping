import AddToCart from '@/component/AddToCart';
import Container from '@/component/Container';
import { IProductItemProps } from '@/component/ProductItem';
import axios from 'axios';
import { promises } from 'dns';
import { SearchParams } from 'next/dist/server/request/search-params';
import React from 'react';

interface IProductProps{
    params: Promise<{id: string}>
    SearchParams:Promise<{}>
}
async function product ({params} : IProductProps) {
   const {id}= await params;
    const result= await axios(`http://localhost:3005/products/${id}`);
    const data= result.data as IProductItemProps;
    return (
        <Container>
            <div className='grid grid-cols-12 p-4 mt-8 shadow'>
                <div className='col-span-3 mr-3'>
                    <img src={data.image} alt="" />
                </div>
                <div className='col-span-9'>
                    <h2 className='font-bold'>{data.title}</h2>
                    <p className='text-gray-700'>{data.description}</p>
                    <p className='font-medium'>price : <span>{data.price}</span></p>
                    <AddToCart id={String(data.id)}/>
                </div>
            </div>
        </Container>

    );
}

export default product;
