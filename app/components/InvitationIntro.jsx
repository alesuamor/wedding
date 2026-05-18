'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function InvitationIntro({ guest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
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

  // If no guest, do not render the overlay to avoid affecting general homepage
  if (!guest) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#2E3523]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Full Screen Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center md:hidden"
            style={{ backgroundImage: "url('/bg-cool.jpg')" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isClicked ? 0 : 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute inset-0 bg-cover bg-center hidden md:block"
            style={{ backgroundImage: "url('/bg-cool-desktop.jpg')" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isClicked ? 0 : 1 }}
            transition={{ duration: 1 }}
          />

          {/* Card Container */}
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 0 }}
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
            <Image
              src="/card-cool.png"
              alt="Invitación"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 420px, 460px"
              className="object-contain z-0"
            />

            {/* Dynamic Content Overlay (Absolute Positions) */}
            <div className="absolute inset-0 z-10 w-full h-full text-center">
              
              {/* Logo (Top 13%) */}
              <div 
                className="absolute w-full flex justify-center"
                style={{ top: '13%' }}
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

              {/* INVITACIÓN PARA (Top 29%) */}
              <div
                className="absolute w-full text-[#F5F1E8] font-inter text-[10px] md:text-xs uppercase tracking-[0.25em]"
                style={{ top: '29%' }}
              >
                Invitación para
              </div>

              {/* Guest Names Handling */}
              {guest.displayName.includes(' & ') ? (
                <>
                  {/* Nombre 1 (Top 34%) */}
                  <div
                    className="absolute w-full font-playfair text-[28px] md:text-3xl text-[#F5F1E8] font-normal leading-tight px-4"
                    style={{ top: '34%' }}
                  >
                    {guest.displayName.split(' & ')[0]}
                  </div>

                  {/* & (Top 41%) */}
                  <div
                    className="absolute w-full font-playfair text-xl md:text-2xl text-[#C29A56] italic"
                    style={{ top: '41%' }}
                  >
                    &
                  </div>

                  {/* Nombre 2 (Top 45%) */}
                  <div
                    className="absolute w-full font-playfair text-[28px] md:text-3xl text-[#F5F1E8] font-normal leading-tight px-4"
                    style={{ top: '45%' }}
                  >
                    {guest.displayName.split(' & ')[1]}
                  </div>
                </>
              ) : (
                /* Single Name (Top 39% approx) */
                <div
                  className="absolute w-full font-playfair text-[28px] md:text-3xl text-[#F5F1E8] font-normal leading-tight px-4"
                  style={{ top: '39%' }}
                >
                  {guest.displayName}
                </div>
              )}

              {/* Passes (Top 56%) */}
              <div
                className="absolute w-full text-[#C29A56] font-inter text-[10px] md:text-xs uppercase tracking-[0.2em]"
                style={{ top: '56%' }}
              >
                {guest.passes} {guest.passes === 1 ? 'pase reservado' : 'pases reservados'}
              </div>

              {/* Action (Bottom 14%) */}
              <div
                className="absolute w-full text-[#F5F1E8] font-inter text-[9px] md:text-[10px] uppercase tracking-[0.25em]"
                style={{ bottom: '14%' }}
              >
                Toca para abrir tu invitación
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
