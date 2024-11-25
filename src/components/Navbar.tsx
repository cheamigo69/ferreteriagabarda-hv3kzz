import React from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">Ferretería Gabarda</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-200">Inicio</Link>
            <Link to="/productos" className="hover:text-orange-200">Productos</Link>
            <Link to="/promociones" className="hover:text-orange-200">Promociones</Link>
            <Link to="/contacto" className="hover:text-orange-200">Contacto</Link>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-orange-700 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/carrito" className="p-2 hover:bg-orange-700 rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 bg-white text-orange-600 rounded-full h-4 w-4 text-xs flex items-center justify-center">
                0
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-orange-700 rounded-full">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="px-3 py-2 hover:bg-orange-700 rounded">Inicio</Link>
              <Link to="/productos" className="px-3 py-2 hover:bg-orange-700 rounded">Productos</Link>
              <Link to="/promociones" className="px-3 py-2 hover:bg-orange-700 rounded">Promociones</Link>
              <Link to="/contacto" className="px-3 py-2 hover:bg-orange-700 rounded">Contacto</Link>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}