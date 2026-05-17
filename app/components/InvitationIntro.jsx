'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationIntro({ guest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (guest) {
      // Prevent scrolling while intro is open
      document.body.style.overflow = 'hidden';
    } else {
      // General homepage without guest: no intro needed, just open
      setIsOpen(true); 
    }
  }, [guest]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'unset';
    // Trigger background music when they click "open"
    window.dispatchEvent(new Event('playBackgroundMusic'));
  };

  if (!isClient) return null;
  // If no guest, do not render the overlay to avoid affecting general homepage
  if (!guest) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2E3523] px-4"
        >
          {/* Subtle gold border for elegance */}
          <div className="absolute inset-4 border border-[#C8A96B]/30 rounded-lg pointer-events-none" />
          
          <div className="text-center w-full max-w-md flex flex-col items-center z-10 relative">
            
            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#C8A96B] font-playfair text-2xl md:text-3xl mb-12 tracking-[0.2em]"
            >
              M <span className="font-light mx-2">|</span> E
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#F5F1E8] font-inter text-xs md:text-sm uppercase tracking-[0.2em] mb-8"
            >
              Invitación para
            </motion.div>

            {/* Guest Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="font-playfair text-4xl md:text-5xl text-[#F5F1E8] font-thin mb-8 leading-tight w-full"
            >
              {guest.displayName.includes(' & ') ? (
                <>
                  <span className="block">{guest.displayName.split(' & ')[0]}</span>
                  <span className="text-2xl md:text-3xl text-[#C8A96B] block my-4">&</span>
                  <span className="block">{guest.displayName.split(' & ')[1]}</span>
                </>
              ) : guest.displayName.includes(' y ') ? (
                <>
                  <span className="block">{guest.displayName.split(' y ')[0]}</span>
                  <span className="text-2xl md:text-3xl text-[#C8A96B] block my-4 font-inter text-lg">y</span>
                  <span className="block">{guest.displayName.split(' y ')[1]}</span>
                </>
              ) : (
                <span className="block">{guest.displayName}</span>
              )}
            </motion.div>

            {/* Passes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[#C8A96B] font-inter text-sm md:text-base tracking-[0.1em] mb-16"
            >
              {guest.passes} {guest.passes === 1 ? 'pase reservado' : 'pases reservados'}
            </motion.div>

            {/* Action */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              onClick={handleOpen}
              className="group flex flex-col items-center gap-4 cursor-pointer focus:outline-none"
            >
              <div className="w-12 h-12 rounded-full border border-[#C8A96B]/50 flex items-center justify-center group-hover:bg-[#C8A96B]/10 transition-colors duration-500">
                <div className="w-2 h-2 bg-[#C8A96B] rounded-full group-hover:scale-150 transition-transform duration-500" />
              </div>
              <span className="text-[#F5F1E8]/70 font-inter text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-[#F5F1E8] transition-colors duration-500">
                Toca para abrir tu invitación
              </span>
            </motion.button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
