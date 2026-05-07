# Boda de Mich & Lalo - Invitación Digital

Una invitación de boda elegante, moderna y totalmente personalizada construida con Next.js 14, Tailwind CSS y Framer Motion. Diseñada para compartir el día especial de Eduardo y Michelle con una presencia digital impresionante.

![Boda Mich & Lalo](public/og-image.jpg)

## ✨ Características

### 🎨 Diseño Elegante
- Diseño moderno y responsivo que se ve hermoso en todos los dispositivos.
- Animaciones fluidas impulsadas por Framer Motion.
- Paleta de colores sofisticada (Dorado y Negro).
- Fondos con gradientes y elementos flotantes.

### 🎵 Elementos Interactivos
- **Música de Fondo**: Reproducción automática (autoplay) optimizada para navegadores modernos.
- **Menú Flotante**: Navegación elegante que aparece al hacer scroll.
- **Temporizador de Cuenta Regresiva**: Cuenta atrás dinámica para el gran día (15 de noviembre de 2026).
- **Formulario RSVP**: Sistema integrado para confirmar asistencia.
- **Galería de Fotos**: Sección para mostrar los momentos más especiales de la pareja.
- **Invitaciones Personalizadas**: Soporte para rutas personalizadas por invitado (ej. `/eduardo`).

### 📱 Totalmente Responsivo
- Enfoque de diseño "mobile-first".
- Optimizado para pantallas de todos los tamaños.
- Interacciones amigables para pantallas táctiles.

### 🔍 Optimización SEO
- Soporte completo de Open Graph para compartir en redes sociales.
- Integración de Twitter Cards.
- Etiquetas meta personalizadas para Eduardo y Michelle.

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 18+
- npm o yarn

### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/vuestro-usuario/ceremony-nextjs.git
cd ceremony-nextjs
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crea un archivo `.env.local` basado en `.env.local.example`.

4. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la invitación.

## ⚙️ Configuración

### Detalles de la Boda
Toda la información de la boda está centralizada en `app/config/settings.js`. Puedes modificar:
- Nombres de los novios.
- Fecha y hora del evento.
- Ubicación y mapas.
- Historia de amor y galería.

### Gestión de Invitados
Los invitados se gestionan en `app/config/guests.js`. Cada invitado tiene un "slug" único que genera su invitación personalizada:
```javascript
export const GUESTS = {
  'eduardo': {
    name: 'Eduardo',
    passes: 2,
    // ...
  }
};
```

## 🎵 Música de Fondo

La invitación incluye una función de música de fondo:
- **Autoplay**: Intenta reproducirse automáticamente al cargar la página.
- **Control Flotante**: Botón persistente para pausar/reproducir la música.
- **Archivo**: El audio se encuentra en `/public/music.mp3`.
- **Volumen**: Configurado al 30% por defecto para una experiencia agradable.

## 🛠️ Tecnologías Usadas
- **Framework**: Next.js 14 (App Router)
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Playfair Display, Inter)

## 📦 Despliegue (Vercel)
1. Sube el código a GitHub.
2. Importa el proyecto en Vercel.
3. Configura las variables de entorno si es necesario.
4. ¡Despliega!

---

Hecho con ❤️ para la boda de **Michelle & Eduardo** | 2026