import axios from 'axios';
import React, { useState, type ChangeEvent, type FormEvent } from 'react';

const orderRoutes = 'http//localhost:5000/api/orders'


interface FormData {
  personName: string;
  firmName: string;
  contact: string;
  email: string;
  deliveryLocation: string;
}

const Order: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    personName: '',
    firmName: '',
    contact: '',
    email: '',
    deliveryLocation: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await axios.post(orderRoutes , formData  ) 

      console.log("The respose is", response)
      setFormData({
        personName : '' ,
        firmName : '' ,
        contact: '' ,
        email : '' ,
        deliveryLocation : ''
      })


    }
    catch(error){
      console.log(error)
    }
  
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Delivery Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Person Name */}
        <div>
          <label className="block text-gray-700 font-medium">Person Name</label>
          <input
            type="text"
            name="personName"
            value={formData.personName}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Firm Name */}
        <div>
          <label className="block text-gray-700 font-medium">Firm Name</label>
          <input
            type="text"
            name="firmName"
            value={formData.firmName}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-gray-700 font-medium">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Delivery Location */}
        <div>
          <label className="block text-gray-700 font-medium">Delivery Location</label>
          <textarea
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
