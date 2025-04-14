import { createRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { RootRoute } from './_root'

export const ContactRoute = createRoute({
  path: '/contact',
  getParentRoute: () => RootRoute,
  component: Contact,
})

function Contact() {
    return (
    <>
        <Helmet>
            <title>Contact Us | Construction Links</title>
            <meta name="description" content="Get in touch with us for all your construction and real estate needs. Reach out via phone, email, or visit us at our office." />
        </Helmet>

        <section className="py-16 px-8 bg-white">
            <div className="max-w-2xl mx-auto">
                <div className="border-t-1 border-b-1 border-gray-900 py-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-blue-900 mb-6">Get In Touch</h3>
                        <div className="space-y-6 mb-6">
                            <div className="flex justify-center items-center space-x-4">
                                <div>
                                    <p className="text-gray-700 text-lg">
                                        <strong>Email:</strong> <a href="mailto:info@constructionlinks.co.ke" className="text-gray-700">info@constructionlinks.co.ke</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <div>
                                    <p className="text-gray-700 text-lg">
                                        <strong>Call:</strong> <a href="tel:+254123456789" className="text-gray-700">(+254) 722 706 705</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-center items-center space-x-4">
                                <div>
                                    <p className="text-gray-700 text-lg">
                                        <strong>Visit Our Office:</strong> Ground Floor, Kipande Plaza, Kipande Street, Nairobi, Kenya
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center space-x-4">
                                <div>
                                    <p className="text-gray-700 text-lg">
                                        <strong>Business Hours:</strong> Monday to Friday, 9 AM - 5 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}