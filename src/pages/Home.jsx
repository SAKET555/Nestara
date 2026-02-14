import { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import HouseModel from '../components/3d/HouseModel';

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/properties')
            .then(res => res.json())
            .then(data => {
                setProperties(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching properties:", err);
                setLoading(false);
            });
    }, []);
    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="hero min-h-[600px] bg-base-200 relative overflow-hidden">
                <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">

                    {/* 3D Model Section */}
                    <div className="flex-1 w-full h-[400px] lg:h-[500px] relative z-10 animate-in fade-in zoom-in duration-1000">
                        <HouseModel />
                    </div>

                    {/* Text & Search Section */}
                    <div className="flex-1 text-left z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-base-content mb-6 leading-tight">
                            Discover <span className="text-primary">Exquisite Living</span>
                        </h1>
                        <p className="py-6 text-xl text-base-content/70 max-w-lg mb-8">
                            Curating exceptional properties for those who seek the extraordinary. Welcome to Nestara.
                        </p>

                        <div className="card bg-base-100 shadow-2xl max-w-xl">
                            <div className="card-body p-4 bg-base-100/80 backdrop-blur-md rounded-xl space-y-4">
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="relative flex-grow">
                                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-base-content/50" />
                                        <input
                                            type="text"
                                            placeholder="Location, City, or Zip"
                                            className="input input-bordered w-full pl-10"
                                        />
                                    </div>
                                    <select className="select select-bordered w-full md:w-auto">
                                        <option disabled selected>Type</option>
                                        <option>House</option>
                                        <option>Apartment</option>
                                        <option>Condo</option>
                                    </select>
                                    <button className="btn btn-primary">
                                        <Search className="h-5 w-5" />
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent skew-x-12 transform translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/10 to-transparent -skew-x-12 transform -translate-x-20"></div>
            </div>

            {/* Featured Properties */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our hand-picked selection of the most prestigious properties currently available on the market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                            View All Properties
                        </button>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience the future of real estate</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We leverage cutting-edge technology and data analytics to provide a seamless property buying and selling experience. From virtual tours to secure digital transactions, we're redefining the industry.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Virtual Tours</h4>
                                        <p className="text-gray-500 text-sm">Explore properties from the comfort of your home.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Verified Listings</h4>
                                        <p className="text-gray-500 text-sm">All properties are verified for authenticity and trust.</p>
                                    </div>
                                </li>
                            </ul>
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                                Learn More
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Modern Interior"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
                                <div className="text-4xl font-bold mb-1">10k+</div>
                                <div className="text-sm opacity-90">Satisfied Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
