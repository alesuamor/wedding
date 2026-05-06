// Wedding Configuration Settings
// Edit this file to customize all wedding details

const settings = {
  // Theme Configuration
  theme: {
    colors: {
      primary: '#d4af37',
      secondary: '#ff6b6b',
      accent: '#4a90e2',
      dark: '#1a1a1a',
      darker: '#0a0a0a',
      light: '#f5f5f5',
      white: '#ffffff',
      overlay: 'rgba(26, 26, 26, 0.95)',
      text: {
        primary: '#ffffff',
        secondary: '#d4af37',
        dark: '#1a1a1a'
      }
    },
    animations: {
      duration: {
        fast: 0.3,
        medium: 0.5,
        slow: 1.0,
        verySlow: 1.5
      },
      easing: 'easeInOut'
    },
    spacing: {
      section: 'py-20',
      container: 'px-4 md:px-8'
    }
  },

  // Couple Information
  couple: {
    bride: {
      name: "Mich",
      fullName: "Michelle",
      email: "michelle@example.com",
      phone: "+52 000 000 0000",
      instagram: "@michy",
      parents: "Familia de Michelle"
    },
    groom: {
      name: "Lalo",
      fullName: "Eduardo",
      email: "eduardo@example.com",
      phone: "+52 000 000 0000",
      instagram: "@lalo",
      parents: "Familia de Eduardo"
    },
    hashtag: "#MichyYLalo",
    email: "hola@michylalo.com"
  },

  // Wedding Date & Time
  wedding: {
    date: "2026-11-15",
    displayDate: "Sábado 15 de noviembre de 2026",
    shortDate: "15.11.26",
    day: "Sábado",
    ceremony: {
      time: "17:30",
      displayTime: "5:30 PM",
      duration: "1 hora"
    },
    cocktailHour: {
      time: "18:30",
      displayTime: "6:30 PM"
    },
    reception: {
      time: "19:00",
      displayTime: "7:00 PM",
      endTime: "00:00",
      displayEndTime: "Medianoche"
    }
  },

  // Venue Information
  venue: {
    name: "Veracruz, México",
    ceremonyLocation: "Ceremonia por confirmar",
    receptionLocation: "Recepción por confirmar",
    cocktailLocation: "Cóctel de bienvenida",
    address: {
      full: "Veracruz, México",
      street: "Dirección por confirmar",
      district: "Zona por confirmar",
      city: "Veracruz",
      postalCode: "00000",
      country: "México"
    },
    coordinates: {
      lat: 19.1738,
      lng: -96.1342
    },
    googleMapsUrl: "https://maps.google.com/?q=Veracruz,Mexico",
    shareUrl: "https://maps.google.com/?q=Veracruz,Mexico",
    parking: "Información de estacionamiento por confirmar.",
    accommodation: [
      {
        name: "Hotel sugerido por confirmar",
        distance: "Cercano al evento",
        bookingCode: "MICHYLALO2026"
      },
      {
        name: "Hospedaje recomendado por confirmar",
        distance: "Cercano al evento",
        bookingCode: "BODA2026"
      }
    ]
  },

  // Event Details
  events: {
    ceremony: {
      title: "Ceremonia",
      description: "Nos encantará contar con su presencia para acompañarnos en este momento tan especial.",
      dressCode: "Formal elegante",
      colors: ["Negro", "Dorado", "Tonos neutros"],
      notes: "Muy pronto compartiremos la hora y ubicación exacta de la ceremonia."
    },
    reception: {
      title: "Recepción",
      description: "Después de la ceremonia, celebraremos juntos con cena, música y mucho cariño.",
      dressCode: "Formal elegante",
      features: ["Cena", "Música", "Baile", "Brindis"],
      menu: "Cena por confirmar"
    }
  },

  // Love Story Timeline
  loveStory: [
    {
      date: "Nuestro inicio",
      title: "El comienzo",
      description: "Toda historia tiene un primer momento. El nuestro fue el inicio de muchos recuerdos juntos.",
      icon: "Heart"
    },
    {
      date: "Nuestro camino",
      title: "Momentos compartidos",
      description: "Entre risas, planes y días especiales, fuimos construyendo una historia que hoy queremos celebrar.",
      icon: "MapPin"
    },
    {
      date: "La promesa",
      title: "El sí",
      description: "Un momento que quedará para siempre en nuestro corazón y que nos trajo hasta este día.",
      icon: "Sparkles"
    },
    {
      date: "15 de noviembre de 2026",
      title: "Nuestra boda",
      description: "Hoy queremos celebrar nuestro amor rodeados de las personas que forman parte de nuestra vida.",
      icon: "Calendar"
    }
  ],

  // Gallery Images
  gallery: [
    {
      url: "/our-moments/no-image.jpg",
      alt: "Foto de la pareja",
      caption: "Un recuerdo especial"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Detalle de la boda",
      caption: "Detalles que cuentan nuestra historia"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Anillos de boda",
      caption: "El símbolo de nuestro compromiso"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Flores de boda",
      caption: "Detalles para un día inolvidable"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Pareja caminando",
      caption: "Un camino juntos"
    },
    {
      url: "/our-moments/no-image.jpg",
      alt: "Celebración de boda",
      caption: "La celebración apenas comienza"
    }
  ],

  // Venue Gallery Images
  venueGallery: {
    heroImage: "/botanical-house-bkk/wide_bh.png",
    images: [
      {
        url: "/botanical-house-bkk/5.jpg",
        alt: "Lugar del evento",
        caption: "Espacio del evento por confirmar"
      },
      {
        url: "/botanical-house-bkk/3.jpg",
        alt: "Área de ceremonia",
        caption: "Área de ceremonia por confirmar"
      },
      {
        url: "/botanical-house-bkk/4.jpg",
        alt: "Área de recepción",
        caption: "Área de recepción por confirmar"
      }
    ]
  },

  // Social Media
  social: {
    instagram: {
      bride: "@michy",
      groom: "@lalo",
      wedding: "@michylalo",
      hashtag: "#MichyYLalo"
    },
    facebook: {
      eventPage: "https://facebook.com"
    }
  },

  // RSVP Settings
  rsvp: {
    deadline: "2026-10-15",
    displayDeadline: "15 de octubre de 2026",
    maxGuests: 5,
    allowPlusOne: true,
    collectDietaryInfo: true,
    collectSongRequests: true,
    emailNotification: "rsvp@michylalo.com"
  },

  // Registry Information
  registry: {
    enabled: true,
    message: "Su presencia es nuestro mejor regalo. Si desean tener un detalle con nosotros, pronto compartiremos más información.",
    links: [
      {
        name: "Mesa de regalos",
        url: "https://example.com",
        icon: "Gift"
      },
      {
        name: "Fondo para nuestro hogar",
        url: "https://example.com",
        icon: "Home"
      }
    ]
  },

  // Contact Information
  contact: {
    weddingPlanner: {
      name: "Coordinación por confirmar",
      phone: "+52 000 000 0000",
      email: "contacto@michylalo.com"
    },
    photographer: {
      name: "Fotografía por confirmar",
      instagram: "@fotografia"
    }
  },

  // COVID/Health Guidelines
  guidelines: {
    enabled: false,
    message: "Seguiremos las recomendaciones necesarias para que todos puedan disfrutar el evento con tranquilidad.",
    requirements: []
  },

  // Metadata for SEO
  metadata: {
    title: "Mich & Lalo | Sábado 15 de noviembre de 2026",
    description: "Acompáñanos a celebrar la boda de Michy y Lalo en Veracruz, México.",
    keywords: "boda, invitación, Mich, lalo, veracruz, 2026",
    ogImage: "/og-image.jpg"
  }
};

export default settings;