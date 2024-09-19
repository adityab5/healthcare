import React from 'react'

export function ServiceList({ services, onDeleteService, onUpdateService }) {
  return (
    <ul className="space-y-4">
      {services.map(service => (
        <li key={service.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <p className="text-gray-800 font-medium mb-4">Price: ₹{service.price.toFixed(2)}</p>
          <div className="flex space-x-2">
            <button 
              onClick={() => onUpdateService(service)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Update
            </button>
            <button 
              onClick={() => onDeleteService(service.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}