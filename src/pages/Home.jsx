import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Search, MapPin, ArrowRight, Shield, Globe, Star, Users } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import HouseModel from '../components/3d/HouseModel';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ from, to }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const controls = { value: from };
        const duration = 2000; // 2 seconds

        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const current = Math.min(Math.floor((progress / duration) * (to - from) + from), to);

            node.textContent = `${current.toLocaleString()}k+`;

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isInView, from, to]);

    return <span ref={nodeRef} className="text-4xl font-bold mb-1 block">0</span>;
};

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Home = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('buy');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const { data, error } = await supabase
                    .from('properties')
                    .select('*');

                if (error) throw error;
                setProperties(data || []);
            } catch (error) {
                console.error("Error fetching properties:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    return (
        <div className="min-h-screen bg-base-100 overflow-x-hidden selection:bg-primary selection:text-white">

            {/* Mesh Gradient Background */}
            <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/40 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/30 blur-[120px] animate-pulse delay-1000" />
            </div>

            {/* Hero Section */}
            <div className="hero min-h-[85vh] relative z-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12 pt-20">

                    {/* 3D Model Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 w-full h-[500px] lg:h-[600px] relative z-20"
                    >
                        <HouseModel />
                    </motion.div>

                    {/* Text & Search Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="flex-1 text-left z-20"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide">
                                ✨ Reimagining Real Estate
                            </div>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl font-extrabold text-base-content mb-6 leading-tight tracking-tight">
                            Discover <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Exquisite Living
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="py-2 text-xl text-base-content/70 max-w-lg mb-10 leading-relaxed">
                            Curating exceptional properties for those who seek the extraordinary. Welcome to your new beginning.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            {/* Glassmorphic Search Card */}
                            <div className="card bg-base-100/60 backdrop-blur-xl shadow-2xl border border-white/20 max-w-xl hover:shadow-primary/10 transition-shadow duration-500">
                                <div className="card-body p-2">
                                    {/* Tabs */}
                                    <div className="flex gap-2 p-2 mb-2">
                                        {['buy', 'rent', 'sold'].map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() => setActiveTab(tab)}
                                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                                                        ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                                        : 'hover:bg-base-200 text-base-content/70'
                                                    }`}
                                            >
                                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Search Input Group */}
                                    <div className="bg-base-100/50 p-2 rounded-xl border border-base-200 flex flex-col md:flex-row gap-2">
                                        <div className="relative flex-grow group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                                            <input
                                                type="text"
                                                placeholder="Location, City, or Zip"
                                                className="input input-ghost w-full pl-12 focus:bg-transparent focus:outline-none text-base placeholder:text-base-content/40 h-14"
                                            />
                                        </div>
                                        <div className="h-px md:h-12 w-full md:w-px bg-base-content/10 mx-2" />
                                        <select className="select select-ghost w-full md:w-auto h-14 focus:outline-none focus:bg-transparent text-base">
                                            <option disabled selected>Property Type</option>
                                            <option>House</option>
                                            <option>Apartment</option>
                                            <option>Villa</option>
                                        </select>
                                        <button className="btn btn-primary h-14 px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                            <Search className="h-5 w-5" />
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-base-100 bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="fill-current w-4 h-4" />
                                    <Star className="fill-current w-4 h-4" />
                                    <Star className="fill-current w-4 h-4" />
                                    <Star className="fill-current w-4 h-4" />
                                    <Star className="fill-current w-4 h-4" />
                                </div>
                                <p className="text-sm font-medium text-base-content/70">Trusted by 10,000+ families</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Featured Properties - Animated Scroll Reveal */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Properties</h2>
                        <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
                            Explore our hand-picked selection of the most prestigious properties currently available on the market.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <PropertyCard property={property} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="btn btn-outline btn-lg rounded-full px-12 hover:scale-105 transition-transform">
                            View All Properties
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Bento Grid Value Proposition */}
            <section className="py-32 bg-base-200/50 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Left Content */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Why <span className="text-primary">Nestara</span> is different?
                                </h2>
                                <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
                                    We don't just sell houses; we curate lifestyles. Our data-driven approach combined with white-glove service ensures you find more than just a property.
                                </p>
                                <button className="btn btn-primary btn-lg w-fit rounded-full shadow-xl shadow-primary/20">
                                    Start Your Journey
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Bento Grid */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Card 1: Virtual Tours */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="card bg-base-100 shadow-xl border border-base-200 p-8 md:col-span-2"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Immersive Virtual Tours</h3>
                                    <p className="text-base-content/60">Step inside any property from anywhere in the world with our 4K 3D tours.</p>
                                </motion.div>

                                {/* Card 2: Stats */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="card bg-primary text-primary-content shadow-xl shadow-primary/20 p-8"
                                >
                                    <div className="mb-4">
                                        <Users className="w-8 h-8 opacity-80" />
                                    </div>
                                    <AnimatedCounter from={0} to={12} />
                                    <p className="opacity-80 font-medium">Happy Clients</p>
                                </motion.div>

                                {/* Card 3: Security */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="card bg-base-100 shadow-xl border border-base-200 p-8"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-4 text-green-600">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Verified Listings</h3>
                                    <p className="text-base-content/60">Every home is vetted for authenticity.</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
