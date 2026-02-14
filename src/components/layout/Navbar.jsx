import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User, Building2, Sun } from 'lucide-react';
import { themeChange } from 'theme-change';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="h-5 w-5" />
                    </div>
                    {isOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/agents">Agents</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    )}
                </div>
                <Link to="/" className="btn btn-ghost text-xl text-primary">
                    <Building2 className="h-6 w-6 mr-1" />
                    Nestara
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link to="/" className="hover:text-primary">Home</Link></li>
                    <li><Link to="/about" className="hover:text-primary">About</Link></li>
                    <li><Link to="/agents" className="hover:text-primary">Agents</Link></li>
                    <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {/* Theme Controller */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Sun className="h-6 w-6" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 h-96 overflow-y-auto">
                        <li><button data-set-theme="light">Light</button></li>
                        <li><button data-set-theme="dark">Dark</button></li>
                        <li><button data-set-theme="corporate">Corporate</button></li>
                        <li><button data-set-theme="business">Business</button></li>
                        <li><button data-set-theme="cupcake">Cupcake</button></li>
                        <li><button data-set-theme="bumblebee">Bumblebee</button></li>
                        <li><button data-set-theme="emerald">Emerald</button></li>
                        <li><button data-set-theme="synthwave">Synthwave</button></li>
                        <li><button data-set-theme="retro">Retro</button></li>
                        <li><button data-set-theme="cyberpunk">Cyberpunk</button></li>
                        <li><button data-set-theme="valentine">Valentine</button></li>
                        <li><button data-set-theme="halloween">Halloween</button></li>
                        <li><button data-set-theme="garden">Garden</button></li>
                        <li><button data-set-theme="forest">Forest</button></li>
                        <li><button data-set-theme="aqua">Aqua</button></li>
                        <li><button data-set-theme="lofi">Lofi</button></li>
                        <li><button data-set-theme="pastel">Pastel</button></li>
                        <li><button data-set-theme="fantasy">Fantasy</button></li>
                        <li><button data-set-theme="wireframe">Wireframe</button></li>
                        <li><button data-set-theme="black">Black</button></li>
                        <li><button data-set-theme="luxury">Luxury</button></li>
                        <li><button data-set-theme="dracula">Dracula</button></li>
                        <li><button data-set-theme="cmyk">CMYK</button></li>
                        <li><button data-set-theme="autumn">Autumn</button></li>
                        <li><button data-set-theme="acid">Acid</button></li>
                        <li><button data-set-theme="lemonade">Lemonade</button></li>
                        <li><button data-set-theme="night">Night</button></li>
                        <li><button data-set-theme="coffee">Coffee</button></li>
                        <li><button data-set-theme="winter">Winter</button></li>
                        <li><button data-set-theme="dim">Dim</button></li>
                        <li><button data-set-theme="nord">Nord</button></li>
                        <li><button data-set-theme="sunset">Sunset</button></li>
                    </ul>
                </div>

                <a className="btn btn-ghost hidden sm:inline-flex">Log In</a>
                <a className="btn btn-primary text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;
