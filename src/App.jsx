import React, { useState } from 'react'
import { ServiceList } from './components/ServiceList'
import { AddServiceForm } from './components/AddServiceForm'
import { UpdateServiceForm } from './components/UpdateServiceForm'

export default function App() {
  const [services, setServices] = useState([])
  const [serviceToUpdate, setServiceToUpdate] = useState(null)

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }])
  }

  const updateService = (updatedService) => {
    setServices(services.map(service => 
      service.id === updatedService.id ? updatedService : service
    ))
    setServiceToUpdate(null)
  }

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Healthcare Services Management</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add New Service</h2>
              <AddServiceForm onAddService={addService} />
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">Services List</h2>
              <ServiceList 
                services={services} 
                onDeleteService={deleteService}
                onUpdateService={setServiceToUpdate}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Update Service</h2>
              {serviceToUpdate && (
                <UpdateServiceForm 
                  service={serviceToUpdate} 
                  onUpdateService={updateService} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}