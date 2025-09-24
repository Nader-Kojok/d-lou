"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Erreur lors de l\'envoi:', errorData.error);
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      alert('Erreur de connexion. Veuillez vérifier votre connexion internet et réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#04692F] text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-poppins">
              Contactez-nous
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
              Nous sommes à votre écoute pour vous accompagner dans vos projets d&apos;investissement 
              et d&apos;installation au Sénégal. N&apos;hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1E1E1E]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-poppins">
                  Nos coordonnées
                </h2>
                <p className="text-gray-300 mb-8">
                  Nous sommes à votre écoute à tout moment pour répondre à vos questions 
                  et vous accompagner dans vos démarches.
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#04692F]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#04692F]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Contactez-nous par email</p>
                    <a 
                      href="mailto:Amkane@d-lou.sn" 
                      className="text-[#04692F] hover:text-[#04692F]/80 font-medium transition-colors underline"
                    >
                      Amkane@d-lou.sn
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#04692F]/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#04692F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">Téléphone</h3>
                    <p className="text-gray-600 mb-4">Nous sommes à votre écoute à tout moment</p>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Mobile France</p>
                        <a 
                          href="tel:+33614054010" 
                          className="text-[#04692F] hover:text-[#04692F]/80 font-medium transition-colors"
                        >
                          +336 14 05 40 10
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Mobile Sénégal</p>
                        <a 
                          href="tel:+221783063274" 
                          className="text-[#04692F] hover:text-[#04692F]/80 font-medium transition-colors"
                        >
                          +221 78 306 32 74
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Fixe France</p>
                        <a 
                          href="tel:+33141200217" 
                          className="text-[#04692F] hover:text-[#04692F]/80 font-medium transition-colors"
                        >
                          +331 41 20 02 17
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Fixe Sénégal</p>
                        <a 
                          href="tel:+221338222002" 
                          className="text-[#04692F] hover:text-[#04692F]/80 font-medium transition-colors"
                        >
                          +221 33 822 20 02
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 animate-fade-in-left">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#04692F]/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#04692F]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">Adresses</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-[#04692F] mb-1">France</p>
                        <p className="text-gray-600">
                          59 bis avenue Pablo Picasso<br />
                          NANTERRE, 92000
                        </p>
                      </div>
                      
                      <div>
                        <p className="font-medium text-[#04692F] mb-1">Sénégal</p>
                        <p className="text-gray-600">
                          Liberté 6, Villa 6584<br />
                          Dakar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1E1E] mb-6 font-poppins">
                  Envoyez-nous un message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04692F] focus:border-transparent transition-colors"
                          placeholder="Votre nom complet"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04692F] focus:border-transparent transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04692F] focus:border-transparent transition-colors"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04692F] focus:border-transparent transition-colors"
                          placeholder="Sujet de votre message"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#04692F] focus:border-transparent transition-colors resize-vertical"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#04692F] hover:bg-[#04692F]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;