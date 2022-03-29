<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  import uniq from 'lodash/uniq';

  import Gallery3D from '../lib/_components/Gallery3D/Gallery3D.svelte';
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import FaSolidSearchPlus from 'svelte-icons-pack/fa/FaSolidSearchPlus';
  import FaSolidPalette from 'svelte-icons-pack/fa/FaSolidPalette';
  import Filters from '../lib/_components/Filters/Filters.svelte';
  import Modal, { getModal } from './_components/Modal/Modal.svelte';
  import Spinner from './_components/Spinner/Spinner.svelte';
  import ThemeButton from './_components/ThemeButton/ThemeButton.svelte';

  import isos from '../assets/cuadros/La-batalla-de-Isos.jpg';
  import middelharnis from '../assets/cuadros/El-camino-de-Middelharnis.jpg';
  import sublevacionContraLaLeyMoises from '../assets/cuadros/Sublevacion-contra-la-ley-de-Moises.jpg';
  import laComidaDeLosCampesinos from '../assets/cuadros/La-comida-de-los-campesinos.jpg';
  import jovenMendigo from '../assets/cuadros/joven-mendigo.jpg';
  import entreLaSierraNevada from '../assets/cuadros/Entre-Sierra-Nevada.jpg';
  import elBufonDonSebastianDeMorra from '../assets/cuadros/El-Bufon-Don-Sebastian-De-Morra.jpg';
  import elPapaInocencioX from '../assets/cuadros/El-Papa-Inocencio-X.jpg';
  import saturnoDevorandoAHijo from '../assets/cuadros/Saturno-devorando-a-hijo.jpg';
  import elJardinDeLasDelicias from '../assets/cuadros/El-jardin-de-las-delicias.jpg';

  import albrechtAltdorfer from '../assets/autores/albrecht-altdorfer.gif';
  import meindertHobbema from '../assets/autores/Meindert-Hobbema.jpg';
  import sandroBotticelli from '../assets/autores/Sandro-Botticelli.jpg';
  import louisLeNain from '../assets/autores/Louis-Le-Nain.jpg';
  import bartolomeEstebanMurillo from '../assets/autores/Esteban-Murillo.jpg';
  import albertBierstadt from '../assets/autores/Albert-Bierstadt.jpg';
  import diegoDeVelazquez from '../assets/autores/Diego-De-Velazquez.jpg';
  import franciscoDeGoya from '../assets/autores/Francisco-De-Goya.jpg';
  import hieronymusBosch from '../assets/autores/El-bosco.jpg';

  import saturnoDevorandoASuHijo from '../assets/sonidos/saturnoDevorandoASuHijo.mp3';
  import jardinDelEden from '../assets/sonidos/jardinDelEden.mp3';

  interface IAutor {
    nombre: string;
    nacionalidad: string;
    fechaNacimiento: string;
    lugarNacimiento: string;
    fechaMuerte: string;
    lugarMuerte: string;
    descripcion: string;
    imagen: string;
  }

  interface ICuadro {
    nombre: string;
    src: string;
    estilo: string;
    autor: IAutor;
    descripcion: string;
    año: string;
    tipo: string;
    tamaño: string;
    lugarExposicion: string;
    audioSrc?: string;
  }

  let cuadros: ICuadro[] = [];
  let cuadrosIniciales: ICuadro[] = [];

  let cuadroActual: number = 0;
  let isInfoCuadroVisible: boolean = false;
  let isMouseOver: boolean = false;
  let loading: boolean = false;
  let showDetail: boolean = false;
  let detail: string = '';
  let detailX: number = 0;
  let detailY: number = 0;
  let is3DViewVisible: boolean = false;

  onMount(() => {
    loading = true;
    const albrechtAltdorferAuthor: IAutor = {
      nombre: 'Albrecht Altdorfer',
      nacionalidad: 'Alemania',
      fechaNacimiento: 'c. 1480',
      lugarNacimiento: 'cerca de Ratisbona, Alemania',
      fechaMuerte: '12 de febrero de 1538',
      lugarMuerte: 'Ratisbona, Sacro Imperio Romano Germánico',
      descripcion: `Albrecht Altdorfer era hijo del pintor Ulrich Altdorfer. En 1505 se le concedió la ciudadanía en Ratisbona como pintor de Amberg. En 1519 entró a formar parte del ayuntamiento de la ciudad y en 1526 fue nombrado arquitecto municipal. 
          <br/><br/>Viajó en varias ocasiones a Viena. Gracias a su desarrollo de las influencias ejercidas por el arte centroeuropeo e italiano, y en particular por Alberto Durero, Altdorfer se convirtió en uno de los principales maestros de la Escuela del Danubio.
          Se interesó sobre todo por el paisaje. Al principio aspiró a unificar naturaleza y figuras, pero en los últimos años este afán desempeñó un papel secundario o nulo. 
          <br/><br/>Es autor del primer cuadro puramente paisajístico de la pintura europea. La reproducción exacta de la realidad sirve de marco a visiones fantásticas situadas en un plano indefinido. 
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://www.alamy.es/foto-el-aquelarre-49854734.html" alt="Aquelarre" target="_blank">Aquelarre</a> (1506 - Museo del Louvre, París), 
          <a class="link" href="https://es.wikipedia.org/wiki/San_Jorge_en_el_bosque" alt="San Jorge en el bosque" target="_blank">San Jorge en el bosque</a> (1510 - Pinacoteca Antigua, Múnich), <a class="link" href="https://es.wikipedia.org/wiki/Albrecht_Altdorfer#/media/Archivo:Albrecht_Altdorfer_037.jpg" alt="El baño de Susana y la lapidación del viejo" target="_blank">El baño de Susana y la lapidación del viejo</a>  (1526 - Pinacoteca Antigua, Múnich).`,
      imagen: albrechtAltdorfer
    };

    const meindertHobbemaAuthor: IAutor = {
      nombre: 'Meindert Hobbema',
      nacionalidad: 'Paises bajos',
      fechaNacimiento: '1638',
      lugarNacimiento: 'Amsterdam',
      fechaMuerte: '1709',
      lugarMuerte: 'Amsterdam',
      descripcion: `Meindert Hobbema pasó toda su vida en Amsterdam. Se formó en el estudio del paisajista <a class="link" href="https://es.wikipedia.org/wiki/Jacob_van_Ruisdael" alt="Jacob van Ruisdael" target="_blank">Jacob van Ruisdael</a> a partir de 1657 aproximadamente. En 1668 asumió el cargo municipal de inspector de pesas y medidas del vino y el aceite, ocupación que desempeñó hasta el final de sus días.
          <br/><br/>En ese mismo año contrajo matrimonio y en lo sucesivo pintó sólo algunos cuadros que se caracterizan por sus excepcionales acabados. Hobbema pintó y dibujó sobre todo paisajes boscosos, en los que incluía a menudo molinos de agua, estanques y anchos caminos.
          <br/><br/>Su principal fuente de inspiración fueron las obras de Jacob van Ruisdael. Hacia mediados de la década de 1660 sus cuadros se vuelven más claros, más expresivos y luminosos, y su forma de pintar más fluida.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://es.wahooart.com/Art.nsf/O/AQTSGX/$File/Meyndert-Hobbema-Farm-in-the-Woods.jpg" alt="Granja bajo los árboles" target="_blank">Granja bajo los árboles</a> (1662 - Museo del Louvre, París), 
          <a class="link" href="https://en.wikipedia.org/wiki/Meindert_Hobbema#/media/File:Wooded_Landscape_with_Farmsteds.jpg" alt="Paisaje boscoso con casas de campo" target="_blank">Paisaje boscoso con casas de campo</a> (1663 - Colección Wallace, Londres),
          <a class="link" href="https://de.wikipedia.org/wiki/Meindert_Hobbema#/media/Datei:Meindert_Hobbema_002.jpg" alt="Paisaje con molino de agua" target="_blank">Paisaje con molino de agua</a> (hacia 1665 - National Gallery, Londres)`,
      imagen: meindertHobbema
    };

    const sandroBotticelliAuthor: IAutor = {
      nombre: 'Sandro Botticelli',
      nacionalidad: 'Italia',
      fechaNacimiento: '1445',
      lugarNacimiento: 'Florencia',
      fechaMuerte: '1510',
      lugarMuerte: 'Florencia',
      descripcion: `Sandro Botticelli, llamado en realidad Alessandro di Mariano Filipepi, trabajó preferentemente en su ciudad natal. En un principio se formó como orfebre y luego fue discípulo de <a class="link" href="https://es.wikipedia.org/wiki/Fra_Filippo_Lippi" target="_blank" alt="Fra Filippo Lippi">Fra Filippo Lippi</a>.
          <br/><br/>Además, recibió influencias de <a class="link" href="https://es.wikipedia.org/wiki/Antonio_Pollaiuolo" alt="Antonio del Pollaiuolo" target="_blank">Antonio del Pollaiuolo</a> y <a class="link" href="https://es.wikipedia.org/wiki/Verrocchio" alt="Andrea del Verrochio" target="_blank">Andrea del Verrochio</a>, así como de <a class="link" href="https://es.wikipedia.org/wiki/Domenico_Ghirlandaio" alt="Ghirlandaio" target="_blank">Ghirlandaio</a> y <a class="link" href="https://es.wikipedia.org/wiki/Pietro_Perugino" alt="Perugino" target="_blank">Perugino</a> en una etapa posterior. El círculo de humanistas creado entorno a <a class="link" href="https://es.wikipedia.org/wiki/Lorenzo_de_M%C3%A9dici" alt="Lorenzo de Médici" target="_blank">Lorenzo de Médici</a> supueso para él un importante apoyo.
          <br/><br/>Botticelli desarrolló una representación idealizada del mundo mitológico, muy expresiva, arcaizante y llena de imaginación. Sus escenas poéticas y sensuales no son sólo expresión de su espíritu renacentista, sino también símbolo del poder humano y de las relaciones políticas.
          <br/><br/>Como pintor principal de Florencia, recibió hacia 1482 el encargo de realizar tres grandes frescos para la Capilla Sixtina del Vaticano. Algunas obras importantes son: <a class="link" href="https://es.wikipedia.org/wiki/Piedad_(Botticelli,_Mil%C3%A1n)" alt="Piedad" target="_blank">Piedad</a> (1490 - Pinacoteca Antigua, Múnich), 
          <a class="link" href="https://es.wikipedia.org/wiki/Retrato_de_Michele_Marullo_Tarcaniota" alt="Michele Marullo" target="_blank">Michele Marullo</a> (hacia 1490 - Colección Cambó, Barcelona),
          <a class="link" href="https://es.wikipedia.org/wiki/Natividad_m%C3%ADstica" alt="Natividad mística" target="_blank">Natividad mística</a> (hacia 1500 - National Gallery, Londres)`,
      imagen: sandroBotticelli
    };

    const louisLeNainAuthor: IAutor = {
      nombre: 'Louis Le Nain',
      nacionalidad: 'Francia',
      fechaNacimiento: '1593',
      lugarNacimiento: 'Laon',
      fechaMuerte: '1648',
      lugarMuerte: 'París',
      descripcion: `Louis Le Nain, de cuyo periodo de aprendizaje no se sabe nada, llegó a París en 1630 con sus hermanos Antoine (1588-1648) y Mathieu (1607-1677). En la capital francesa los tres hermanos regentaron un taller de pintur. Resulta muy difícil diferenciar la obra de los tres hermanos, ya que realizaron muchos cuadros en común.
          <br/><br/>Louis Le Nain, el más brillante de los tres, recibió el sobrenombre de <i>Le Romain</i> (el romano) a raíz de una estancia en Roma no documentada. En 1648 ingresó en la Real Academia de Pintura y Escultura. Además de algunos cuadros históricos, los hermanos Le Nain pintaron sobre todo escena de la vida en el campo, con las que crearon un importante contrapunto de la pintura cortesana.          
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://artsdot.com/ADC/Art.nsf/O/8XYFAF/$File/Antoine-Le-Nain-le-Nain-Brothers-Saint-Michael-dedicating-his-weapons-to-the-Virgin.JPG" alt="San Miguel presenta sus armas a la Virgen" target="_blank">San Miguel presenta sus armas a la Virgen</a> (entre 1633 y 1640 - St Pierre Nevers), 
          <a class="link" href="https://www.artehistoria.com/es/obra/la-carreta-0" alt="La carreta" target="_blank">La carreta</a> (1641 - Museo del Louvre, París),
          <a class="link" href="https://www.epdlp.com/cuadro.php?id=6874" alt="Venus en la fragua de Vulcano" target="_blank">Venus en la fragua de Vulcano</a> (1641 - Museo St. Denis, Reims)`,
      imagen: louisLeNain
    };

    const bartolomeEstebanMurilloAuthor: IAutor = {
      nombre: 'Bartolomé Esteban Murillo',
      nacionalidad: 'España',
      fechaNacimiento: '1617',
      lugarNacimiento: 'Sevilla',
      fechaMuerte: '1682',
      lugarMuerte: 'Sevilla',
      descripcion: `Bartolomé Esteban Murillo es el principal representante del Barroco sevillano y uno de los pintores más renombrados de España. Comenzó su formación en 1627 con <a class="link" href="https://es.wikipedia.org/wiki/Juan_del_Castillo_(pintor)" alt="Juan del Castillo" target="_blank">Juan del Castillo</a>.
          <br/><br/>En un principio se inspiró en el estilo de <a class="link" href="https://es.wikipedia.org/wiki/Francisco_de_Zurbar%C3%A1n" alt="Francisco de Zurbarán " target="_blank">Francisco de Zurbarán</a> y <a class="link" href="https://es.wikipedia.org/wiki/Jos%C3%A9_de_Ribera" alt="José de Ribera" target="_blank">José de Ribera</a>, pero más tarde, alrededor de 1650 se orientó hacia las obras de Anthonis van Dyck, Pedro Pablo Rubens y Rafael. 
          <br/><br/>Murillo desarrolló entonces el llamado <i>estilo vaporoso</i>, de suaves contornos, colores pálidos y velos de luz dorados o plateados. Casi todas sus obras son cuadros religiosos o escenas de género. Trabajó fundamentalmente en Sevilla, donde fue confundador de la Academia de Arte en 1660.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://es.wikipedia.org/wiki/Ni%C3%B1os_comiendo_uvas_y_mel%C3%B3n" alt="Niños comiendo uvas y melón" target="_blank">Niños comiendo uvas y melón</a> (entre 1645 y 1646 - Pinacoteca Antigua, Múnich), 
          <a class="link" href="https://www.artehistoria.com/es/obra/la-cocina-de-los-%C3%A1ngeles" alt="La cocina de los ángeles" target="_blank">La cocina de los ángeles</a> (1646 - Museo del Louvre, París),
          <a class="link" href="https://es.artprice.com/plaza-de-mercado/2070629/francisco-antolinez-y-sarabia/pintura/aparicion-del-nino-jesus-a-san-antonio-de-padua" alt="La aparición del Niño Jesús a San Antonio de Padua" target="_blank">La aparición del Niño Jesús a San Antonio de Padua</a> (1656 - Catedral de Sevilla)`,
      imagen: bartolomeEstebanMurillo
    };

    const albertBierstadtAuthor: IAutor = {
      nombre: 'Albert Bierstadt',
      nacionalidad: 'Norteamerica',
      fechaNacimiento: '7 de enero de 1830',
      lugarNacimiento: 'Solingen',
      fechaMuerte: '18 de febrero de 1902',
      lugarMuerte: 'Nueva York',
      descripcion: `Albert Bierstadt fue un pintor, famoso por sus grandiosas escenas del Oeste de Estados Unidos.          
          <br/><br/>Viajó a Alemania en 1853 con intención de ser alumno del conocido pintor Joahann Peter Hasenclever, su pariente lejano. Al llegar se enteró de que Hasenclever había fallecido poco antes. Las grandes dimensiones de sus lienzos caracterizaron especialmente sus trabajos.
          <br/><br/>En 1859 viajó al oeste con un equipo de topografía, viaje que le sirvió para sus estudios de amplias y majestuosas panorámicas de las Montañas Rocosas. El final de su carrera se vio ensombrecido por el cambio en el gusto estadounidense, había ahora mucho interés en el impresionismo y su obra era considerada excesivamente teatral y pasada de moda. Murió en el más completo olvido.
          <br/><br/>Su obra, que alcanzó gran popularidad en su época, incluye <a class="link" href="https://es.wikipedia.org/wiki/Las_Monta%C3%B1as_Rocosas,_Lander%27s_Peak_(Albert_Bierstadt)#/media/Archivo:1863_-_bierstadt_landers_peak.jpg" alt="Las Montañas Rocosas" target="_blank">Las Montañas Rocosas</a> (1863 - Museo de arte metropolitano, Nueva York) y <a class="link" href="https://es.wikipedia.org/wiki/Los_%C3%BAltimos_b%C3%BAfalos_(Albert_Bierstadt)#/media/Archivo:The_Last_of_the_Buffalo_by_Albert_Bierstadt,_1888_-_Corcoran_Gallery_of_Art_-_DSC01114.JPG" alt="Los últimos búfalos" target="_blank">Los últimos búfalos</a> (1888 - Galería Nacional de Arte, Washington D.C.)`,
      imagen: albertBierstadt
    };

    const diegoVelazquez: IAutor = {
      nombre: 'Diego Rodríguez de Silva y Velázquez',
      nacionalidad: 'España',
      fechaNacimiento: '1599',
      lugarNacimiento: 'Sevilla',
      fechaMuerte: '1660',
      lugarMuerte: 'Madrid',
      descripcion: `Diego Rodríguez de Silva y Velázquez se inició en la pintura con Francisco Herrera el viejo. De 1613 a 1617 trabajó en el taller de Francisco Pacheco en Sevilla. En 1622 y 1623 realizó sus dos primeros viajes a Madrid con el maestro, y durante el segundo consiguió que Felipe IV reparara en él y le nombrara pintor de cámara.
          <br/><br/>En 1627 empezó su dilatada carrera como pintor de corte, que culminó en 1652 cuando fue aposentador de palacio. En 1628 conoció a Rubens en Madrid. Alternó periodos en Italia donde adquirió obras clásicas del Renacimiento para la casa real.
          <br/><br/>En 1650 ingresó como miembro en la academia de San Lucas de Roma. En 1658 fue armado caballero de la Orden de Santiago. Velázquez, que cultivó todos los géneros de la pintura, ha pasado a la historia como el pintor español más importante del siglo XVII.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://upload.wikimedia.org/wikipedia/commons/2/22/Vel%C3%A1zquez_-_Adoraci%C3%B3n_de_los_Reyes_%28Museo_del_Prado%2C_1619%29.jpg" alt="La adoración de los magos" target="_blank">La adoración de los magos</a> (1619 - Museo del Prado, Madrid), <a class="link" href="https://upload.wikimedia.org/wikipedia/commons/b/b8/Los_borrachos_o_el_triunfo_de_Baco_1629_Vel%C3%A1zquez.jpg" alt="El triunfo de Baco (Los borrachos)" target="_blank">El triunfo de Baco (Los borrachos)</a> (1629 - Museo del Prado, Madrid) y <a class="link" href="https://upload.wikimedia.org/wikipedia/commons/7/7c/RokebyVenus.jpg" alt="La Venus del espejo" target="_blank">La Venus del espejo</a> (1651 - National Gallery, Londres)`,
      imagen: diegoDeVelazquez
    };

    const franciscoGoya: IAutor = {
      nombre: 'Francisco José de Goya',
      nacionalidad: 'España',
      fechaNacimiento: '31 de marzo de 1746',
      lugarNacimiento: 'Fuendetodos',
      fechaMuerte: '16 de abril de 1828',
      lugarMuerte: 'Burdeos',
      descripcion: `Francisco de Goya y Lucientes nació en 1746 en el seno de una familia de mediana posición sociald​ de Zaragoza, que ese año se había trasladado al pueblo de Fuendetodos. Su padre, Braulio José Goya y Franque, era un artesano de cierto prestigio, maestro dorador,​ cuyas relaciones laborales sin duda contribuyeron a la formación artística de Francisco. Su madre se llamaba Gracia Lucientes Salvador, de una familia de la pequeña nobleza venida a menos.
          <br/><br/>Su obra abarca la pintura de caballete y mural, el grabado y el dibujo. Su estilo evolucionó desde el rococó, pasando por el neoclasicismo, hasta el prerromanticismo, siempre interpretados de una forma personal y original,​ y siempre con un rasgo subyacente de naturalismo, del reflejo de la realidad sin una visión idealista que la edulcore ni desvirtúe, donde es igualmente importante el mensaje ético. Para Goya la pintura es un vehículo de instrucción moral, no un simple objeto estético.​​ Su arte supone uno de los puntos de inflexión que entre los siglos XVIII y XIX anuncian la pintura contemporánea y es precursor de algunas de las vanguardias pictóricas del siglo XX, especialmente el expresionismo; por todo ello, se le considera uno de los artistas españoles más relevantes y uno de los grandes maestros de la historia del arte mundial.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://upload.wikimedia.org/wikipedia/commons/4/44/Marchioness_of_la_Solana%2C_Francisco_de_Goya.jpg" alt="Marquesa de La Solana" target="_blank">Marquesa de La Solana</a> (entre 1794 y 1795 - Museo del Louvre, París), <a class="link" href="https://es.wikipedia.org/wiki/La_maja_vestida#/media/Archivo:Maja_vestida_(Prado).jpg" alt="Maja vestida" target="_blank">Maja vestida</a> (1797 - Museo del Prado, Madrid) y <a class="link" href="https://upload.wikimedia.org/wikipedia/commons/b/b8/Majas_en_un_balc%C3%B3n_por_Goya_%28colecci%C3%B3n_particular%29.jpg" alt="Majas en el balcón" target="_blank">Majas en el balcón</a> (1811 - Museo metropolitano, Nueva York)`,
      imagen: franciscoDeGoya
    };

    const elBosco: IAutor = {
      nombre: 'Hieronymus Bosch (El Bosco)',
      nacionalidad: 'Países Bajos',
      fechaNacimiento: 'Hacia 1450',
      lugarNacimiento: 'Hertogenbosch',
      fechaMuerte: '1516',
      lugarMuerte: 'Hertogenbosch',
      descripcion: `El Bosco (españolización de Hieronymus Bosch) fue un pintor nacido al norte del Ducado de Brabante, en los actuales Países Bajos, autor de una obra excepcional tanto por la extraordinaria inventiva de sus figuraciones y los asuntos tratados como por su técnica..
          <br/><br/>El Bosco trató con un lenguaje pictórico único y visionario los temas de la iconografía cristiana. Ciertos conceptos morales, como el pecado capital, adquieren en sus obras una representación dramática y muy característica; sus visiones del infierno y de las tentaciones de los santos están dominadas por descripciones de una imaginería extraña y aparentemente irracional, con frecuencia horripilantes.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://upload.wikimedia.org/wikipedia/commons/d/da/Bosch_The_marriage-feast_at_Cana_%28Boijmans_Van_Beuningen%29.jpg" alt="Las bodas de Caná" target="_blank">Las bodas de Caná</a> (¿? - Museo Boijmans van Beuningen, Rotterdam), <a class="link" href="https://www.wikiart.org/es/el-bosco/san-juan-en-patmos-1485" alt="San Juan en Patmos" target="_blank">San Juan en Patmos</a> (entre 1490 y 1500 - Gemäldegalerie, SMPK, Berlín) y <a class="link" href="https://www.aciprensa.com/arte/Bosco/hijoprodigo.htm" alt="El hijo pródigo" target="_blank">El hijo pródigo</a> (hacia 1510 - Museo Boijmans van Beuningen, Rotterdam).`,
      imagen: hieronymusBosch
    };

    setTimeout(() => {
      cuadros = [
        {
          nombre: 'La batalla de Isos',
          descripcion: `Este magnífico cuadro forma parte de una serie de pinturas históricas encargadas por el duque bávaro Guillermo IV (1493-1556) y por su esposa Jacoba a distintos pintores. Alejandro Magno (356-323 a.C) venció al rey persa Darío III en la batalla de Isos, en el año 333 a.C. 
      <br/><br/>La escena se sitúa ante un majestuoso paisaje que representa el Mediterráneo oriental con la isla de Chipre y Egipto a lo lejos. El macedonio, montado sobre un caballo de batalla protegido con una coraza, persigue al derrotado rey de los persas, que emprende la huida en su carro de guerra.
      El vencedor se halla en medio de de la inmensa turba de guerreros, justo debajo del cordón que cuelga en el centro de la tabla con la inscripción. Los turbulentos nubarrones se hacen eco del fragor de la batalla y acentúan el dramatismo de la escena. 
      Altdorfer renunció a perfilar el contorno de las montañas y las nubes, para crear la sensación de fenómeno natural ajeno a la realidad.`,
          src: isos,
          estilo: 'Renacimiento',
          autor: albrechtAltdorferAuthor,
          año: '1529',
          tipo: 'Óleo sobre tabla',
          tamaño: '1,584m x 1,203m',
          lugarExposicion: 'Pinacoteca Antigua, Múnich',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'El camino de Middelharnis',
          descripcion:
            'Esta obra magistral, bañada de luz, reproduce una vista del pueblo de Middelharnis, en la provincia de Holanda Meridional. El año de la realización de la pintura, conocido a través de la firma, fue objeto de controversia. Sin embargo, se corresponde plenamente con la realidad, ya que el paseo se hizo en 1664 y el faro que sobresale al fondo a la izquierda se construyó en el año 1682.',
          src: middelharnis,
          estilo: 'Barroco',
          autor: meindertHobbemaAuthor,
          año: '1689',
          tipo: 'Óleo sobre lienzo',
          tamaño: '1,03m x 1,41m',
          lugarExposicion: 'National Gallery, Londres',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'Sublevación contra la ley de Moisés / Castigo de los rebeldes',
          descripcion:
            'Esta pintura clave del ciclo de Moisés representa tres escenas de la insubordinación de los hebreos contra la ley de Dios, presentada por Moisés y Aarón, así como el castigo de los levitas desertores. A la derecha, Josué protege a Moisés, al que quiere apedrear la multitud. En el centro, los hijos de Aarón y los levitas de Moisés luchan contra los sacerdotes. A la izquierda, la tierra se abre por orden de Moisés y engulle a los sublevados.',
          src: sublevacionContraLaLeyMoises,
          estilo: 'Renacimiento',
          autor: sandroBotticelliAuthor,
          año: '1481-1482',
          tipo: 'Fresco',
          tamaño: '3,485m x 5,7m',
          lugarExposicion: 'Capilla Sixtina, Vaticano',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'La comida de los campesinos',
          descripcion:
            'La pintura de los Le Nain se caracteriza por el rigor técnico, por el respeto que muestran hacia los campesinos y por el realismo con el que plasman sus miserables condiciones de vida durante el absolutismo. Resulta evidente la extrema pobreza de estos aldeanos, que se sientan a una mesa demasiado baja para compartir una comida insuficiente. Sus ropas están desgarradas y no todos parecen tener zapatos.',
          src: laComidaDeLosCampesinos,
          estilo: 'Barroco',
          autor: louisLeNainAuthor,
          año: '1642',
          tipo: 'Óleo sobre lienzo',
          tamaño: '0,97m x 1,59m',
          lugarExposicion: 'Museo del Louvre, París',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'Joven mendigo / Niño espulgándose',
          descripcion: `El pintor sevillano Murillo es conocido ante todo por su pintura religiosa. Pero, como otros pintores barrocos españoles (José Ribera, Velázquez), también realizó obras realistas. Entre ellas, sobresalen sus escenas infantiles de mendigos y pilluelos1​ Se ha apuntado la posibilidad de que esta obra fuera un encargo de mercaderes extranjeros en Sevilla, dado el gusto flamenco por las obras de género que reflejan la vida cotidiana. Igualmente, se ha indicado la posibilidad de que se pintara por influencia de los franciscanos, para quienes Murillo solía trabajar.
        <br/><br/>La primera de estas representaciones de golfillos urbanos es este Joven mendigo despiojándose. Puede ser un mendigo o un pícaro como el Lazarillo de Tormes (1554) o algunos personajes de las Ejemplares de Cervantes (1613).
        <br/><br/>Por todo acompañamiento, Murillo pinta un cántaro de barro y un cesto con manzanas. En el suelo, restos de camarones u otros crustáceos. Forman un bodegón por sí mismos. Gracias a ellos, demuestra su gran capacidad para pintar diferenciadamente materiales y texturas.
        <br/><br/>La escena está iluminada con un fuerte claroscuro propio de la época barroca, de influencia caravagiana. La luz proviene de la ventana que queda a la izquierda e incide plenamente en el cuerpo sentado del chico, dejando en penumbra el resto de la estancia.
        <br/><br/>La composición, típicamente barroca, está dominada por ejes diagonales. En la gama cromática prevalecen los colores amarillentos y castaños, desde los más claros hasta los oscuros, casi negros.`,
          src: jovenMendigo,
          estilo: 'Barroco',
          autor: bartolomeEstebanMurilloAuthor,
          año: 'hacia 1650',
          tipo: 'Óleo sobre lienzo',
          tamaño: '1,37m x 1,15m',
          lugarExposicion: 'Museo del Louvre, París',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'Entre la Sierra Nevada',
          descripcion: `<i>Entre Sierra Nevada</i> fue creado en Roma en el invierno de 1867-68, cuatro años después del viaje de Bierstadt a Sierra Nevada. 
        <br/><br/>El cuadro representa montañas escarpadas a la izquierda y al fondo que se extienden hacia un cielo brillante con los rayos del Sol asomando entre las nubes. Las montañas se asoman a un lago tranquilo con un grupo de ciervos y aves acuáticas en su orilla y está bordeado por árboles en la parte derecha del cuadro.
        <br/><br/>El cuadro se expuso por primera vez en Londres el verano siguiente a su creación, junto con otras dos obras del artista. Luego se expuso en la Real Academia de Berlín, donde obtuvo una medalla de oro, y posteriormente en París, Moscú y San Petersburgo. Bierstadt, un consumado promotor de su propia obra, presumiblemente esperaba aumentar el precio de la misma exponiéndola por toda Europa, colocaba historias en los periódicos y vendía entradas para sus exposiciones, convirtiendo la presentación de su obra en un acontecimiento teatral.`,
          src: entreLaSierraNevada,
          estilo: 'Romanticismo',
          autor: albertBierstadtAuthor,
          año: '1868',
          tipo: 'Óleo sobre lienzo',
          tamaño: '1,83m x 3,05m',
          lugarExposicion: 'Museo Smithsoniano de Arte Americano, Washington D.C.',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'El bufón don Sebastián de Morra',
          descripcion: `En las décadas de 1630 y 1640 Velázquez pintó una serie de retratos de los bufones, enanos y tullidos que había en la corte para el entretenimiento de la realeza. Estos personajes le brindaron al artista la posibilidad de lucir sus grandes habilidades como retratista, al margen de los retratos de compromiso.
          <br/><br/>No está del todo claro si el bufón de la corte reproducido en este cuadro es don Sebastían de Morra.
          <br/><br/>Sobre el Sebastián de Morra y, en general, sobre la interpretación de estos retratos de bufones han corrido, según Fernando Marías, <i>ríos de tinta</i>. Hay quien ha querido ver en él la denuncia velazqueña del trato que la corte daba a estas personas, presentándolo como una marioneta, en tanto Velázquez mostraría en sus retratos llenos de dignidad una actitud compasiva y solidaria con sus carencias físicas o psíquicas, de las que según otros sería implacable testigo, diseccionando aquellas carencias con su agudo sentido de la realidad y su naturalismo directo. De este tipo de retratos, sin embargo, existe una larga tradición tanto en España como en Flandes o en Italia, en la que pueden encontrarse pintores como Antonio Moro o Alonso Sánchez Coello.​ Ubicados frecuentemente en lugares secundarios de los palacios, cabría sencillamente interpretarlos como retratos de personas cuya función era la de entretener o divertir, y por las que los miembros de la familia real llegaron a sentir afecto, perpetuando su función cómica desde la pintura y ofreciendo al mismo tiempo al pintor la posibilidad de experimentar con absoluta libertad.`,
          src: elBufonDonSebastianDeMorra,
          estilo: 'Barroco',
          autor: diegoVelazquez,
          año: '1644',
          tipo: 'Óleo sobre lienzo',
          tamaño: '1,06m x 0,81m',
          lugarExposicion: 'Museo del Prado, Madrid',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'El Papa Inocencio X',
          descripcion: `Para la estructuración de la composición y para el uso del color en esta ostentosa obra, Velázquez se inspiró en los retratos papales de Rafael, Tiziano y otros artistas del Renacimiento italiano, obras que estudió durante su estancia en Roma y en Venecia.
          <br/><br/>El retrato, que sobresale por su singular captación realista de la fisonomía de Inocencia X (1644-1655), data del segundo viaje de Velázquez a Italia.
          <br/><br/>La expresión del papa es tensa, con el ceño fruncido; totalmente opuesta a los retratos papales realizados por Rafael y Carlo Maratta, que oscilan entre expresiones más o menos introspectivas y afables sin llegar al semblante casi agresivo de Inocencio X.`,
          src: elPapaInocencioX,
          estilo: 'Barroco',
          autor: diegoVelazquez,
          año: '1650',
          tipo: 'Óleo sobre lienzo',
          tamaño: '1,40m x 1,20m',
          lugarExposicion: 'Galería Doria Pamphilii, Roma',
          audioSrc: undefined
        } as ICuadro,
        {
          nombre: 'Saturno devorando a su hijo',
          descripcion: `El cuadro Saturno devorando a su hijo es una de las pinturas al óleo sobre revoco que formaron parte de la decoración de los muros de la casa que Francisco de Goya adquirió en 1819, llamada la Quinta del Sordo. Por tanto, la obra pertenece a la serie de las Pinturas negras de dicho artista.
          <br/><br/>El tema de Saturno está relacionado, según Freud, con la melancolía y la destrucción, y estos rasgos están presentes en las Pinturas negras. Con expresión terrible, Goya nos sitúa ante el horror caníbal de las fauces abiertas, los ojos en blanco, el gigante avejentado y la masa informe del cuerpo sanguinolento del supuesto hijo.`,
          src: saturnoDevorandoAHijo,
          estilo: 'Romanticismo',
          autor: franciscoGoya,
          año: '1820-1823',
          tipo: 'Óleo sobre revoco',
          tamaño: '1,46m x 0,83m',
          lugarExposicion: 'Museo del Prado, Madrid',
          audioSrc: saturnoDevorandoASuHijo
        } as ICuadro,
        {
          nombre: 'El jardín de las delicias',
          descripcion: `Este tríptico único es uno de los trabajos más conocidos y también más enigmáticos de El Bosco. Mientras que el paraíso terrenal de la tabla lateral izquierda conserva la iconografía cristiana, la tabla central rompe con esa tradición. Los vicios humanos suscitados por los deseos están representados con gran fantasía y con un toque moralizante y satírico.
          <br/><br/> Los vicios se reducen casi exclusivamente a los placeres carnales, plasmados en las distintas escenas. En el centro aparece el árbol de la vida, detrás de la marcha triunfal y de la fuente de la eterna juventud. Tampoco el infierno de la tabla lateral derecha responde al estilo tradicional. En el mundo onírico demoníaco no hay indicio alguno de salvación.`,
          src: elJardinDeLasDelicias,
          estilo: 'Primitivo flamenco',
          autor: elBosco,
          año: 'Hacia 1510',
          tipo: 'Óleo sobre tabla',
          tamaño: 'Tabla central: 2,20m x 1,95m, tablas laterales: 2,20m x 0,97m',
          lugarExposicion: 'Museo del Prado, Madrid',
          audioSrc: jardinDelEden
        } as ICuadro
      ];

      cuadrosIniciales = [...cuadros];
      loading = false;
    }, 1000);
  });

  const cambiarCuadro = (order: number) => {
    if (isInfoCuadroVisible) {
      isInfoCuadroVisible = false;
      setTimeout(() => {
        cuadroActual += order;
      }, 500);
    } else {
      cuadroActual += order;
    }
    isMouseOver = false;
  };

  const toggleInfo = () => {
    isInfoCuadroVisible = !isInfoCuadroVisible;
    toggleEye();
  };

  const toggleEye = () => {
    isMouseOver = !isMouseOver;
  };

  const toggle3DView = () => {
    is3DViewVisible = !is3DViewVisible;
  };
</script>

<div class:buttonsWrapper={true}>
  <ThemeButton />
  <div class:button3D={true} class:button3DActive={is3DViewVisible} on:click={toggle3DView}>3D</div>
</div>
{#if is3DViewVisible}
  <Gallery3D cuadro={cuadros[cuadroActual].src} />
{:else if cuadros.length > 0}
  <button
    class:navigationButton={true}
    class:anterior={true}
    disabled={cuadroActual === 0}
    on:click={() => cambiarCuadro(-1)}>{`<`}</button
  >
  <Filters
    autores={uniq(cuadrosIniciales.map(cuadro => cuadro.autor.nombre))}
    estilos={uniq(cuadrosIniciales.map(cuadro => cuadro.estilo))}
    on:filter={event => {
      cuadroActual = 0;
      cuadros = cuadrosIniciales.filter(cuadro => {
        if (event.detail.autor !== '' && event.detail.estilo !== '') {
          return event.detail.autor === cuadro.autor.nombre && event.detail.estilo === cuadro.estilo;
        } else if (event.detail.autor !== '' && event.detail.estilo === '') {
          return event.detail.autor === cuadro.autor.nombre;
        } else if (event.detail.autor === '' && event.detail.estilo !== '') {
          return event.detail.estilo === cuadro.estilo;
        }
      });
    }}
    on:deleteFilter={() => {
      cuadroActual = 0;
      cuadros = cuadrosIniciales;
    }}
  />
  <div class:imgWrapper={true}>
    {#each [cuadros[cuadroActual]] as { src, nombre, descripcion, autor, año, tipo, tamaño, lugarExposicion, audioSrc } (cuadroActual)}
      <div class:hidden={!isInfoCuadroVisible} class:autorInfo={true}>
        <article class:article={true}>
          <h2>{autor.nombre}</h2>
          <h5>{`${autor.fechaNacimiento} (${autor.lugarNacimiento}) - ${autor.fechaMuerte} (${autor.lugarMuerte})`}</h5>
          <div class:autorWrapper={true}>
            <figure>
              <img class:imagenAutor={true} src={autor.imagen} alt={autor.nombre} />
            </figure>
            <!-- <p class:primerLetra={true}>{autor.nombre.substring(0, 1)}</p> -->
            <p class:autor={true}>{@html autor.descripcion}</p>
          </div>
        </article>
      </div>
      <img
        class:cuadro={true}
        in:fly={{ x: 500, delay: 300, duration: 300 }}
        out:fly={{ x: -500, duration: 200 }}
        {src}
        on:click={toggleInfo}
        on:mouseover={toggleEye}
        on:mouseleave={toggleEye}
        alt=""
      />

      {#if isInfoCuadroVisible}
        <div
          class:ampliarCuadro={true}
          on:click={() => getModal().open()}
          in:fade={{ duration: 300 }}
          out:fade={{ duration: 200 }}
        >
          <Icon src={FaSolidSearchPlus} />
        </div>
      {/if}
      {#if isMouseOver && !isInfoCuadroVisible}
        <div class:palette={true} on:click={toggleInfo} in:fade={{ duration: 300 }} out:fade={{ duration: 200 }}>
          <Icon src={FaSolidPalette} />
        </div>
      {/if}

      <div class:hidden={!isInfoCuadroVisible} class:cuadroInfo={true}>
        <article class:article={true}>
          <h2>{`${nombre} (${año})`}</h2>
          <h5>{`${tipo} (${tamaño})`}</h5>
          <h5>{lugarExposicion}</h5>
          <p>{@html descripcion}</p>
        </article>
        {#if audioSrc}
          <audio src={audioSrc} controls preload="auto" />
        {/if}
      </div>
    {/each}
    <Modal>
      <h1 class:fullImageLabel={true}>{cuadros[cuadroActual].nombre}</h1>
      <div class:fullImageWrapper={true}>
        <img class:fullImage={true} src={cuadros[cuadroActual].src} alt="" />
        <!-- <svg class:fullImageSVG={true} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect
            class:hoverable={true}
            x="1350"
            y="0"
            width="1100"
            height="800"
            on:mouseenter={e => {
              showDetail = true;
              console.log(e.x, e.y);
              detailX = e.x;
              detailY = e.y;
              detail = 'EEEE';
            }}
            on:mouseleave={() => {
              // showDetail = false;
              detail = '';
            }}
          />
        </svg>
        {#if showDetail}
          <div class:fullImageDetailInfo={true} style="left: {detailX - 150}px; top: {detailY - 50}px;">
            {detail}
          </div>
        {/if} -->
      </div>
      <!-- <map name="workmap">
        <area
          class:detail={true}
          shape="rect"
          coords="1350,0,2420,755"
          alt="Computer"
          on:mouseenter={() => {
            alert('COMPUTER');
          }}
        />
        <area
          shape="rect"
          coords="290,172,333,250"
          alt="Phone"
          on:mouseenter={() => {
            alert('PHONE');
          }}
        />
        <area
          shape="circle"
          coords="337,300,44"
          alt="Cup of coffee"
          on:mouseenter={() => {
            alert('COFFEE');
          }}
        />
      </map> -->
    </Modal>
  </div>
  <button class:navigationButton={true} disabled={cuadroActual === cuadros.length - 1} on:click={() => cambiarCuadro(1)}
    >></button
  >
{:else if loading}
  <div class:spinner={true}>
    <Spinner />
  </div>
{:else}
  <div class:sinCuadros={true}>
    <label>💔</label>
    <label>No se han encontrado cuadros</label>
  </div>
{/if}

<!-- <img class:siguienteCuadro={true} src={cuadros[cuadroActual + 1]} alt="" /> -->
<style src="./Gallery.scss" type="text/scss"></style>
