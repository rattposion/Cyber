'use client';

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  rating: number;
  createdAt: string;
  product: {
    name: string;
    image: string;
  };
}

export default function Depoimentos() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Erro ao carregar depoimentos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return <div className="text-center p-8">Carregando depoimentos...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Depoimentos dos Clientes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200"
          >
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-purple-600">{testimonial.author}</h3>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(testimonial.createdAt).toLocaleDateString('pt-BR')}
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{testimonial.content}</p>
            
            <div className="border-t pt-4">
              <div className="flex items-center">
                <Image 
                  src={testimonial.product.image || '/images/placeholder.svg'} 
                  alt={testimonial.product.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                  width={48}
                  height={48}
                />
                <span className="text-sm text-gray-600">{testimonial.product.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 