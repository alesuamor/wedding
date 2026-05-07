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
Los invitados ahora se gestionan de forma **dinámica** a través de Google Sheets, utilizando la pestaña `AyudanteWhatsApp`. Esta hoja es la "fuente de la verdad".

**Instrucciones para los novios:**
1. Los novios deben editar la pestaña `AyudanteWhatsApp` en su Google Sheet.
2. Las columnas requeridas son:
   - **Slug**: Genera la URL personalizada (ej. si el slug es `pepe-y-monica`, la URL será `/pepe-y-monica`).
   - **Nombre mostrado final**: El nombre que aparecerá en la invitación (ej. "Pepe y Mónica").
   - **Pases**: El número de pases reservados para ese invitado.
   - **Teléfono (10 dígitos)*: (Opcional) El teléfono del invitado.
3. **No se requieren despliegues**: Si agregas, editas o eliminas un invitado en la hoja, los cambios se reflejan automáticamente en la web sin necesidad de reprogramar ni redesplegar nada.
4. Si se elimina una fila o se deja el Slug vacío, la invitación dejará de funcionar automáticamente (retornará un error 404).

*Nota técnica*: El archivo `app/config/guests.js` se mantiene únicamente como datos de ejemplo (fallback) si el Google Sheet fallara. Las páginas de invitados son renderizadas dinámicamente (`force-dynamic`).

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