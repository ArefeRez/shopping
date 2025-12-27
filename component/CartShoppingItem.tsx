import React from 'react';

const CartShoppingItem = () => {
    return (
      
            <div className='bg-gray-300 grid grid-cols-12 rounded-[8px] mb-5 '>
            <img className='col-span-3' src="" alt="" />
            <div className='col-span-9 p-[32px]'>
                <h2 className='font-bold'>Name Product</h2>
                <p>Number</p>
                <p>Price</p>
                <div className='flex gap-2 mt-5'>
                        <button className='px-3 py-1 bg-blue-400 rounded-[8px]'>+</button>
                        <p>2</p>
                        <button className='px-3 py-1 bg-blue-400 rounded-[8px]'>-</button>
                    </div>
            </div>
          </div>
        
    );
}

export default CartShoppingItem;
