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
      phone: "2291 261381",
      instagram: "@michy",
      parents: "Familia de Michelle"
    },
    groom: {
      name: "Lalo",
      fullName: "Eduardo",
      email: "eduardo@example.com",
      phone: "2291 261381",
      instagram: "@lalo",
      parents: "Familia de Eduardo"
    },
    hashtag: "#MichyYLalo",
    email: "hola@michylalo.com"
  },

  // Wedding Date & Time
  wedding: {
    date: "2026-08-08",
    displayDate: "Sábado 8 de agosto de 2026",
    shortDate: "08.08.26",
    day: "Sábado",
    ceremony: {
      time: "16:00",
      displayTime: "4:00 PM",
      duration: "1 hora"
    },
    cocktailHour: {
      time: "17:00",
      displayTime: "5:00 PM"
    },
    reception: {
      time: "18:00",
      displayTime: "6:00 PM",
      endTime: "00:00",
      displayEndTime: "12:00 AM"
    }
  },

  // Venue Information
  venue: {
    name: "Quinta Río HJ",
    ceremonyLocation: "Quinta Río HJ",
    receptionLocation: "Quinta Río HJ",
    cocktailLocation: "Quinta Río HJ",
    address: {
      full: "Quinta Río H-J, Quinta Río H-J, Playa de Vacas, Veracruz, México",
      street: "Quinta Río HJ",
      district: "Vereda / Playa de Vacas",
      city: "Medellín de Bravo",
      postalCode: "94274",
      country: "Veracruz"
    },
    coordinates: {
      lat: 19.0965436,
      lng: -96.116551
    },
    googleMapsUrl: "https://maps.app.goo.gl/nen98Wb5dHpp1Vs87",
    shareUrl: "https://maps.app.goo.gl/D8dgwCaJhi4vjXL38?g_st=iw",
    parking: "Jardín de Eventos ",
    accommodation: [
      {
        name: "Hospedaje sugerido por confirmar",
        distance: "Cercano al evento",
        bookingCode: "MICHYLALO2026"
      }
    ]
  },

  // Event Details
  events: {
    ceremony: {
      title: "Ceremonia",
      description: "Nos encantará contar con su presencia para acompañarnos en este momento tan especial.",
      dressCode: "Coctel formal jardín",
      colors: ["Negro", "Dorado", "Tonos neutros"],
      notes: "Muy pronto compartiremos la hora y ubicación exacta de la ceremonia."
    },
    reception: {
      title: "Recepción",
      description: "Después de la ceremonia, celebraremos juntos con cena, música y mucho cariño.",
      dressCode: "Coctel formal jardín",
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
      url: "/our-moments/01.jpg",
      alt: "Mich y Lalo en un momento especial",
      caption: "Un recuerdo especial"
    },
    {
      url: "/our-moments/02.jpg",
      alt: "Mich y Lalo en el jardín",
      caption: "Entre risas y momentos juntos"
    },
    {
      url: "/our-moments/03.jpg",
      alt: "Mich y Lalo compartiendo un momento",
      caption: "Nuestra historia en una imagen"
    },
    {
      url: "/our-moments/04.jpg",
      alt: "Mich y Lalo durante su sesión de fotos",
      caption: "Un día para recordar"
    },
    {
      url: "/our-moments/05.jpg",
      alt: "Mich y Lalo juntos",
      caption: "Momentos que se quedan"
    },
    {
      url: "/our-moments/06.jpg",
      alt: "Mich y Lalo en exterior",
      caption: "El comienzo de una nueva etapa"
    }
  ],

  // Venue Gallery Images
  venueGallery: {
    heroImage: "/location/hero.jpg",
    images: [
      {
        url: "/location/2.png",
        alt: "",
        caption: ""
      },
      {
        url: "/location/3.png",
        alt: "",
        caption: ""
      },
      {
        url: "/location/4.png",
        alt: "",
        caption: ""
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
      eventPage: "https://www.facebook.com/jica1970"
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
      phone: "2291 261381",
      //email: "contacto@michylalo.com"
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