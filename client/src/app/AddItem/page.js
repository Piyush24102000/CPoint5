'use client'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const notify = (msg) => toast(msg);

  async function handleSubmit(e) {
    e.preventDefault()
    let data = {
      name, price, quantity
    }
    try {
      let submitData = await fetch('https://cpoint5-three.vercel.app/api/addItems', {
        body: JSON.stringify(data),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      let responseData = await submitData.json();
      notify(responseData.message)
    }
    catch (error) {
      console.error('Error submitting data:', error.message);
      notify(error.message)
    }
  }
  return (
    <div>
      <ToastContainer />
      <h1 className="text-center mt-4 text-4xl">Add Inventory</h1>
      <div className="flex items-center justify-center mt-16">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemname">
                Item Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemname"
                type="text"
                placeholder="itemname"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemprice">
                Item Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemprice"
                type="number"
                placeholder="itemprice"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemquantity">
                Item Quantity
              </label>
              <input
                onChange={(e) => setQuantity(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemquantity"
                type="number"
                placeholder="itemquantity"
                required
              />
            </div>
            <div className="flex items-center justify-between ">
              <button
                onClick={(e) => { handleSubmit(e) }}
                className="bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Add Item
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">&copy;2024 Piyush Tale, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
