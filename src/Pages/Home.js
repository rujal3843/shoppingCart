import React from 'react'
import { useGetAllQuery } from '../app/ShopApi'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
const {data,isLoading} = useGetAllQuery();

const nav = useNavigate();

if (isLoading) return <div>Loading.............</div>



  return (
    <>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5'>
      {data &&
        data?.map((item) => {
          return (
            <div onClick={()=> nav(`/single/${item.id}`)} key={item.id} className='shadow-2xl hover:scale-105 ease-in duration-300 cursor-pointer' >

              <img src={item.image} alt='' className='h-[200px]' />
              <h1 className=' text-center'>{item.title}</h1>

            </div>
          );
        })}
    </div>
    </>
  )
}
