import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Multi-Modal Coal Transportation Visibility
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Real-time tracking, data-driven logistics, and supply chain transparency for coal across rail, road, and sea.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            onClick={() => window.alert('More details coming soon!')}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Monitor shipments across all transport modes with live GPS integration and smart delay alerts.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Gain actionable insights and performance metrics through an intelligent, role-based dashboard.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Stakeholder Access</h3>
              <p className="text-gray-600">
                Enable secure access for suppliers, transporters, dispatch teams, and government officials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Improve Your Coal Logistics?
          </h2>
          <p className="text-gray-700 mb-6">
            Get started with smart, multimodal supply chain visibility.
          </p>
          <button
            onClick={() => window.alert('Contact form coming soon!')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
