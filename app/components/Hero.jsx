'use client'

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import settings from '../config/settings';

export default function Hero({ guest }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('wedding-details') || document.getElementById('countdown');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Trigger background music to play
    window.dispatchEvent(new Event('playBackgroundMusic'));
  };

  return (
    <div id="hero" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/our-moments/01.jpg)' }}
      />
      
      {/* Dark Olive Green Overlay */}
      <div className="absolute inset-0 bg-[#2E3523]/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E3523]/40 via-transparent to-[#2E3523]/80" />

      {/* Main Content */}
      <div className="text-center z-10 relative px-6 w-full h-full flex flex-col justify-between py-12 md:py-20">
        
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center mt-4 md:mt-8"
        >
          <div className="text-[#F5F1E8] font-playfair text-xl tracking-[0.2em] mb-4">
            M <span className="mx-2 text-[#C8A96B]">|</span> L
          </div>
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#C8A96B] font-light">
            Nuestra Boda
          </p>
        </motion.div>

        {/* Center Section - Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center my-auto"
        >
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-[#F5F1E8] font-thin leading-[0.9]">
            Mich
          </h1>
          <div className="font-script italic text-5xl md:text-7xl text-[#C8A96B] my-2 md:my-4">
            &
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-[#F5F1E8] font-thin leading-[0.9]">
            Lalo
          </h1>
        </motion.div>

        {/* Bottom Section - Details & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center mb-4 md:mb-8"
        >
          <div className="mb-8 space-y-2">
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#F5F1E8] font-light">
              {settings.wedding.displayDate}
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#F5F1E8]/70 font-light">
              {settings.venue.name} <br/> Veracruz, México
            </p>
          </div>

          <button 
            onClick={scrollToNext}
            className="group relative px-10 py-4 bg-[#4E5B31] text-[#F5F1E8] hover:bg-[#2E3523] hover:text-[#F5F1E8] transition-all duration-500 ease-in-out font-inter uppercase tracking-[0.15em] text-xs md:text-sm shadow-xl hover:shadow-[#2E3523]/20 border border-transparent hover:border-[#C8A96B] rounded-md"
          >
            Acompáñanos
          </button>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="mt-6 text-[#C8A96B] cursor-pointer hover:text-[#F5F1E8] transition-colors"
            onClick={scrollToNext}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>

          {/* Guest Information (Optional, if guest object is passed) */}
          {guest && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 text-[#F5F1E8]/80 text-xs tracking-wider"
            >
              Invitación para: {guest.displayName} ({guest.passes} pases)
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}