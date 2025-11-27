import React, { useState } from 'react';
import { Dumbbell, Target, Coffee, Clock, Utensils, CheckCircle2, Circle, GraduationCap, Music, Code, BookOpen, Award, Globe } from 'lucide-react';

const RutinaGym = () => {
    const [completedWorkouts, setCompletedWorkouts] = useState({});
    const [selectedDay, setSelectedDay] = useState(null);
    const [completedStudy, setCompletedStudy] = useState({});

    const rutinaSemanal = [
        {
            dia: "Lunes",
            horario: "4:30-5:30am",
            enfoque: "Empuje Superior (PROGRESIÓN SEMANA 3)",
            actividades: "Colegio 7:35-2:35 | Inglés 5:35-7:05",
            estudioNoche: "UNI: Matemáticas 45min | Programación 30min",
            ejercicios: [
                { ejercicio: "Calentamiento dinámico", sets: "5 min", notas: "Círculos de brazos, muñecas, rotación hombros" },
                { ejercicio: "Press de banca", sets: "4x10", peso: "30-45kg", notas: "⬆️ +5-10kg y +1 serie" },
                { ejercicio: "Flexiones regulares", sets: "3x20", notas: "⬆️ +5 reps - mantén forma perfecta" },
                { ejercicio: "Vuelo de pecho", sets: "4x12", peso: "Moderado-alto", notas: "⬆️ +1 serie" },
                { ejercicio: "Press militar mancuernas", sets: "4x10", peso: "10-15kg", notas: "⬆️ +5kg y +1 serie" },
                { ejercicio: "Pike push-ups elevados", sets: "3x12", notas: "⬆️ Pies en banco/escalón" },
                { ejercicio: "Fondos en máquina o paralelas", sets: "4x10-12", notas: "⬆️ Menos asistencia o peso corporal" },
                { ejercicio: "Flexiones pseudo-planche", sets: "3x8", notas: "🆕 Manos más atrás, lean forward" }
            ]
        },
        {
            dia: "Martes",
            horario: "4:30-5:30am",
            enfoque: "Jalón Superior (PROGRESIÓN SEMANA 3)",
            actividades: "Colegio | Banda 3-5 | Inglés 5:35-7:05",
            estudioNoche: "UNI: Física 45min",
            ejercicios: [
                { ejercicio: "Calentamiento", sets: "5 min", notas: "Dead hangs 3x30s + movilidad" },
                { ejercicio: "Jalón agarre amplio", sets: "4x12", peso: "Fuerte", notas: "⬆️ +2 reps o +peso" },
                { ejercicio: "Pull-ups o negativas", sets: "5x6-10", notas: "⬆️ +1 serie, meta: dominadas completas" },
                { ejercicio: "Jalón agarre cerrado", sets: "4x12", peso: "Moderado-alto", notas: "⬆️ +1 serie" },
                { ejercicio: "Remo con barra", sets: "4x10", peso: "30-50kg", notas: "⬆️ +10kg" },
                { ejercicio: "Australian pull-ups pies elevados", sets: "3x12", notas: "⬆️ Más difícil" },
                { ejercicio: "Curl bíceps", sets: "3x15", peso: "10-15kg", notas: "⬆️ +5kg" },
                { ejercicio: "Archer pull-ups (asistidas)", sets: "3x5 c/lado", notas: "🆕 Progresión unilateral" }
            ]
        },
        {
            dia: "Miércoles",
            horario: "4:30-5:30am",
            enfoque: "Piernas Completo (PROGRESIÓN SEMANA 3)",
            actividades: "Colegio 7:35-2:35 | Inglés 5:35-7:05",
            estudioNoche: "UNI: Química 45min | Programación 30min",
            ejercicios: [
                { ejercicio: "Bicicleta + movilidad", sets: "8 min", notas: "Calentamiento completo" },
                { ejercicio: "Sentadillas", sets: "4x12", peso: "30-50kg", notas: "⬆️ +10kg" },
                { ejercicio: "Sentadillas búlgaras", sets: "3x12 c/pierna", peso: "10-15kg", notas: "⬆️ +5kg y +2 reps" },
                { ejercicio: "Peso muerto rumano", sets: "4x10", peso: "30-50kg", notas: "⬆️ +10kg y +1 serie" },
                { ejercicio: "Zancadas caminando", sets: "3x12 c/pierna", peso: "10kg", notas: "⬆️ +2 reps" },
                { ejercicio: "Pistol squats asistidas", sets: "4x6 c/pierna", notas: "⬆️ Menos asistencia" },
                { ejercicio: "Gemelos parado", sets: "4x20", peso: "15kg c/u", notas: "⬆️ +5 reps" },
                { ejercicio: "Saltos al cajón explosivos", sets: "4x12", notas: "⬆️ Cajón más alto si es posible" },
                { ejercicio: "Abdominales máquina", sets: "4x20", notas: "⬆️ +5 reps" },
                { ejercicio: "Hollow body hold", sets: "4x40s", notas: "⬆️ +10s" },
                { ejercicio: "V-ups", sets: "3x15", notas: "🆕 Core dinámico" }
            ]
        },
        {
            dia: "Jueves",
            horario: "Descanso gym",
            enfoque: "Foco académico + Movilidad activa",
            actividades: "Colegio | Banda 3-5 | Inglés 5:35-7:05",
            estudioNoche: "UNI: Aptitud 45min | TOEFL 30min",
            ejercicios: [
                { ejercicio: "Estiramientos matutinos", sets: "20 min", notas: "⬆️ +5min - Yoga flow o movilidad profunda" },
                { ejercicio: "Core nocturno", sets: "4 rondas", notas: "⬆️ Plancha 40s + hollow 30s + side plank 30s c/lado" }
            ]
        },
        {
            dia: "Viernes",
            horario: "4:30-5:30am",
            enfoque: "Full Body + Parkour Skills (PROGRESIÓN SEMANA 3)",
            actividades: "Colegio 7:35-2:35 | Inglés 5:35-7:05",
            estudioNoche: "Repaso UNI 1hr | Proyecto Flask 30min",
            ejercicios: [
                { ejercicio: "Movilidad dinámica + saltos", sets: "5 min", notas: "Prep completo" },
                { ejercicio: "Press de banca", sets: "3x12", peso: "25-40kg", notas: "⬆️ +2 reps - día ligero" },
                { ejercicio: "Flexiones explosivas (clap)", sets: "3x10", notas: "🆕 Pliométrico" },
                { ejercicio: "Jalón dorsal", sets: "3x12", peso: "Moderado", notas: "⬆️ +2 reps" },
                { ejercicio: "Burpees con pull-up", sets: "3x8", notas: "⬆️ Más difícil - combinado" },
                { ejercicio: "Handstand contra pared", sets: "5x30-45s", notas: "⬆️ +15s" },
                { ejercicio: "Handstand shoulder taps", sets: "3x10", notas: "🆕 Más control" },
                { ejercicio: "Tuck front lever", sets: "5x15-20s", notas: "⬆️ +1 serie y +5s" },
                { ejercicio: "Elevación piernas rectas", sets: "4x12", notas: "⬆️ Piernas rectas en vez de flexionadas" },
                { ejercicio: "Windshield wipers", sets: "3x8", notas: "🆕 Core rotacional" }
            ]
        },
        {
            dia: "Sábado",
            horario: "9:00-10:30am",
            enfoque: "Calistenia + Parkour (PROGRESIÓN SEMANA 3)",
            actividades: "Día de estudio intenso + programación",
            estudioNoche: "UNI 2-3hrs | Programación 2-3hrs",
            ejercicios: [
                { ejercicio: "Calentamiento + parkour flow", sets: "10 min", notas: "Movilidad + cuadrupedia" },
                { ejercicio: "Saltos de precisión", sets: "25 min", notas: "⬆️ +5min - distancias mayores" },
                { ejercicio: "Kong vault", sets: "15 rep", notas: "⬆️ +5 reps - más fluido" },
                { ejercicio: "Speed vault / Lazy vault", sets: "12 rep c/u", notas: "⬆️ +2 reps" },
                { ejercicio: "Wall runs + cat leaps", sets: "20 intentos", notas: "⬆️ Combinado - más alto" },
                { ejercicio: "Pull-ups estrictas", sets: "6x8-12", notas: "⬆️ +1 serie - meta: 12 consecutivas" },
                { ejercicio: "Muscle-up negativas lentas", sets: "5x5", notas: "⬆️ +2 reps - 5s bajada" },
                { ejercicio: "Dips con peso o lean forward", sets: "5x12-15", notas: "⬆️ Añadir dificultad" },
                { ejercicio: "L-sit to V-sit", sets: "5x20s", notas: "⬆️ Transición dinámica" },
                { ejercicio: "Tuck planche lean", sets: "4x15s", notas: "🆕 Progresión planche" },
                { ejercicio: "Front lever tuck to one leg", sets: "4x10s", notas: "⬆️ Siguiente progresión" },
                { ejercicio: "Hollow to arch rocks", sets: "3x20", notas: "🆕 Core dinámico" },
                { ejercicio: "Precision landings", sets: "20 rep", notas: "Aterrizajes silenciosos desde altura" }
            ]
        },
        {
            dia: "Domingo",
            horario: "Descanso",
            enfoque: "Recuperación",
            actividades: "Día flexible para descansar",
            estudioNoche: "Simulacro UNI opcional | Tutoriales ligeros",
            ejercicios: [
                { ejercicio: "Caminata", sets: "30min", notas: "Opcional" },
                { ejercicio: "Estiramientos", sets: "20 min", notas: "Profundos" }
            ]
        }
    ];

    const planEstudio = {
        uni: [
            { materia: "Matemáticas", dias: "Lun, Sáb", temas: "Álgebra, Trigonometría" },
            { materia: "Física", dias: "Mar, Sáb", temas: "Cinemática, Dinámica" },
            { materia: "Química", dias: "Mié, Sáb", temas: "Estequiometría, Reacciones" },
            { materia: "Aptitud", dias: "Jue, Dom", temas: "Razonamiento verbal/matemático" },
            { materia: "Humanidades", dias: "Vie-Dom", temas: "Historia, Literatura" }
        ],
        ingles: [
            "Clases Lu-Vi 5:35-7:05pm",
            "Práctica TOEFL: Jue 30min",
            "Sáb/Dom: 1hr listening + reading",
            "Apps: Duolingo 15min diarios"
        ],
        programacion: [
            "Lun 8:00-8:30pm: Teoría (cursos)",
            "Mié 8:00-8:30pm: Práctica",
            "Vie 8:00-8:30pm: Proyecto Flask",
            "Sáb 2-4pm: Sesión larga"
        ]
    };

    const alimentacion = [
        { hora: "5:30-6:00am", nombre: "Post entreno", opciones: ["Batido: plátanos + avena + leche + maní", "4 huevos + pan integral + jugo", "Avena con frutas + 2 huevos"] },
        { hora: "11:00am", nombre: "Recreo", opciones: ["Sándwich pollo + fruta + yogurt", "Pan con palta + jugo", "Frutos secos + plátano"] },
        { hora: "3:15pm", nombre: "Almuerzo", opciones: ["Arroz + pollo + ensalada + papa", "Tallarines bolognesa + ensalada", "Arroz chaufa + verduras"] },
        { hora: "5:00pm", nombre: "Pre-inglés", opciones: ["Pan con mermelada + plátano", "Galletas + fruta", "Barra energética"] },
        { hora: "7:30pm", nombre: "Cena", opciones: ["Pollo/pescado + arroz + verduras", "Lomo saltado", "Sopa + segundo proteico"] },
        { hora: "9:30pm", nombre: "Antes dormir", opciones: ["Leche + galletas", "Yogurt con granola", "Fruta + frutos secos"] }
    ];

    const toggleWorkout = (dia) => {
        setCompletedWorkouts(prev => ({
            ...prev,
            [dia]: !prev[dia]
        }));
    };

    const toggleStudy = (item) => {
        setCompletedStudy(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    return (
        <div className="max-w-7xl mx-auto p-4 bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg shadow-xl p-6 mb-6 text-white">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Plan Maestro 2025</h1>
                        <p className="text-indigo-100">16 años | Futuro Ingeniero UNI | Desarrollador | Músico</p>
                    </div>
                    <Target className="w-16 h-16 opacity-80" />
                </div>

                <div className="grid grid-cols-6 gap-3">
                    <div className="bg-white/10 rounded p-3 text-center">
                        <Dumbbell className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Gym</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                        <BookOpen className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">UNI</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                        <Globe className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">TOEFL</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                        <Code className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Dev</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                        <Music className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Banda</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                        <Award className="w-5 h-5 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Flask</p>
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded">
                <h3 className="font-bold text-amber-900 mb-2">⚠️ PRIORIZACIÓN INTELIGENTE</h3>
                <p className="text-sm text-amber-800 mb-2">No puedes hacerlo todo perfecto. Jerarquía:</p>
                <ol className="text-sm text-amber-900 space-y-1 ml-4 list-decimal">
                    <li><strong>Colegio</strong> - Base de todo</li>
                    <li><strong>Salud</strong> - Gym 4x/sem + Alimentación + 8hrs sueño MÍNIMO</li>
                    <li><strong>UNI</strong> - 45min-1hr diario + 2-3hrs Sábado</li>
                    <li><strong>Inglés</strong> - Clases regulares + 30min práctica TOEFL 3x/semana</li>
                    <li><strong>Programación</strong> - 30min Lu-Mi-Vi + 2hrs Sáb = 3.5hrs/semana</li>
                    <li><strong>Banda</strong> - Ma-Ju 3-5pm (ya programado)</li>
                </ol>
                <p className="text-sm text-amber-800 mt-2 font-semibold">Domingos: DESCANSA. Tu cerebro lo necesita.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Dumbbell className="w-6 h-6 text-indigo-600" />
                    Rutina Semanal GYM
                </h2>

                <div className="space-y-4">
                    {rutinaSemanal.map((dia, idx) => (
                        <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 cursor-pointer"
                                onClick={() => setSelectedDay(selectedDay === idx ? null : idx)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div onClick={(e) => { e.stopPropagation(); toggleWorkout(dia.dia); }}>
                                            {completedWorkouts[dia.dia] ? (
                                                <CheckCircle2 className="w-6 h-6 text-green-300" />
                                            ) : (
                                                <Circle className="w-6 h-6" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{dia.dia} - {dia.horario}</h3>
                                            <p className="text-sm text-indigo-100">{dia.enfoque}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-xs text-indigo-100">{dia.actividades}</div>
                                <div className="mt-1 text-xs text-purple-200 font-semibold">{dia.estudioNoche}</div>
                            </div>

                            {selectedDay === idx && (
                                <div className="p-4 bg-gray-50">
                                    <div className="space-y-2">
                                        {dia.ejercicios.map((ejercicio, i) => (
                                            <div key={i} className="bg-white rounded p-3 border border-gray-200">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-gray-900">{ejercicio.ejercicio}</p>
                                                        <p className="text-sm text-gray-600">{ejercicio.notas}</p>
                                                    </div>
                                                    <div className="text-right ml-3">
                            <span className="text-sm font-bold text-indigo-600 whitespace-nowrap">
                              {ejercicio.sets}
                            </span>
                                                        {ejercicio.peso && (
                                                            <p className="text-xs text-purple-600 mt-1">{ejercicio.peso}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        Estudio UNI
                    </h2>

                    <div className="bg-blue-50 rounded p-3 mb-4 text-sm">
                        <p className="text-blue-900"><strong>Tiempo:</strong> 45min diario + 2-3hrs Sáb</p>
                        <p className="text-blue-900"><strong>Material:</strong> Lumbreras ✓</p>
                    </div>

                    {planEstudio.uni.map((area, idx) => (
                        <div key={idx} className="border-l-4 border-blue-500 pl-3 mb-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">{area.materia}</h3>
                                    <p className="text-xs text-gray-600">{area.temas}</p>
                                    <p className="text-xs text-blue-600">{area.dias}</p>
                                </div>
                                <button onClick={() => toggleStudy(`uni-${idx}`)}>
                                    {completedStudy[`uni-${idx}`] ? (
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    ) : (
                                        <Circle className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-green-600" />
                        TOEFL + Cometa
                    </h2>

                    <div className="bg-green-50 rounded p-3 mb-4 text-sm">
                        <p className="text-green-900"><strong>Meta:</strong> TOEFL B2-C1 + Beca Cometa</p>
                    </div>

                    {planEstudio.ingles.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 mb-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                            <p className="text-sm text-gray-700">{item}</p>
                        </div>
                    ))}

                    <div className="mt-4 bg-purple-50 border border-purple-200 rounded p-3">
                        <p className="text-xs text-purple-900"><strong>Beca Cometa:</strong> Tu proyecto Flask puede ser tu carta de presentación! 🚀</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-purple-600" />
                        Programación
                    </h2>

                    <div className="bg-purple-50 rounded p-3 mb-4">
                        <h3 className="font-bold text-purple-900 text-sm mb-2">Stack</h3>
                        <div className="text-xs space-y-1">
                            <p className="text-green-700">✓ HTML, CSS, JS, React</p>
                            <p className="text-yellow-700">⏳ Node.js, MongoDB, Python</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {planEstudio.programacion.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-xs text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 bg-pink-50 border border-pink-200 rounded p-3">
                        <h3 className="font-bold text-pink-900 text-xs mb-1 flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            Proyecto Flask
                        </h3>
                        <p className="text-xs text-pink-800">App de aprendizaje. Ideal para portafolio y Beca Cometa!</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Utensils className="w-6 h-6 text-green-600" />
                    Plan de Alimentación
                </h2>

                <div className="bg-green-50 rounded p-4 mb-4">
                    <div className="grid grid-cols-4 gap-4 text-center text-sm">
                        <div>
                            <p className="font-bold text-green-700">2800-3000</p>
                            <p className="text-xs text-green-600">Calorías</p>
                        </div>
                        <div>
                            <p className="font-bold text-blue-700">110-125g</p>
                            <p className="text-xs text-blue-600">Proteína</p>
                        </div>
                        <div>
                            <p className="font-bold text-orange-700">400-450g</p>
                            <p className="text-xs text-orange-600">Carbos</p>
                        </div>
                        <div>
                            <p className="font-bold text-yellow-700">70-80g</p>
                            <p className="text-xs text-yellow-600">Grasas</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {alimentacion.map((comida, idx) => (
                        <div key={idx} className="border border-gray-200 rounded p-3">
                            <h3 className="font-bold text-gray-900 text-sm mb-1">{comida.hora} - {comida.nombre}</h3>
                            <ul className="space-y-1">
                                {comida.opciones.map((opcion, i) => (
                                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                                        <span className="text-green-600">•</span>
                                        <span>{opcion}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Tu Día Típico</h2>

                <div className="space-y-2">
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                        <p className="text-sm font-bold text-purple-900">4:15am - Despertar</p>
                    </div>
                    <div className="border-l-4 border-pink-500 pl-4 py-2">
                        <p className="text-sm font-bold text-pink-900">4:30-5:30am - 🏋️ GYM (Lu-Mi-Vi)</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                        <p className="text-sm font-bold text-green-900">5:30-6:30am - 🍳 Desayuno + ducharse</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <p className="text-sm font-bold text-blue-900">7:35am-2:35pm - 🎓 Colegio</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-2">
                        <p className="text-sm font-bold text-orange-900">3:15pm - 🍽️ Almuerzo</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                        <p className="text-sm font-bold text-red-900">3:00-5:00pm - 🎵 Banda (Ma-Ju)</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4 py-2">
                        <p className="text-sm font-bold text-indigo-900">5:35-7:05pm - 🇬🇧 Inglés (Lu-Vi)</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                        <p className="text-sm font-bold text-purple-900">7:30pm - 🍽️ Cena</p>
                    </div>
                    <div className="border-l-4 border-cyan-500 pl-4 py-2">
                        <p className="text-sm font-bold text-cyan-900">8:00-9:00pm - 💻 Tareas + Programación</p>
                    </div>
                    <div className="border-l-4 border-gray-500 pl-4 py-2">
                        <p className="text-sm font-bold text-gray-900">9:30pm - 😴 Dormir (8hrs mínimo!)</p>
                    </div>
                </div>

                <div className="mt-6 bg-green-50 border border-green-200 rounded p-4">
                    <h3 className="font-bold text-green-900 mb-2">✅ Vas increíble</h3>
                    <p className="text-sm text-green-800">A los 16 años ya entrenas, estudias inglés, tocas en banda, programas y te preparas para la UNI. Estás años luz adelante. Sé paciente contigo mismo. Todo con equilibrio. ¡Vas por buen camino! 🚀</p>
                </div>
            </div>
        </div>
    );
};

export default RutinaGym;