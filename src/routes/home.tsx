import { createRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { RootRoute } from './_root'
import ServiceCard from '../components/serviceCard'

export const HomeRoute = createRoute({
  path: '/',
  getParentRoute: () => RootRoute,
  component: Home,
})

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Construction Links & Advisory Centre</title>
        <meta name="description" content="One-stop construction and real estate hub in Kenya. Get expert advice, tools, and support for your projects." />
      </Helmet>

      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Building Kenya’s Future, One Project at a Time
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto text-lg">
          Your trusted partner in construction, real estate management, and equipment supply.
        </p>
        <div className="mt-6">
          <a href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Explore Our Services
          </a>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <ServiceCard
            title="Construction Consulting"
            description="Get expert advice and project guidance from certified engineers and industry specialists."
            icon="🏗️"
          />
          <ServiceCard
            title="Real Estate Services"
            description="Property management, site assessments, and development planning — all under one roof."
            icon="🏘️"
          />
          <ServiceCard
            title="Equipment Supply"
            description="Rent or buy high-quality construction equipment with full support and logistics."
            icon="🛠️"
          />
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Let’s Build Something Great Together</h3>
        <p className="mb-6">Contact us today and take the first step toward your next successful project.</p>
        <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-100 transition">
          Contact Us
        </a>
      </section>
    </>
  )
}