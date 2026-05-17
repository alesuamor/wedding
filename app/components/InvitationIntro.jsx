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
      document.body.style.overflow = 'hidden';
    } else {
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
                ? { scale: 1.03, y: 15, opacity: 0 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{ 
              duration: isClicked ? 1.2 : 1, 
              ease: [0.25, 1, 0.5, 1] 
            }}
            className="relative w-full max-w-[420px] md:max-w-[460px] aspect-[9/18] mx-4 cursor-pointer"
            onClick={handleOpen}
          >
            {/* Card Image */}
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0"
              style={{ backgroundImage: "url('/card-cool.png')" }}
            />

            {/* Dynamic Content Overlay (Absolute Positions) */}
            <div className="absolute inset-0 z-10 w-full h-full text-center">
              
              {/* Logo (Top 11%) */}
              <div 
                className="absolute w-full flex justify-center"
                style={{ top: '11%' }}
              >
                <div 
                  className="w-[100px] h-[80px] md:w-[110px] bg-[#C29A56]"
                  style={{
                    WebkitMaskImage: "url('/logo.png')",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: "url('/logo.png')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
              </div>

              {/* INVITACIÓN PARA (Top 27%) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="absolute w-full text-[#F5F1E8] font-inter text-[10px] md:text-xs uppercase tracking-[0.25em]"
                style={{ top: '27%' }}
              >
                Invitación para
              </motion.div>

              {/* Guest Names Handling */}
              {guest.displayName.includes(' & ') ? (
                <>
                  {/* Nombre 1 (Top 32%) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="absolute w-full font-playfair text-[28px] md:text-3xl text-[#F5F1E8] font-normal leading-tight px-4"
                    style={{ top: '32%' }}
                  >
                    {guest.displayName.split(' & ')[0]}
                  </motion.div>

                  {/* & (Top 39%) */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="absolute w-full font-playfair text-xl md:text-2xl text-[#C29A56] italic"
                    style={{ top: '39%' }}
                  >
                    &
                  </motion.div>

                  {/* Nombre 2 (Top 43%) */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute w-full font-playfair text-[28px] md:text-3xl text-[#F5F1E8] font-normal leading-tight px-4"
                    style={{ top: '43%' }}
                  >
                    {guest.displayName.split(' & ')[1]}
                  </motion.div>
                </>
              ) : (
                /* Single Name (Top 37% approx) */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute w-full font-playfair text-[28px] md:text-3xl text-[#F5F1E8] font-normal leading-tight px-4"
                  style={{ top: '37%' }}
                >
                  {guest.displayName}
                </motion.div>
              )}

              {/* Passes (Top 51%) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="absolute w-full text-[#C29A56] font-inter text-[10px] md:text-xs uppercase tracking-[0.2em]"
                style={{ top: '51%' }}
              >
                {guest.passes} {guest.passes === 1 ? 'pase reservado' : 'pases reservados'}
              </motion.div>

              {/* Action (Bottom 7%) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute w-full text-[#F5F1E8] font-inter text-[9px] md:text-[10px] uppercase tracking-[0.25em]"
                style={{ bottom: '7%' }}
              >
                Toca para abrir tu invitación
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
