'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function GiftRegistry() {
    return (
        <section id="gifts" className="py-16 md:py-24 bg-[#F5F1E8] relative overflow-hidden">
            {/* Subtle background texture */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.15] mix-blend-multiply pointer-events-none" 
                style={{ 
                    backgroundImage: 'url(/texture.jpg)', 
                    backgroundRepeat: 'repeat',
                    backgroundSize: '300px'
                }} 
            />

            <div className="max-w-4xl w-full mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 rounded-full border border-[#C8A96B] flex items-center justify-center bg-white/50 backdrop-blur-sm">
                            <Gift className="w-8 h-8 text-[#4E5B31]" />
                        </div>
                    </motion.div>

                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#4E5B31] font-thin tracking-wider mb-6">
                        UN DETALLE ESPECIAL
                    </h2>
                    
                    <p className="text-[#2E3523] text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Tu compañía es lo más importante para nosotros. Si deseas hacernos un regalo, hemos habilitado una opción de transferencia bancaria.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-lg mx-auto"
                >
                    <div className="bg-[#FCFBF8] border border-[#C8A96B]/30 rounded-2xl p-8 md:p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
                        
                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C8A96B]/40" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C8A96B]/40" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C8A96B]/40" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C8A96B]/40" />

                        <h3 className="font-playfair text-2xl text-[#4E5B31] mb-8 font-medium">
                            Transferencia bancaria
                        </h3>

                        <div className="space-y-6 text-[#2E3523]">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-[#A8B091] font-semibold mb-1">Nombre</p>
                                <p className="font-playfair text-xl">Karen Michelle Naranjo Vargas</p>
                            </div>
                            
                            <div className="w-12 h-[1px] bg-[#DCCDB8] mx-auto" />
                            
                            <div>
                                <p className="text-xs uppercase tracking-widest text-[#A8B091] font-semibold mb-1">Banco</p>
                                <p className="font-playfair text-xl">BBVA</p>
                            </div>
                            
                            <div className="w-12 h-[1px] bg-[#DCCDB8] mx-auto" />
                            
                            <div>
                                <p className="text-xs uppercase tracking-widest text-[#A8B091] font-semibold mb-1">No. Tarjeta</p>
                                <p className="font-playfair text-xl tracking-widest">4152 3139 3007 1233</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}