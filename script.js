const mainApp = document.getElementById("main-app")
const videoFondo = document.getElementById("video-fondo");
const videoPadre = videoFondo.parentElement;
const temas = ["./src/video1.mp4", "./src/video2.mp4", "./src/video3.mp4"];
const menuData = [
    { 
        categoria: "configuración",
        img: "./src/01 Settings.png",
        items:[
            {
                titulo: "Tema azul"
            },
            {
                titulo: "Tema rojo"
            },
            {
                titulo: "Tema negro"
            }
        ]
    },
    {
        categoria: "Contenido",
        img: "./src/02 Photo.png",
        items:[
            {
                titulo: "Sesión 1",
                fecha: "22/08/2025",
                texto: "En la sesión 1 me salieron los resultados de estilos de aprendizaje y la verdad no me sorprendió mucho que ganara el Reflexivo (16 puntos). Siempre me he sentido así: entro en un ciclo constante de autorreflexión antes de aprender cualquier cosa. Es tal cual como hemos venido trabajando este portafolio: primero analizo la lógica y luego ahí sí tiro código. Al ver el micro currículo, supe de inmediato que esta clase sería un acercamiento para desarrollar mejores habilidades blandas. Y pensándolo bien, me parece necesario, porque en esta carrera uno a veces se enfoca mucho en lo técnico y se olvida que saber comunicarse y entenderse con los demás es igual de importante para que los proyectos funcionen.",
                imagen: "./imagenes/sesion1.jpeg"
            },
            {
                titulo: "Sesión 2",
                fecha: "29/08/2025",
                texto: "La verdad no había interactuado con muchos espacios de la universidad. Tuve la oportunidad de echarle un vistazo a Bienestar y me pareció clave conocerlo, ya que es el sitio donde se gestionan muchas cosas internas y apoyos que uno a veces desaprovecha por no saber; también aprovechamos para conformar los grupos de trabajo. Me uní con compañeros con los que ya había interactuado las primeras semanas (Jhoel, Katherin, Laura, David y Nicolás), y aunque al principio coordinarnos fue un reto, fue el primer paso para empezar a trabajar juntos. Ya en grupo, nos pusimos a leer el Acuerdo 009 (Reglamento Estudiantil). Analizamos un caso de excelencia académica y nos dimos cuenta de que el reglamento es súper minucioso, me quedó de lección que el reglamento tiene mucha 'letra pequeña' y es mejor tener claras las reglas del juego desde el primer semestre para no perder oportunidades o embarrarla más adelante por puro desconocimiento.",
                imagen: "./imagenes/sesion2.jpeg"
            },
            {
                titulo: "Sesión 3",
                fecha: "05/09/2025",
                texto: "Esta sesión fue totalmente práctica y, honestamente, muy divertida. Nos dedicamos a la grabación del recorrido por la universidad y fue el momento donde realmente se rompió el hielo como grupo. Recuerdo esa sensación de las primeras semanas: la universidad se sentía como un entorno 'desconocido' y gigantesco por explorar. Aunque teníamos un guion, salieron muchísimos 'bloopers' porque se nos olvidaban los diálogos o nos ganaba la risa, lo que hizo que la dinámica dejara de ser una simple tarea y se convirtiera en un espacio de integración. Aprendí que, a veces, salirse de la rigidez académica es necesario para generar confianza en un equipo de trabajo recién formado.",
                imagen: "./imagenes/sesion3.jpeg"
            },
            {
                titulo: "Sesión 4",
                fecha: "12/09/2025",
                texto: "Para esta sesión presentamos el producto final. Debo destacar el trabajo de edición de mi compañero David, quien logró compilar todo nuestro caos creativo en un video muy bien producido y con excelente calidad. Más allá de la nota, siento que esta actividad fue vital para nuestra adaptación. No solo nos sirvió para ir viendo los primeros acercamientos a trabajos en grupo universitarios, sino que también nos dio la oportunidad de socializar con los otros grupos y ver sus perspectivas del campus. Fue la conclusión perfecta para la etapa de inducción, apropiarnos del espacio y de nuestra comunidad universitaria.",
                imagen: "./imagenes/sesion4.jpeg"
            },
            {
                titulo: "Sesión 5",
                fecha: "19/09/2025",
                texto: "Siendo totalmente sincero, esta clase fue una muy aburrida. No la dio la profesora habitual, sino un invitado que se dedicó a explicarnos las normas APA durante hora y media. La verdad, la dinámica fue bastante densa y monótona; estar sentado tanto tiempo escuchando reglas sobre márgenes, puntos y comas no es precisamente lo más emocionante del mundo. Sin embargo, viéndolo en retrospectiva, entiendo que es de esos temas que son necesarios, pero nadie quiere ver. Aunque la clase fue pesada, sé que dominar esto es lo que diferencia un trabajo de colegio de uno profesional.",
                imagen: "./imagenes/sesion5.jpeg"
            },
            {
                titulo: "Sesión 6",
                fecha: "26/09/2025",
                texto: "Iniciamos la sesión analizando la película 'La Red Social'. Participé activamente porque vi reflejada una realidad importante: Mark Zuckerberg no solo era un genio programando; tenía conocimientos de psicología y visión de producto que fueron claves para el éxito de Facebook. Esto me hizo caer en cuenta de que un desarrollador debe ser una persona íntegra; no basta con tener las habilidades técnicas, se necesitan habilidades cotidianas y sociales para transformar una buena línea de código en una gran idea. Posteriormente, realizamos la actividad del 'Disco Forum'. Elegí la canción 'Who Can It Be Now' de Men at Work. La escogí porque para mí, la música ochentera es el detonante de mi estado de “focus”. Cuando estoy trabajando en proyectos complejos y necesito concentrarme al máximo, esta canción me transporta a esa época y me ayuda a fluir con el trabajo.",
                imagen: "./imagenes/sesion6.jpeg"
            },
            {
                titulo: "Sesión 7",
                fecha: "03/10/2025",
                texto: "En esta sesión abordamos el análisis de nuestra cotidianidad. En concreto, trabajamos con una plantilla de Excel para mapear nuestra semana clasificando el tiempo en bloques (fijos, vitales y estratégicos). Al analizar mi rutina, descubrí que soy bastante consistente, pero mi margen de tiempo libre es muy reducido. Básicamente, mis únicos 'huecos' reales son la hora del almuerzo y dos horas en la noche; el resto del tiempo lo dedico enteramente a materias de la universidad o a proyectos propios que me apasionan. Verlo gráficamente en la tabla me sirvió para entender por qué a veces siento que el día no me alcanza.",
                imagen: "./imagenes/sesion7.jpeg"
            },
            {
                titulo: "Sesión 8",
                fecha: "10/10/2025",
                texto: "No pude asistir a esta sesión debido a un viaje familiar programado con anterioridad. Sin embargo, esta situación me llevó a una reflexión personal valiosa y es que, la vida cotidiana y la académica a veces entran en conflicto, y el desafío está en encontrar la forma de que ambas partes funcionen sin descuidar ninguno. En esta clase se asignaron las herramientas de gestión del tiempo (a mi grupo le correspondió la Metodología Kanban). Aunque no estuve presencialmente, mi compromiso con el equipo se mantuvo, ya que me encargué de enviar toda mi parte de la actividad a mis compañeros a tiempo para que ellos pudieran avanzar. Aprendí que la responsabilidad no es solo 'estar', sino garantizar que tu ausencia no afecte el trabajo del grupo.",
                imagen: "./imagenes/sesion8.jpeg"
            },
            {
                titulo: "Sesión 9",
                fecha: "17/10/2025",
                texto: "Nos dedicamos a analizar las técnicas de estudio que hemos usado a lo largo de nuestra trayectoria escolar. Fue interesante hacer esa retrospectiva y darse cuenta de que muchas veces estudiamos 'en automático' sin saber si realmente estamos aprendiendo. Esto es importante reconocerlo en entornos universitarios ya que no puedes ir por ahí como si nada sin tener una forma clara de estudiar y cumplir los objetivos que se te presenten a lo largo del semestre tanto a corto como a largo plazo.",
                imagen: "./imagenes/sesion9.jpeg"
            },
            {
                titulo: "Sesión 10",
                fecha: "24/10/2025",
                texto: "En esta sesión con nuestro grupo realizamos la exposición sobre Kanban. La verdad me sentí muy cómodo con el tema porque no era nuevo para mí; ya había usado tableros así en el colegio para proyectos de desarrollo. Siento que no es 'relleno', realmente es una metodología muy útil, sobre todo si uno la combina con Scrum. Para un desarrollador, entender cómo moverse en este entorno ágil es clave para no estrellarse en el mundo laboral. Ese mismo día aprovechamos para ir a ver las muestras tecnológicas de los compañeros de otras carreras. Estuvo chévere para despejar un poco la mente, salir del salón y ver en qué andan los demás grupos de la universidad.",
                imagen: "./imagenes/sesion10.jpeg"
            },
            {
                titulo: "Sesión 11",
                fecha: "31/10/2025",
                texto: "En esta clase terminaron de exponer los demás compañeros sobre gestión del tiempo. Aunque yo hablé de Kanban, tengo que admitir que en mi día a día actual Pomodoro es la que manda; es la técnica que uso cuando me tengo que sentar a estudiar serio y necesito un mejor nivel de concentración. También nos introdujeron al caso de Hershey's. Me pareció interesante ver cómo una empresa de ese tamaño casi se va a la quiebra solo por un problema de comunicación entre áreas al implementar un software. Nos sirvió de introducción para el debate que haríamos después. En conjunto a estas actividades, paralelamente estuve haciendo la actividad de la semana ideal, Aunque la asignaron antes, esta actividad la vine entregando el 8 de noviembre. Me propuse metas reales (aprender Tkinter y Matplotlib) aplicando Pomodoro y el método Feynman. La verdad me sirvió mucho, logré sacar los proyectos de código y comprobé que organizarse sí da buenos resultados.",
                imagen: "./imagenes/sesion11.jpeg"
            },
            {
                titulo: "Sesión 12",
                fecha: "07/11/2025",
                texto: "En esta sesión tuvimos una intervención por parte de bienestar, en la cual tuvimos una actividad muy dinámica acerca de los tipos de comunicación en esta carrera sobre todo al hacer proyectos muy técnicos, la habilidad de saber expresar ideas de una buena forma ayuda demasiado, hicimos una actividad tipo actuación en la cual teníamos que interpretar a una familia en donde se representaba una mala comunicación en ella, fue muy chistoso ver a mi compañero maicol con una peluca y la verdad la actividad si me ayudo a identificar esas veces que pensamos, “¿por qué no me entienden en este grupo?”, y es que a veces no pensamos como le está llegando el mensaje al receptor lo cual puede cambiar de manera drástica el mensaje original.",
                imagen: "./imagenes/sesion12.jpeg"
            },
            {
                titulo: "Sesión 13",
                fecha: "14/11/2025",
                texto: "En esta sesión se llevó a cabo la actividad del debate, fue muy interactiva y me gustó mucho el hecho de defender una postura, por nuestra parte estábamos defendiendo el lado de la junta directiva, dimos sólidos argumentos al equipo de desarrollo como tanto al de pruebas de calidad de cómo se omitieron demasiadas elementos importantes en la fase de desarrollo lo que llevo al desconocimiento de la junta directiva para tomar decisiones acorde a la situación, es interesante cuando uno se pone en los zapatos del otro ya que como desarrolladores siempre va a existir un cliente con sus necesidades y requerimientos que tendremos que seguir al pie de la letra, algunas veces generando problemas como discusiones internas. Al final del día lo más importante es tener una buena comunicación cliente-desarrollador para poder llegar a entregar un producto satisfactorio.",
                imagen: "./imagenes/sesion13.jpeg"
            },
            {
                titulo: "Sesión 14",
                fecha: "21/11/2025",
                texto: "Como todo en la vida tiene su final y este curso no es la excepción, en nuestra última sesión de clases ya se notó mucho más el transcurso del semestre prácticamente un salón que comenzó lleno de más o menos 50 personas, lleno de ruido, a un salón al que ya estaban asistiendo no más de 20 estudiantes, como última actividad realizamos un trabajo en grupo en el que con el apoyo de la IA respondimos ciertas preguntas como nuestras fortalezas y desafíos que podríamos enfrentar en el siguiente semestre, al apoyarnos con la IA esta nos dio un plan de acción para lograr estos objetivos en base a todo lo que ya habíamos aprendido en el curso, una actividad de cierre bastante interesante.",
                imagen: "./imagenes/sesion14.jpeg"
            }
        ]
    },
    {
        categoria: "Proyectos",
        img: "./src/03 Music.png",
        items:[
            {
                titulo: "Proyecto 1",
                fecha: "1/10/2025",
                texto: "Los datos siempre me han generado curiosidad, por lo que a lo largo del semestre estuve aprendiendo un poco de las bases de la ciencia de datos. Aprendi los conceptos basicos y me lanze a intentar crear algo por mi cuenta, utilizando un dataset de dominio publico con los homicidios en diferentes regiones de colombia, logre crear un analisis exploratorio de datos utilizando pandas y matplotlib en python. Fue un proyecto sencillo pero que me ayudo a entender mejor como trabajar con datos y visualizar informacion de manera efectiva.",
                imagen: "./imagenes/proyecto1.png"
            },
            {
                titulo: "Proyecto 2",
                fecha: "17/11/2025",
                texto:"Para mi siguiente proyecto personal aproveche los conceptos aprendidos en la clase de programacion imperativa, y desarrolle un programa con interfaz grafica que me iba a calcular el promedio de mis notas en la universidad. Utilizando la libreria Tkinter en python, cree una aplicacion sencilla donde podia ingresar tanto mis notas como su respectivo porcentaje y el programa me devolvia el promedio ponderado. Este proyecto me ayudo a reforzar mis habilidades de programacion y a entender mejor como crear interfaces de usuario basicas.",
                imagen: "./imagenes/proyecto2.png" 
            },
            {
                titulo: "Proyecto 3",
                fecha: "24/11/2025",
                texto: "Le quiero dejar un espacio en este portafolio ironicamente, a este mismo proyecto de portafolio digital que desarrolle. Admito que conozco el panorama de como desarrollar lo basico en web, sin embargo nunca se me habia ocurrido hacer algo tan completo como esto. Utilizando HTML, CSS, JavaScript y Tailwind logre crear un portafolio interactivo que muestra mis experiencias y proyectos a lo largo del semestre. Este proyecto me ayudo a mejorar mis habilidades en desarrollo web y a entender mejor como crear experiencias de usuario atractivas e interactivas.",
                imagen: "./imagenes/proyecto3.png"
            }
        ]
    },
    {
        categoria: "Resultados",
        img: "./src/04 Video.png",
        items:[
            {
                titulo: "Personal",
                fecha: "30/11/2025",
                texto: "Soy nicolas, un estudiante de primer semestre de desarrollo de software en la universidad del valle, con unas ganas enormes de aprender y crecer en este campo. Desde que me dieron los primeros acercamientos en el colegio no quise soltar esta area, de inmediato supe que era lo mio. Agradezco a la universidad y cursos como este permitirme fortalecer mis habilidades blandas al mismo tiempo que aprendo lo tecnico de la carrera, como tambien no olvidar a las grandes personas y lazos que he formado, personas que hacen que el dia a dia sea lo mejor. Estoy emocionado por lo que viene en este camino y listo para enfrentar los retos que se presenten.",
                imagen: "./imagenes/personal.jpeg"                
            }
        ]
    },
    {
        categoria: "Conclusiones",
        img: "./src/06 Game.png",
        items:[
            {
                titulo: "Reflexión",
                fecha: "01/12/2025",
                texto: "Realmente al hacer instrospección sobre este curso, me doy cuenta que es muy valioso tomando en cuenta que es nuestro primer semestre, nos permite salir un poco de todo lo tecnico y ver la parte humana y social de la carrera, algo que muchas veces se olvida en el dia a dia. Me llevo muchas cosas positivas de este curso, desde aprender a trabajar en equipo, gestionar mi tiempo y comunicarme efectivamente, hasta conocerme mejor a mi mismo y mis estilos de aprendizaje. Creo fuertemente en que estas habilidades blandas son igual de importantes que las técnicas en el desarrollo de software, ya que al final del dia trabajamos con personas y para personas. Estoy agradecido por esta experiencia y a la expectativa de las siguientes personas que me cruzare en el camino.",
                imagen: "./imagenes/conclusion.png"
            }
        ]
    },
    {
        categoria: "Equipo",
        img: "./src/07 Network.png",
        items:[
            {
                titulo: "Amigos",
                imagen: "./imagenes/equipo1.jpeg",
            },
            {
                titulo: "Compañeros",
                imagen: "./imagenes/equipo2.jpeg",
            },
            {
                titulo: "Manada",
                imagen: "./imagenes/equipo3.png",
            },
            {
                titulo: "Tribu",
                imagen: "./imagenes/equipo4.jpeg",
            }
        ]
    }
]

let sectionElement = document.createElement("section")
sectionElement.className = "flex flex-row items-center transition-transform duration-300 ease-out pl-20"

// Arrays para almacenar referencias a los elementos creados
let arrayItemContainers = []

menuData.forEach(section => {
    let verticalMenu = document.createElement("div")
    verticalMenu.className = "absolute my-5 top-24 flex flex-col items-start w-40 hidden transition-transform duration-200 ease-out"
    verticalMenu.classList.add("vertical-menu")

    const items = section.items || []
    items.forEach((itemObj) => {
        let pElement = document.createElement("p")
        pElement.textContent = itemObj.texto
        pElement.textContent = itemObj.fecha
        pElement.textContent = itemObj.titulo
        verticalMenu.appendChild(pElement)
    })

    let itemContainer = document.createElement("div")
    let h2Element = document.createElement("h2")
    let imgElement = document.createElement("img")

    imgElement.src = section.img
    h2Element.textContent = section.categoria
    imgElement.className = "w-16 h-12 lg:w-26 lg:h-20 object-contain mb-2";
    h2Element.className = "text-base text-zinc-400 font-newrodin transition-all duration-300"
    itemContainer.className = "relative flex flex-col items-center justify-center w-28 lg:w-48 mx-2 flex-shrink-0 transition-all duration-300";    // Construir la estructura del itemContainer
    itemContainer.appendChild(imgElement)
    itemContainer.appendChild(h2Element)
    itemContainer.appendChild(verticalMenu)
    sectionElement.appendChild(itemContainer)
    // Almacenar la referencia del itemContainer
    arrayItemContainers.push(itemContainer)
})

mainApp.appendChild(sectionElement)

// Variables para el control del menu
let activeIndex = 0
let activeIndexVerticalMenu = 0
// ancho predefinido para cada itemContainer (incluyendo margenes)
// para pc 208 y para movil 123
const ITEM_WIDTH = 208; 
// pixeles magicos pero funcionan
const ITEM_WIDTH_MOBILE = 123;
const VERTICAL_HEIGHT = 69.3;
render(activeIndex);

document.addEventListener("keydown", function UpdateClasses(event) {
    const currentCategoryItems = menuData[activeIndex].items || []
    const maxVerticalIndex = currentCategoryItems.length - 1;
    if (event.key === "ArrowRight" && activeIndex < arrayItemContainers.length - 1){
        activeIndex++
        activeIndexVerticalMenu = 0
    }
    else if (event.key === "ArrowLeft" && activeIndex > 0){
        activeIndex--
        activeIndexVerticalMenu = 0
    }
    else if (event.key === "ArrowUp" && activeIndexVerticalMenu > 0){
        activeIndexVerticalMenu--
    }
    else if (event.key === "ArrowDown" && activeIndexVerticalMenu < maxVerticalIndex){
        activeIndexVerticalMenu++
    }
    render(activeIndex);
})

function actualizarFondo(categoriaIndex, itemIndex){
    if(categoriaIndex === 0){
        const nuevoVideo = temas[itemIndex] || temas[0];
        const videoActual = videoFondo.getAttribute("src");
        if(videoActual !== nuevoVideo){
            videoFondo.src = nuevoVideo;
            videoPadre.load();
        }
}
}

function updateInfoPanel(data) {
    const infoPanel = document.getElementById("info-panel");
    const infoTitle = document.getElementById("info-title");
    const infoDate = document.getElementById("info-date");
    const infoText = document.getElementById("info-text");
    const infoImage = document.getElementById("info-image");

    const animOut = ["opacity-0", "translate-x-10"]; 
    const animIn = ["opacity-100", "translate-x-0"];

    if (data && typeof data === "object") {
        infoPanel.classList.remove("hidden", ...animOut);
        infoPanel.classList.add(...animIn);
        
        infoTitle.textContent = data.titulo || "Sin título";
        infoDate.textContent = data.fecha || "";
        infoText.textContent = data.texto || "";

        // logicas de las imagenes
        if (data.imagen) {
            // Caso A: SÍ tiene imagen
            infoImage.src = data.imagen;
            infoImage.classList.remove("hidden"); // La mostramos
        } else {
            // Caso B: NO tiene imagen
            infoImage.classList.add("hidden"); // La ocultamos
            infoImage.src = "";
        }

    } else {
        infoPanel.classList.add(...animOut);
        infoPanel.classList.remove(...animIn);
        setTimeout(() => infoPanel.classList.add("hidden"), 300);
    }
}

function updateVerticalMenu(verticalMenu, activeIndexVertical) {
    if (!verticalMenu) return;

    verticalMenu.classList.remove("hidden");
    const pElements = verticalMenu.querySelectorAll("p");
    
    pElements.forEach((p, vIndex) => {
        //(El seleccionado)
        if (vIndex === activeIndexVertical) {
            p.className = "text-white text-lg my-1 py-1 px-4 w-full h-15 bg-white/20 shadow-lg transition-all duration-300 scale-105 font-bold opacity-100";
        
        //(Los de abajo)
        } else if (vIndex > activeIndexVertical) {
            p.className = "text-zinc-500 text-lg my-1 py-1 px-4 w-full h-15 bg-black/20 transition-all duration-300 scale-95 opacity-50";
        
        //(Los de arriba - Invisibles)
        } else {
            p.className = "text-zinc-500 text-lg my-1 py-1 px-4 w-full h-15 bg-black/20 transition-all duration-300 scale-95 opacity-0";
        }
    });

    const gapVisual = 30;
    const desplazamientoVertical = activeIndexVertical * -VERTICAL_HEIGHT;
    verticalMenu.style.transform = `translateY(${desplazamientoVertical + gapVisual}px)`;
}

function render(activeIndex) {
    // Actualizar el video de fondo según la categoría y el ítem activo
    actualizarFondo(activeIndex, activeIndexVerticalMenu);

    arrayItemContainers.forEach((itemContainer, index) => {
        const isActive = index === activeIndex;
        const title = itemContainer.querySelector("h2");
        const verticalMenu = itemContainer.querySelector(".vertical-menu");

        if (isActive) {
            itemContainer.classList.add("scale-110", "opacity-100");
            itemContainer.classList.remove("opacity-60");
            title.classList.remove("opacity-0", "text-zinc-400");
            title.classList.add("opacity-100", "text-white", "font-bold");

            // lógica vertical a la función especialista
            if (verticalMenu) {
                updateVerticalMenu(verticalMenu, activeIndexVerticalMenu);
                const currentItemData = menuData[activeIndex].items ? menuData[activeIndex].items[activeIndexVerticalMenu] : null;
                updateInfoPanel(currentItemData);
            }

        } else {
            // estado inactivo de la barra horizontal
            itemContainer.classList.remove("scale-110", "opacity-100");
            itemContainer.classList.add("opacity-60");
            
            // Título invisible
            title.classList.remove("opacity-100", "text-white", "font-bold");
            title.classList.add("opacity-0");

            // Ocultar menú vertical
            if (verticalMenu) {
                verticalMenu.classList.add("hidden");
                verticalMenu.style.transform = `translateY(0px)`;
            }
        }
    });
    // no tocar esto a menos de que te quieras joder el layout responsive
    const ancho = window.innerWidth;
    if (ancho <= 640) {
        const desplazamiento = activeIndex * -ITEM_WIDTH_MOBILE;
        sectionElement.style.transform = `translateX(${desplazamiento}px)`;
        return;
    }
    const desplazamiento = activeIndex * -ITEM_WIDTH;
    sectionElement.style.transform = `translateX(${desplazamiento}px)`;
}

// Funcion para la actuazlizacion de fecha y hora
// Funcion secundaria que no se conecta con el menu
function actualizarFechaYHora() {
    // Obtener la fecha y hora actual
    const fechaYHora = new Date();
    // valores de horas, minutos, dia y mes con formato de dos digitos
    const horas = String(fechaYHora.getHours()).padStart(2, '0');
    const minutos = String(fechaYHora.getMinutes()).padStart(2, '0');
    const dia = String(fechaYHora.getDate()).padStart(2, '0');
    const mes = String(fechaYHora.getMonth() + 1).padStart(2, '0');
    // Actualizar el contenido del contenedor del DOM
    const fechaContainer = document.getElementById('container-fecha');
    if(fechaContainer) {
        fechaContainer.textContent = `${dia}/${mes} ${horas}:${minutos}`;
    }
}
setInterval(actualizarFechaYHora, 1000);
actualizarFechaYHora();
