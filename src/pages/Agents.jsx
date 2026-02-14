const agents = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Senior Real Estate Agent",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "(555) 123-4567",
        email: "sarah@nestara.com"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Luxury Property Specialist",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "(555) 987-6543",
        email: "michael@nestara.com"
    },
    {
        id: 3,
        name: "Jessica Smith",
        role: "Commercial Real Estate Expert",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        phone: "(555) 456-7890",
        email: "jessica@nestara.com"
    }
];

const Agents = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-base-content sm:text-5xl">
                        Meet Our <span className="text-primary">Agents</span>
                    </h1>
                    <p className="mt-4 text-xl text-base-content/70 max-w-2xl mx-auto">
                        Our team of experienced professionals is here to guide you every step of the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {agents.map((agent) => (
                        <div key={agent.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                            <figure className="h-80 overflow-hidden">
                                <img
                                    src={agent.image}
                                    alt={agent.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl">{agent.name}</h2>
                                <p className="text-primary font-medium">{agent.role}</p>
                                <div className="mt-4 space-y-2 w-full">
                                    <button className="btn btn-outline btn-primary w-full">
                                        Contact {agent.name.split(' ')[0]}
                                    </button>
                                    <button className="btn btn-ghost btn-sm w-full opacity-70">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Agents;
