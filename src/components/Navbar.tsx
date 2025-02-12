import { useState } from 'react';
import { FiSearch, FiShoppingCart, FiMenu, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/auth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-rebel-dark text-rebel-light py-4 px-6 fixed w-full z-50 border-b border-rebel-light/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:opacity-80 transition-opacity -my-2">
            <img 
              src="data:image/svg+xml,%3c?xml%20version=%271.0%27%20encoding=%27UTF-8%27?%3e%3csvg%20id=%27Layer_1%27%20data-name=%27Layer%201%27%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%201000%201000%27%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23eae2d3;%20}%20%3c/style%3e%3c/defs%3e%3cg%3e%3cg%3e%3cpath%20class=%27cls-1%27%20d=%27m369.06,557.14l-18.03-43.86h-22.13v43.85h-36.77v-114.39h88.31c7.39,0,14.48,2.93,19.71,8.16,5.23,5.23,8.16,12.32,8.16,19.71v14.8c0,11.8-7.43,22.32-18.55,26.27-.31.11-.63.21-.95.31l20.06,45.15h-39.8Zm-40.17-70.55h36.14s6.5,0,6.5-8.58-6.5-8.58-6.5-8.58h-36.14v17.16Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m458.18,469.43v17.16h74.69v26.69h-74.69v17.16h81.6v26.69h-118.37v-114.39h118.37v26.69h-81.6Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m677.28,521.39v7.88c0,15.02-11.91,27.34-26.93,27.85v.02h-96.72v-114.39h88.31c2.85,0,5.69.43,8.41,1.29,11.59,3.67,19.46,14.42,19.46,26.58v7.13c0,7.04-2.66,13.82-7.45,18.96,9.18,4.81,14.93,14.32,14.92,24.68Zm-86.88-51.96v17.16h36.14s6.5,0,6.5-8.58-6.5-8.58-6.5-8.58h-36.14Zm50.1,52.43c0-8.58-6.5-8.58-6.5-8.58h-43.61v17.16h43.61s6.49-.02,6.49-8.58Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m726.22,469.43v17.16h74.69v26.69h-74.69v17.16h81.6v26.69h-118.37v-114.39h118.37v26.69h-81.6Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m920.5,557.14h-98.83v-114.39h36.77v87.7h62.05v26.69Z%27/%3e%3c/g%3e%3cg%3e%3cpath%20class=%27cls-1%27%20d=%27m144.59,442.73v22.92h-17.69v91.61h-29.78v-91.61h-17.62v-22.92h65.09Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m219.86,442.73v114.54h-29.78v-48.11h-8.91v48.11h-29.78v-114.54h29.78v40.96h8.91v-40.96h29.78Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m231.81,442.73h49.66v22.92h-19.88v21.72h18.61v21.79h-18.61v25.19h21.86v22.92h-51.64v-114.54Z%27/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20class=%27cls-1%27%20d=%27m884.63,442.74h15.19v3.08h-6.05v13.77h-3.09v-13.77h-6.05v-3.08Z%27/%3e%3cpath%20class=%27cls-1%27%20d=%27m901.99,442.73h3.08l6.11,11.35h.12l6.11-11.35h3.08v16.85h-3.08v-10.31h-.06l-4.87,9.07h-2.47l-4.87-9.07h-.06v10.31h-3.08v-16.85Z%27/%3e%3c/g%3e%3c/svg%3e" 
              alt="The Rebel Logo" 
              className="w-14 h-14 object-cover"
            />
          </Link>
          <div className="hidden md:flex space-x-8 font-impact">
            <Link to="/collections/anime" className="hover:text-orange-500 transition-colors">ANIME</Link>
            <Link to="/collections/gaming" className="hover:text-orange-500 transition-colors">GAMING</Link>
            <Link to="/collections/souls" className="hover:text-orange-500 transition-colors">SOULS</Link>
            <Link to="/collections/band" className="hover:text-orange-500 transition-colors">BAND</Link>
            <Link to="/collections/movie" className="hover:text-orange-500 transition-colors">MOVIE</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center border border-rebel-light/20 rounded-full px-4 py-2 focus-within:border-rebel-light transition-colors">
            <FiSearch className="w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none ml-2 w-40 font-impact"
            />
          </div>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="hover:text-orange-500 transition-colors"
              >
                <FiUser className="w-6 h-6" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-rebel-dark border border-rebel-light/20 rounded-lg shadow-xl py-2">
                  {user.role === 'admin' && (
                    <Link 
                      to="/admin" 
                      className="block px-4 py-2 text-sm font-impact hover:bg-rebel-light/10 transition-colors"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <a href="#" className="block px-4 py-2 text-sm font-impact hover:bg-rebel-light/10 transition-colors">Orders</a>
                  <a href="#" className="block px-4 py-2 text-sm font-impact hover:bg-rebel-light/10 transition-colors">Profile</a>
                  <div className="border-t border-rebel-light/20 my-1"></div>
                  <button
                    onClick={signOut}
                    className="block w-full text-left px-4 py-2 text-sm font-impact hover:bg-rebel-light/10 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-rebel-light px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-nofex"
            >
              Login
            </Link>
          )}
          <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors" />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rebel-dark border-t border-rebel-light/20 fade-in">
          <div className="flex flex-col p-4 space-y-4 font-impact">
            <Link to="/collections/anime" className="hover:text-orange-500 transition-colors">ANIME</Link>
            <Link to="/collections/gaming" className="hover:text-orange-500 transition-colors">GAMING</Link>
            <Link to="/collections/souls" className="hover:text-orange-500 transition-colors">SOULS</Link>
            <Link to="/collections/band" className="hover:text-orange-500 transition-colors">BAND</Link>
            <Link to="/collections/movie" className="hover:text-orange-500 transition-colors">MOVIE</Link>
            <div className="flex items-center border border-rebel-light/20 rounded-full px-4 py-2">
              <FiSearch className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none ml-2 w-full font-impact"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;