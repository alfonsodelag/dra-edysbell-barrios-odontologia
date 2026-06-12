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
      "Diseñamos sonrisas buscando equilibrio, naturalidad y armonía con tu rostro, respetando tu identidad y tus objetivos estéticos.",
    image: "/images/services/sd-1.jpg",
    featured: true
  },
  {
    title: "Blanqueamiento dental",
    description:
      "Tratamientos de aclaramiento dental pensados para mejorar el tono de tu sonrisa de forma profesional, segura y personalizada.",
    image: "/images/services/sd-2.jpg",
    featured: true
  },
  {
    title: "Limpieza dental profesional",
    description:
      "La prevención es la base de una sonrisa saludable. Una limpieza profesional ayuda a mantener encías sanas, dientes limpios y mejor salud oral.",
    image: "/images/services/sd-3.jpg",
    featured: true
  },
  {
    title: "Restauraciones estéticas",
    description:
      "Restauraciones que buscan devolver función, salud y estética a tus dientes con un enfoque natural, cuidadoso y personalizado.",
    image: "/images/services/services-details.jpg"
  },
  {
    title: "Carillas dentales",
    description:
      "Una alternativa estética para transformar la forma, el color y la armonía de la sonrisa, siempre con evaluación previa y criterio profesional.",
    image: "/images/consultation-video.jpg"
  },
  {
    title: "Bruxismo",
    description:
      "Evaluación y manejo de signos relacionados con desgaste dental, tensión mandibular o hábitos que puedan afectar tu salud oral.",
    image: "/images/services-bg.jpg"
  },
  {
    title: "Armonización orofacial",
    description:
      "Un enfoque complementario para buscar equilibrio entre sonrisa, labios y rostro, respetando siempre la naturalidad y la identidad de cada paciente.",
    image: "/images/about-video.jpg"
  },
  {
    title: "Evaluación odontológica",
    description:
      "Revisión integral de tu salud oral para identificar necesidades, prevenir problemas y diseñar un plan de atención completamente personalizado.",
    image: "/images/breadcrumb-bg.jpg"
  }
];
