import React, { useState } from 'react';
import { Dumbbell, BookOpen, Code, Coffee, Moon, Sun, ChevronDown, ChevronUp, Calendar, Clock, Target, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

const RutinaSemanal = () => {
    const [diaExpandido, setDiaExpandido] = useState(null);
    const [modoOscuro, setModoOscuro] = useState(false);

    const rutinaSemanal = [
        {
            dia: "Lunes",
            fecha: "Enero - Febrero",
            energia: "alta",
            horarioGym: "5:00 - 6:30",
            tipoGym: "Empuje Superior",
            bloquesPrincipales: [
                { hora: "5:00-6:30", actividad: "Gym: Empuje Superior", icono: Dumbbell, tipo: "gym" },
                { hora: "8:00-9:00", actividad: "Speaking TOEFL", icono: BookOpen, tipo: "estudio" },
                { hora: "9:00-12:55", actividad: "Ventana Flexible (Repaso/Programación/Ocio)", icono: Coffee, tipo: "flexible" },
                { hora: "12:55-20:10", actividad: "CEPRE (Traslado + Clases)", icono: BookOpen, tipo: "estudio" },
                { hora: "20:40-21:30", actividad: "Repaso Estratégico Matemática", icono: Target, tipo: "repaso" }
            ],
            ejercicios: [
                { ejercicio: "Calentamiento dinámico", sets: "5 min", notas: "Círculos de brazos, muñecas, rotación hombros" },
                { ejercicio: "Press de banca", sets: "4x10", peso: "30-45kg", notas: "⬆️ +5-10kg y +1 serie" },
                { ejercicio: "Flexiones regulares", sets: "3x20", notas: "⬆️ +5 reps - mantén forma perfecta" },
                { ejercicio: "Vuelo de pecho", sets: "4x12", peso: "Moderado-alto", notas: "⬆️ +1 serie" },
                { ejercicio: "Press militar mancuernas", sets: "4x10", peso: "10-15kg", notas: "⬆️ +5kg y +1 serie" },
                { ejercicio: "Pike push-ups elevados", sets: "3x12", notas: "⬆️ Pies en banco/escalón" },
                { ejercicio: "Fondos en máquina", sets: "4x10-12", notas: "⬆️ Menos asistencia" },
                { ejercicio: "Flexiones pseudo-planche", sets: "3x8", notas: "🆕 Manos más atrás, lean forward" }
            ]
        },
        {
            dia: "Martes",
            fecha: "Enero - Febrero",
            energia: "alta",
            horarioGym: "5:00 - 6:30",
            tipoGym: "Jalón Superior",
            bloquesPrincipales: [
                { hora: "5:00-6:30", actividad: "Gym: Jalón Superior", icono: Dumbbell, tipo: "gym" },
                { hora: "9:00-12:55", actividad: "Ventana Flexible (Repaso Física/Programación)", icono: Code, tipo: "flexible" },
                { hora: "12:55-20:10", actividad: "CEPRE", icono: BookOpen, tipo: "estudio" },
                { hora: "18:30-20:30", actividad: "TOEFL Preparación", icono: BookOpen, tipo: "estudio" },
                { hora: "20:30-21:30", actividad: "Cena + Repaso rápido", icono: Target, tipo: "repaso" }
            ],
            ejercicios: [
                { ejercicio: "Calentamiento", sets: "5 min", notas: "Dead hangs 3x30s + movilidad" },
                { ejercicio: "Jalón agarre amplio", sets: "4x12", peso: "Fuerte", notas: "⬆️ +2 reps o +peso" },
                { ejercicio: "Pull-ups o negativas", sets: "5x6-10", notas: "⬆️ +1 serie, meta: dominadas completas" },
                { ejercicio: "Jalón agarre cerrado", sets: "4x12", peso: "Moderado-alto", notas: "⬆️ +1 serie" },
                { ejercicio: "Remo con barra", sets: "4x10", peso: "30-50kg", notas: "⬆️ +10kg" },
                { ejercicio: "Australian pull-ups", sets: "3x12", notas: "⬆️ Pies elevados" },
                { ejercicio: "Curl bíceps", sets: "3x15", peso: "10-15kg", notas: "⬆️ +5kg" },
                { ejercicio: "Archer pull-ups", sets: "3x5 c/lado", notas: "🆕 Progresión unilateral" }
            ]
        },
        {
            dia: "Miércoles",
            fecha: "Enero - Febrero",
            energia: "alta",
            horarioGym: "5:00 - 6:40",
            tipoGym: "Piernas Completo",
            bloquesPrincipales: [
                { hora: "5:00-6:40", actividad: "Gym: Piernas + Core", icono: Dumbbell, tipo: "gym" },
                { hora: "8:00-9:00", actividad: "Speaking TOEFL", icono: BookOpen, tipo: "estudio" },
                { hora: "9:00-12:55", actividad: "Ventana Flexible (Repaso Química/Programación)", icono: Coffee, tipo: "flexible" },
                { hora: "12:55-20:10", actividad: "CEPRE", icono: BookOpen, tipo: "estudio" },
                { hora: "20:40-21:30", actividad: "Repaso Estratégico Química", icono: Target, tipo: "repaso" }
            ],
            ejercicios: [
                { ejercicio: "Bicicleta + movilidad", sets: "8 min", notas: "Calentamiento completo" },
                { ejercicio: "Sentadillas", sets: "4x12", peso: "30-50kg", notas: "⬆️ +10kg" },
                { ejercicio: "Sentadillas búlgaras", sets: "3x12 c/pierna", peso: "10-15kg", notas: "⬆️ +5kg y +2 reps" },
                { ejercicio: "Peso muerto rumano", sets: "4x10", peso: "30-50kg", notas: "⬆️ +10kg y +1 serie" },
                { ejercicio: "Zancadas caminando", sets: "3x12 c/pierna", peso: "10kg", notas: "⬆️ +2 reps" },
                { ejercicio: "Pistol squats asistidas", sets: "4x6 c/pierna", notas: "⬆️ Menos asistencia" },
                { ejercicio: "Gemelos parado", sets: "4x20", peso: "15kg c/u", notas: "⬆️ +5 reps" },
                { ejercicio: "Saltos al cajón", sets: "4x12", notas: "⬆️ Cajón más alto" },
                { ejercicio: "Abdominales máquina", sets: "4x20", notas: "⬆️ +5 reps" },
                { ejercicio: "Hollow body hold", sets: "4x40s", notas: "⬆️ +10s" },
                { ejercicio: "V-ups", sets: "3x15", notas: "🆕 Core dinámico" }
            ]
        },
        {
            dia: "Jueves",
            fecha: "Enero - Febrero",
            energia: "baja",
            horarioGym: "5:00 - 5:30",
            tipoGym: "Recuperación Activa",
            bloquesPrincipales: [
                { hora: "5:00-5:30", actividad: "Movilidad + Core Ligero", icono: Dumbbell, tipo: "gym" },
                { hora: "9:00-12:55", actividad: "Ventana Flexible (Aptitud/Programación)", icono: Coffee, tipo: "flexible" },
                { hora: "12:55-20:10", actividad: "CEPRE", icono: BookOpen, tipo: "estudio" },
                { hora: "18:30-20:30", actividad: "TOEFL Preparación", icono: BookOpen, tipo: "estudio" },
                { hora: "20:30-21:30", actividad: "Repaso TOEFL", icono: Target, tipo: "repaso" }
            ],
            ejercicios: [
                { ejercicio: "Estiramientos matutinos", sets: "20 min", notas: "⬆️ Yoga flow o movilidad profunda" },
                { ejercicio: "Plancha", sets: "3x40s", notas: "Core ligero" },
                { ejercicio: "Hollow body", sets: "3x30s", notas: "Mantener tensión" },
                { ejercicio: "Side plank", sets: "3x30s c/lado", notas: "Estabilidad lateral" }
            ]
        },
        {
            dia: "Viernes",
            fecha: "Enero - Febrero",
            energia: "media",
            horarioGym: "5:00 - 6:20",
            tipoGym: "Full Body + Skills",
            bloquesPrincipales: [
                { hora: "5:00-6:20", actividad: "Gym: Full Body + Parkour Skills", icono: Dumbbell, tipo: "gym" },
                { hora: "9:00-12:55", actividad: "Ventana Flexible (Repaso/Flask)", icono: Code, tipo: "flexible" },
                { hora: "12:55-20:10", actividad: "CEPRE", icono: BookOpen, tipo: "estudio" },
                { hora: "20:40-21:30", actividad: "Repaso Semanal", icono: Target, tipo: "repaso" }
            ],
            ejercicios: [
                { ejercicio: "Movilidad dinámica + saltos", sets: "5 min", notas: "Prep completo" },
                { ejercicio: "Press de banca", sets: "3x12", peso: "25-40kg", notas: "⬆️ +2 reps - día ligero" },
                { ejercicio: "Flexiones explosivas", sets: "3x10", notas: "🆕 Pliométrico (clap)" },
                { ejercicio: "Jalón dorsal", sets: "3x12", peso: "Moderado", notas: "⬆️ +2 reps" },
                { ejercicio: "Burpees con pull-up", sets: "3x8", notas: "⬆️ Combinado" },
                { ejercicio: "Handstand contra pared", sets: "5x30-45s", notas: "⬆️ +15s" },
                { ejercicio: "Handstand shoulder taps", sets: "3x10", notas: "🆕 Más control" },
                { ejercicio: "Tuck front lever", sets: "5x15-20s", notas: "⬆️ +1 serie y +5s" },
                { ejercicio: "Elevación piernas rectas", sets: "4x12", notas: "⬆️ Piernas rectas" },
                { ejercicio: "Windshield wipers", sets: "3x8", notas: "🆕 Core rotacional" }
            ]
        },
        {
            dia: "Sábado",
            fecha: "Enero - Febrero",
            energia: "alta",
            horarioGym: "7:00 - 8:30 + 16:00-17:00 (Opcional)",
            tipoGym: "Calistenia + Parkour",
            bloquesPrincipales: [
                { hora: "7:00-8:30", actividad: "Calistenia + Parkour", icono: Dumbbell, tipo: "gym" },
                { hora: "9:00-11:00", actividad: "TOEFL Preparación", icono: BookOpen, tipo: "estudio" },
                { hora: "13:00-16:00", actividad: "Bloque UNI Profundo (Matemática + Ciencias)", icono: Target, tipo: "estudio" },
                { hora: "16:00-17:00", actividad: "Calistenia Adicional (Opcional)", icono: TrendingUp, tipo: "gym" },
                { hora: "17:00-18:00", actividad: "Programación Proyecto", icono: Code, tipo: "flexible" },
                { hora: "18:00-22:00", actividad: "Ocio + Familia", icono: Coffee, tipo: "descanso" }
            ],
            ejercicios: [
                { ejercicio: "Calentamiento + parkour flow", sets: "10 min", notas: "Movilidad + cuadrupedia" },
                { ejercicio: "Saltos de precisión", sets: "25 min", notas: "⬆️ Distancias mayores" },
                { ejercicio: "Kong vault", sets: "15 rep", notas: "⬆️ +5 reps más fluido" },
                { ejercicio: "Speed/Lazy vault", sets: "12 rep c/u", notas: "⬆️ +2 reps" },
                { ejercicio: "Wall runs + cat leaps", sets: "20 intentos", notas: "⬆️ Más alto" },
                { ejercicio: "--- OPCIONAL 16:00-17:00 ---", sets: "", notas: "Si hay energía" },
                { ejercicio: "Pull-ups estrictas", sets: "6x8-12", notas: "⬆️ +1 serie" },
                { ejercicio: "Muscle-up negativas", sets: "5x5", notas: "⬆️ +2 reps, 5s bajada" },
                { ejercicio: "Dips con peso", sets: "5x12-15", notas: "⬆️ Añadir dificultad" },
                { ejercicio: "L-sit to V-sit", sets: "5x20s", notas: "⬆️ Transición dinámica" },
                { ejercicio: "Tuck planche lean", sets: "4x15s", notas: "🆕 Progresión planche" },
                { ejercicio: "Front lever progression", sets: "4x10s", notas: "⬆️ Tuck to one leg" },
                { ejercicio: "Hollow to arch rocks", sets: "3x20", notas: "🆕 Core dinámico" },
                { ejercicio: "Precision landings", sets: "20 rep", notas: "Silenciosos desde altura" }
            ]
        },
        {
            dia: "Domingo",
            fecha: "Enero - Febrero",
            energia: "descanso",
            horarioGym: "8:00 - 9:00 (Opcional)",
            tipoGym: "Recuperación",
            bloquesPrincipales: [
                { hora: "8:00-9:00", actividad: "Actividad Ligera (Caminata/Yoga)", icono: Moon, tipo: "descanso" },
                { hora: "9:00-12:00", actividad: "Bloque Flexible (Flashcards/Programación/Hobbies)", icono: Coffee, tipo: "flexible" },
                { hora: "12:00-18:00", actividad: "Descanso Genuino + Familia", icono: Coffee, tipo: "descanso" },
                { hora: "18:00-21:00", actividad: "Preparación Semana + Simulacro", icono: Target, tipo: "repaso" }
            ],
            ejercicios: [
                { ejercicio: "Caminata", sets: "30 min", notas: "Opcional, aire libre" },
                { ejercicio: "Estiramientos", sets: "20 min", notas: "Profundos, recuperación" },
                { ejercicio: "Yoga/Movilidad", sets: "30 min", notas: "Según energía" }
            ]
        }
    ];

    const toggleDia = (index) => {
        setDiaExpandido(diaExpandido === index ? null : index);
    };

    const getColorEnergia = (energia) => {
        switch(energia) {
            case 'alta': return 'from-red-500 to-orange-500';
            case 'media': return 'from-yellow-500 to-orange-400';
            case 'baja': return 'from-blue-400 to-cyan-500';
            case 'descanso': return 'from-purple-400 to-pink-500';
            default: return 'from-gray-400 to-gray-600';
        }
    };

    const getColorTipo = (tipo) => {
        switch(tipo) {
            case 'gym': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
            case 'estudio': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
            case 'repaso': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
            case 'flexible': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
            case 'descanso': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
            default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${modoOscuro ? 'dark bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'}`}>
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-lg border-b-4 border-indigo-500 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl">
                                <Calendar className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Rutina Semanal</h1>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Enero - Febrero 2025 | Pre-CEPRE UNI</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setModoOscuro(!modoOscuro)}
                            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                        >
                            {modoOscuro ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-indigo-600" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Cards */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border-l-4 border-red-500">
                        <div className="flex items-center gap-3">
                            <Dumbbell className="w-8 h-8 text-red-500" />
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Entrenamiento</p>
                                <p className="text-xl font-bold text-gray-800 dark:text-white">~7-8h/semana</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border-l-4 border-blue-500">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-blue-500" />
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Estudio UNI</p>
                                <p className="text-xl font-bold text-gray-800 dark:text-white">~40h/semana</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border-l-4 border-green-500">
                        <div className="flex items-center gap-3">
                            <Target className="w-8 h-8 text-green-500" />
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Exámenes CEPRE</p>
                                <p className="text-xl font-bold text-gray-800 dark:text-white">1 Feb / 1 Mar</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alert de progresión */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-300 dark:border-orange-700 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Progresión Semana 3 Activa</p>
                            <p className="text-sm text-orange-800 dark:text-orange-200">Todos los ejercicios incluyen incrementos progresivos. ⬆️ = Aumentar peso/reps/dificultad | 🆕 = Nuevo ejercicio</p>
                        </div>
                    </div>
                </div>

                {/* Días de la semana */}
                <div className="space-y-4">
                    {rutinaSemanal.map((dia, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Header del día */}
                            <div
                                onClick={() => toggleDia(index)}
                                className={`cursor-pointer bg-gradient-to-r ${getColorEnergia(dia.energia)} p-6 text-white`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold">{dia.dia}</h2>
                                            <p className="text-sm opacity-90">{dia.tipoGym}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right hidden md:block">
                                            <p className="text-sm opacity-90">Horario Gym</p>
                                            <p className="font-semibold">{dia.horarioGym}</p>
                                        </div>
                                        {diaExpandido === index ? (
                                            <ChevronUp className="w-6 h-6" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Contenido expandible */}
                            {diaExpandido === index && (
                                <div className="p-6 space-y-6">
                                    {/* Bloques principales */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-indigo-500" />
                                            Bloques del Día
                                        </h3>
                                        <div className="space-y-3">
                                            {dia.bloquesPrincipales.map((bloque, idx) => {
                                                const IconoBloque = bloque.icono;
                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`${getColorTipo(bloque.tipo)} rounded-xl p-4 flex items-center gap-3 transition-all hover:scale-[1.02]`}
                                                    >
                                                        <IconoBloque className="w-5 h-5 flex-shrink-0" />
                                                        <div className="flex-1">
                                                            <p className="font-semibold">{bloque.actividad}</p>
                                                            <p className="text-sm opacity-75">{bloque.hora}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Ejercicios */}
                                    {dia.ejercicios && dia.ejercicios.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                <Dumbbell className="w-5 h-5 text-red-500" />
                                                Rutina de Ejercicios
                                            </h3>
                                            <div className="space-y-3">
                                                {dia.ejercicios.map((ejercicio, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                                                    >
                                                        <div className="flex items-start justify-between gap-4">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    {ejercicio.notas?.includes('🆕') && (
                                                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                      NUEVOa
                                    </span>
                                                                    )}
                                                                    {ejercicio.notas?.includes('⬆️') && (
                                                                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                      PROGRESIÓN
                                    </span>
                                                                    )}
                                                                    <h4 className="font-semibold text-gray-800 dark:text-white">
                                                                        {ejercicio.ejercicio}
                                                                    </h4>
                                                                </div>
                                                                <div className="flex flex-wrap gap-3 text-sm">
                                  <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                                    {ejercicio.sets}
                                  </span>
                                                                    {ejercicio.peso && (
                                                                        <span className="text-red-600 dark:text-red-400 font-medium">
                                      {ejercicio.peso}
                                    </span>
                                                                    )}
                                                                </div>
                                                                {ejercicio.notas && (
                                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                                        {ejercicio.notas}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer con tips */}
                <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold mb-3">Reglas de Oro</h3>
                            <ul className="space-y-2 text-sm">
                                <li>✓ Dormir 7-8h siempre (no negociable)</li>
                                <li>✓ Máximo 3 bloques cognitivos fuertes al día</li>
                                <li>✓ Repaso diario &gt; Maratones de estudio</li>
                                <li>✓ Flexibilidad &gt; Perfección</li>
                                <li>✓ Descanso real los domingos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Ajustes pre-examen */}
                <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-6">
                    <h3 className="font-bold text-yellow-900 dark:text-yellow-100 text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Ajustes Pre-Examen
                    </h3>
                    <div className="space-y-3 text-sm text-yellow-800 dark:text-yellow-200">
                        <div className="bg-white dark:bg-yellow-900/30 rounded-lg p-3">
                            <p className="font-semibold mb-1">Semana 27-31 Enero (Pre 1/feb):</p>
                            <ul className="ml-4 space-y-1">
                                <li>• Gym: Reducir volumen 20%</li>
                                <li>• Aumentar simulacros UNI (3x semana)</li>
                                <li>• Programación: Máximo 15 min/día</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-yellow-900/30 rounded-lg p-3">
                            <p className="font-semibold mb-1">Semana 24-28 Febrero (Pre 1/mar):</p>
                            <ul className="ml-4 space-y-1">
                                <li>• Gym: Solo L/X/S (30-40 min mantenimiento)</li>
                                <li>• Simulacros completos 4x semana</li>
                                <li>• Suspender programación temporalmente</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
                <p className="text-sm">Diseñado para sostenibilidad, no sobrecarga 💪📚</p>
                <p className="text-xs mt-2">Constancia &gt; Intensidad</p>
            </div>
        </div>
    );
};

export default RutinaSemanal;