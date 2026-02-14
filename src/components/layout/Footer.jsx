import { Facebook, Twitter, Instagram, Linkedin, Building2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center text-white mb-4">
                            <Building2 className="h-6 w-6 mr-2 text-blue-500" />
                            <span className="font-bold text-xl">Nestara</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Your trusted partner in finding the perfect property. We make real estate simple, transparent, and enjoyable.
                        </p>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Buy Property</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sell Property</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Rent Property</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Find an Agent</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Subscribe</h3>
                        <p className="text-gray-400 text-sm mb-4">Get the latest updates and offers.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 text-sm"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Nestara. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
