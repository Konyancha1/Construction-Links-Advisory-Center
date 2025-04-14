import { createRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { RootRoute } from './_root';

import hero from '../assets/fatemeh-rezvani-lTnlAVGlamc-unsplash.jpg';
import mission from '../assets/pexels-akinvictor-10202865.jpg';
import ServiceCard from '../components/serviceCard';

export const AboutRoute = createRoute({
  path: '/about',
  getParentRoute: () => RootRoute,
  component: About,
})

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Construction Links</title>
        <meta name="description" content="Learn about our mission to simplify construction and real estate in Kenya through a unified platform." />
      </Helmet>
      
      <section className="relative bg-blue-900 text-white py-24 px-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${hero})` }} />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Transforming Construction and Real Estate in Kenya</h2>
          <p className="text-lg">We bring together contractors, suppliers, and property experts to support development in Kenya.</p>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Mission</h3>
        <p className="text-lg text-center max-w-2xl mx-auto">Our mission is to simplify the construction and real estate process in Kenya, fostering collaboration and building stronger communities by providing an easy-to-use platform for all stakeholders.</p>
        <div className="mt-8 text-center">
          <img src={mission} alt="Mission Image" className="max-w-full h-auto rounded-lg" />
        </div>
      </section>

      <section className="py-16 px-8">
        <h3 className="text-3xl font-semibold text-center mb-8">What We Do</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <span role="img" aria-label="construction-consultation">🏗️</span>
            </div>
            <h4 className="text-xl font-semibold">Construction Consultation</h4>
            <p className="text-lg">We offer expert advice and consultations for your construction projects, from planning to execution.</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <span role="img" aria-label="real-estate">🏠</span>
            </div>
            <h4 className="text-xl font-semibold">Real Estate Management</h4>
            <p className="text-lg">Our platform helps manage properties efficiently, from acquisition to rental management and everything in between.</p>
          </div>
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <span role="img" aria-label="building-materials">🔨</span>
            </div>
            <h4 className="text-xl font-semibold">Supply of Building Materials</h4>
            <p className="text-lg">We connect contractors and suppliers to ensure quality materials are available for every project.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Why Choose Us</h3>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          We stand out because of our deep local expertise, our reliable network of contractors and suppliers, and our commitment to supporting the growth of the Kenyan construction and real estate sectors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Local Expertise"
            description="Our team has deep local knowledge to help navigate the specific challenges of the Kenyan construction and real estate landscape."
            icon="💼"
          />

          <ServiceCard
            title="End-to-End Solutions"
            description="We offer comprehensive, end-to-end solutions that cover everything from project initiation to completion, ensuring seamless experiences for contractors, suppliers, and property owners."
            icon="🏗️"
          />

          <ServiceCard
            title="Trusted Network"
            description="We have built a strong network of trusted professionals, from contractors to property managers, ensuring you always have access to reliable services and high-quality products."
            icon="🤝"
          />
        </div>
      </section>
    </>
  );
}

