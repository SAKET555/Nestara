import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, CheckCircle } from 'lucide-react';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/properties/${id}`)
            .then(res => res.json())
            .then(data => {
                setProperty(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching property:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg"></span></div>;
    if (!property) return <div className="text-center py-20 text-error">Property not found</div>;

    return (
        <div className="bg-gray-50 min-h-screen pb-12">
            {/* Image Gallery */}
            <div className="h-[50vh] md:h-[60vh] relative group">
                <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white transition-colors">
                        View All Photos
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                                    <div className="flex items-center text-gray-500">
                                        <MapPin className="h-5 w-5 mr-2" />
                                        {property.location}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 text-3xl font-bold text-blue-600">
                                    ${property.price.toLocaleString()}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-6 mb-8">
                                <div className="flex flex-col items-center">
                                    <Bed className="h-6 w-6 text-blue-500 mb-2" />
                                    <span className="font-semibold text-gray-900">{property.beds} Beds</span>
                                </div>
                                <div className="flex flex-col items-center border-l border-gray-100">
                                    <Bath className="h-6 w-6 text-blue-500 mb-2" />
                                    <span className="font-semibold text-gray-900">{property.baths} Baths</span>
                                </div>
                                <div className="flex flex-col items-center border-l border-gray-100">
                                    <Square className="h-6 w-6 text-blue-500 mb-2" />
                                    <span className="font-semibold text-gray-900">{property.sqft} sqft</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {property.description}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {property.features.map((feature, index) => (
                                        <div key={index} className="flex items-center text-gray-600">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src={property.agent.image}
                                    alt={property.agent.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{property.agent.name}</h3>
                                    <p className="text-gray-500 text-sm">Real Estate Agent</p>
                                </div>
                            </div>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="Your Phone"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="I am interested in this property..."
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-gray-500 text-sm">or call</p>
                                <a href={`tel:${property.agent.phone}`} className="text-lg font-bold text-blue-600 hover:underline">
                                    {property.agent.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
