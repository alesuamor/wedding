'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import settings from '../config/settings';

export default function Footer() {
    const { couple, social } = settings;



    return (
        <footer className="py-20 bg-[#2E3523] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle at 20% 80%, #B96F4D 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #C8A96B 0%, transparent 50%)
                        `,
                        animation: 'float 25s ease-in-out infinite'
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Names */}
                    <motion.h3
                        className="font-playfair text-6xl md:text-7xl font-thin tracking-[0.02em] mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="bg-gradient-to-r from-[#F5F1E8] via-[#C8A96B] to-[#F5F1E8] bg-clip-text text-transparent">
                            {settings.couple.bride.name[0].toUpperCase()} & {settings.couple.groom.name[0].toUpperCase()}
                        </span>
                    </motion.h3>

                    {/* Contact Info */}
                    <p className="text-lg text-[#F5F1E8] opacity-80 leading-relaxed mb-8">
                        Nos encantará celebrar este día con ustedes<br />
                        Para cualquier duda, escríbannos por WhatsApp
                    </p>

                    {/* WhatsApp Icon */}
                    <div className="flex justify-center mb-16">
                        <motion.a
                            href="https://api.whatsapp.com/send?phone=522291261381&text=Hola!"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            viewport={{ once: true }}
                            className="text-[#C8A96B] hover:text-[#B96F4D] transition-colors duration-300"
                        >
                            <MessageCircle className="w-12 h-12" />
                        </motion.a>
                    </div>

                    {/* Divider */}
                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B] to-transparent mx-auto mb-8"></div>

                    {/* Copyright and Credits */}
                    <div className="space-y-4">
                        {/* Animated Heart */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block"
                        >
                            <Heart className="w-6 h-6 text-[#B96F4D] fill-[#B96F4D] mx-auto" />
                        </motion.div>

                        <p className="text-xs text-[#F5F1E8] opacity-60 tracking-wider uppercase">
                            Hecho con cariño para nuestro gran día
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer >
    );
}