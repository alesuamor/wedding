'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Calendar, Users, Camera, Mail, MapPin } from 'lucide-react';
import settings from '../config/settings';

export default function FloatingMenu({ showRSVP = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show menu when scrolling down past 100px
      if (currentScrollY > 100 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBeenShown]);

  const allMenuItems = [
    { name: 'Inicio', href: '#hero', icon: Heart },
    { name: 'Cuenta Regresiva', href: '#countdown', icon: Calendar },
    { name: 'Detalles', href: '#wedding-details', icon: MapPin },
    { name: 'Nuestra Historia', href: '#love-story', icon: Heart },
    { name: 'Galería', href: '#gallery', icon: Camera },
    { name: 'Contacto', href: '#contact', icon: Users },
  ];

  const menuItems = showRSVP
    ? [...allMenuItems, { name: 'Confirmar Asistencia', href: '#rsvp', icon: Mail }]
    : allMenuItems;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Menu Button */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed top-6 right-6 z-[100]"
            >
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 bg-[#2E3523]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#C8A96B]/30 hover:border-[#C8A96B] transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-[#C8A96B]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-[#C8A96B]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#C8A96B]/50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.button>
            </motion.div>

            {/* Menu Panel */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
                    onClick={() => setIsOpen(false)}
                  />

                  {/* Menu Content */}
                  <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 h-full w-72 bg-[#2E3523]/95 backdrop-blur-md z-[95] border-l border-[#C8A96B]/20"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-[#C8A96B]/20">
                      <motion.h3
                        className="font-playfair text-2xl text-left"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="bg-gradient-to-r from-[#F5F1E8] via-[#C8A96B] to-[#F5F1E8] bg-clip-text text-transparent">
                          {settings.couple.bride.name} & {settings.couple.groom.name}
                        </span>
                      </motion.h3>
                      <motion.p
                        className="text-left text-xs text-[#C8A96B]/60 mt-2 tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {settings.wedding.displayDate}
                      </motion.p>
                    </div>

                    {/* Menu Items */}
                    <nav className="p-6">
                      <ul className="space-y-4">
                        {menuItems.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <motion.li
                              key={item.name}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                            >
                              <button
                                onClick={() => scrollToSection(item.href)}
                                className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-[#C8A96B]/10 transition-colors group"
                              >
                                <Icon className="w-4 h-4 text-[#C8A96B]/60 group-hover:text-[#C8A96B] transition-colors" />
                                <span className="text-[#F5F1E8]/80 group-hover:text-[#F5F1E8] transition-colors">
                                  {item.name}
                                </span>
                                <motion.div
                                  className="ml-auto w-1 h-1 bg-[#C8A96B] rounded-full opacity-0 group-hover:opacity-100"
                                  whileHover={{ scale: 2 }}
                                  transition={{ duration: 0.2 }}
                                />
                              </button>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </nav>

                    {/* Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#C8A96B]/20">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                      >
                        <p className="text-xs text-[#F5F1E8]/40 tracking-wider uppercase mb-2">
                          Comparte tus fotos
                        </p>
                        <p className="text-sm text-[#C8A96B]/60">
                          {settings.social.instagram.hashtag}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}