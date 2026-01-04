import Container from '@/component/Container';
import ProductItem, { IProductItemProps } from '@/component/ProductItem';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
 
async function store () {
    const result = await axios("http://localhost:3005/products");
    const data = result.data as IProductItemProps[];
    console.log(data.map(item => item.id));

    return (
        <Container>
            <h1 className='font-bold py-5'>store</h1>
            <div className='grid grid-cols-4 gap-2'>
                {data.map (item => (
               <div key={item.id}>
                <Link  href={`/store/${item.id}`}>
                    <ProductItem  {...item} />
                    </Link>
                   
               </div>
                        
                    
                    
                ))}
                
            </div>
        </Container>
    );
}

export default store;
