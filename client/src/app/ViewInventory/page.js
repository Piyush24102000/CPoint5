'use client'
import React, { useEffect, useState } from 'react'

const ViewInventory = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let getData = await fetch("https://cpoint5-three.vercel.app/api/getItems")
      let data = await getData.json()
      setData(data.data)
    }
    getData()
  }, [])
  return (
    <div>
      <h1 className="text-center mt-4 text-2xl">Inventory List</h1>
      <table className="table-auto mx-auto w-4/5 h-full mt-8 text-lg border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 text-center">{item.name}</td>
                  <td className="py-2 px-4 text-center">{item.price}</td>
                  <td className="py-2 px-4 text-center">{item.quantity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ViewInventory