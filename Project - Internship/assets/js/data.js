// assets/js/data.js

// TODO: Coloca aquí el link general de Facebook de la empresa (cuando lo tengas)
export const COMPANY_FACEBOOK_URL = ""; 

export const categories = [
  { key: "telas-uniformes",  name: "Telas para uniformes",  desc: "Resistencia y uso diario." },
  { key: "telas-deportivas", name: "Telas deportivas",      desc: "Dry-fit, spandex, alto rendimiento." },
  { key: "cordones",         name: "Cordones y elásticos",  desc: "Diferentes anchos y colores." },
  { key: "sublimacion",      name: "Sublimación textil",    desc: "Materiales para personalización." },
];

export const products = [
  {
    id: "P-001",
    category: "telas-uniformes",
    name: "Tela Oxford para uniformes",
    sku: "OXF-100",
    shortDescription: "Tela resistente ideal para camisas y uniformes corporativos.",
    description: `
      <p>
        Tela Oxford utilizada en la confección de uniformes empresariales, escolares
        y camisas de trabajo. Excelente durabilidad y fácil mantenimiento.
      </p>
      <!-- TODO: agrega aquí más detalles: tiempos, disponibilidad, etc. -->
    `,
    priceLabel: "Consultar",
    moq: "Compra al mayor",
    specs: {
      composition: "65% Poliéster / 35% Algodón",
      width: "1.50 m",
      weight: "180 g/m²",
      finish: "Mate",
      use: "Uniformes, camisas"
    },
    variants: {
      colors: ["Blanco", "Celeste", "Azul", "Gris"],
      sizes: ["Ancho estándar"]
    },

    // Portada (catálogo)
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    // Galería (detalle)
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80"
    ],

    // TODO: link del producto (si algún día quieres link por producto)
    facebookUrl: "",
    featured: true
  },

  {
    id: "P-002",
    category: "telas-deportivas",
    name: "Tela Dry-Fit deportiva",
    sku: "DRY-220",
    shortDescription: "Tela ligera y transpirable para ropa deportiva.",
    description: `
      <p>
        Tela dry-fit de alto rendimiento, ideal para camisetas deportivas,
        conjuntos de entrenamiento y ropa activa.
      </p>
      <!-- TODO: agrega composición exacta, tipo de tejido, colores disponibles -->
    `,
    priceLabel: "Consultar",
    moq: "Mayorista",
    specs: {
      composition: "100% Poliéster",
      width: "1.60 m",
      weight: "150 g/m²",
      finish: "Antibacterial",
      use: "Ropa deportiva"
    },
    variants: {
      colors: ["Negro", "Rojo", "Azul", "Verde"],
      sizes: ["Ancho estándar"]
    },

    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80"
    ],

    facebookUrl: "",
    featured: true
  },

  {
    id: "P-003",
    category: "cordones",
    name: "Cordón plano para prendas",
    sku: "CRD-PLN",
    shortDescription: "Cordones textiles para hoodies, joggers y uniformes.",
    description: `
      <p>
        Cordón plano resistente disponible en varios colores y longitudes.
        Ideal para ropa deportiva y casual.
      </p>
      <!-- TODO: agrega anchos exactos, terminaciones, colores, MOQ por rollo -->
    `,
    priceLabel: "Consultar",
    moq: "Por rollo",
    specs: {
      composition: "Algodón / Poliéster",
      width: "1.5 cm",
      weight: "—",
      finish: "Tejido",
      use: "Hoodies, pants"
    },
    variants: {
      colors: ["Negro", "Blanco", "Rojo"],
      sizes: ["1.2 m", "1.5 m"]
    },

    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80"
    ],

    facebookUrl: "",
    featured: false
  },

  {
    id: "P-004",
    category: "sublimacion",
    name: "Materiales para sublimación textil",
    sku: "SUB-SET",
    shortDescription: "Insumos para impresión y personalización textil.",
    description: `
      <p>
        Materiales compatibles con procesos de sublimación textil.
        Consulta disponibilidad según el tipo de tela.
      </p>
      <!-- TODO: agrega tipos de telas sublimables, recomendaciones, cuidados -->
    `,
    priceLabel: "Consultar",
    moq: "Por paquete",
    specs: {
      composition: "Poliéster tratado",
      width: "Variable",
      weight: "—",
      finish: "Sublimable",
      use: "Impresión textil"
    },
    variants: {
      colors: ["Blanco"],
      sizes: ["Varios"]
    },

    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80"
    ],

    facebookUrl: "",
    featured: false
  },
];
