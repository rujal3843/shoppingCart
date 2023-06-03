import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCategoryQuery } from '../app/ShopApi';

export const Category = () => {
  const {category} = useParams();
  const { data, isLoading } = useGetCategoryQuery(category);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  if (isLoading) return <div>Loading.............</div>

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredData = data?.filter(item => {
    return item.price >= minPrice && item.price <= maxPrice;
  });

  return (
    <>
       <input type="number" placeholder="Min Price" value={minPrice} onChange={handleMinPriceChange} 
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
      <input type="number" placeholder="Max Price" value={maxPrice} onChange={handleMaxPriceChange} 
       className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5'>
        {filteredData &&
          filteredData?.map((item) => {
            return (
              <div className='shadow-2xl hover:scale-105 ease-in duration-300 cursor-pointer' key={item.id} >

                <img src={item.image} alt='' className='h-[200px]' />
                <h1 className=' text-center'>{item.title}</h1>
                <p className='font-bold'>Rs. {item.price}</p>
                <button type="submit" className="px-3 py-2 bg-blue-500 text-white font-bold rounded-md shadow hover:bg-blue-600 hover:shadow-md mt-5"
               
                >
                  Add to Cart
                </button>

              </div>
            );
          })}
      </div>
     

    </>
  )
}