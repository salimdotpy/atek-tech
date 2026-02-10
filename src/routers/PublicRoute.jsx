//import useDrawer from "@/store/drawerStore";
import logo from '@/assets/atek_logo.png';
import { Avatar, Button, IconButton, List, ListItem } from "@material-tailwind/react";
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const PublicRoute = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About Us' },
    { id: '/services', label: 'Services' },
    { id: '/products', label: 'Products' },
    //   { id: 'ai-tools', label: 'AI Tools ✨' },
    //   { id: 'contact', label: 'Contact Us' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="font-sans text-fore bg-back min-h-screen flex flex-col overflow-x-hidden">
      <nav className={`fixed w-full z-[500] transition-all duration-300 bg-blue-900 lg:bg-blue-900 py-3`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <img src={logo} className="w-8 md:w-14 h-auto cursor-pointer" onClick={() => navigate('/')} />

          {/* Desktop Menu */}
          <List className="!bg-transparent !hidden lg:!flex flex-row  items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.id}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${isActive ? 'text-amber-500 font-bold' : 'text-white hover:text-amber-200'}`
                }
              >
                <ListItem className="flex items-center gap-2 py-3 pr-4">
                  {link.label}
                </ListItem>
              </NavLink>
            ))}
            <Button key='cta'
              onClick={() => navigate('/contact')}
              className="bg-amber-500 text-blue-900 px-5 py-2 rounded font-bold text-sm hover:bg-amber-400 !normal-case"
            >
              Get Quote
            </Button>
          </List>
          {/* Mobile Menu Toggle */}
          <IconButton size="sm" variant="text"
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </IconButton>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 absolute top-full left-0 w-full shadow-xl z-50 border-t border-blue-800">
            <List className="flex !bg-transparent !flex-col p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.id}
                  onClick={() => setIsMenuOpen(false)} // Closes menu on click
                  className={({ isActive }) =>
                    `block py-1 px-0 transition-colors ${isActive ? 'text-amber-500' : 'text-white'}`
                  }
                >
                  <ListItem className="flex items-center gap-2">
                    {link.label}
                  </ListItem>
                </NavLink>
              ))}

              <Button
                onClick={() => navigate('/contact')}
                className="mt-4 bg-primary !normal-case"
              >
                Get Quote
              </Button>
            </List>
          </div>
        )}
      </nav>
      <main className="grow bg-back">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Avatar src={logo} className="w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your premier partner for security systems, solar energy solutions, and professional electronics repair services in Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-amber-500 inline-block pb-1">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => navigate('/home')} className="hover:text-amber-400 transition-colors">Home</button></li>
                <li><button onClick={() => navigate('/about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => navigate('/services')} className="hover:text-amber-400 transition-colors">Services</button></li>
                <li><button onClick={() => navigate('/products')} className="hover:text-amber-400 transition-colors">Products</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-amber-500 inline-block pb-1">Our Services</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>CCTV Installation</li>
                <li>Car Tracking</li>
                <li>Solar Power Systems</li>
                <li>Burglar Alarms</li>
                <li>Phone & TV Repair</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-amber-500 inline-block pb-1">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Federal Polytechnic Ede, Osun State.</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>+234 913 437 7218</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>info@atek-tech.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ATEK Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2349134377218"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 hover:scale-110 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};

export default PublicRoute;