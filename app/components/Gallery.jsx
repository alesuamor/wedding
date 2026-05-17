'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Image from 'next/image';
import settings from '../config/settings';
import Lightbox from './shared/Lightbox';

export default function Gallery() {
  const photos = settings.gallery;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section id="gallery" className="min-h-screen flex items-center justify-center py-20 bg-[#2E3523]">

        <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="h-[0.5px] bg-gradient-to-r from-transparent via-[#C8A96B]/30 to-transparent mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5">
              <span className="bg-gradient-to-r from-[#F5F1E8] via-[#C8A96B] to-[#F5F1E8] bg-clip-text text-transparent">
                NUESTROS MOMENTOS
              </span>
            </h2>
            <p className="text-lg font-light tracking-[2px] uppercase opacity-60 text-[#F5F1E8]">
              Una pequeña colección de recuerdos
            </p>
            <p className="text-sm text-[#C8A96B]/50 mt-4">
              Haz click en cualquier imagen para verla completa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square relative overflow-hidden cursor-pointer group rounded-xl lg:rounded-2xl"
                whileHover={{ scale: 0.98 }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />

                {/* Overlay with caption and icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4E5B31]/90 via-[#4E5B31]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      {photo.caption && (
                        <p className="text-white text-sm lg:text-base font-light">
                          {photo.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Golden border on hover */}
                <div className="absolute inset-0 border-2 border-[#C8A96B] opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl lg:rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-[#F5F1E8] italic opacity-80 font-playfair">
              "Cada imagen guarda un recuerdo, y nuestra historia apenas comienza..."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={photos}
        currentIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
      />
    </>
  );
}