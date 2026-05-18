'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, Music, Utensils, Camera, Heart, Users, Sparkles, Palette, Gift, CalendarPlus, ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import settings from '../config/settings';

export default function WeddingDetails() {
  const { wedding, venue, events, social, venueGallery } = settings;
  const [activeTab, setActiveTab] = useState(0);
  const [calendarUrl, setCalendarUrl] = useState('#');
  const [mounted, setMounted] = useState(false);

  // Generate Google Calendar URL on client side only
  React.useEffect(() => {
    setMounted(true);
    const startDate = new Date(`${wedding.date}T${wedding.ceremony.time}:00`);
    const endDate = new Date(`${wedding.date}T${wedding.reception.endTime}:00`);

    // Format dates for Google Calendar (YYYYMMDDTHHmmss)
    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    };

    const eventDetails = {
      text: `Boda de ${settings.couple.bride.name} & ${settings.couple.groom.name}`,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: `Acompáñennos a celebrar nuestra boda.\n\nCeremonia: ${wedding.ceremony.displayTime}\nRecepción: ${wedding.reception.displayTime}\n\nCódigo de vestimenta: ${events.ceremony.dressCode}\n\nSitio web: ${window.location.origin}`,
      location: `${venue.name}, ${venue.address.street}, ${venue.address.district}, ${venue.address.city}, ${venue.address.country}`,
      ctz: 'Asia/Bangkok' // Adjust timezone as needed
    };

    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text: eventDetails.text,
      dates: eventDetails.dates,
      details: eventDetails.details,
      location: eventDetails.location,
      ctz: eventDetails.ctz
    });

    setCalendarUrl(`${baseUrl}&${params.toString()}`);
  }, []);



  // Timeline data
  const timeline = [
    {
      time: wedding.ceremony.displayTime,
      title: "Ceremonia",
      description: "Intercambio de votos",
      icon: Heart
    },
    {
      time: wedding.cocktailHour.displayTime,
      title: "Cóctel",
      description: "Bebidas, bocadillos y música",
      icon: Music
    },
    {
      time: wedding.reception.displayTime,
      title: "Celebración",
      description: "Cena y celebración",
      icon: Utensils
    },
    {
      time: wedding.reception.displayEndTime,
      title: "Cierre de la noche",
      description: "Despedida especial",
      icon: Sparkles
    }
  ];

  // Detail tabs
  const detailTabs = [
    {
      title: "Ceremonia",
      icon: Heart,
      content: {
        title: "Ceremonia",
        time: wedding.ceremony.displayTime,
        location: venue.ceremonyLocation,
        duration: "Duración aproximada: 30 minutos",
        notes: [
          "Su presencia es muy importante para nosotros, agradeceremos su asistencia y puntualidad.",
          "Les pedimos vivir la ceremonia sin celulares.",
          "Habrá fotografía profesional."
        ]
      }
    },
    {
      title: "Recepción",
      icon: Music,
      content: {
        title: "Cóctel y celebración",
        time: `${wedding.cocktailHour.displayTime} Cóctel`,
        location: `${wedding.reception.displayTime} Celebración`,
        duration: `${wedding.reception.displayEndTime} Cierre de la noche`,
        notes: [
          "Habrá bebidas, bocadillos, cena y música.",
          "Los esperamos para compartir este momento tan especial.",
          "Gracias por acompañarnos en este día tan importante."
        ]
      }
    },
    {
      title: "Vestimenta",
      icon: Palette,
      content: {
        title: "Código de vestimenta",
        time: "Cóctel formal jardín",
        location: "",
        duration: "",
        notes: [
          "Para caballeros: sugerimos evitar tonalidades en color verde.",
          "Para damas: sugerimos evitar el color blanco."
        ],
        action: {
          label: "Date una idea",
          url: "https://www.google.com/search?tbm=isch&q=coctel+formal+jardin"
        }
      }
    },
    {
      title: "Información",
      icon: Gift,
      content: {
        title: "Información importante",
        time: "Ubicación: Quinta Río HJ, Playa de Vacas, Veracruz.",
        location: "Confirmación: Por favor confirma tu asistencia desde esta invitación.",
        duration: "",
        notes: [
          "Si tienes alguna restricción alimentaria, puedes escribirla al confirmar.",
          "Para cualquier duda, pueden comunicarse por WhatsApp."
        ]
      }
    }
  ];

  return (
    <>
      <section id="wedding-details" className="min-h-screen py-20 bg-[#4E5B31] relative overflow-hidden">
        {/* Elegant Gradient Background - Same as Hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4E5B31] via-[#2E3523] to-[#0f0f0f]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A96B15] via-transparent to-[#B96F4D10]" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#A8B09110] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(200,169,107,0.08)_0%,_transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,176,145,0.06)_0%,_transparent_40%)]" />
        </div>

        {/* Floating Particles - reduced based on performance */}
        {mounted && performance.particleCount > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(Math.min(performance.particleCount, 15))].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#C8A96B]/20 rounded-full will-change-transform"
                style={{
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 13) % 100}%`
                }}
                animate={{
                  y: [-20, -120],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 12 + (i % 3) * 4,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="h-[0.5px] bg-gradient-to-r from-transparent via-[#C8A96B]/30 to-transparent mb-12"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            <h2 className="font-playfair text-[clamp(3.5rem,9vw,6rem)] font-thin tracking-[0.02em] mb-6">
              <span className="bg-gradient-to-r from-[#F5F1E8] via-[#C8A96B] to-[#F5F1E8] bg-clip-text text-transparent">
                DETALLES DE LA BODA
              </span>
            </h2>
            <p className="text-lg font-light tracking-[0.2em] uppercase text-[#F5F1E8]/40">
              Todo lo que necesitas saber
            </p>
          </motion.div>

          {/* Main Venue Card with Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Hero Banner with Wide Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden mb-8">
              <Image
                src={venueGallery.heroImage}
                alt={venue.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#1D240D]/80" />

              <motion.div
                className="absolute inset-0 flex items-center justify-center text-center z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.h3
                    className="drop-shadow-[2px_2px_4px_black] font-playfair text-[clamp(3rem,7vw,5rem)] font-thin tracking-[0.02em] leading-tight"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-[#F5F1E8] via-[#fff] to-[#F5F1E8] bg-clip-text text-transparent">
                      {venue.name.toUpperCase()}
                    </span>
                  </motion.h3>
                  <motion.p
                    className="text-white/80 text-xl mt-4 max-w-2xl mx-auto px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    Lugar de la celebración
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Venue Info Card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96B]/5 to-transparent opacity-50" />

              <div className="relative p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-3 mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm font-medium tracking-wider text-[#C8A96B]/80 uppercase">
                        Dirección
                      </span>
                    </motion.div>

                    <div className="space-y-3 text-[#F5F1E8]/70">
                      <p className="text-lg">{venue.address.street}</p>
                      <p className="text-lg">{venue.address.district}</p>
                      <p className="text-lg">{venue.address.city}, {venue.address.country}</p>
                      <p className="text-sm mt-6 text-[#C8A96B]/60">{venue.parking}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <motion.a
                        href={venue.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4E5B31] text-[#F5F1E8] hover:bg-[#2E3523] border border-white transition-all duration-300 rounded-md font-medium tracking-wider w-full sm:w-auto"
                        whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                        whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                      >
                        <MapPin className="w-5 h-5" />
                        Ver mapa
                      </motion.a>

                      {mounted && (
                        <motion.a
                          href={calendarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#C8A96B] text-[#C8A96B] hover:bg-[#C8A96B]/10 transition-all duration-300 rounded-md font-medium tracking-wider w-full sm:w-auto"
                          whileHover={performance.animationLevel === 'full' ? { scale: 1.05 } : {}}
                          whileTap={performance.animationLevel === 'full' ? { scale: 0.95 } : {}}
                        >
                          <CalendarPlus className="w-5 h-5" />
                          Agregar al calendario
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <motion.div
                      className="relative h-[400px] rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4E5B31]/60 to-transparent z-10" />
                      <img
                        src={venue.imageUrl || "/location/loc2.jpg"}
                        alt={venue.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-[#F5F1E8]/80 text-sm tracking-wider uppercase">
                          {wedding.detailsDisplayDate}
                        </p>
                        <p className="text-[#C8A96B] text-lg">
                          {wedding.ceremony.displayTime} en adelante
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detail Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {detailTabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${activeTab === index
                      ? 'border-[#C8A96B] bg-[#C8A96B]/20 text-[#F5F1E8]'
                      : 'border-[#C8A96B]/20 text-[#F5F1E8]/60 hover:border-[#C8A96B]/50 hover:text-[#F5F1E8]'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium tracking-wider uppercase">
                      {tab.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-playfair text-3xl font-thin text-[#F5F1E8] mb-6">
                        {detailTabs[activeTab].content.title}
                      </h3>
                      <div className="space-y-4">
                        {detailTabs[activeTab].content.time && (
                          <div className="flex items-start gap-3">
                            <span className="text-[#C8A96B]/60">•</span>
                            <span className="text-[#F5F1E8]/70">{detailTabs[activeTab].content.time}</span>
                          </div>
                        )}
                        {detailTabs[activeTab].content.location && (
                          <div className="flex items-start gap-3">
                            <span className="text-[#C8A96B]/60">•</span>
                            <span className="text-[#F5F1E8]/70">{detailTabs[activeTab].content.location}</span>
                          </div>
                        )}
                        {detailTabs[activeTab].content.duration && (
                          <div className="flex items-start gap-3">
                            <span className="text-[#C8A96B]/60">•</span>
                            <span className="text-[#F5F1E8]/70">{detailTabs[activeTab].content.duration}</span>
                          </div>
                        )}
                        {detailTabs[activeTab].content.action && (
                          <div className="pt-4">
                            <a
                              href={detailTabs[activeTab].content.action.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-2 border border-[#C8A96B]/50 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#4E5B31] transition-all duration-300 rounded-md text-sm font-medium tracking-wider"
                            >
                              {detailTabs[activeTab].content.action.label}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium tracking-wider text-[#C8A96B]/80 uppercase mb-4">
                        Notas:
                      </h4>
                      <ul className="space-y-3">
                        {detailTabs[activeTab].content.notes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#C8A96B] mt-1">•</span>
                            <span className="text-[#F5F1E8]/60 text-sm">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-4xl font-thin text-center text-[#F5F1E8] mb-12">
              Itinerario del día
            </h3>

            <div className="relative">
              {/* Timeline Line - hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[0.5px] h-full bg-gradient-to-b from-transparent via-[#C8A96B]/30 to-transparent" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:flex-row gap-8`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                        <motion.div
                          className="inline-block"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-[#C8A96B] text-sm tracking-wider uppercase mb-2">
                            {item.time}
                          </p>
                          <h4 className="font-playfair text-2xl text-[#F5F1E8] mb-2">
                            {item.title}
                          </h4>
                          <p className="text-[#F5F1E8]/50 text-sm">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Icon Node */}
                      <motion.div
                        className="relative z-10"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-12 h-12 bg-[#4E5B31] rounded-full flex items-center justify-center border border-[#C8A96B]">
                          <span className="text-[#F5F1E8] text-sm font-bold">{index + 1}</span>
                        </div>
                      </motion.div>

                      {/* Spacer for opposite side */}
                      <div className="flex-1 hidden lg:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Social Media & Hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="inline-block bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-sm tracking-wider text-[#F5F1E8]/60 uppercase mb-2">
                Comparte tus momentos
              </p>
              <p className="font-playfair text-2xl text-[#C8A96B]">
                {social.instagram.hashtag}
              </p>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
}