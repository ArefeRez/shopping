import Container from '@/component/Container';
import React from 'react';

const product = () => {
    return (
        <Container>
            <div className='grid grid-cols-12 p-4 mt-8 shadow'>
                <div className='col-span-3 mr-3'>
                    <img src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg" alt="" />
                </div>
                <div className='col-span-9'>
                    <h2 className='font-bold'>product1</h2>
                    <p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, dicta debitis nesciunt molestiae recusandae nobis. Ea commodi eaque quo esse libero explicabo praesentium saepe hic est. Minima suscipit dolorum error!</p>
                    <p className='font-medium'>price : <span>$5</span></p>
                    <div className='flex gap-2 mt-5'>
                        <button className='px-3 py-1 bg-blue-400 rounded-[8px]'>+</button>
                        <p>2</p>
                        <button className='px-3 py-1 bg-blue-400 rounded-[8px]'>-</button>
                    </div>
                </div>
            </div>
        </Container>

    );
}

export default product;
