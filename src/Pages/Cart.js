import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem, incrementQuantity, decrementQuantity } from '../Features/cartSlice';

export const Cart = () => {
  const { cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  // Calculate total price
  let totalPrice = 0;
  cart.forEach((data) => {
    totalPrice += data.price * data.quantity;
  });

  // Calculate total quantity
  let totalQuantity = 0;
  cart.forEach((data) => {
    totalQuantity += data.quantity;
  });


  return (
    <div>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.map((data) => (
              <div
                key={data.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={data.image}
                  alt="Product"
                  className="w-full rounded-lg sm:w-40"
                />

                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => dispatch(incrementQuantity(data.id))}
                      >
                        +
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="text"
                        value={data.quantity}
                        min="1"
                      />
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => dispatch(decrementQuantity(data.id))}
                      >
                        -
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-bold ">Price:{data.price}</p>
                      <p className="font-bold">Total: {data.quantity * data.price}</p>
                      <p
                        onClick={() => dispatch(removeItem(data.id))}
                        className="cursor-pointer text-blue-500 hover:text-blue-700"
                      >
                        Remove
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total Quantity</p>
              <div>
                <p className="mb-1 text-lg font-bold">{totalQuantity}</p>
              </div>
              <p className="text-lg font-bold">Total: </p>
              <div>
                <p className="mb-1 text-lg font-bold">{totalPrice}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
