import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-10">
          We'd love to hear from you! Reach out for inquiries, feedback, or partnership opportunities.
        </p>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            📞 Phone: <a href="tel:7979001897" className="text-blue-600 hover:underline">7979001897</a>
          </p>
          <p className="text-gray-700">
            📧 Email: <a href="mailto:arshadali7976@gmail.com" className="text-blue-600 hover:underline">arshadali7976@gmail.com</a>
          </p>
        </div>

        {/* Contact Form (Optional) */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent (dummy)!');
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
