import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Loader2, Star, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = [
    {
        quote: "Nestara helped me find my dream loft in record time. The verification process gave me total peace of mind.",
        author: "Sarah Jenkins",
        role: "Creative Director"
    },
    {
        quote: "The virtual tours are a game changer. I bought my vacation home without even flying out to see it!",
        author: "Michael Chen",
        role: "Software Architect"
    },
    {
        quote: "Exceptional service and curated listings. Finally, a platform that understands luxury real estate.",
        author: "Elena Rodriguez",
        role: "Interior Designer"
    }
];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signIn, signInWithProvider } = useAuth();
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % Testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const { error } = await signIn({ email, password });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-stretch overflow-hidden bg-base-100">
            {/* Left Side - Image & Testimonials */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden lg:flex w-1/2 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")' }}
            >
                {/* Ken Burns Effect Overlay */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")' }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"></div>

                <div className="absolute bottom-0 left-0 right-0 p-12 text-white z-10">
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <Quote className="h-10 w-10 text-primary mb-6 opacity-80" />
                        <p className="text-2xl font-light italic leading-relaxed mb-6">
                            "{Testimonials[currentTestimonial].quote}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-0.5 w-12 bg-primary"></div>
                            <div>
                                <p className="font-bold text-lg">{Testimonials[currentTestimonial].author}</p>
                                <p className="text-sm text-white/70">{Testimonials[currentTestimonial].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Dots */}
                    <div className="flex gap-2 mt-8">
                        {Testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentTestimonial(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 lg:p-16 bg-base-100">
                {/* Mesh Gradient Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md space-y-8 relative z-10"
                >
                    <div className="text-center">
                        <Link to="/" className="inline-block mb-8 hover:scale-105 transition-transform">
                            <div className="flex items-center justify-center gap-2 text-2xl font-bold tracking-tight text-primary">
                                <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">N</div>
                                NESTARA
                            </div>
                        </Link>
                        <h2 className="text-4xl font-extrabold tracking-tight mb-2">Welcome Back</h2>
                        <p className="text-base-content/60">
                            Sign in to manage your estate portfolio.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => signInWithProvider('google')}
                            className="btn btn-outline h-12 font-normal border-base-300 hover:border-base-content hover:bg-base-content hover:text-base-100"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            Google
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => signInWithProvider('facebook')}
                            className="btn btn-outline h-12 font-normal border-base-300 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.846c0-4.043 1.773-5.392 5.93-3.358q1.954.958 2.7 1.488l-.875 3.38c-.375-.24-.764-.78-2.65-.78-1.558 0-1.637.78-1.637 1.616v1.396h4.31l-.228 3.667h-4.082v7.956c3.214-1.127 5.613-4.08 5.613-7.79a8.43 8.43 0 1 0-8.914 9.208 8.414 8.414 0 0 0 3.833-.69z" /></svg>
                            Facebook
                        </motion.button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-base-300"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-wider font-semibold">
                            <span className="px-4 bg-base-100 text-base-content/40">Or continue with</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="alert alert-error text-sm py-2 rounded-lg flex items-center"
                                >
                                    <span>{error}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-4">
                            <motion.div whileFocusWithin={{ scale: 1.02 }} className="form-control">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40" />
                                    <input
                                        type="email"
                                        className="input input-bordered w-full pl-12 h-14 bg-base-200/50 border-transparent focus:border-primary focus:bg-base-100 transition-all rounded-xl"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div whileFocusWithin={{ scale: 1.02 }} className="form-control">
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40" />
                                    <input
                                        type="password"
                                        className="input input-bordered w-full pl-12 h-14 bg-base-200/50 border-transparent focus:border-primary focus:bg-base-100 transition-all rounded-xl"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end mt-2">
                                    <a href="#" className="text-sm font-medium text-primary hover:text-primary-focus transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary w-full h-14 text-lg font-bold rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                                <span className="flex items-center gap-2">
                                    Log In <ArrowRight className="w-5 h-5" />
                                </span>
                            )}
                        </motion.button>
                    </form>

                    <p className="text-center text-base-content/60">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-bold text-primary hover:text-primary-focus transition-colors">
                            Join Nestara
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;
