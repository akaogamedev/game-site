import type { GameTranslation } from "../game";

export const esGames: Record<string, GameTranslation> = {
  "reverse-typing": {
    title: "REVERSE TYPING",
    catch: "A se convierte en Z y B en Y. Escribe en un alfabeto invertido.",
    genre: "Mecanografía",
    dialogue: [
      { speaker: "onaga", text: "¿Qué cambia respecto a un juego de mecanografía normal?" },
      {
        speaker: "akao",
        text: "Cada tecla se invierte en el alfabeto: A se convierte en Z, B en Y y así sucesivamente.",
      },
      { speaker: "onaga", text: "¿Pulso A y aparece Z? Esto me va a enredar la cabeza." },
      {
        speaker: "akao",
        text: "Ese es el reto. Escribe todas las palabras que puedas antes de que termine el tiempo y sube en la clasificación. Fue el primer título del proyecto de 100 juegos.",
      },
    ],
    features: [
      "Mecanografía de entrenamiento mental con el alfabeto invertido",
      "Guarda tu puntuación en una clasificación local de este dispositivo",
    ],
    controls: [
      { label: "Inicio", text: "Introduce un nombre y selecciona START" },
      { label: "Escribir", text: "Usa el teclado para introducir las letras mostradas" },
    ],
    notes: ["Todas las letras se evalúan al revés: A↔Z, B↔Y y así sucesivamente."],
  },
  "giri-strike": {
    title: "Giri Strike",
    catch: "Lanza tan cerca del borde de la zona como te atrevas.",
    genre: "Deportes",
    dialogue: [
      { speaker: "onaga", text: "¡Un juego de béisbol! ¿Cómo se juega?" },
      {
        speaker: "akao",
        text: "Solo tienes que lanzar un strike al límite. Cuanto más cerca quede del borde, más puntos ganas.",
      },
      { speaker: "onaga", text: "Entonces puedo lanzar siempre al mismo sitio, ¿no?" },
      {
        speaker: "akao",
        text: "No exactamente. Repetir la zona o el tipo de lanzamiento facilita el golpeo. Hay que alternar los seis lanzamientos.",
      },
    ],
    features: [
      "Seis tipos de lanzamiento",
      "Repetir zona o lanzamiento aumenta la probabilidad de que el bateador conecte",
      "Selección de estilo de control antes de empezar",
    ],
    controls: [
      { label: "Elegir lanzamiento", text: "Botones en pantalla o teclas 1 a 6" },
      { label: "Apuntar", text: "Arrastra el ratón alrededor de la zona de strike" },
      { label: "Lanzar", text: "Detén el medidor en el área blanca con PITCH, Space o Enter" },
      { label: "Volver al título", text: "R" },
    ],
  },
  "osyaberi-oekaki": {
    title: "Dibujo con una IA burlona",
    catch: "Haz que la IA adivine tu dibujo mientras critica cada trazo.",
    genre: "Dibujo",
    dialogue: [
      { speaker: "onaga", text: "¿Voy a dibujar junto a la IA?" },
      {
        speaker: "akao",
        text: "Superas la partida cuando la IA adivina tu dibujo. El problema es que no deja de burlarse mientras dibujas.",
      },
      { speaker: "onaga", text: "Esa IA tiene muy mal carácter." },
      {
        speaker: "akao",
        text: "Tómatelo como entrenamiento mental. Puedes estar convencido de que tu dibujo se entiende y descubrir que la IA ve algo totalmente distinto. Esa sorpresa también tiene su gracia.",
      },
    ],
    features: [
      "Consigue que la IA identifique tu dibujo",
      "Mantén la concentración a pesar de sus burlas",
    ],
    controls: [
      { label: "Dibujar", text: "Dibuja en el lienzo y elige colores abajo. Pulsa «完了» al terminar para que la IA responda; también responde al agotarse el tiempo." },
    ],
  },
  muon: {
    title: "MUON",
    catch: "Un juego de ritmo sin música de fondo, solo con efectos de sonido.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "¿Un juego de ritmo sin música?" },
      {
        speaker: "akao",
        text: "Exacto. Solo oirás efectos. Sigue la distancia entre las notas y el ritmo visual para acertar el momento.",
      },
      { speaker: "onaga", text: "Suena muy diferente. ¿Es difícil?" },
      {
        speaker: "akao",
        text: "Hay tres dificultades. La puntuación y el mejor combo se guardan en una clasificación local.",
      },
    ],
    features: [
      "Ritmo basado en efectos de sonido sin música de fondo",
      "Tres niveles de dificultad",
      "Clasificación local de puntuación y combo máximo",
    ],
    controls: [{ label: "Golpear notas", text: "D / F / J / K, de izquierda a derecha. Pulsa la tecla cuando la nota llegue a la línea de juicio frontal." }],
  },
  "pittari-hitofudegaki": {
    title: "¡Dibujo perfecto de un solo trazo!",
    catch: "¿Cuánto puedes acercarte al modelo sin levantar el trazo?",
    genre: "Dibujo",
    dialogue: [
      { speaker: "onaga", text: "¿Un juego de dibujo? Se me da bastante bien." },
      {
        speaker: "akao",
        text: "Elige un modelo y repásalo de un solo trazo. Cuanto más te acerques a figuras como la estrella o el pez, mayor será la puntuación.",
      },
      { speaker: "onaga", text: "¿La puntuación aparece nada más terminar?" },
      {
        speaker: "akao",
        text: "Sí, se calcula al soltar el dedo o el ratón. Cada figura tiene su propia clasificación en línea.",
      },
    ],
    features: [
      "Partidas rápidas de puntuación",
      "Clasificación en línea para cada figura",
    ],
    controls: [
      { label: "Un solo trazo", text: "Arrastra con ratón o pantalla táctil y suelta para puntuar" },
    ],
  },
  "kenpin-15puzzle": {
    title: "¡Inspección! Puzzle de 15",
    catch: "No lo resuelvas. Decide si se puede resolver.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "¿Tengo que resolver puzzles de 15?" },
      {
        speaker: "akao",
        text: "No hace falta. Inspecciona cada tablero y decide si tiene solución en este contrarreloj.",
      },
      { speaker: "onaga", text: "¿Y si no puedo saberlo con solo mirar?" },
      {
        speaker: "akao",
        text: "Puedes mover las fichas para comprobarlo. Acertar diez tableros seguidos completa la partida.",
      },
      { speaker: "onaga", text: "Veo modos EASY y CRAZY..." },
      {
        speaker: "akao",
        text: "EASY muestra tableros parecidos al estado final, pero también incluye tableros imposibles con fichas intercambiadas. CRAZY genera tableros completamente aleatorios.",
      },
    ],
    features: [
      "Decide si cada puzzle puede resolverse",
      "EASY muestra tableros parecidos al estado final, pero también incluye tableros imposibles con fichas intercambiadas.",
      "Tableros CRAZY completamente aleatorios",
      "Clasificación contrarreloj en línea",
    ],
    controls: [
      { label: "Seleccionar y mover", text: "Ratón o toque" },
      { label: "Listo para enviar", text: "Elige si crees que tiene solución" },
      { label: "Defectuoso", text: "Elige si crees que es imposible" },
    ],
    notes: ["Acierta diez tableros seguidos. El resultado muestra el tiempo y los errores."],
  },
  "mitomano-1mm": {
    title: "El milímetro de Mitoma",
    catch: "Deslízate antes de que el balón cruce la línea en este reto fugaz.",
    genre: "Deportes",
    dialogue: [
      { speaker: "onaga", text: "¿Qué clase de juego es El milímetro de Mitoma?" },
      {
        speaker: "akao",
        text: "Persigue el pase y deslízate para devolver el balón justo antes de que cruce la línea de gol. Cada intento dura unos segundos.",
      },
      { speaker: "onaga", text: "Cuanto más cerca de la línea, más puntos. ¿Y si la cruza?" },
      {
        speaker: "akao",
        text: "Es OUT, por supuesto. Apura al máximo y recrea aquel famoso milagro.",
      },
    ],
    features: [
      "Revisión VAR incluida",
      "Clasificación en línea según la distancia",
      "Cuanto menor sea la distancia restante, mayor será la puntuación",
    ],
    controls: [
      { label: "Correr", text: "Mantén Space" },
      { label: "Deslizarse", text: "Enter" },
    ],
  },
  "calculate-reversi": {
    title: "Reversi de cálculo",
    catch: "Resuelve operaciones para colocar fichas en un Reversi en tiempo real.",
    genre: "Tablero",
    dialogue: [
      { speaker: "onaga", text: "¿En qué se diferencia del Reversi normal?" },
      {
        speaker: "akao",
        text: "Elige una casilla válida, resuelve la operación y coloca la ficha. Toda la partida ocurre en tiempo real.",
      },
      { speaker: "onaga", text: "¿El rival espera a que termine de pensar?" },
      {
        speaker: "akao",
        text: "La CPU no espera. Si calculas rápido, puedes colocar varias fichas antes de su siguiente movimiento.",
      },
      { speaker: "onaga", text: "¿Y si ocupan la casilla mientras calculo?" },
      {
        speaker: "akao",
        text: "Puedes continuar si sigue siendo válida tras la jugada rival. Hay tres niveles de CPU, tres de cálculo y modo para dos jugadores en móvil.",
      },
    ],
    features: [
      "Reversi en tiempo real: cada respuesta correcta permite colocar una ficha",
      "El cálculo rápido permite varias jugadas antes de la CPU",
      "Tres niveles de CPU y tres de cálculo",
      "Modo de dos jugadores adaptado a móviles",
    ],
    controls: [
      { label: "Ratón/toque", text: "Elige casilla, usa el teclado numérico y confirma o borra" },
      { label: "Teclado", text: "Números para responder, Backspace para borrar y Enter para confirmar" },
      { label: "Un jugador", text: "Elige una casilla y resuelve la operación" },
      { label: "Dos jugadores", text: "Cada jugador usa su tablero y teclado numérico al mismo tiempo" },
    ],
    notes: ["Gana quien tenga más fichas cuando se llenan las 64 casillas o nadie puede mover."],
  },
  "nitro-tray-delivery": {
    title: "Entrega de nitro en bandeja",
    catch: "No la sacudas y no te retrases. Un contrarreloj 3D explosivo.",
    genre: "Acción",
    dialogue: [
      { speaker: "onaga", text: "¿Qué estoy entregando exactamente?" },
      {
        speaker: "akao",
        text: "Lleva una bandeja con nitroglicerina por una fábrica peligrosa y llega a la meta.",
      },
      { speaker: "onaga", text: "Ya suena mal. ¿Qué pasa si corro?" },
      {
        speaker: "akao",
        text: "Las aceleraciones, choques, viento y barras giratorias llenan el medidor. Si llega al máximo, la botella cae y explota.",
      },
      { speaker: "onaga", text: "Tengo que ir rápido sin moverla. ¿Cómo?" },
      {
        speaker: "akao",
        text: "Camina con cuidado para estabilizarla, calcula los obstáculos y elige ruta. Las puertas verdes restan cinco segundos.",
      },
    ],
    features: [
      "Contrarreloj 3D transportando nitroglicerina",
      "Caminar con cuidado reduce velocidad y balanceo",
      "Ventiladores, barras, carros, suelos resbaladizos y más",
      "Puertas de cinco segundos y clasificación en línea",
    ],
    controls: [
      { label: "Moverse", text: "WASD o flechas" },
      { label: "Caminar con cuidado", text: "Mantén Space o Shift al moverte" },
      { label: "Reiniciar", text: "R" },
      { label: "Volver al título", text: "Esc" },
    ],
    notes: ["La botella explota si el medidor se llena. Cada puerta verde resta cinco segundos una vez."],
  },
  "pittari-tetromino": {
    title: "Tetrominó perfecto",
    catch: "Construye exactamente la figura objetivo en diez pruebas contrarreloj.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "¿Es un puzzle normal de bloques que caen?" },
      {
        speaker: "akao",
        text: "Es un contrarreloj de diez pruebas donde debes construir exactamente la figura indicada con tetrominós.",
      },
      { speaker: "onaga", text: "No se trata solo de borrar líneas. ¿Qué pasa al final?" },
      {
        speaker: "akao",
        text: "En las últimas pruebas debes borrar líneas concretas mientras preparas la figura final. El orden importa.",
      },
      { speaker: "onaga", text: "Parece difícil. ¿Puedo practicar?" },
      {
        speaker: "akao",
        text: "Hay modos EASY y HARD. Pulsa R para repetir la prueba y registra tu tiempo en clasificaciones separadas.",
      },
    ],
    features: [
      "Diez pruebas para copiar exactamente la figura objetivo",
      "Las pruebas finales exigen planificar borrados de línea",
      "Modos EASY y HARD",
      "Clasificación de tiempo para cada modo",
    ],
    controls: [
      { label: "Mover", text: "Flechas izquierda/derecha o A/D" },
      { label: "Caída suave", text: "Flecha abajo o S" },
      { label: "Girar", text: "Z, X o flecha arriba" },
      { label: "Caída rápida", text: "Space" },
      { label: "Reserva", text: "C" },
      { label: "Repetir prueba", text: "R" },
    ],
  },
  doparhythm: {
    title: "DOPARHYTHM!",
    catch: "Golpea notas estimulantes y entra en DOPA TIME durante 120 segundos.",
    genre: "Ritmo",
    dialogue: [
      { speaker: "onaga", text: "¿Qué clase de juego de ritmo es DOPARHYTHM?" },
      {
        speaker: "akao",
        text: "Usa A, S, D y F para golpear notas de colores y aguanta 120 segundos.",
      },
      { speaker: "onaga", text: "También veo notas negras con una X. ¿Las golpeo?" },
      {
        speaker: "akao",
        text: "Evítalas en el modo normal. En DOPA usa J, K, L y punto y coma para rechazar las notas negativas.",
      },
      { speaker: "onaga", text: "¿Qué ocurre en DOPA TIME?" },
      {
        speaker: "akao",
        text: "Llena FEVER y aparecerán notas largas en todos los carriles. Pulsa todas las teclas rápidamente. Si DOPA llega a cero, pierdes.",
      },
    ],
    features: [
      "Compite por puntos durante 120 segundos",
      "Cuatro teclas en modo normal y ocho en DOPA",
      "Llena FEVER para entrar en DOPA TIME",
      "Clasificaciones EASY y HARD",
    ],
    controls: [
      { label: "Notas de color normales", text: "A, S, D, F de izquierda a derecha" },
      { label: "Notas negativas normales", text: "Evítalas sin pulsar" },
      { label: "Notas de color DOPA", text: "A, S, D, F de izquierda a derecha" },
      { label: "Notas negativas DOPA", text: "J, K, L, ; de izquierda a derecha" },
    ],
    notes: ["Los aciertos aumentan combo y FEVER; las notas de color recuperan DOPA. Los fallos y teclas incorrectas reducen DOPA. DOPA también disminuye con el tiempo; los fallos, pulsaciones vacías y teclas incorrectas lo reducen aún más. Durante DOPA TIME no disminuye."],
  },
  "castle-pazzle": {
    title: "CASTLE PAZZLE",
    catch: "Memoriza tres castillos y reconstruyelos en este contrarreloj 3D.",
    genre: "Puzle",
    dialogue: [
      { speaker: "onaga", text: "¿Qué clase de juego de construir castillos es CASTLE PAZZLE?" },
      {
        speaker: "akao",
        text: "En cada prueba memorizas un castillo y lo reconstruyes con las piezas. Hay tres pruebas consecutivas.",
      },
      { speaker: "onaga", text: "¿Puedo seguir mirando los modelos mientras construyo?" },
      {
        speaker: "akao",
        text: "Easy permite volver a ver el modelo, con una espera entre consultas. En Hard no puedes volver a verlo una vez iniciada la construcción.",
      },
      { speaker: "onaga", text: "Así que memorizar rápido importa tanto como construir rápido." },
      {
        speaker: "akao",
        text: "Exacto. El tiempo se detiene al completar los tres castillos y también puedes afrontar el modo Hard.",
      },
    ],
    features: [
      "Puzle 3D de memorizar y reconstruir tres castillos",
      "En Easy puedes consultar el modelo de nuevo, con una espera entre consultas",
      "En Hard no puedes volver a ver los modelos una vez iniciada la construcción",
      "Arrastra las piezas sobre el suelo u otras secciones del castillo",
      "Gira las piezas y la cámara para encontrar su posición y orientación",
      "Clasificaciones en línea separadas para los modos Easy y Hard",
    ],
    controls: [
      { label: "Colocar pieza", text: "Arrástrala al suelo o sobre el castillo" },
      { label: "Girar pieza", text: "Tecla R o rueda del ratón" },
      { label: "Giro inverso", text: "Tecla Q" },
      { label: "Girar cámara", text: "Arrastre derecho, arrastre izquierdo en un espacio vacío o flechas" },
    ],
    notes: ["Reproduce los tres castillos tal como se muestran y busca el mejor tiempo."],
  },
  "coffee-milk": {
    title: "Café con leche",
    catch: "Ajusta por el color tres cafés a la vez y sírvelos en 60 segundos.",
    genre: "Arcade",
    dialogue: [
      { speaker: "onaga", text: "¿De qué va Café con leche?" },
      {
        speaker: "akao",
        text: "Tienes 60 segundos para atender tres carriles a la vez, añadir leche y dejar cada café con la intensidad que pide el cliente.",
      },
      { speaker: "onaga", text: "¿No hay medidor y tengo que fiarme solo del color?" },
      {
        speaker: "akao",
        text: "Exacto. Mantén D, Espacio o K para verter leche y suelta la tecla cuando el color sea el adecuado. ¡Ve a por la máxima puntuación!",
      },
    ],
    features: [
      "Desafío de puntuación de 60 segundos en una cafetería",
      "Tres carriles que debes atender al mismo tiempo",
      "Ajuste de la intensidad del café usando únicamente su color",
      "Servicio rápido para conseguir la mayor puntuación posible",
    ],
    controls: [
      { label: "Carril izquierdo", text: "Mantén D para verter y suelta para servir" },
      { label: "Carril central", text: "Mantén Espacio para verter y suelta para servir" },
      { label: "Carril derecho", text: "Mantén K para verter y suelta para servir" },
    ],
  },
  "spellbreak-endless-curse": {
    title: "SPELLBREAK!",
    catch: "Detén el muro maldito que avanza en este rompebloques mágico sin fin.",
    genre: "Acción",
    dialogue: [
      { speaker: "onaga", text: "¿SPELLBREAK! es un rompebloques con magia?" },
      {
        speaker: "akao",
        text: "Devuelve la bola mágica, rompe bloques y usa el maná para mejorar cinco hechizos en este desafío infinito.",
      },
      { speaker: "onaga", text: "Entonces el muro maldito avanza con el tiempo." },
      {
        speaker: "akao",
        text: "Exacto. Mantén la racha, mejora tus hechizos y busca la máxima puntuación antes de que te alcance.",
      },
      { speaker: "onaga", text: "¿Cómo se usan los hechizos?" },
      {
        speaker: "akao",
        text: "No lanzas los hechizos manualmente. Cuando reúnes suficiente maná, eliges una mejora entre hasta tres cartas y el hechizo elegido se activa automáticamente al cumplir sus condiciones. Solo tienes que mantener la racha y acumular mejoras.",
      },
    ],
    features: [
      "Rompebloques mágico infinito con un muro maldito que avanza",
      "Rompe bloques, consigue maná y elige mejoras entre hasta tres cartas",
      "Cinco hechizos: explosión de fuego, relámpago en cadena, atadura de hielo, bola fantasma y rayo arcano",
      "Tras mejorar los hechizos 12 veces, la bola normal se divide en dos",
      "Mantén las rachas y las combinaciones mágicas para subir en la clasificación",
    ],
    controls: [
      { label: "Mover", text: "Ratón, flechas izquierda/derecha o A/D" },
      { label: "Iniciar/lanzar", text: "Espacio, Enter o clic izquierdo" },
      { label: "Cartas de hechizo", text: "Elige con flechas o WASD y confirma con Enter; también puedes hacer clic o usar 1, 2 y 3" },
      { label: "Pausa/reintento", text: "Esc para pausar y R para reintentar" },
    ],
  },
  "nazotoki-10s": {
    title: "Puzzle de 10s",
    catch: "Crea diez dieces para completar esta aventura de lógica y cálculo.",
    genre: "Puzzle",
    dialogue: [
      { speaker: "onaga", text: "¿Qué significa 10s en el título?" },
      {
        speaker: "akao",
        text: "Completa el juego creando diez dieces. Combina números limitados con operaciones básicas.",
      },
      { speaker: "onaga", text: "Parece fácil si solo hay que combinar números..." },
      {
        speaker: "akao",
        text: "Algunos problemas no permiten crear 10 a primera vista. Debes encontrar símbolos de operación ocultos en la pantalla.",
      },
      { speaker: "onaga", text: "¿Hay un tiempo objetivo?" },
      {
        speaker: "akao",
        text: "El objetivo son 20 minutos. ¿Podrás resolverlos todos a tiempo?",
      },
    ],
    features: [
      "Mezcla única de lógica y aritmética",
      "Controles táctiles sencillos",
      "Pistas y explicaciones completas",
      "Tiempo objetivo de 20 minutos",
    ],
  },
  "time-reversi": {
    title: "Time Reversi",
    catch: "Reversi en tiempo real con una jugada cada tres segundos.",
    genre: "Tablero",
    dialogue: [
      { speaker: "onaga", text: "En Reversi los jugadores se turnan, ¿verdad?" },
      {
        speaker: "akao",
        text: "Aquí no hay turnos. Cuando termina tu recarga de tres segundos, puedes colocar una ficha.",
      },
      { speaker: "onaga", text: "Entonces, ¿siempre conviene jugar rápido?" },
      {
        speaker: "akao",
        text: "Ese es el dilema. Mover ya o esperar al rival. El tiempo añade otra capa a la lectura del tablero.",
      },
      { speaker: "onaga", text: "¿Puedo jugar en solitario?" },
      {
        speaker: "akao",
        text: "Practica contra la CPU, reta a un amigo con una sala o encadena victorias contra rivales cada vez más fuertes en Supervivencia.",
      },
    ],
    features: [
      "Reversi en tiempo real con recarga de tres segundos",
      "CPU y partidas con amigos mediante ID de sala",
      "Supervivencia contra CPU cada vez más fuerte",
      "Habilidades como Piedra Libre que ignoran la recarga",
      "Repeticiones para revisar las partidas",
    ],
    notes: ["Una versión rápida y diferente de Reversi. Descarga gratuita con compras integradas y varios idiomas."],
  },
  "bachitto-pose": {
    "title": "Bachitto Pose!",
    "catch": "¡Encaja en el hueco de la pared o acaba en el agua!",
    "genre": "Acción",
    "dialogue": [
      {
        "speaker": "onaga",
        "text": "¿De verdad voy a caber ahí? ¡Cuanto más se acerca la pared, más me pongo nervioso!"
      },
      {
        "speaker": "akao",
        "text": "Atravesarla con la pose exacta es muy satisfactorio. Pero la siguiente pared cambia las opciones y te obliga a seguir atento."
      },
      {
        "speaker": "onaga",
        "text": "¡Dan ganas de presumir cuando sale bien! Pero un error y me voy al agua…"
      },
      {
        "speaker": "akao",
        "text": "Los aplausos y el chapuzón recuerdan a un concurso de televisión. Siempre quieres intentarlo otra vez para superar una pared más."
      }
    ],
    "features": [
      "Observa el hueco de la pared y elige la pose correcta entre cuatro opciones",
      "Las opciones cambian con cada pared y la velocidad aumenta al encadenar aciertos",
      "Una pose correcta permite pasar; un error te lanza hacia atrás al agua",
      "Redobles, aplausos y clasificación online de paredes superadas consecutivamente"
    ],
    "controls": [
      {
        "label": "Elegir pose",
        "text": "↑ / ← / ↓ / → o clic en una tarjeta inferior"
      },
      {
        "label": "Iniciar / Reintentar",
        "text": "Space / Enter o el botón en pantalla"
      },
      {
        "label": "Volver al título",
        "text": "Esc en la pantalla de resultados"
      },
      {
        "label": "Activar / Desactivar sonido",
        "text": "M o el botón de sonido superior derecho"
      }
    ],
    "notes": [
      "Elige la forma del hueco antes de que llegue la pared e intenta superar tu mejor racha.",
      "Recomendado para navegadores de ordenador. El juego está en japonés."
    ]
  },
  "tsukkomi-dojo": {
    "title": "Tsukkomi Dojo",
    "catch": "Tu compañero suelta el chiste; tú remátalo en el momento justo.",
    "genre": "Comedia",
    "dialogue": [
      {
        "speaker": "onaga",
        "text": "¿Tsukkomi Dojo? ¿Es un entrenamiento para el que da la réplica?"
      },
      {
        "speaker": "akao",
        "text": "Es un juego de manzai en el que respondes con tu propia voz a los chistes de tu compañero Masaru. Él hace de dependiente de una tienda de conveniencia con una atención un poco rara."
      },
      {
        "speaker": "onaga",
        "text": "¿Réplicas rápidas? ¡Eso es lo mío!"
      },
      {
        "speaker": "akao",
        "text": "Una IA juzga tu réplica, y eso decide cuánto se anima el público."
      },
      {
        "speaker": "onaga",
        "text": "¿Una IA hace de jurado? ¡Con mis réplicas, el público se va a partir de risa!"
      }
    ],
    "features": [
      "Un juego de manzai en el que das la réplica (tsukkomi) a los chistes de Masaru con tu propia voz",
      "Una IA juzga la precisión; señala lo absurdo con exactitud y añade un giro ingenioso para la máxima nota",
      "Si aciertas, la sala se ríe a carcajadas; si fallas, silencio total. Comedia de sketch en un escenario de teatro tradicional",
      "Tras los siete chistes, el jurado da una valoración final. Aspira al título «Mejor tsukkomi del país»"
    ],
    "controls": [
      {
        "label": "Jugar con la voz",
        "text": "Tras cada chiste, di tu réplica al micrófono. Abre el juego con «別タブで開く» (abrir en otra pestaña) en unityroom y permite el micrófono"
      },
      {
        "label": "Jugar con texto",
        "text": "Escribe la réplica en el cuadro que aparece tras cada chiste y pulsa Enter. El ritmo se mide desde que empiezas a escribir"
      },
      {
        "label": "Volver a jugar",
        "text": "«もう一度» o «タイトルへ» en la pantalla de resultados"
      }
    ],
    "notes": [
      "Unos 3 minutos por partida. Si no puedes hablar, también puedes escribir.",
      "Se usa una IA para juzgar las réplicas. El texto de tu réplica (o el texto reconocido, si usas la voz) se envía a un servidor de evaluación.",
      "Recomendado Chrome en ordenador. El juego está en japonés y el reconocimiento de voz solo admite japonés."
    ]
  },
};
