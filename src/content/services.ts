export type ServiceCategory =
  | "Estética Dental"
  | "Blanqueamiento"
  | "Ortodoncia"
  | "Salud Oral y Prevención"
  | "Cirugía y Especialidades"
  | "Armonización y Estética Facial";

export type Service = {
  title: string;
  slug: string;
  category: ServiceCategory;
  description: string;
  longDescription: string[];
  benefits: string[];
  image: string;
  featured?: boolean;
  bacEligible?: boolean;
};

export const services: Service[] = [
  // ── ESTÉTICA DENTAL ──────────────────────────────────────────────────────────
  {
    title: "Diseño de Sonrisa",
    slug: "diseno-de-sonrisa",
    category: "Estética Dental",
    description:
      "Transformamos tu sonrisa buscando equilibrio, naturalidad y armonía con tu rostro, respetando tu identidad y tus objetivos estéticos.",
    longDescription: [
      "El diseño de sonrisa es un proceso integral que combina criterio odontológico con sensibilidad estética para planificar y ejecutar la transformación de tu sonrisa de manera completamente personalizada. No se trata de aplicar una fórmula genérica, sino de estudiar tu rostro, tu personalidad y tus objetivos para diseñar un resultado armónico y natural.",
      "La Dra. Edysbell Barrios realiza un análisis detallado que incluye la forma, tamaño y color de tus dientes, su relación con tus labios, encías y estructura facial. A partir de esa evaluación se diseña un plan de tratamiento que puede incluir carillas, blanqueamiento, correcciones de forma o combinaciones de procedimientos.",
      "El objetivo siempre es una sonrisa que parezca natural, que mejore tu estética sin alterar tu esencia, y que sea funcional y duradera a largo plazo. Cada sonrisa es única, y así lo tratamos.",
    ],
    benefits: [
      "Planificación personalizada basada en tu anatomía y objetivos",
      "Resultado natural y armónico con tu rostro",
      "Combinación de procedimientos según tu caso",
      "Comunicación clara sobre cada etapa del proceso",
      "Seguimiento durante y después del tratamiento",
    ],
    image: "/images/services/sd-1.jpg",
    featured: true,
    bacEligible: true,
  },
  {
    title: "Carillas de Porcelana / Cerámica",
    slug: "carillas-de-porcelana",
    category: "Estética Dental",
    description:
      "Láminas ultrafinas de porcelana que transforman el color, forma y armonía de tu sonrisa con resultados naturales y duraderos.",
    longDescription: [
      "Las carillas de porcelana o cerámica son láminas ultrafinas que se adhieren a la superficie frontal de los dientes para transformar su apariencia. Son una de las opciones más completas para el diseño de sonrisa, ya que permiten corregir el color, la forma, el tamaño y las proporciones en un mismo tratamiento.",
      "La porcelana imita perfectamente la translucidez natural del esmalte dental, por lo que el resultado es visualmente indistinguible de los dientes naturales. Además, es un material altamente resistente a las manchas, lo que garantiza una sonrisa luminosa por muchos años con el cuidado adecuado.",
      "El proceso involucra una preparación mínima del diente, toma de registros precisos, fabricación en laboratorio dental especializado y colocación final. El resultado es una sonrisa completamente renovada con una estética de alto nivel.",
    ],
    benefits: [
      "Alta resistencia a manchas y decoloración",
      "Resultado visualmente natural y translúcido",
      "Corrección simultánea de color, forma y tamaño",
      "Durabilidad de 10 a 15 años con buen cuidado",
      "Mínima preparación del diente",
    ],
    image: "/images/services/sd-2.jpg",
    featured: true,
    bacEligible: true,
  },
  {
    title: "Carillas de Resina",
    slug: "carillas-de-resina",
    category: "Estética Dental",
    description:
      "Alternativa estética en resina compuesta para mejorar color, forma y proporción de los dientes con resultados inmediatos.",
    longDescription: [
      "Las carillas de resina son una excelente alternativa para quienes buscan mejorar su sonrisa de manera accesible y con resultados visibles desde la primera sesión. Se realizan directamente sobre el diente con resina compuesta de alta calidad, modelada y pulida para lograr una apariencia natural.",
      "A diferencia de las carillas de porcelana, las de resina generalmente no requieren preparación del diente y pueden realizarse en una sola visita. En muchos casos son reversibles, lo que las convierte en una opción menos invasiva sin comprometer el resultado estético.",
      "La Dra. Edysbell Barrios trabaja con resinas de alta estética, cuidando la selección de color, la integración con las encías y el resultado final para que luzca lo más natural posible.",
    ],
    benefits: [
      "Resultado visible desde la primera sesión",
      "Generalmente no requiere preparación del diente",
      "Opción más accesible que las carillas de porcelana",
      "Fácilmente reparables si sufren algún daño",
      "Proceso menos invasivo y en muchos casos reversible",
    ],
    image: "/images/services/sd-3.jpg",
    featured: true,
  },
  {
    title: "Bordes de Resina",
    slug: "bordes-de-resina",
    category: "Estética Dental",
    description:
      "Diseño estético en resina aplicado en los bordes incisales para corregir desgastes, asimetrías o mejorar la armonía de la sonrisa.",
    longDescription: [
      "Los bordes de resina —también conocido como diseño con resinas en bordes incisales— es un procedimiento estético enfocado en el perfil superior de los dientes anteriores. Se aplica resina compuesta en los bordes de corte para corregir desgastes, asimetrías, dientes cortos o bordes irregulares.",
      "Es un tratamiento mínimamente invasivo que puede producir una transformación significativa en la apariencia de la sonrisa, especialmente cuando los dientes han perdido longitud por el paso del tiempo, por bruxismo o por desgaste natural.",
      "Puede realizarse de forma aislada o como parte de un diseño de sonrisa completo, combinándose con blanqueamiento u otros procedimientos según las necesidades de cada paciente.",
    ],
    benefits: [
      "Procedimiento mínimamente invasivo",
      "Corrige desgastes y asimetrías en bordes dentales",
      "Resultado natural integrado con el color del diente",
      "Puede realizarse en una sola sesión",
      "Compatible con otros tratamientos estéticos",
    ],
    image: "/images/services/services-details.jpg",
  },
  {
    title: "Coronas de Porcelana",
    slug: "coronas-de-porcelana",
    category: "Estética Dental",
    description:
      "Restauración completa del diente con coronas de porcelana libre de metal para recuperar función, estética y durabilidad.",
    longDescription: [
      "Las coronas de porcelana cubren completamente el diente dañado o debilitado para restaurar su forma, función y apariencia. Son la opción ideal cuando un diente ha perdido gran parte de su estructura por caries, fracturas o tratamientos previos.",
      "Las coronas libres de metal ofrecen resultados estéticos superiores porque permiten que la luz pase a través del material, imitando la translucidez natural del esmalte. Eliminan el halo grisáceo que suele aparecer con las coronas metálicas tradicionales.",
      "Con el cuidado adecuado, una corona de porcelana de calidad puede durar muchos años, devolviendo al diente toda su funcionalidad y una apariencia indistinguible de los dientes naturales.",
    ],
    benefits: [
      "Restaura función masticatoria completa",
      "Estética superior sin halo metálico",
      "Material biocompatible y duradero",
      "Protege el diente debilitado de fracturas futuras",
      "Integración natural con los dientes adyacentes",
    ],
    image: "/images/services/sd-1.jpg",
  },
  {
    title: "Cambio de Coronas Antiguas por Coronas Libre de Metal",
    slug: "cambio-de-coronas-antiguas",
    category: "Estética Dental",
    description:
      "Reemplazamos coronas metálicas oscurecidas o envejecidas por coronas modernas libres de metal para recuperar la estética natural de tu sonrisa.",
    longDescription: [
      "Con el tiempo, las coronas metálicas o metal-porcelana pueden mostrar un borde grisáceo en la encía, oscurecerse o simplemente no lucir naturales. La solución es reemplazarlas por coronas modernas libres de metal, fabricadas en zirconia o porcelana de alta resistencia.",
      "Este cambio no solo mejora la estética sino también la biocompatibilidad, ya que algunos pacientes desarrollan sensibilidad a los metales a lo largo del tiempo. Las coronas libres de metal son más suaves con las encías y ofrecen una integración más natural con los tejidos circundantes.",
      "La Dra. Edysbell Barrios evalúa cada caso para determinar si el cambio es viable y cuál es el material más adecuado según la ubicación del diente, la carga masticatoria y los objetivos estéticos del paciente.",
    ],
    benefits: [
      "Elimina el borde grisáceo de coronas antiguas",
      "Materiales modernos más biocompatibles",
      "Estética natural sin reflejo metálico",
      "Mejor integración con encías y tejidos",
      "Evaluación individualizada para cada caso",
    ],
    image: "/images/services/sd-2.jpg",
  },
  {
    title: "Puentes de Porcelana",
    slug: "puentes-de-porcelana",
    category: "Estética Dental",
    description:
      "Solución fija para reemplazar dientes perdidos mediante un puente de porcelana estético, funcional y completamente integrado a tu sonrisa.",
    longDescription: [
      "Un puente dental es una solución fija para reemplazar uno o más dientes ausentes. Se ancla en los dientes adyacentes al espacio vacío, y el diente artificial (póntico) completa la línea de la sonrisa de forma estética y funcional.",
      "Los puentes de porcelana ofrecen resultados muy naturales, ya que el material imita el color y la translucidez del esmalte dental. Son una alternativa a los implantes cuando las condiciones del paciente no lo permiten o cuando se busca una solución más rápida.",
      "La planificación cuidadosa del color, la forma y el tamaño es fundamental para que el puente se integre perfectamente con los dientes naturales y pase completamente desapercibido.",
    ],
    benefits: [
      "Solución fija y cómoda, sin removible",
      "Estética natural en porcelana de alta calidad",
      "Recupera la función masticatoria completa",
      "Previene el desplazamiento de dientes adyacentes",
      "Proceso más rápido comparado con implantes",
    ],
    image: "/images/services/sd-3.jpg",
  },

  // ── BLANQUEAMIENTO ───────────────────────────────────────────────────────────
  {
    title: "Blanqueamiento de Consultorio",
    slug: "blanqueamiento-de-consultorio",
    category: "Blanqueamiento",
    description:
      "Blanqueamiento profesional realizado en consulta con resultados visibles desde la primera sesión bajo supervisión odontológica.",
    longDescription: [
      "El blanqueamiento de consultorio es el tratamiento de aclaramiento dental más potente disponible, realizado con agentes activos de alta concentración aplicados directamente sobre los dientes bajo supervisión profesional.",
      "En una o pocas sesiones, los dientes pueden mejorar significativamente su tono. La Dra. Edysbell Barrios evalúa previamente el estado del esmalte, la sensibilidad y el color base de los dientes para definir el protocolo más adecuado y los resultados esperados.",
      "El procedimiento es seguro cuando se realiza correctamente. La sensibilidad postratamiento, si aparece, es temporal y manejable con las indicaciones que se dan al finalizar cada sesión.",
    ],
    benefits: [
      "Resultados visibles desde la primera sesión",
      "Procedimiento controlado y supervisado",
      "Mayor potencia que el blanqueamiento casero",
      "Evaluación previa para definir expectativas reales",
      "Indicaciones claras para mantener el resultado",
    ],
    image: "/images/services/sd-1.jpg",
    featured: true,
  },
  {
    title: "Blanqueamiento con Cubetas de Uso Casero",
    slug: "blanqueamiento-cubetas-casero",
    category: "Blanqueamiento",
    description:
      "Cubetas personalizadas para blanqueamiento en casa con cambios espectaculares, cómodos y adaptados a tu rutina diaria.",
    longDescription: [
      "El blanqueamiento con cubetas personalizadas es una opción efectiva para aclarar los dientes de forma progresiva desde la comodidad de tu hogar. Se fabrican cubetas a la medida de tu dentadura y se incluye un gel blanqueador profesional con la concentración y el tiempo de uso indicados por la Dra. Edysbell Barrios.",
      "Al ser cubetas personalizadas (no genéricas de farmacia), el gel tiene contacto uniforme con todos los dientes y el proceso es más predecible y seguro. Los resultados se ven progresivamente en días o semanas, dependiendo del protocolo.",
      "Esta modalidad también funciona perfectamente como mantenimiento después de un blanqueamiento de consultorio, o para pacientes con sensibilidad que prefieren un protocolo más gradual y controlado.",
    ],
    benefits: [
      "Cubetas personalizadas para mejor resultado",
      "Se realiza en la comodidad del hogar",
      "Protocolo supervisado por la odontóloga",
      "Excelente opción de mantenimiento post-blanqueamiento",
      "Ideal para pacientes con sensibilidad dental",
    ],
    image: "/images/services/sd-2.jpg",
  },

  // ── ORTODONCIA ───────────────────────────────────────────────────────────────
  {
    title: "Tratamientos de Ortodoncia",
    slug: "ortodoncia",
    category: "Ortodoncia",
    description:
      "Contamos con especialistas en ortodoncia para corregir la posición dental y mejorar la función masticatoria y la estética de tu sonrisa.",
    longDescription: [
      "La ortodoncia es la especialidad que se encarga de corregir la posición de los dientes y la mordida para mejorar tanto la función masticatoria como la estética de la sonrisa. Un caso bien tratado tiene impacto positivo en la salud oral a largo plazo.",
      "En la consulta de la Dra. Edysbell Barrios contamos con especialistas en ortodoncia que evalúan cada caso y diseñan el plan de tratamiento más adecuado. Ya sea con brackets metálicos, estéticos o alineadores, el objetivo es lograr una sonrisa bien alineada, funcional y armónica.",
      "La duración del tratamiento varía según la complejidad de cada caso y el sistema utilizado. Lo importante es una buena evaluación inicial y un seguimiento constante durante todo el proceso.",
    ],
    benefits: [
      "Atención por especialistas en ortodoncia",
      "Diversas opciones: brackets o alineadores",
      "Mejora función masticatoria y estética",
      "Planes personalizados según cada caso",
      "Seguimiento continuo durante el tratamiento",
    ],
    image: "/images/services/sd-3.jpg",
    bacEligible: true,
  },
  {
    title: "Ortodoncia + Diseño de Sonrisa Natural",
    slug: "ortodoncia-diseno-sonrisa",
    category: "Ortodoncia",
    description:
      "Tratamiento integral que combina ortodoncia y diseño de sonrisa para un resultado completamente transformador, natural y duradero.",
    longDescription: [
      "Este tratamiento integral combina la corrección de la posición dental mediante ortodoncia con procedimientos de diseño de sonrisa para lograr un resultado verdaderamente transformador. Es la opción ideal cuando se busca no solo alinear los dientes, sino también mejorar su color, forma y armonía global.",
      "El plan se elabora de forma coordinada: primero se corrige la posición mediante ortodoncia para crear la base ideal, y luego se aplican los procedimientos estéticos necesarios —blanqueamiento, carillas, resinas— para completar el diseño de sonrisa.",
      "El resultado es una sonrisa que no solo se ve bien, sino que funciona bien, con una mordida correcta y una estética armónica y completamente natural.",
    ],
    benefits: [
      "Tratamiento integral con enfoque holístico",
      "Corrección de posición Y estética en un solo plan",
      "Resultado más natural y duradero",
      "Coordinación entre ortodoncia y estética dental",
      "Planificación a largo plazo del resultado final",
    ],
    image: "/images/services/services-details.jpg",
    bacEligible: true,
  },

  // ── SALUD ORAL Y PREVENCIÓN ──────────────────────────────────────────────────
  {
    title: "Limpieza Dental Profesional",
    slug: "limpieza-dental",
    category: "Salud Oral y Prevención",
    description:
      "Profilaxis dental completa con pulido de manchas para mantener encías sanas, dientes limpios y una sonrisa saludable.",
    longDescription: [
      "La limpieza dental profesional o profilaxis es el procedimiento preventivo más importante para mantener la salud oral. Elimina el sarro, la placa bacteriana y las manchas superficiales que el cepillado diario no puede remover, protegiendo las encías y el esmalte dental.",
      "En nuestra consulta, la limpieza incluye eliminación del sarro con ultrasonido, pulido con pasta profesional para remover manchas superficiales por café, té o tabaco, y revisión del estado de las encías. Al finalizar se dan indicaciones personalizadas de higiene oral.",
      "Lo recomendable es realizarla cada seis meses. Una higiene profesional regular es la base de cualquier tratamiento estético dental y garantiza que los resultados de otros procedimientos sean más predecibles y duraderos.",
    ],
    benefits: [
      "Elimina sarro y placa bacteriana acumulada",
      "Reduce el riesgo de caries y enfermedad de las encías",
      "Pulido que remueve manchas superficiales",
      "Indicaciones personalizadas de higiene oral",
      "Base esencial para cualquier tratamiento estético",
    ],
    image: "/images/services/sd-1.jpg",
    featured: true,
  },
  {
    title: "Cambio de Amalgamas por Resina",
    slug: "cambio-de-amalgamas",
    category: "Salud Oral y Prevención",
    description:
      "Dile adiós al mercurio en tu boca. Reemplazamos tus restauraciones de amalgama por resinas estéticas modernas con resultados seguros y naturales.",
    longDescription: [
      "Las amalgamas dentales —las restauraciones grises metálicas— contienen mercurio y con el tiempo pueden oscurecerse, filtrar y volverse menos estéticas. Su reemplazo por resinas compuestas modernas es una decisión que mejora tanto la estética como la percepción de bienestar oral.",
      "Las resinas actuales tienen una adhesión excelente al diente, se ajustan perfectamente al color natural del esmalte y no requieren el desgaste adicional de estructura dental que sí demandaba la amalgama. El resultado es una restauración prácticamente invisible.",
      "La Dra. Edysbell Barrios aplica un protocolo de remoción cuidadoso para minimizar la exposición durante el procedimiento, garantizando que el proceso sea lo más seguro y cómodo posible.",
    ],
    benefits: [
      "Elimina el mercurio de tu boca",
      "Resultado estético y natural con resina del color del diente",
      "Resinas modernas con excelente adhesión",
      "Protocolo de remoción seguro y controlado",
      "Mayor confort y confianza en tu sonrisa",
    ],
    image: "/images/services/sd-2.jpg",
  },
  {
    title: "Tratamientos Integrales",
    slug: "tratamientos-integrales",
    category: "Salud Oral y Prevención",
    description:
      "Planes de tratamiento completos que combinan varios procedimientos para transformar tu salud oral y tu sonrisa de manera integral.",
    longDescription: [
      "Los tratamientos integrales son planes personalizados que combinan múltiples procedimientos odontológicos para abordar de manera completa las necesidades de salud y estética de cada paciente.",
      "Pueden incluir desde limpieza profunda, tratamientos de caries, correcciones gingivales, blanqueamiento y carillas, hasta ortodoncia y restauraciones. Todo planificado en un orden lógico y coordinado para maximizar el resultado final.",
      "La ventaja de un enfoque integral es que el plan considera el cuadro completo del paciente: no solo el problema puntual, sino cómo cada tratamiento interactúa con los demás para lograr el mejor resultado posible a largo plazo.",
    ],
    benefits: [
      "Planificación completa de todas las necesidades dentales",
      "Secuencia lógica de tratamientos para mejor resultado",
      "Visión holística de salud oral y estética",
      "Seguimiento coordinado durante todo el proceso",
      "Resultados transformadores y duraderos",
    ],
    image: "/images/services/sd-3.jpg",
  },
  {
    title: "Consulta de Odontología General",
    slug: "consulta-general",
    category: "Salud Oral y Prevención",
    description:
      "Evaluación integral de tu salud oral para identificar necesidades, prevenir problemas y diseñar un plan de atención personalizado.",
    longDescription: [
      "La consulta de odontología general es el punto de partida de cualquier tratamiento. Consiste en una evaluación completa del estado de salud oral: revisión de encías, dientes, mordida, tejidos blandos y, cuando es necesario, radiografías complementarias.",
      "A partir de esta evaluación, la Dra. Edysbell Barrios elabora un diagnóstico claro y un plan de tratamiento priorizado según tus necesidades, explicando cada aspecto de forma comprensible para que puedas tomar decisiones informadas.",
      "La primera consulta también es el momento ideal para plantear tus objetivos estéticos, resolver todas tus dudas y conocer las opciones disponibles para mejorar tu salud oral y tu sonrisa.",
    ],
    benefits: [
      "Evaluación integral de salud oral",
      "Diagnóstico claro y plan personalizado",
      "Espacio para resolver todas tus dudas",
      "Prevención y detección temprana de problemas",
      "Base para cualquier tratamiento futuro",
    ],
    image: "/images/services/services-details.jpg",
  },

  // ── CIRUGÍA Y ESPECIALIDADES ─────────────────────────────────────────────────
  {
    title: "Cirugías de Terceras Molares y Cirugías Bucales",
    slug: "cirugia-terceras-molares",
    category: "Cirugía y Especialidades",
    description:
      "Extracción de terceras molares y procedimientos de cirugía bucal con atención especializada, cuidadosa y profesional.",
    longDescription: [
      "Las terceras molares o muelas del juicio frecuentemente requieren extracción quirúrgica cuando no tienen espacio suficiente para erupcionar correctamente, están impactadas o generan presión sobre los dientes adyacentes.",
      "La cirugía se realiza con anestesia local y técnicas precisas para minimizar el trauma tisular y favorecer una recuperación rápida. La Dra. Edysbell Barrios cuenta con formación en cirugía bucal para abordar estos casos con seguridad y cuidado.",
      "Además de las terceras molares, se atienden otras cirugías bucales según las necesidades de cada paciente: frenillos, quistes pequeños, biopsias de tejidos blandos y otras intervenciones de baja y media complejidad.",
    ],
    benefits: [
      "Atención quirúrgica especializada",
      "Técnica minimamente traumática para mejor recuperación",
      "Anestesia local adecuada para el procedimiento",
      "Indicaciones postoperatorias claras y detalladas",
      "Seguimiento hasta la recuperación completa",
    ],
    image: "/images/services/sd-1.jpg",
  },
  {
    title: "Especialista Maxilofacial",
    slug: "cirugia-maxilofacial",
    category: "Cirugía y Especialidades",
    description:
      "Acceso a especialista maxilofacial para procedimientos quirúrgicos más complejos que requieren evaluación y atención especializada.",
    longDescription: [
      "Para casos que requieren intervención quirúrgica de mayor complejidad, la consulta ofrece acceso coordinado a especialista maxilofacial. El cirujano maxilofacial atiende patologías que van más allá de la odontología convencional: correcciones de mandíbula, quistes y tumores orales, fracturas faciales e implantes en casos complejos.",
      "La Dra. Edysbell Barrios coordina la derivación y el trabajo conjunto con el especialista para que el paciente tenga continuidad en su atención y un plan claro de tratamiento integral.",
      "Este enfoque coordinado garantiza que cada paciente reciba el nivel de atención adecuado a su situación, sin perder la cercanía y el seguimiento de su odontóloga de confianza.",
    ],
    benefits: [
      "Acceso a especialista maxilofacial de confianza",
      "Coordinación entre odontóloga y cirujano",
      "Evaluación especializada para casos complejos",
      "Continuidad en el plan de tratamiento",
      "Atención de patologías de alta complejidad",
    ],
    image: "/images/services/sd-2.jpg",
  },

  // ── ARMONIZACIÓN Y ESTÉTICA FACIAL ──────────────────────────────────────────
  {
    title: "Ácido Hialurónico en Labios",
    slug: "acido-hialuronico-labios",
    category: "Armonización y Estética Facial",
    description:
      "Procedimiento estético para mejorar el volumen, contorno y armonía de los labios como complemento al diseño de sonrisa.",
    longDescription: [
      "La aplicación de ácido hialurónico en labios es un procedimiento de medicina estética que complementa perfectamente el diseño de sonrisa. Los labios son parte esencial de la estética facial y su volumen, contorno y proyección tienen un impacto significativo en cómo se percibe la sonrisa.",
      "El ácido hialurónico es un componente natural del organismo, lo que lo hace muy biocompatible y con bajo riesgo de reacciones adversas. Los resultados son visibles inmediatamente y pueden durar entre 6 y 12 meses según el metabolismo de cada paciente.",
      "La Dra. Edysbell Barrios aplica este procedimiento con enfoque de armonización, buscando siempre resultados naturales que mejoren la estética sin alterar la identidad del paciente.",
    ],
    benefits: [
      "Complemento natural al diseño de sonrisa",
      "Material biocompatible y seguro",
      "Resultados inmediatos y de aspecto natural",
      "Procedimiento mínimamente invasivo",
      "Efecto que dura de 6 a 12 meses",
    ],
    image: "/images/services/sd-3.jpg",
  },
  {
    title: "Tratamiento para Bruxismo: Botox y Férulas",
    slug: "bruxismo-botox-ferulas",
    category: "Armonización y Estética Facial",
    description:
      "Manejo integral del bruxismo con botox terapéutico y férulas oclusales para proteger tus dientes y aliviar la tensión muscular.",
    longDescription: [
      "El bruxismo es el hábito involuntario de apretar o rechinar los dientes, generalmente durante el sueño. Puede causar desgaste dental progresivo, fracturas, dolor muscular, cefaleas y problemas articulares. Su manejo requiere un enfoque que proteja los dientes y relaje la musculatura.",
      "Las férulas oclusales son dispositivos personalizados que se usan durante la noche para proteger los dientes del desgaste y reducir la presión en la articulación temporomandibular. Son cómodas, efectivas y conservadoras.",
      "En casos de bruxismo severo con hipertrofia del músculo masetero, el botox terapéutico es una excelente opción complementaria. Se aplica en puntos específicos del músculo para reducir la intensidad de las contracciones, aliviando el dolor y protegiendo la dentadura. El efecto dura aproximadamente 4 a 6 meses.",
    ],
    benefits: [
      "Protección del desgaste dental con férula personalizada",
      "Botox terapéutico para reducir tensión muscular",
      "Alivio de dolor mandibular y cefaleas asociadas",
      "Tratamiento personalizado según la severidad del caso",
      "Seguimiento para ajustar el protocolo según evolución",
    ],
    image: "/images/services/services-details.jpg",
  },
  {
    title: "Armonización Orofacial",
    slug: "armonizacion-orofacial",
    category: "Armonización y Estética Facial",
    description:
      "Procedimientos estéticos para lograr equilibrio entre sonrisa, labios y rostro, respetando la naturalidad y la identidad de cada paciente.",
    longDescription: [
      "La armonización orofacial es un conjunto de procedimientos estéticos que buscan equilibrar las proporciones entre los dientes, los labios, las encías y el rostro en general. Va más allá de la odontología convencional, integrando técnicas de medicina estética con una visión global del resultado.",
      "Puede incluir aplicación de ácido hialurónico en labios, botox para reducir tensión muscular, o correcciones de la línea de la sonrisa. Todo dentro de un plan coordinado con el diseño de sonrisa o como procedimiento independiente.",
      "La Dra. Edysbell Barrios orienta este tipo de procedimientos siempre hacia la naturalidad, buscando que cada intervención mejore sin transformar radicalmente la identidad del paciente.",
    ],
    benefits: [
      "Visión integral de sonrisa, labios y rostro",
      "Procedimientos mínimamente invasivos",
      "Enfoque en resultados naturales y armónicos",
      "Combinable con diseño de sonrisa",
      "Plan personalizado según objetivos y anatomía",
    ],
    image: "/images/about-video.jpg",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export const servicesByCategory = services.reduce(
  (acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  },
  {} as Record<ServiceCategory, Service[]>
);

export const categories: ServiceCategory[] = [
  "Estética Dental",
  "Blanqueamiento",
  "Ortodoncia",
  "Salud Oral y Prevención",
  "Cirugía y Especialidades",
  "Armonización y Estética Facial",
];
