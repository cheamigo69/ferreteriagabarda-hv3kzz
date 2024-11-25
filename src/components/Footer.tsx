import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+56 2 2123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contacto@gabarda.cl</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Av. Principal 123, Santiago</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Lun-Sáb: 9:00 - 19:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/productos" className="hover:text-orange-500">Productos</a></li>
              <li><a href="/promociones" className="hover:text-orange-500">Promociones</a></li>
              <li><a href="/nosotros" className="hover:text-orange-500">Sobre Nosotros</a></li>
              <li><a href="/contacto" className="hover:text-orange-500">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="/envios" className="hover:text-orange-500">Envíos</a></li>
              <li><a href="/garantia" className="hover:text-orange-500">Garantía</a></li>
              <li><a href="/devoluciones" className="hover:text-orange-500">Devoluciones</a></li>
              <li><a href="/ayuda" className="hover:text-orange-500">Centro de Ayuda</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Suscríbete para recibir ofertas exclusivas y novedades.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-lg font-medium"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Ferretería Gabarda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}