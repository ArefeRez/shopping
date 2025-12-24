import Container from '@/component/Container';
import ProductItem from '@/component/ProductItem';
import Link from 'next/link';
import React from 'react';
const data = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg",
        title: "cat1",
        description: "",
        price: 23
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg",
        title: "cat2",
        description: "",
        price: 55
    }, {
        id: 3,
        image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg",
        title: "cat3",
        description: "",
        price: 45
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg",
        title: "cat4",
        description: "",
        price: 78
    }
]
const store = () => {
    return (
        <Container>
            <h1 className='font-bold py-5'>store</h1>
            <div className='grid grid-cols-4 gap-2'>
                {data.map (item => (
                    <Link key={item.id} href={`/store/${item.id}`}>
                    <ProductItem  {...item} />
                    </Link>
                    
                ))}
                
            </div>
        </Container>
    );
}

export default store;
