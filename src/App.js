import React, { useState } from 'react';

export default function PrototipoWebComercial() {
  const screens = [
    {
      id: 'P01',
      title: 'Presentación',
      subtitle: '' ,
      body: [
        'Muchos programas se conciben implícitamente más como un beneficio laboral que como una herramienta de transformación.',
        'En STEC estamos impulsando una forma de trabajo que permite al mismo tiempo: certificar aprendizajes académicos, desarrollar capacidades profesionales y transferir esas capacidades a los resultados del negocio.',
        'La posición de GM en GPTW, manteniéndose en el Top 10 durante seis años consecutivos, entre 2020 y 2026, nos anima a colaborar en este proyecto, que combina el interés de la alta gerencia por construir un programa de calidad con los desarrollos tecnológicos del Centro de Liderazgo STEC.',
        'Contamos con una alianza con el Center for Positive Leadership, un centro que tiene en su claustro a los creadores del concepto liderazgo positivo. Este diploma está avalado por ese centro y, según la fecha, puede contar con académicos del centro como docentes (disponible solo en inglés).',
        'Esta propuesta describe lo que podemos hacer juntos:',
      ],
      audioText:
        'La capacitación tradicional suele privilegiar los contenidos. Este programa no busca solo transmitir conceptos, sino ayudar a descubrir cómo y por qué adquirir nuevas capacidades permite vivir mejor.',
      interaction: {
        type: 'compare',
        leftTitle: 'Capacitación tradicional',
        leftPoints: ['Contenido genérico', 'Baja transferencia', 'Escasa personalización'],
        rightTitle: 'Nuestra promesa',
        rightPoints: ['Brechas reales', 'Aplicación en cada sesión', 'Seguimiento individual'],
      },
    },
    {
      id: 'P02',
      title: 'Tres pilares que aumentan impacto',
      subtitle: '',
      body: [
        'El programa se estructura sobre tres pilares que mejoran el aprendizaje y la satisfacción de los participantes. ',
      ],
      audioText:
        'El diseño integra pertinencia, acompañamiento y aprendizaje experiencial. La diferencia actual es que la IA permite operar estos pilares con mayor escalabilidad y seguimiento.',
      interaction: {
        type: 'tabs',
        items: [
          { label: 'Pertinencia', content: 'Cada ejecutivo trabaja sobre brechas reales de su rol y contexto.' },
          { label: 'Acompañamiento', content: 'Tutoría individual y retroalimentación continua para sostener el proceso.' },
          { label: 'Experiencial', content: 'Dinámicas, casos y presión aplicada para mover conducta, no solo comprensión.' },
        ],
      },
    },
    {
      id: 'P03',
      title: 'Arquitectura del programa',
      subtitle: 'El programa mantiene la estructura de 10 sesiones de medio día de 5 horas por día. Incorporando el aprendizaje experiencial a través del juego y un aula virtual que integra todo el proceso en una experiencia sistémica. Los participantes pueden optar a un diplomado de 120 horas si completan las actividades del aula virtual.' ,
      body: [],
      audioText:
        'La arquitectura es simple y deliberada: primero se comprende, luego se aplica en condiciones exigentes y finalmente se conecta con el marco estratégico del negocio.',
      interaction: {
        type: 'timeline',
        items: [
          { label: '2h Conceptos', content: 'Modelos de administración y discusión de casos.' },
          { label: '2h Aplicación', content: 'Dinámicas para forzar uso práctico del criterio.' },
          { label: '1h Alta gerencia', content: 'Lectura estratégica del problema y sus implicancias.' },
        ],
      },
    },
    {
      id: 'P04',
      title: 'Contenidos del programa',
      subtitle: '5 temas, 2 sesiones por tema',
      body: [],
      audioText: 'El programa cubre cinco temas centrales. Cada tema se trabaja en dos sesiones, combinando marco conceptual y aplicación práctica mediante dinámicas de grupo y juegos de simulación.',
      interaction: {
        type: 'cards',
        items: [
          { label: 'Estrategia (Porter)', content: 'Foco: análisis estructural de la industria y posicionamiento competitivo. Dinámica: simulación competitiva con decisiones bajo restricciones.' },
          { label: 'Innovación (Christensen)', content: 'Foco: innovación disruptiva y creación de valor en incertidumbre. Dinámica: laboratorio para diseñar soluciones bajo presión de tiempo.' },
          { label: 'Confianza (Luhmann)', content: 'Foco: reducción de complejidad y coordinación social. Dinámica: negociación con información incompleta.' },
          { label: 'Trabajo en equipo (Hackman)', content: 'Foco: condiciones para efectividad de equipos. Dinámica: desafío complejo con roles diferenciados.' },
          { label: 'Alto desempeño (Ericsson)', content: 'Foco: práctica deliberada y feedback. Dinámica: entrenamiento intensivo con ciclos de ajuste.' },
          { label: 'Sesión de Team Building y Titulación', content: 'Entrega de premios y reconocimientos. Opcional: el diploma lo entrega el Decano de la Facultad de Economía y Negocios en la ceremonia de MBAs.' },
        ],
      },
    },
    {
      id: 'P05',
      title: 'Personalización',
      subtitle: '',
      body: [
        'Cada participante define objetivos vinculados a su momento profesional y personal.',
      ],
      audioText:
        'La personalización no se limita al contenido. Parte desde brechas reales, objetivos propios y decisiones de aplicación concretas. Eso aumenta la pertinencia y la probabilidad de transferencia.',
      interaction: {
        type: 'accordion',
        items: [
          { label: 'Brecha', content: 'Ejemplo: dificultad para tomar decisiones bajo presión sin perder de vista la cadena de valor del negocio.' },
          { label: 'Objetivo', content: 'Ejemplo: identificar mi estado emocional cuando mi superior jerárquico me hace un pedido importante y urgente e identificar herramientas para ordenar las ideas y retomar control' },
          { label: 'Intervención', content: 'escribir en mi bitácora un episodio real en el que sentí pérdida de control frente a un pedido importante y urgente, estudiar las herramientas que me envió mi tutor, usar el juego de negocios de la sesión 3 para entrenar el uso de esas herramientas' },
          { label: 'Tecnología', content: `El programa se ejecuta sobre el LMS institucional ya operativo, el cual será configurado y adaptado para la implementación del modelo en GM. El LMS incorpora una arquitectura tecnológica con agentes automatizados desarrollados en n8n, modelos de lenguaje (LLMs) operando en Vertex AI y analítica de aprendizaje visualizados en Looker Studio. Esta integración permite monitoreo permanente y en línea del proceso formativo.` },
        ],
      },
    },
    {
      id: 'P07',
      title: 'Sistema de seguimiento y transferencia',
      subtitle: 'Cada jornada cierra con una bitácora obligatoria.',
      body: [
        'La bitácora se procesa para generar retroalimentación y recomendaciones personalizadas.',
      ],
      audioText:
        'La bitácora cumple una función crítica: capturar aprendizaje, dificultad y decisión de aplicación. Sobre esa base, la plataforma y la tutoría sostienen el cambio entre sesiones.',
      interaction: {
        type: 'flow',
        items: [
          'Participante registra aprendizajes',
          'La plataforma procesa señales',
          'Se generan sugerencias y refuerzos',
          'El tutor valida, ajusta, envía email y acompaña reacciones.',
        ],
      },
    },
    {
      id: 'P06',
      title: 'Aprendizaje integrado al negocio',
      subtitle: 'Teoría, práctica y conexión estratégica a partir de las charlas de los altos ejecutivos que participan de cada sesión.',
      body: [],
      audioText:
        'Aquí el aprendizaje no corre por fuera del negocio. Cada módulo vincula modelos, experiencia aplicada e intervención de la alta gerencia para asegurar conexión con la realidad estratégica.',
      interaction: {
        type: 'cards',
        items: [
          { label: 'Conceptual', content: 'Modelos y casos para formar criterio ejecutivo, de alto rigor académico, disponibles en un aula virtual especialmente construida para esta cohorte.' },
          { label: 'Aplicado', content: 'Dinámicas de grupo en cada sesión que fuerzan coordinación, decisión y ajuste. Al final de cada juego o dinámica grupal, cada participante escribe su bitácora, alimentando la plataforma de agentes de IA que entregan guía y retroalimentación, construyendo una rica base de conocimiento para la Gerencia de Personas.' },
          { label: 'Estratégico', content: 'Participación de líderes para conectar con prioridades reales. Antes de cada charla, los líderes reciben un informe sobre los desafíos y procesos que están viviendo los profesionales.' },
        ],
      },
    },
    {
      id: 'P09',
      title: 'La decisión no es sobre contenidos',
      subtitle: 'Es sobre el tipo de resultado que la organización necesita.',
      body: [
        
      ],
      audioText:
        'Si el objetivo es solo exposición a contenidos, hay alternativas más simples. Si el objetivo es maximizar el valor en un periodo de tiempo acotado, este diseño es coherente con ese desafío.',
      interaction: {
        type: 'decision',
        question: '¿Qué necesita hoy su organización?',
        options: [
          { label: 'Contenido', feedback: 'Entonces conviene una solución más liviana y menos intensiva.' },
          { label: 'Acompañar el proceso de cambio', feedback: 'Entonces este diseño es consistente con el tipo de resultado que busca.' },
        ],
      },
    },
    {
      id: 'P10',
      title: 'Dirección Académica',
      subtitle: 'Carlos Albornoz, PhD',
      body: [
        'Psicólogo laboral, MBA y doctor en educación de adultos. Se ha especializado en desarrollo de equipos y formación de líderes.',
        'Con una trayectoria de 20 años dedicados al estudio, la práctica y la investigación sobre cómo los adultos aprenden. Ha diseñado y dirigido programas de entrenamiento en Chile, Alemania y EEUU, trabajando con diversas instituciones como DLab-UDD, la Fundación Luksic, la Unión Europea y la Barbara Bush Foundation en EEUU.',
        'Ha tenido una inmersión en el mundo del emprendimiento y la gestión de la innovación además de haber coordinado las políticas de capital humano para el Ministerio de Economía chileno.',
        'Su tesis doctoral en EEUU y sus proyectos Fondecyt en Chile, han contribuido con nuevos enfoques sobre cómo innovar y transferir habilidades al puesto de trabajo. Sus publicaciones académicas superan las 1.000 citas en Google Scholar.',
      ],
      audioText:
        'La dirección académica combina investigación, experiencia internacional y diseño de programas orientados a transferir capacidades reales al puesto de trabajo.',
    }
  ];

  
  const [current, setCurrent] = useState(0);
  const [tabSelections, setTabSelections] = useState({ 1: 0 });
  const [openAccordions, setOpenAccordions] = useState({});
  const [decision, setDecision] = useState('');

  const screen = screens[current];
  const progress = ((current + 1) / screens.length) * 100;
  const isCompactBody = screen.id === 'P10' || screen.id === 'P01';




  const next = () => {
    setCurrent((c) => Math.min(c + 1, screens.length - 1));
  };

  const prev = () => {
    setCurrent((c) => Math.max(c - 1, 0));
  };

  const renderInteraction = () => {
    const interaction = screen.interaction;
    if (!interaction) return null;

    if (interaction.type === 'compare') {
      return (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)]">
            <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Enfoque tradicional
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{interaction.leftTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {interaction.leftPoints.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
          <div className="rounded-[28px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-[0_24px_55px_-32px_rgba(234,88,12,0.45)]">
            <div className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-700">
              Propuesta STEC
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{interaction.rightTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {interaction.rightPoints.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </div>
      );
    }

    if (interaction.type === 'tabs') {
      const selected = tabSelections[current] ?? 0;
      return (
        <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)]">
          <div className="flex flex-wrap gap-2 mb-4">
            {interaction.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setTabSelections((s) => ({ ...s, [current]: idx }))}
                className={`px-4 py-2 rounded-full text-sm border transition ${selected === idx ? 'bg-orange-500 text-white border-orange-500 shadow-[0_12px_24px_-18px_rgba(249,115,22,0.9)]' : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-orange-200 hover:text-slate-900'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50 px-5 py-4 text-slate-700 leading-relaxed">{interaction.items[selected].content}</div>
        </div>
      );
    }

    if (interaction.type === 'accordion') {
      return (
        <div className="mt-6 space-y-3">
          {interaction.items.map((item, idx) => {
            const key = `${current}-${idx}`;
            const open = !!openAccordions[key];
            return (
              <div key={idx} className="rounded-[24px] border border-slate-200/80 bg-white shadow-[0_18px_35px_-28px_rgba(15,23,42,0.45)] overflow-hidden">
                <button
                  onClick={() => setOpenAccordions((s) => ({ ...s, [key]: !open }))}
                  className="w-full flex items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50"
                >
                  <span className="font-medium text-slate-900">{item.label}</span>
                  <span className="text-slate-500">{open ? '−' : '+'}</span>
                </button>
                {open && <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.content}</div>}
              </div>
            );
          })}
        </div>
      );
    }

    if (interaction.type === 'cards') {
      return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {interaction.items.map((item, idx) => (
            <div key={idx} className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)]">
              <div className="mb-4 h-1.5 w-14 rounded-full bg-orange-500" />
              <div className="text-sm uppercase tracking-[0.18em] text-slate-500 mb-3">{item.label}</div>
              <div className="text-slate-700 leading-relaxed text-[15px]">{item.content}</div>
            </div>
          ))}
        </div>
      );
    }

    if (interaction.type === 'timeline') {
      return (
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {interaction.items.map((item, idx) => (
            <div key={idx} className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_48px_-34px_rgba(15,23,42,0.45)] relative">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                {idx + 1}
              </div>
              <div className="font-semibold text-slate-900 mb-2">{item.label}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{item.content}</div>
            </div>
          ))}
        </div>
      );
    }

    if (interaction.type === 'flow') {
      return (
        <div className="mt-8 grid md:grid-cols-4 gap-3">
          {interaction.items.map((item, idx) => (
            <div key={idx} className="rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.45)] text-sm text-slate-700">
              <div className="mb-3 inline-flex rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700">
                Paso {idx + 1}
              </div>
              {item}
            </div>
          ))}
        </div>
      );
    }

    if (interaction.type === 'steps') {
      return (
        <div className="mt-6 space-y-3">
          {interaction.items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-5 shadow-sm flex gap-4 items-start">
              <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-semibold">{idx + 1}</div>
              <div>
                <div className="font-semibold">{item.label}</div>
                <div className="text-slate-700 text-sm mt-1">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (interaction.type === 'decision') {
      const selected = interaction.options.find((o) => o.label === decision);
      return (
        <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)]">
          <div className="font-semibold text-slate-900 mb-4">{interaction.question}</div>
          <div className="flex flex-wrap gap-3">
            {interaction.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => setDecision(option.label)}
                className={`px-4 py-2 rounded-full border text-sm transition ${decision === option.label ? 'bg-orange-500 text-white border-orange-500 shadow-[0_12px_24px_-18px_rgba(249,115,22,0.9)]' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-orange-200'}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          {selected && (
            <div className="mt-4 p-4 rounded-2xl bg-orange-50 text-slate-700 text-sm leading-relaxed">
              {selected.feedback}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf5_0%,#f8fafc_28%,#f8fafc_100%)] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-10">
        <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/85 shadow-[0_40px_120px_-55px_rgba(15,23,42,0.42)] backdrop-blur">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#172033_56%,#1f2937_100%)] text-white px-6 py-8 md:px-10 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.07),transparent_24%)]" />
            <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Propuesta preparada por el Centro de Liderazgo STEC
                </div>
                <h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                  Programa de Desarrollo de Ejecutivos. Propuesta elaborada para{' '}
                  <a
                    href="https://www.generadora.cl/noticias/generadora-metropolitana-es-la-7-mejor-empresa-para-trabajar-en-chile/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-400 hover:text-orange-300"
                  >
                    Generadora Metropolitana
                  </a>
                  .
                </h1>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                  Una presentación comercial diseñada para alinear desarrollo ejecutivo, transferencia al puesto de trabajo y resultados de negocio.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/8 px-5 py-4 text-sm backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-[0.24em] text-slate-300">Pantalla actual</div>
                <div className="mt-2 text-2xl font-semibold">{screen.id}</div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-orange-500 transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-3 text-sm text-slate-300">{current + 1} de {screens.length}</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-0">
            <aside className="border-r border-slate-200/80 bg-[linear-gradient(180deg,#f8fafc_0%,#fff7ed_100%)] p-5 md:p-6">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Navegación</div>
              <div className="space-y-2.5">
                {screens.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => { setCurrent(idx); }}
                    className={`w-full text-left rounded-[24px] px-4 py-3.5 border transition ${idx === current ? 'bg-slate-950 text-white border-slate-950 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.65)]' : 'bg-white/90 text-slate-700 border-slate-200 hover:border-orange-200 hover:shadow-[0_18px_36px_-30px_rgba(15,23,42,0.35)]'}`}
                  >
                    <div className={`text-[11px] uppercase tracking-[0.2em] ${idx === current ? 'text-orange-300' : 'text-slate-400'}`}>{item.id}</div>
                    <div className="mt-1.5 text-sm font-medium leading-snug">{item.title}</div>
                  </button>
                ))}
              </div>
            </aside>

            <main className="p-5 md:p-8 lg:p-10">
              <div className="flex flex-col gap-4">
                <div className="max-w-4xl">
                  <div className="mb-3 inline-flex rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-700">{screen.id}</div>
                  <h2 className="text-3xl md:text-[2.85rem] font-semibold leading-tight text-slate-950">{screen.title}</h2>
                  <p className={`mt-4 max-w-3xl text-slate-600 leading-relaxed ${screen.id === 'P10' ? 'text-sm' : 'text-lg'}`}>{screen.subtitle}</p>
                  {screen.id === 'P10' && (
                    <a
                      href="https://dr-carlos-albornoz-1a8w3j6.gamma.site/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:border-orange-300 hover:bg-orange-100"
                    >
                      Revisar el CV del Director Académico
                    </a>
                  )}
                </div>
                
              </div>

              <div className="mt-8">
                <section className="rounded-[32px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 md:p-8 shadow-[0_30px_60px_-42px_rgba(15,23,42,0.35)]">
                  {screen.id === 'P01' && (
                    <div className="mb-6 flex justify-end">
                      <img
                        src={`${process.env.PUBLIC_URL}/stec-transparente-color.png`}
                        alt="Logo Santo Tomas Educacion Continua"
                        className="h-10 w-auto md:h-12"
                      />
                    </div>
                  )}
                  <div className="space-y-4">
                    {screen.body.map((paragraph, idx) => {
                      if (screen.id === 'P01' && idx === 3) {
                        return (
                          <p key={idx} className="text-slate-700 text-sm leading-7">
                            Contamos con una alianza con el{' '}
                            <a
                              href="https://positiveleadership.louisville.edu/"
                              target="_blank"
                              rel="noreferrer"
                              className="font-semibold text-orange-600 hover:text-orange-700"
                            >
                              Center for Positive Leadership
                            </a>
                            , un centro que tiene en su claustro a los creadores del concepto liderazgo positivo. Este diploma está avalado por ese centro y, según la fecha, puede contar con académicos del centro como docentes (disponible solo en inglés).
                          </p>
                        );
                      }

                      return (
                        <p
                          key={idx}
                          className={`leading-relaxed ${isCompactBody ? 'text-sm text-slate-700 leading-7' : 'text-[17px] text-slate-700 md:text-[18px]'}`}
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                    {screen.id === 'P01' && (
                      <a
                        href="https://positiveleadership.louisville.edu/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:border-orange-300 hover:bg-orange-100"
                      >
                        Revisar sitio web del Centro de la Universidad de Louisville, Kentucky, USA
                      </a>
                    )}
                  </div>
                  {renderInteraction()}
                  {screen.id === 'P03' && (
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)]">
                        <div className="mb-2 text-sm font-semibold text-slate-900">Lugar</div>
                        <div className="text-slate-600 text-sm leading-relaxed">
                          Sede Vergara.<br />
                          <strong>Sesión de cierre: Club de Campo Entel u otro según disponibilidad.</strong>
                        </div>
                      </div>
                      <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)]">
                        <div className="mb-2 text-sm font-semibold text-slate-900">Certificación Formal</div>
                        <div className="text-slate-600 text-sm leading-relaxed">
                          Ofrecemos la posibilidad de obtener un diplomado de 120 horas como parte del mismo programa.
                        </div>
                      </div>
                    </div>
                  )}
                  {screen.id === 'P09' && (
                    <div className="mt-8 rounded-[28px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-[0_24px_50px_-34px_rgba(249,115,22,0.4)]">
                      <div className="mb-2 text-sm font-semibold text-slate-900">Valor por alumno</div>
                      <div className="text-slate-700 text-sm leading-relaxed">
                        $1.380.000.- (en base a 35 alumnos inscritos). Incluye dos coffee ejecutivo nivel medio alto, almuerzo, pack de bienvenida, mochila institucional, jornada de cierre en club de campo y coctel de despedida, además de diplomas y acceso a aula virtual por el tiempo que dure el programa.
                      </div>
                    </div>
                  )}
                  {screen.id === 'P10' && (
                    <div className="mt-8 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)]">
                      <div className="mb-2 text-sm font-semibold text-slate-900">Contacto</div>
                      <div className="text-slate-950 font-medium">Giovanna Avila</div>
                      <div className="text-slate-600 text-sm mt-1">Consultor senior y responsable de esta propuesta</div>
                      <div className="text-slate-600 text-sm mt-1">+56 9 7823 0703</div>
                      <a
                        href="mailto:gavila6@santotomas.cl"
                        className="mt-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 transition hover:border-orange-300 hover:bg-orange-100"
                      >
                        gavila6@santotomas.cl
                      </a>
                    </div>
                  )}
                </section>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 disabled:opacity-40"
                >
                  Anterior
                </button>
                
                <button
                  onClick={next}
                  disabled={current === screens.length - 1}
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:opacity-40"
                >
                  Siguiente
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
