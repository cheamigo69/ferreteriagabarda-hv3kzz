import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Tu Socio en Construcción y Ferretería</h1>
            <p className="text-xl mb-8">
              Encuentra todo lo que necesitas para tus proyectos. Calidad garantizada y los mejores precios del mercado.
            </p>
            <div className="flex space-x-4">
              <a href="/productos" className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold flex items-center">
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/promociones" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Ofertas Especiales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}