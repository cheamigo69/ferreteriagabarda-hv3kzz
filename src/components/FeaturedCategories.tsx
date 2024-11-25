import React from 'react';
import { Tool, Hammer, Wrench, Paintbrush } from 'lucide-react';

const categories = [
  {
    name: 'Herramientas Eléctricas',
    icon: Tool,
    description: 'Taladros, sierras y más',
    color: 'bg-blue-500'
  },
  {
    name: 'Herramientas Manuales',
    icon: Hammer,
    description: 'Martillos, destornilladores y más',
    color: 'bg-green-500'
  },
  {
    name: 'Plomería',
    icon: Wrench,
    description: 'Tuberías, llaves y accesorios',
    color: 'bg-purple-500'
  },
  {
    name: 'Pintura',
    icon: Paintbrush,
    description: 'Pinturas, brochas y rodillos',
    color: 'bg-red-500'
  }
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`${category.color} p-6 flex justify-center`}>
                <category.icon className="h-12 w-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
                <a href={`/categoria/${category.name.toLowerCase()}`} className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-medium">
                  Ver productos →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}