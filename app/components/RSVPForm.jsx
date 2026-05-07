'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function RSVPForm({ guest }) {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    slug: guest?.slug || "",
                    email: formData.email,
                    message: formData.message,
                    guestDisplayName: guest?.displayName || "Invitación general",
                    reservedPasses: guest?.passes || null
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
            } else {
                setSubmitError('No pudimos registrar tu confirmación. Inténtalo nuevamente.');
            }
        } catch (error) {
            setSubmitError('No pudimos registrar tu confirmación. Inténtalo nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f3]">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center px-6"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#87a878] to-[#a8c89a] rounded-full mb-6">
                        <Check className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="font-playfair text-5xl font-thin tracking-[0.02em] mb-4">
                        <span className="bg-gradient-to-r from-[#1a1a1a] via-[#d4af37] to-[#1a1a1a] bg-clip-text text-transparent">
                            ¡Gracias!
                        </span>
                    </h2>

                    <p className="text-xl text-[#1a1a1a] opacity-70 max-w-xl mx-auto">
                        Hemos recibido tu confirmación. Nos emociona mucho poder compartir este día contigo.
                    </p>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="rsvp" className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f3] text-[#1a1a1a]">
            <div className="max-w-2xl w-full mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-playfair text-[clamp(3rem,8vw,5rem)] font-thin tracking-[0.02em] mb-5 drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]">
                        <span className="bg-gradient-to-r from-[#1a1a1a] via-[#514343] to-[#1a1a1a] bg-clip-text text-transparent">
                            Confirma tu asistencia
                        </span>
                    </h2>

                    <p className="text-lg font-light tracking-[2px] uppercase opacity-60">
                        Nos encantará compartir este día contigo.
                        <br />
                        Confírmanos si podrás acompañarnos.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                >
                    {/* Guest Row */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative">
                            <input
                                type="text"
                                id="guestName"
                                value={guest?.displayName || "Invitación general"}
                                readOnly
                                className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#d4af37] outline-none transition-all duration-300 peer text-[#1a1a1a]/60 cursor-not-allowed"
                                placeholder=" "
                            />
                            <label
                                htmlFor="guestName"
                                className="absolute left-0 -top-6 text-sm text-[#1a1a1a]/60 transition-all duration-300"
                            >
                                Invitación para
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                required
                                className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#d4af37] outline-none transition-all duration-300 peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-3 text-[#1a1a1a]/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#d4af37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
                            >
                                Correo electrónico
                            </label>
                        </div>
                    </div>

                    {/* Passes Row */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative md:col-span-1">
                            <input
                                type="text"
                                id="guests"
                                value={guest?.passes === 1 ? "1 persona" : guest?.passes > 1 ? `${guest.passes} personas` : "Invitación general"}
                                readOnly
                                className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#d4af37] outline-none transition-all duration-300 peer text-[#1a1a1a]/60 cursor-not-allowed"
                                placeholder=" "
                            />
                            <label
                                htmlFor="guests"
                                className="absolute left-0 -top-6 text-sm text-[#1a1a1a]/60 transition-all duration-300"
                            >
                                Pases reservados
                            </label>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            rows="4"
                            className="w-full px-0 py-3 bg-transparent border-b border-[#1a1a1a]/20 focus:border-[#d4af37] outline-none transition-all duration-300 resize-none peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-3 text-[#1a1a1a]/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#d4af37] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
                        >
                            Mensaje, restricciones alimentarias o comentarios
                        </label>
                    </div>

                    {submitError && (
                        <div className="text-[#ff6b6b] text-sm text-center">
                            {submitError}
                        </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 border-2 border-[#ff6b6b] bg-transparent text-[#ff6b6b] font-semibold tracking-[2px] uppercase relative overflow-hidden group transition-all duration-300 hover:text-[#faf8f3]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-[#ff6b6b] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        <span className="relative flex items-center justify-center gap-3">
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Confirmar asistencia
                                </>
                            )}
                        </span>
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}