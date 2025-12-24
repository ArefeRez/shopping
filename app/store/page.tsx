import Container from '@/component/Container';
import ProductItem, { IProductItemProps } from '@/component/ProductItem';
import Link from 'next/link';
import React from 'react';
 
async function store () {
    const result = await fetch("http://localhost:3003/products");
    const data = await  result.json() as IProductItemProps[];
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
