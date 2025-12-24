import React from 'react';
export interface IProductItemProps{
    
        id: number,
        image: string,
        title: string,
        description: string,
        price: number,
    
}
function ProductItem ({ image , title ,price} : IProductItemProps) {
    return (
        <div className='shadow w-[60%] rounded-[8px]'>

            <img className='rounded-[8px] w-[fit] mb-3' src={image} alt="" />
            <div className=' p-2'>
                <p className=' font-medium'>{title}</p>
                <p className=' font-extralight'>{price}</p>
            </div>
        </div>

    );
}

export default ProductItem;
