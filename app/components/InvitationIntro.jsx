'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvitationIntro({ guest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
    if (isClicked) return;
    setIsClicked(true);
    
    // Trigger background music
    window.dispatchEvent(new Event('playBackgroundMusic'));

    // Wait for the exit animation to complete before unmounting
    setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = 'unset';
    }, 1200); // Wait 1.2s to finish animations
  };

  if (!isClient) return null;
  // If no guest, do not render the overlay to avoid affecting general homepage
  if (!guest) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Full Screen Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-cool.jpg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isClicked ? 0 : 1 }}
            transition={{ duration: 1 }}
          />

          {/* Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={
              isClicked 
                ? { scale: 1.02, y: -30, rotateX: 8, opacity: 0 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{ 
              duration: isClicked ? 1.2 : 1, 
              ease: [0.25, 1, 0.5, 1] 
            }}
            style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            className="relative w-full max-w-[420px] md:max-w-[460px] aspect-[9/18] mx-4 cursor-pointer"
            onClick={handleOpen}
          >
            {/* Card Image */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
              style={{ backgroundImage: "url('/card-cool.png')" }}
            />

            {/* Dynamic Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center pt-[25%] pb-[15%] px-8">
              
              <div className="flex flex-col items-center justify-center w-full mt-4">
                {/* INVITACIÓN PARA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="text-[#F5F1E8] font-inter text-[10px] md:text-xs uppercase tracking-[0.25em] mb-8"
                >
                  Invitación para
                </motion.div>

                {/* Guest Name */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="font-playfair text-3xl md:text-4xl text-[#F5F1E8] font-normal leading-tight w-full drop-shadow-sm"
                >
                  {guest.displayName.includes(' & ') ? (
                    <>
                      <span className="block">{guest.displayName.split(' & ')[0]}</span>
                      <span className="text-xl md:text-2xl text-[#C8A96B] block my-3 italic">&</span>
                      <span className="block">{guest.displayName.split(' & ')[1]}</span>
                    </>
                  ) : (
                    <span className="block">{guest.displayName}</span>
                  )}
                </motion.div>

                {/* Passes */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-[#C8A96B] font-inter text-[10px] md:text-xs uppercase tracking-[0.2em] mt-10"
                >
                  {guest.passes} {guest.passes === 1 ? 'pase reservado' : 'pases reservados'}
                </motion.div>
              </div>

              {/* Bottom Action Area */}
              <div className="flex flex-col items-center justify-end h-32 w-full">
                {/* Invisible pulse over the visual button of the image, or a slight glow if clicked */}
                <motion.div
                  animate={isClicked ? { scale: [1, 1.2, 1], opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                />
                {/* Toca para abrir */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-[#F5F1E8] font-inter text-[9px] md:text-[10px] uppercase tracking-[0.25em]"
                >
                  Toca para abrir tu invitación
                </motion.div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
