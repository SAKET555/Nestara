import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <Link to={`/property/${property.id}`} className="block h-full">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <figure className="relative h-64 overflow-hidden">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost bg-base-100/50 backdrop-blur-sm hover:bg-red-50 hover:text-red-500 transition-colors z-10" onClick={(e) => {
                        e.preventDefault();
                        // Handle favorite logic
                    }}>
                        <Heart className="h-5 w-5" />
                    </div>
                    <div className="absolute bottom-4 left-4 badge badge-primary p-3 font-semibold shadow-sm">
                        ${property.price.toLocaleString()}
                    </div>
                    <div className="absolute top-4 left-4 badge badge-accent p-3 font-bold uppercase tracking-wide">
                        {property.type}
                    </div>
                </figure>

                <div className="card-body p-6">
                    <h2 className="card-title text-base-content group-hover:text-primary transition-colors">
                        {property.title}
                    </h2>
                    <div className="flex items-center text-base-content/70 text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                    </div>

                    <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-base-200">
                        <div className="flex items-center text-base-content/80 font-medium">
                            <Bed className="h-5 w-5 mr-2 text-primary" />
                            <span className="text-sm">{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center text-base-content/80 font-medium">
                            <Bath className="h-5 w-5 mr-2 text-primary" />
                            <span className="text-sm">{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center text-base-content/80 font-medium">
                            <Square className="h-5 w-5 mr-2 text-primary" />
                            <span className="text-sm">{property.sqft} sqft</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
