export type Service = {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Diseño de sonrisa",
    description:
      "Evaluación estética y planificación personalizada para lograr una sonrisa armónica, natural y proporcional a tu rostro.",
    image: "/images/services/sd-1.jpg",
    featured: true
  },
  {
    title: "Limpieza dental",
    description:
      "Profilaxis profesional para remover sarro, manchas y bacterias. Base fundamental para una boca sana y una sonrisa brillante.",
    image: "/images/services/sd-2.jpg",
    featured: true
  },
  {
    title: "Blanqueamiento dental",
    description:
      "Tratamiento seguro y controlado para aclarar el tono de tus dientes con resultados visibles desde la primera sesión.",
    image: "/images/services/sd-3.jpg",
    featured: true
  },
  {
    title: "Resinas estéticas",
    description:
      "Restauraciones directas con materiales de alta estética para recuperar la forma, el color y la función de tus dientes.",
    image: "/images/services/services-details.jpg"
  },
  {
    title: "Carillas dentales",
    description:
      "Láminas de porcelana o resina que transforman la apariencia de tus dientes con resultados naturales y duraderos.",
    image: "/images/consultation-video.jpg"
  },
  {
    title: "Evaluación odontológica",
    description:
      "Revisión integral de tu salud oral para identificar necesidades, prevenir problemas y diseñar un plan de atención personalizado.",
    image: "/images/services-bg.jpg"
  }
];
