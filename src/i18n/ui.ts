export const languages = {
  va: "Valencià",
  es: "Castellano",
} as const;

export const defaultLang = "es";

export const ui = {
  va: {
    "nav.inicio": "Inici",
    "nav.sobre-mi": "Sobre Mi",
    "nav.colecciones": "Col·leccions",
    "nav.servicios": "Serveis",
    "nav.contacto": "Contacte",

    "col.title": "Obres",
    "col.filtro.todos": "Tots",
    "col.lede":
      "El registre de les falles, ninots i peces que ha firmat Dani al llarg dels anys: edició, lema, secció i premis de cadascuna.",
    "col.empty": "Encara no hi ha fitxes de falles carregades.",

    "falla.premios": "Premis",
    "falla.seccion": "Secció",
    "falla.casal": "Casal faller",
    "falla.volver": "Tornar a col·leccions",

    "footer.rights": "Tots els drets reservats.",
    "footer.contacto.mensaje": "Escriure un missatge",
    "footer.descripcion":
      "Taller d'art faller de Dani. De l'esbós a la cremà, cada peça es construïx per a cremar amb sentit.",

    // --- Home ---
    "home.hero.eyebrow": "Taller d'art faller",
    "home.hero.h1.l1": "Cada falla naix",
    "home.hero.h1.l2": "del boceto",
    "home.hero.h1.l3": "i mor en el",
    "home.hero.h1.ember": "foc",
    "home.hero.sub":
      "Dani dissenya i construeix falles, ninots i escultura efímera per a encàrrecs, casals i col·leccions particulars. Un any de taller, una nit de foc.",
    "home.hero.cta.encargar": "Encarregar una peça",
    "home.hero.cta.galeria": "Veure la galeria",

    "home.about.eyebrow": "L'artista",
    "home.about.title": "Onze mesos de banc de treball per una nit de foc.",
    "home.about.text":
      "Dani porta més d'una dècada esculpint ninots en suro blanc i cartó pedra, combinant la sàtira tradicional fallera amb formes i color contemporanis. Cada encàrrec comença amb una conversa i acaba, com mana la tradició, cremant en la cremà.",
    "home.about.cta": "Conèixer a Dani →",

    "home.process.eyebrow": "Com es fa una falla",
    "home.process.title": "Del paper al foc, en quatre fases",
    "home.process.step1.label": "Boceto",
    "home.process.step1.text":
      "Cada falla naix en paper: idea, crítica i proporció abans de tocar el suro.",
    "home.process.step2.label": "Escultura",
    "home.process.step2.text":
      "Suro blanc, cartó pedra i ferralla prenen volum al taller, peça a peça.",
    "home.process.step3.label": "Pintura",
    "home.process.step3.text":
      "Color, textura i acabat: el moment en què el ninot pren caràcter.",
    "home.process.step4.label": "Cremà",
    "home.process.step4.text":
      "La nit del foc. Allò que es va construir tot l'any crema en minuts, i torna a començar.",

    "home.gallery.eyebrow": "Treball recent",
    "home.gallery.title": "Algunes peces del taller",
    "home.gallery.cta": "Veure galeria completa →",
    "home.gallery.piece1.label": "Falla Gran Vía",
    "home.gallery.piece1.caption": "Falla gran · 2024",
    "home.gallery.piece2.label": "El rellotger",
    "home.gallery.piece2.caption": "Ninot individual · 2023",
    "home.gallery.piece3.label": "Casal infantil",
    "home.gallery.piece3.caption": "Falla infantil · 2024",

    "home.cta.title": "Tens una idea per a la teua falla?",
    "home.cta.text":
      "Conta-l'hi a Dani. Encàrrecs per a falles grans, infantils, ninots individuals i peces per a casals.",
    "home.cta.button": "Escriure al taller",
    "sobremi.title": "Sobre Dani",
    "sobremi.desc":
      "Coneix a Dani, artista faller i fundador de l'Atelier del Foc.",
    "sobremi.eyebrow": "L'artista",
    "sobremi.h1": "Dani",
    "sobremi.lede":
      "Escultor i pintor faller. Treballa el suro blanc, el cartó pedra i la ferralla amb la mateixa calma amb què altres treballen el marbre, sabent que al març tot això serà cendra.",

    "sobremi.bio.h2": "La sàtira com a ofici",
    "sobremi.bio.p1":
      "Dani va començar com a ajudant d'armadura al casal del barri, carregant ferralla i aprenent a llegir proporcions a ull. Amb els anys va passar al modelatge en suro blanc, després a la pintura, i va acabar firmant els seus propis ninots.",
    "sobremi.bio.p2":
      "Hui dirigeix l'Atelier del Foc, un taller petit on cada peça es pensa dues vegades: una perquè faça gràcia, i una altra perquè aguante tot l'any fins a la cremà. Li interessa la tradició fallera tant com l'escultura contemporània, i busca aqueix encreuament en cada encàrrec.",
    "sobremi.bio.p3":
      "Fora del taller, Dani col·labora fent tallers d'iniciació al modelatge en suro per a joves fallers que, com ell en el seu dia, comencen carregant ferralla.",

    "sobremi.materiales.eyebrow": "Materials habituals",
    "sobremi.materiales.1": "Suro blanc (poliestirè expandit)",
    "sobremi.materiales.2": "Cartó pedra",
    "sobremi.materiales.3": "Ferralla i fusta d'armadura",
    "sobremi.materiales.4": "Pintura plàstica i esmalt",
    "sobremi.materiales.5": "Fibra de vidre per a acabats",

    "sobremi.timeline.eyebrow": "Trajectòria",
    "sobremi.timeline.title": "Onze anys de banc de treball",
    "sobremi.hito1":
      "Primers passos al casal, ajudant a muntar armadures de ferralla.",
    "sobremi.hito2": "Primer ninot propi per a una falla infantil del barri.",
    "sobremi.hito3":
      "Primera falla gran firmada en solitari: menció de la Junta Local.",
    "sobremi.hito4":
      "Obri l'Atelier del Foc per a encàrrecs particulars i de casals.",

    "sobremi.cta.title": "Vols encarregar-li una peça a Dani?",
    "sobremi.cta.button": "Veure serveis i encàrrecs",
    "contacto.title": "Contacte",
    "contacto.desc":
      "Contacta amb l'Atelier del Foc per a encàrrecs, pressupostos o visites al taller.",
    "contacto.eyebrow": "Parlem",
    "contacto.h1": "Contacte",
    "contacto.lede":
      "Tens una idea per a la teua falla, un ninot en ment o vols visitar el taller? Escriu-li a Dani i et contesta en un parell de dies.",

    "contacto.form.nombre": "Nom",
    "contacto.form.email": "Correu electrònic",
    "contacto.form.tipo": "Tipus d'encàrrec",
    "contacto.form.tipo.fallaGrande": "Falla gran",
    "contacto.form.tipo.fallaInfantil": "Falla infantil",
    "contacto.form.tipo.ninot": "Ninot individual",
    "contacto.form.tipo.restauracion": "Restauració",
    "contacto.form.tipo.taller": "Taller d'iniciació",
    "contacto.form.tipo.otro": "Altre",
    "contacto.form.mensaje": "Conta-li a Dani la teua idea",
    "contacto.form.mensaje.placeholder":
      "Escala aproximada, termini, pressupost orientatiu, referències...",
    "contacto.form.enviar": "Enviar missatge",
    "contacto.form.nota":
      "Este formulari obri el teu gestor de correu. Si prefereixes, escriu directament a",

    "contacto.info.taller.eyebrow": "Taller",
    "contacto.info.taller.text": "l'Atelier del Foc",
    "contacto.info.taller.visitas": "Visites amb cita prèvia",
    "contacto.info.correo.eyebrow": "Correu",
    "contacto.info.plazos.eyebrow": "Terminis",
    "contacto.info.plazos.text":
      "Els encàrrecs de falla gran i infantil es reserven amb mesos d'antelació, sobretot de cara a març.",
    "serv.eyebrow": "Encàrrecs",
    "serv.title": "Serveis del taller",
    "serv.lede":
      "Cada encàrrec es tracta com una peça única: escala, pressupost i termini s'acorden abans de tocar el suro. Aquestes són les línies de treball habituals de l'Atelier del Foc.",

    "serv.item.1.title": "Falla gran",
    "serv.item.1.text":
      "Disseny i execució completa: esbós, escultura en suro blanc i ferralla, pintura i muntatge al carrer o casal.",
    "serv.item.1.tag": "A mida · diverses setmanes",

    "serv.item.2.title": "Falla infantil",
    "serv.item.2.text":
      "Peces pensades per a casals infantils: escala reduïda, colors vius i una història que es puga explicar als xiquets.",
    "serv.item.2.tag": "A mida · setmanes",

    "serv.item.3.title": "Ninot individual",
    "serv.item.3.text":
      "Figures soltes per a exposició, indult o regal. Ideal per a encàrrecs particulars o col·leccionisme faller.",
    "serv.item.3.tag": "Des d'una figura",

    "serv.item.4.title": "Restauració i repintat",
    "serv.item.4.text":
      "Recuperació de ninots antics o peces danyades: reforç d'armadura, resina i repintat d'acabats.",
    "serv.item.4.tag": "Segons l'estat de la peça",

    "serv.item.5.title": "Tallers d'iniciació",
    "serv.item.5.text":
      "Sessions per a casals i grups joves: fonaments de modelatge en suro blanc i ferralla.",
    "serv.item.5.tag": "Grups reduïts",

    "serv.proc.eyebrow": "Com funciona un encàrrec",
    "serv.proc.title": "De la primera conversa a l'entrega",

    "serv.proc.1.label": "Consulta",
    "serv.proc.1.text":
      "Explica-li a Dani la idea, l'escala i el termini. Primera valoració sense compromís.",

    "serv.proc.2.label": "Esbós",
    "serv.proc.2.text":
      "Proposta en paper: disseny, proporció i pressupost tancat abans de començar.",

    "serv.proc.3.label": "Taller",
    "serv.proc.3.text":
      "Escultura i pintura a l'Atelier del Foc, amb avanços fotogràfics del procés.",

    "serv.proc.4.label": "Entrega",
    "serv.proc.4.text":
      "Muntatge en la seua ubicació final, llesta per a la falla, el casal o l'exposició.",

    "serv.cta.title": "Explica-li a Dani la teua idea",
    "serv.cta.text":
      "Sense compromís: una primera conversa per a valorar escala, termini i pressupost.",
    "serv.cta.button": "Sol·licitar pressupost",
  },
  es: {
    "nav.inicio": "Inicio",
    "nav.sobre-mi": "Sobre Mí",
    "nav.colecciones": "Colecciones",
    "nav.servicios": "Servicios",
    "nav.contacto": "Contacto",

    "col.title": "Obras",
    "col.filtro.todos": "Todos",
    "col.lede":
      "El registro de las fallas, ninots y piezas que ha firmado Dani a lo largo de los años: edición, lema, sección y premios de cada una.",
    "col.empty": "Todavía no hay fichas de fallas cargadas.",

    "falla.premios": "Premios",
    "falla.seccion": "Sección",
    "falla.casal": "Casal faller",
    "falla.volver": "Volver a colecciones",

    "footer.rights": "Todos los derechos reservados.",
    "footer.contacto.mensaje": "Escribe un mensaje",
    "footer.descripcion":
      "Taller de arte fallero de Dani. Del boceto a la cremà, cada pieza se construye para arder con sentido.",

    // --- Home ---
    "home.hero.eyebrow": "Taller de arte fallero",
    "home.hero.h1.l1": "Cada falla nace",
    "home.hero.h1.l2": "del boceto",
    "home.hero.h1.l3": "y muere en el",
    "home.hero.h1.ember": "foc",
    "home.hero.sub":
      "Dani diseña y construye fallas, ninots y escultura efímera para comisiones, casals y colecciones particulares. Un año de taller, una noche de fuego.",
    "home.hero.cta.encargar": "Encargar una pieza",
    "home.hero.cta.galeria": "Ver la galería",

    "home.about.eyebrow": "El artista",
    "home.about.title":
      "Once meses de banco de trabajo por una noche de fuego.",
    "home.about.text":
      "Dani lleva más de una década esculpiendo ninots en corcho blanco y cartón piedra, combinando la sátira tradicional fallera con formas y color contemporáneos. Cada encargo empieza con una conversación y termina, como manda la tradición, ardiendo en la cremà.",
    "home.about.cta": "Conocer a Dani →",

    "home.process.eyebrow": "Cómo se hace una falla",
    "home.process.title": "Del papel al fuego, en cuatro fases",
    "home.process.step1.label": "Boceto",
    "home.process.step1.text":
      "Cada falla nace en papel: idea, crítica y proporción antes de tocar el corcho.",
    "home.process.step2.label": "Escultura",
    "home.process.step2.text":
      "Corcho blanco, cartón piedra y ferralla toman volumen en el taller, pieza a pieza.",
    "home.process.step3.label": "Pintura",
    "home.process.step3.text":
      "Color, textura y acabado: el momento en que el ninot cobra carácter.",
    "home.process.step4.label": "Cremà",
    "home.process.step4.text":
      "La noche del fuego. Lo que se construyó todo el año arde en minutos, y empieza de nuevo.",

    "home.gallery.eyebrow": "Trabajo reciente",
    "home.gallery.title": "Algunas piezas del taller",
    "home.gallery.cta": "Ver galería completa →",
    "home.gallery.piece1.label": "Falla Gran Vía",
    "home.gallery.piece1.caption": "Falla grande · 2024",
    "home.gallery.piece2.label": "El rellotger",
    "home.gallery.piece2.caption": "Ninot individual · 2023",
    "home.gallery.piece3.label": "Casal infantil",
    "home.gallery.piece3.caption": "Falla infantil · 2024",

    "home.cta.title": "¿Tienes una idea para tu falla?",
    "home.cta.text":
      "Cuéntasela a Dani. Encargos para fallas grandes, infantiles, ninots individuales y piezas para casals.",
    "home.cta.button": "Escribir al taller",
    "sobremi.title": "Sobre Dani",
    "sobremi.desc":
      "Conoce a Dani, artista fallero y fundador de l'Atelier del Foc.",
    "sobremi.eyebrow": "El artista",
    "sobremi.h1": "Dani",
    "sobremi.lede":
      "Escultor y pintor fallero. Trabaja el corcho blanco, el cartón piedra y la ferralla con la misma calma con la que otros trabajan el mármol, sabiendo que en marzo todo eso será ceniza.",

    "sobremi.bio.h2": "La sátira como oficio",
    "sobremi.bio.p1":
      "Dani empezó como ayudante de armazón en el casal del barrio, cargando ferralla y aprendiendo a leer proporciones a ojo. Con los años pasó al modelado en corcho blanco, después a la pintura, y terminó firmando sus propios ninots.",
    "sobremi.bio.p2":
      "Hoy dirige l'Atelier del Foc, un taller pequeño donde cada pieza se piensa dos veces: una para que haga gracia, y otra para que aguante todo el año hasta la cremà. Le interesa la tradición fallera tanto como la escultura contemporánea, y busca ese cruce en cada encargo.",
    "sobremi.bio.p3":
      "Fuera del taller, Dani colabora dando talleres de iniciación al modelado en corcho para jóvenes falleros que, como él en su día, empiezan cargando ferralla.",

    "sobremi.materiales.eyebrow": "Materiales habituales",
    "sobremi.materiales.1": "Corcho blanco (poliestireno expandido)",
    "sobremi.materiales.2": "Cartón piedra",
    "sobremi.materiales.3": "Ferralla y madera de armazón",
    "sobremi.materiales.4": "Pintura plástica y esmalte",
    "sobremi.materiales.5": "Fibra de vidrio para acabados",

    "sobremi.timeline.eyebrow": "Trayectoria",
    "sobremi.timeline.title": "Once años de banco de trabajo",
    "sobremi.hito1":
      "Primeros pasos en el casal, ayudando a montar armazones de ferralla.",
    "sobremi.hito2": "Primer ninot propio para una falla infantil del barrio.",
    "sobremi.hito3":
      "Primera falla grande firmada en solitario: mención de la Junta Local.",
    "sobremi.hito4":
      "Abre l\u2019Atelier del Foc para encargos particulares y de casals.",

    "sobremi.cta.title": "¿Quieres encargarle una pieza a Dani?",
    "sobremi.cta.button": "Ver servicios y encargos",
    "contacto.title": "Contacto",
    "contacto.desc":
      "Contacta con l'Atelier del Foc para encargos, presupuestos o visitas al taller.",
    "contacto.eyebrow": "Hablemos",
    "contacto.h1": "Contacto",
    "contacto.lede":
      "¿Tienes una idea para tu falla, un ninot en mente o quieres visitar el taller? Escribe a Dani y te contesta en un par de días.",

    "contacto.form.nombre": "Nombre",
    "contacto.form.email": "Correo electrónico",
    "contacto.form.tipo": "Tipo de encargo",
    "contacto.form.tipo.fallaGrande": "Falla grande",
    "contacto.form.tipo.fallaInfantil": "Falla infantil",
    "contacto.form.tipo.ninot": "Ninot individual",
    "contacto.form.tipo.restauracion": "Restauración",
    "contacto.form.tipo.taller": "Taller de iniciación",
    "contacto.form.tipo.otro": "Otro",
    "contacto.form.mensaje": "Cuéntale a Dani tu idea",
    "contacto.form.mensaje.placeholder":
      "Escala aproximada, plazo, presupuesto orientativo, referencias...",
    "contacto.form.enviar": "Enviar mensaje",
    "contacto.form.nota":
      "Este formulario abre tu gestor de correo. Si prefieres, escribe directamente a",

    "contacto.info.taller.eyebrow": "Taller",
    "contacto.info.taller.text": "l'Atelier del Foc",
    "contacto.info.taller.visitas": "Visitas con cita previa",
    "contacto.info.correo.eyebrow": "Correo",
    "contacto.info.plazos.eyebrow": "Plazos",
    "contacto.info.plazos.text":
      "Los encargos de falla grande e infantil se reservan con meses de antelación, sobre todo de cara a marzo.",
    "serv.eyebrow": "Encargos",
    "serv.title": "Servicios del taller",
    "serv.lede":
      "Cada encargo se trata como una pieza única: escala, presupuesto y plazo se acuerdan antes de tocar el corcho. Estas son las líneas de trabajo habituales de l'Atelier del Foc.",

    "serv.item.1.title": "Falla grande",
    "serv.item.1.text":
      "Diseño y ejecución completa: boceto, escultura en corcho blanco y ferralla, pintura y montaje en calle o casal.",
    "serv.item.1.tag": "A medida · varias semanas",

    "serv.item.2.title": "Falla infantil",
    "serv.item.2.text":
      "Piezas pensadas para casals infantiles: escala reducida, colores vivos y una historia que se pueda explicar a los peques.",
    "serv.item.2.tag": "A medida · semanas",

    "serv.item.3.title": "Ninot individual",
    "serv.item.3.text":
      "Figuras sueltas para exposición, indulto o regalo. Ideal para encargos particulares o coleccionismo fallero.",
    "serv.item.3.tag": "Desde una figura",

    "serv.item.4.title": "Restauración y repintado",
    "serv.item.4.text":
      "Recuperación de ninots antiguos o piezas dañadas: refuerzo de armazón, resina y repintado de acabados.",
    "serv.item.4.tag": "Según estado de la pieza",

    "serv.item.5.title": "Talleres de iniciación",
    "serv.item.5.text":
      "Sesiones para casals y grupos jóvenes: fundamentos de modelado en corcho blanco y ferralla.",
    "serv.item.5.tag": "Grupos reducidos",

    "serv.proc.eyebrow": "Cómo funciona un encargo",
    "serv.proc.title": "De la primera conversación a la entrega",

    "serv.proc.1.label": "Consulta",
    "serv.proc.1.text":
      "Cuéntale a Dani la idea, la escala y el plazo. Primera valoración sin compromiso.",

    "serv.proc.2.label": "Boceto",
    "serv.proc.2.text":
      "Propuesta en papel: diseño, proporción y presupuesto cerrado antes de empezar.",

    "serv.proc.3.label": "Taller",
    "serv.proc.3.text":
      "Escultura y pintura en l'Atelier del Foc, con avances fotográficos del proceso.",

    "serv.proc.4.label": "Entrega",
    "serv.proc.4.text":
      "Montaje en su ubicación final, lista para la falla, el casal o la exposición.",

    "serv.cta.title": "Cuéntale a Dani tu idea",
    "serv.cta.text":
      "Sin compromiso: una primera conversación para valorar escala, plazo y presupuesto.",
    "serv.cta.button": "Solicitar presupuesto",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];
