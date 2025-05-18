const About: React.FC = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our platform revolutionizes coal transportation in India by delivering real-time, multi-modal visibility across rail, road, and sea logistics. Designed to meet the complex challenges of the coal supply chain, our system empowers stakeholders with end-to-end transparency and smarter decision-making tools.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Our Mission</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
                To streamline coal logistics by providing a centralized digital platform that improves coordination, reduces transit time, and enhances supply chain accountability from mine to delivery point.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Why It Matters</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
                Coal remains a critical energy resource in India. However, inefficiencies, delays, and lack of visibility plague its transportation. Our solution bridges these gaps by enabling automated tracking, real-time updates, and performance analytics for all delivery modes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 text-base leading-relaxed mb-4">
                <li>Live tracking of rail, road, and sea shipments</li>
                <li>Centralized dashboard with role-based access</li>
                <li>Smart notifications for delays and exceptions</li>
                <li>API integrations with GPS, transport providers, and ERP systems</li>
                <li>Actionable insights via analytics and reporting</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Who We Serve</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
                Our platform is built for coal suppliers, power plants, logistics companies, and regulatory bodies. By providing a single source of truth for coal movement, we enable collaboration and efficiency across the entire supply chain.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">Our Vision</h2>
            <p className="text-gray-700 text-base leading-relaxed">
                To become India’s leading digital infrastructure for coal supply chain management—making it transparent, efficient, and future-ready.
            </p>
        </section>
    )
}

export default About