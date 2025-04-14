import { createRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { RootRoute } from './_root'
import ServiceCard from '../components/serviceCard';

import hero from '../assets/mariano-baraldi-a08GO4UMpzw-unsplash.jpg'

export const ServicesRoute = createRoute({
  path: '/services',
  getParentRoute: () => RootRoute,
  component: Services,
})

function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Construction Links</title>
        <meta name="description" content="Explore our services from fundi matching to real estate management, material supply, and construction consultancy." />
      </Helmet>


      <section className="relative bg-blue-900 text-white py-24 px-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${hero})` }} />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our wide range of services designed to meet all your construction and real estate needs. We are your trusted partner from start to finish.
          </p>
        </div>
      </section>

      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Service Offerings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Construction Consultancy"
            description="Expert advice and strategies for efficient project planning, budgeting, and execution."
            icon="🏗️"
          />
          <ServiceCard
            title="Fundi / Contractor Services"
            description="Access reliable and skilled contractors for your construction projects."
            icon="👷‍♂️"
          />
          <ServiceCard
            title="Real Estate Management"
            description="Comprehensive property management services to maximize the value of your real estate."
            icon="🏠"
          />
          <ServiceCard
            title="Construction Material Supply"
            description="Connecting you with high-quality materials for any size project."
            icon="🔨"
          />
          <ServiceCard
            title="Machinery & Equipment Sourcing"
            description="Get the right machinery and equipment for your construction needs."
            icon="🛠️"
          />
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">How Our Services Benefit You</h3>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          Our services are designed to make your construction projects run more smoothly, save you time, and reduce costs by connecting you with the right professionals and resources.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Construction Consultancy</h4>
            <p className="text-gray-600">
              Our expert consultants provide strategic guidance throughout your project lifecycle, ensuring that your projects are completed on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Fundi / Contractor Services</h4>
            <p className="text-gray-600">
              Our network of skilled fundis and contractors ensures that you have access to the best professionals in the industry to bring your construction vision to life.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Real Estate Management</h4>
            <p className="text-gray-600">
              We offer comprehensive property management services that handle everything from property acquisition to rental management, ensuring that your properties are always performing at their best.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Construction Material Supply</h4>
            <p className="text-gray-600">
              We help source high-quality construction materials from trusted suppliers to ensure that your projects are built with the best resources available.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Machinery and Equipment Sourcing</h4>
            <p className="text-gray-600">
              From cranes to mixers, we connect you with the best construction machinery and equipment, ensuring efficiency and cost savings for your project.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 px-8 bg-blue-900 text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="text-lg mb-6">Contact us today to discuss your construction and real estate needs. Our team is ready to help you succeed.</p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full hover:bg-blue-700 hover:text-white transition">
          Contact Us
        </button>
      </section>
    </>
  );
}
