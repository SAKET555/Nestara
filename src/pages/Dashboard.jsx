import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard, Heart, Home, Settings, Bell,
    TrendingUp, Clock, User, LogOut, Search, PlusCircle,
    MessageSquare, PieChart, Menu, X, ChevronRight, Calendar
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${active
                ? 'bg-primary text-primary-content shadow-lg shadow-primary/30'
                : 'hover:bg-base-200 text-base-content/70 hover:text-base-content'
            }`}
    >
        <Icon className={`h-5 w-5 ${active ? 'animate-pulse' : ''}`} />
        {!collapsed && (
            <span className="font-medium whitespace-nowrap overflow-hidden transition-all">
                {label}
            </span>
        )}
        {!collapsed && active && (
            <motion.div layoutId="sidebar-active" className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
        )}
    </button>
);

const StatCard = ({ icon: Icon, label, value, trend, trendUp, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5 }}
        className="bg-base-100/60 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
        <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
            <Icon className={`h-24 w-24 text-${color}-500`} />
        </div>
        <div className="relative z-10">
            <div className={`w-12 h-12 rounded-xl bg-${color}-100 flex items-center justify-center mb-4 text-${color}-600`}>
                <Icon className="h-6 w-6" />
            </div>
            <p className="text-base-content/60 text-sm font-medium">{label}</p>
            <h3 className="text-3xl font-bold mt-1 text-base-content">{value}</h3>
            <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${trendUp ? 'text-success' : 'text-error'}`}>
                {trendUp ? <TrendingUp className="h-4 w-4" /> : <TrendingUp className="h-4 w-4 rotate-180" />}
                {trend}
            </div>
        </div>
    </motion.div>
);

const Dashboard = () => {
    const { user, signOut, loading } = useAuth();
    const navigate = useNavigate();
    const [greeting, setGreeting] = useState('Good Morning');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        // Clock timer
        const timer = setInterval(() => setCurrentDate(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

    const handleSignOut = async () => {
        navigate('/');
        await signOut();
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="animate-pulse text-base-content/60">Loading your dashboard...</p>
            </div>
        </div>
    );

    if (!user) return null;

    return (
        <div className="min-h-screen bg-base-200/50 flex overflow-hidden">
            {/* Mesh Background */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px] animate-pulse delay-1000" />
            </div>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: sidebarOpen ? 280 : 80 }}
                className="bg-base-100/80 backdrop-blur-xl border-r border-base-200 z-50 flex flex-col h-screen sticky top-0 hidden md:flex"
            >
                <div className="p-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 shrink-0">
                            N
                        </div>
                        {sidebarOpen && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="font-bold text-xl tracking-tight"
                            >
                                NESTARA
                            </motion.span>
                        )}
                    </Link>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="btn btn-ghost btn-sm btn-square">
                        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                <div className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                    <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} collapsed={!sidebarOpen} />
                    <SidebarItem icon={Heart} label="Saved Homes" active={activeTab === 'saved'} onClick={() => setActiveTab('saved')} collapsed={!sidebarOpen} />
                    <SidebarItem icon={MessageSquare} label="Messages" active={activeTab === 'messages'} onClick={() => setActiveTab('messages')} collapsed={!sidebarOpen} />
                    <SidebarItem icon={PieChart} label="Analytics" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} collapsed={!sidebarOpen} />
                    <div className="divider my-4"></div>
                    <SidebarItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} collapsed={!sidebarOpen} />
                </div>

                <div className="p-4 border-t border-base-200">
                    <div className={`flex items-center gap-3 p-2 rounded-xl bg-base-200/50 ${!sidebarOpen ? 'justify-center' : ''}`}>
                        <div className="avatar online placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-10">
                                {user.user_metadata.avatar_url ? (
                                    <img src={user.user_metadata.avatar_url} />
                                ) : (
                                    <span className="text-xl">{user.user_metadata.full_name?.[0]}</span>
                                )}
                            </div>
                        </div>
                        {sidebarOpen && (
                            <div className="flex-1 overflow-hidden">
                                <p className="font-bold text-sm truncate">{user.user_metadata.full_name}</p>
                                <p className="text-xs text-base-content/60 truncate">{user.email}</p>
                            </div>
                        )}
                        {sidebarOpen && (
                            <button onClick={handleSignOut} className="btn btn-ghost btn-xs btn-square text-error hover:bg-error/10">
                                <LogOut className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>
            </motion.aside>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden fixed top-0 w-full bg-base-100/90 backdrop-blur-md border-b border-base-200 z-50 px-4 py-3 flex justify-between items-center">
                <Link to="/" className="font-bold text-xl">NESTARA</Link>
                <button className="btn btn-ghost btn-circle">
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 h-screen overflow-y-auto relative p-4 md:p-8 pt-20 md:pt-8 scroll-smooth">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div className="animate-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {greeting}, {user.user_metadata.full_name?.split(' ')[0] || 'User'}!
                        </h1>
                        <p className="text-base-content/60 mt-1 flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="btn btn-ghost btn-circle bg-base-100 shadow-sm border border-base-200">
                            <Search className="h-5 w-5" />
                        </button>
                        <button className="btn btn-ghost btn-circle bg-base-100 shadow-sm border border-base-200">
                            <div className="indicator">
                                <Bell className="h-5 w-5" />
                                <span className="badge badge-xs badge-secondary indicator-item"></span>
                            </div>
                        </button>
                        <button className="btn btn-primary rounded-full shadow-lg shadow-primary/30 gap-2">
                            <PlusCircle className="h-5 w-5" />
                            <span className="hidden sm:inline">Add Property</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard icon={Heart} label="Saved Homes" value="12" trend="+2 this week" trendUp={true} color="pink" delay={0.1} />
                    <StatCard icon={TrendingUp} label="Market Value" value="$2.4M" trend="+4.5% vs last year" trendUp={true} color="blue" delay={0.2} />
                    <StatCard icon={Clock} label="Recent Views" value="48" trend="+12 today" trendUp={true} color="purple" delay={0.3} />
                    <StatCard icon={User} label="Profile Score" value="85%" trend="Complete bio +15%" trendUp={false} color="orange" delay={0.4} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Activity Feed */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Recent Activity
                        </h3>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="bg-base-100/60 backdrop-blur-md border border-base-200 p-4 rounded-2xl flex gap-4 hover:bg-base-100 transition-colors cursor-pointer group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Home className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold">Viewed Modern Loft in Downtown</h4>
                                        <p className="text-sm text-base-content/60">2 hours ago • $1.2M • 3 Beds</p>
                                    </div>
                                    <button className="btn btn-ghost btn-sm btn-circle opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight className="h-5 w-5" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Recommendations */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-xl flex items-center gap-2">
                            <Heart className="h-5 w-5 text-secondary" />
                            Top Picks for You
                        </h3>

                        <div className="bg-base-100/60 backdrop-blur-md border border-base-200 rounded-3xl p-2">
                            <div className="relative h-48 rounded-2xl overflow-hidden mb-3 group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1600596542815-e36cb2907bcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                                    $2,500,000
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                    <div className="text-white">
                                        <h4 className="font-bold">Beverly Hills Villa</h4>
                                        <p className="text-xs opacity-80">5 Beds • 6 Baths</p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 pb-2">
                                <button className="btn btn-primary btn-block rounded-xl shadow-lg shadow-primary/20">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Dashboard;
