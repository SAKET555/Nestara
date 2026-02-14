const About = () => {
    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-base-content sm:text-5xl">
                        About <span className="text-primary">Nestara</span>
                    </h1>
                    <p className="mt-4 text-xl text-base-content/70 max-w-2xl mx-auto">
                        Redefining the real estate experience with technology, trust, and transparency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Office"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-base-content mb-6">Our Mission</h2>
                        <p className="text-lg text-base-content/70 leading-relaxed mb-6">
                            At Nestara, we believe that finding a home should be an exciting journey, not a stressful ordeal. We leverage cutting-edge technology, immersive virtual tours, and data-driven insights to empower buyers and sellers.
                        </p>
                        <p className="text-lg text-base-content/70 leading-relaxed">
                            Our team of dedicated professionals is committed to providing ensuring every transaction is secure, transparent, and seamless.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="text-4xl text-primary font-bold mb-2">10k+</div>
                            <p className="font-semibold text-base-content">Properties Sold</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="text-4xl text-primary font-bold mb-2">98%</div>
                            <p className="font-semibold text-base-content">Customer Satisfaction</p>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body items-center text-center">
                            <div className="text-4xl text-primary font-bold mb-2">500+</div>
                            <p className="font-semibold text-base-content">Expert Agents</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
