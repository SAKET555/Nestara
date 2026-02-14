import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-base-content sm:text-5xl">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="mt-4 text-xl text-base-content/70 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="card bg-base-200 shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title text-2xl mb-4">Contact Information</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-base-content">Office Address</h3>
                                            <p className="text-base-content/70">123 Real Estate Blvd, Suite 100<br />Beverly Hills, CA 90210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-base-content">Phone</h3>
                                            <p className="text-base-content/70">(555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-base-content">Email</h3>
                                            <p className="text-base-content/70">info@nestara.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-base-content">Hours</h3>
                                            <p className="text-base-content/70">Mon - Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-64 bg-base-300 rounded-2xl flex items-center justify-center">
                            <span className="text-base-content/50 font-semibold">Map Integration Placeholder</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card bg-base-100 shadow-2xl border border-base-200">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-6">Send Message</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">First Name</span>
                                        </label>
                                        <input type="text" placeholder="John" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Last Name</span>
                                        </label>
                                        <input type="text" placeholder="Doe" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="john@example.com" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="I'm interested in..." className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-32" placeholder="Your message..."></textarea>
                                </div>
                                <button className="btn btn-primary w-full mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
