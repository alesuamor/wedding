'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function RSVPForm({ guest }) {
    const [formData, setFormData] = useState({
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeclining, setIsDeclining] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleConfirm = async (e) => {
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
                    action: "confirm",
                    slug: guest?.slug || "",
                    email: "",
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

    const handleDecline = async () => {
        setIsDeclining(true);
        setSubmitError('');

        try {
            await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: "decline",
                    slug: guest?.slug || "",
                    email: "",
                    message: formData.message,
                    guestDisplayName: guest?.displayName || "Invitación general",
                    reservedPasses: guest?.passes || null
                }),
            });
        } catch (error) {
            console.error("Error declining:", error);
        } finally {
            setIsDeclining(false);
            window.open("https://api.whatsapp.com/send?phone=522291261381&text=Lamentablemente+no+podremos+asistir", "_blank");
        }
    };

    if (submitted) {
        return (
            <section className="py-24 flex items-center justify-center bg-[#F5F1E8]">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center px-6"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#A8B091] to-[#a8c89a] rounded-full mb-6">
                        <Check className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="font-playfair text-5xl font-thin tracking-[0.02em] mb-4">
                        <span className="bg-gradient-to-r from-[#2E3523] via-[#C8A96B] to-[#2E3523] bg-clip-text text-transparent">
                            ¡Gracias!
                        </span>
                    </h2>

                    <p className="text-xl text-[#2E3523] opacity-70 max-w-xl mx-auto">
                        Hemos recibido tu confirmación. Nos emociona mucho poder compartir este día contigo.
                    </p>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="rsvp" className="py-16 md:py-20 flex flex-col items-center justify-center bg-[#F5F1E8] text-[#2E3523]">
            {/* Separador Decorativo Guirnalda */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-center mb-12 md:mb-16"
            >
                <img
                    src="/guirnalda.png"
                    alt="Separador floral"
                    className="w-40 md:w-56 opacity-70 object-contain mix-blend-multiply"
                />
            </motion.div>

            <div className="max-w-3xl w-full mx-auto px-6">
                <div className="bg-[#FCFBF8] border border-[#C8A96B]/20 rounded-3xl p-8 md:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-playfair text-[clamp(2.5rem,6vw,4rem)] font-thin tracking-[0.02em] mb-4">
                            <span className="bg-gradient-to-r from-[#2E3523] via-[#514343] to-[#2E3523] bg-clip-text text-transparent">
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
                        onSubmit={handleConfirm}
                        className="space-y-8"
                    >
                        {/* Guest and Passes Row */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="guestName"
                                    value={guest?.displayName || "Invitación general"}
                                    readOnly
                                    className="w-full px-0 py-3 bg-transparent border-b border-[#2E3523]/20 focus:border-[#C8A96B] outline-none transition-all duration-300 peer text-[#2E3523]/60 cursor-not-allowed"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="guestName"
                                    className="absolute left-0 -top-6 text-sm text-[#2E3523]/60 transition-all duration-300"
                                >
                                    Invitación para
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    id="guests"
                                    value={guest?.passes === 1 ? "1 persona" : guest?.passes > 1 ? `${guest.passes} personas` : "Invitación general"}
                                    readOnly
                                    className="w-full px-0 py-3 bg-transparent border-b border-[#2E3523]/20 focus:border-[#C8A96B] outline-none transition-all duration-300 peer text-[#2E3523]/60 cursor-not-allowed"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="guests"
                                    className="absolute left-0 -top-6 text-sm text-[#2E3523]/60 transition-all duration-300"
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
                                className="w-full px-0 py-3 bg-transparent border-b border-[#2E3523]/20 focus:border-[#C8A96B] outline-none transition-all duration-300 resize-none peer"
                                placeholder=" "
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-0 top-3 text-[#2E3523]/60 transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#C8A96B] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm"
                            >
                                ¿Algún mensajito?
                            </label>
                        </div>

                        {submitError && (
                            <div className="text-[#B96F4D] text-sm text-center">
                                {submitError}
                            </div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting || isDeclining}
                            className="w-full py-4 md:py-5 bg-[#4E5B31] text-[#F5F1E8] font-semibold uppercase relative overflow-hidden group transition-all duration-300 hover:bg-[#2E3523] border border-transparent hover:border-[#C8A96B] rounded-md"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-[#2E3523] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            <span className="relative flex items-center justify-center gap-2 md:gap-3 px-2">
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                                        <span className="text-[12px] sm:text-sm md:text-base tracking-[1px] md:tracking-[2px] whitespace-nowrap">Enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                                        <span className="text-[12px] sm:text-sm md:text-base tracking-[1px] md:tracking-[2px] whitespace-nowrap">Confirmar asistencia</span>
                                    </>
                                )}
                            </span>
                        </motion.button>

                        {/* Decline Option */}
                        <div className="text-center pt-2">
                            <button
                                type="button"
                                onClick={handleDecline}
                                disabled={isSubmitting || isDeclining}
                                className="text-sm text-[#2E3523]/60 hover:text-[#2E3523] hover:underline underline-offset-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent border-none p-2 inline-block"
                            >
                                {isDeclining ? "Registrando respuesta..." : "No vamos a poder asistir"}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}