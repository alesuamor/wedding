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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/bg-hero.jpg')] md:bg-[url('/bg-hero-desktop.jpg')]"
      />

      {/* Dark Olive Green Overlay */}
      <div className="absolute inset-0 bg-[#2E3523]/20 mix-blend-multiply" />
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
          <div className="mb-4">
            <img src="/logo.png" alt="Logo" className="h-16 md:h-20 w-auto object-contain mx-auto" />
          </div>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#F5F1E8] font-medium">
            NUESTRA BODA
          </p>
        </motion.div>

        {/* Center Section - Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center mt-auto mb-8 md:mb-14"
        >
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-[#F5F1E8] font-thin leading-[0.9]">
            Michelle
          </h1>
          <div className="my-3 md:my-5">
            <img src="/and.png" alt="&" className="h-10 md:h-14 w-auto object-contain mx-auto" />
          </div>
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-[#F5F1E8] font-thin leading-[0.9]">
            Eduardo
          </h1>
        </motion.div>

        {/* Bottom Section - Details & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center mb-4 md:mb-8"
        >
          <div className="flex flex-col items-center mb-8 space-y-3">
            <img src="/guirnalda.png" alt="Guirnalda" className="w-28 md:w-36 h-auto object-contain mb-2" />
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#F5F1E8] font-light whitespace-nowrap">
              SÁBADO 8 • AGOSTO • 2026
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#F5F1E8] font-light whitespace-nowrap">
              QUINTA RIO HJ, VERACRUZ
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