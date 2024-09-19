import React, { useState, useEffect } from 'react'

export function UpdateServiceForm({ service, onUpdateService }) {
  const [name, setName] = useState(service.name)
  const [description, setDescription] = useState(service.description)
  const [price, setPrice] = useState(service.price.toString())

  useEffect(() => {
    setName(service.name)
    setDescription(service.description)
    setPrice(service.price.toString())
  }, [service])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && description && price) {
      onUpdateService({ ...service, name, description, price: parseFloat(price) })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="update-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="update-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="update-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id="update-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="update-price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
        <input
          type="number"
          id="update-price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          min="0"
          step="0.01"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
      >
        Update Service
      </button>
    </form>
  )
}