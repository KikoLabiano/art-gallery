import{S as ne,i as te,s as de,c as Ee,e as b,a as x,b as P,d as i,t as A,f as L,g as p,l as J,h as qe,u as Pe,j as Ne,k as Se,m as D,n as V,o as M,r as we,p as Ce,q as ve,v as B,w as O,x as T,y as ce,z as ue,A as Ae,B as pe,C as Le,D as je,E as ze,F as $e,G as Fe,H as Re,I as Je,J as Ie,K as Ge,L as he,M as Be}from"./vendor.047d9c5f.js";const De=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};De();function Ve(t){let e,a,r,l,o,s,c,f,g,_,j;const k=t[9].default,v=Ee(k,t,t[8],null);return{c(){e=b("div"),a=b("div"),r=x("svg"),l=x("circle"),o=x("line"),s=x("line"),c=P(),f=b("div"),v&&v.c(),i(l,"cx","6"),i(l,"cy","6"),i(l,"r","6"),i(l,"class","svelte-15daxqu"),i(o,"x1","3"),i(o,"y1","3"),i(o,"x2","9"),i(o,"y2","9"),i(o,"class","svelte-15daxqu"),i(s,"x1","9"),i(s,"y1","3"),i(s,"x2","3"),i(s,"y2","9"),i(s,"class","svelte-15daxqu"),i(r,"id","close"),i(r,"viewBox","0 0 12 12"),i(r,"class","svelte-15daxqu"),i(f,"id","modal-content"),i(f,"class","svelte-15daxqu"),i(a,"id","modal"),i(a,"class","svelte-15daxqu"),i(e,"id","topModal"),i(e,"class","svelte-15daxqu"),A(e,"visible",t[1])},m(u,w){L(u,e,w),p(e,a),p(a,r),p(r,l),p(r,o),p(r,s),p(a,c),p(a,f),v&&v.m(f,null),t[11](f),t[12](e),g=!0,_||(j=[J(r,"click",t[10]),J(f,"mousedown",t[3]),J(f,"mousemove",t[4]),J(f,"mouseup",t[5]),J(a,"click",qe(Te)),J(e,"click",t[13])],_=!0)},p(u,[w]){v&&v.p&&(!g||w&256)&&Pe(v,k,u,u[8],g?Se(k,u[8],w,null):Ne(u[8]),null),w&2&&A(e,"visible",u[1])},i(u){g||(D(v,u),g=!0)},o(u){V(v,u),g=!1},d(u){u&&M(e),v&&v.d(u),t[11](null),t[12](null),_=!1,we(j)}}}let X;const re={};function He(t=""){return re[t]}const Te=()=>{};function Oe(t,e,a){let{$$slots:r={},$$scope:l}=e,o,s=!1,c,f,g,{id:_=""}=e;const j={x:0,y:0};let k=!1;const v=({clientX:m,clientY:R})=>{const C=g.getBoundingClientRect();return{x:m-C.left,y:R-C.top}},u=m=>{m.preventDefault(),k=!0;const{x:R,y:C}=v(m);j.x=g.scrollLeft+R,j.y=g.scrollTop+C},w=m=>{if(!k)return;const{x:R,y:C}=v(m);console.log(j.x-R,j.y-C),g.scrollTo(j.x-R,j.y-C)},F=()=>{k=!1},I=m=>{m.key=="Escape"&&X==o&&S()},z=m=>{f=m,!s&&(c=X,X=o,window.addEventListener("keydown",I),document.body.style.overflow="hidden",a(1,s=!0),document.body.appendChild(o))},S=m=>{!s||(window.removeEventListener("keydown",I),X=c,X==null&&(document.body.style.overflow=""),a(1,s=!1),f&&f(m))};re[_]={open:z,close:S},Ce(()=>{delete re[_],window.removeEventListener("keydown",I)});const d=()=>S();function n(m){ve[m?"unshift":"push"](()=>{g=m,a(2,g)})}function q(m){ve[m?"unshift":"push"](()=>{o=m,a(0,o)})}const H=()=>S();return t.$$set=m=>{"id"in m&&a(7,_=m.id),"$$scope"in m&&a(8,l=m.$$scope)},[o,s,g,u,w,F,S,_,l,r,d,n,q,H]}class We extends ne{constructor(e){super();te(this,e,Oe,Ve,de,{id:7})}}var Xe="/art-gallery/assets/La-batalla-de-Isos.a18407fd.jpg",Ze="/art-gallery/assets/El-camino-de-Middelharnis.825b1676.jpg",Ke="/art-gallery/assets/Sublevacion-contra-la-ley-de-Moises.cde4bc96.jpg",Ye="/art-gallery/assets/La-comida-de-los-campesinos.948ae863.jpg",Qe="/art-gallery/assets/joven-mendigo.af34ad0f.jpg",Ue="/art-gallery/assets/albrecht-altdorfer.68054ceb.gif",xe="/art-gallery/assets/Meindert-Hobbema.e24ab92b.jpg",ea="/art-gallery/assets/Sandro-Botticelli.10b40ad5.jpg",aa="/art-gallery/assets/Louis-Le-Nain.4b456c46.jpg",oa="/art-gallery/assets/Esteban-Murillo.5abd8a5c.jpg";function ke(t,e,a){const r=t.slice();return r[8]=e[a].src,r[9]=e[a].nombre,r[10]=e[a].descripcion,r[11]=e[a].autor,r[12]=e[a].a\u00F1o,r[13]=e[a].tipo,r[14]=e[a].tama\u00F1o,r[15]=e[a].lugarExposicion,r}function ye(t){let e,a,r,l,o;return a=new Ie({props:{src:Ge}}),{c(){e=b("div"),ce(a.$$.fragment),i(e,"class","svelte-1v4iisu"),A(e,"ampliarCuadro",!0)},m(s,c){L(s,e,c),ue(a,e,null),r=!0,l||(o=J(e,"click",t[6]),l=!0)},p:Ae,i(s){r||(D(a.$$.fragment,s),r=!0)},o(s){V(a.$$.fragment,s),r=!1},d(s){s&&M(e),pe(a),l=!1,o()}}}function Me(t,e){let a,r,l,o=e[11].nombre+"",s,c,f,g=`${e[11].fechaNacimiento} (${e[11].lugarNacimiento}) - ${e[11].fechaMuerte} (${e[11].lugarMuerte})`,_,j,k,v,u,w,F,I,z,S=e[11].descripcion+"",d,n,q,H,m,R,C,G,$,Z,K=`${e[9]} (${e[12]})`,ee,me,ae,Y=`${e[13]} (${e[14]})`,oe,fe,se,Q=e[15]+"",le,be,W,U=e[10]+"",ge,N,ie,_e,E=e[1]&&ye(e);return{key:t,first:null,c(){a=b("div"),r=b("article"),l=b("h2"),s=B(o),c=P(),f=b("h5"),_=B(g),j=P(),k=b("div"),v=b("figure"),u=b("img"),I=P(),z=b("p"),d=P(),n=b("img"),R=P(),E&&E.c(),C=P(),G=b("div"),$=b("article"),Z=b("h2"),ee=B(K),me=P(),ae=b("h5"),oe=B(Y),fe=P(),se=b("h5"),le=B(Q),be=P(),W=b("p"),ge=P(),i(l,"class","svelte-1v4iisu"),O(u.src,w=e[11].imagen)||i(u,"src",w),i(u,"alt",F=e[11].nombre),i(u,"class","svelte-1v4iisu"),A(u,"imagenAutor",!0),i(z,"class","svelte-1v4iisu"),A(z,"autor",!0),i(k,"class","svelte-1v4iisu"),A(k,"autorWrapper",!0),i(r,"class","svelte-1v4iisu"),A(r,"article",!0),i(a,"class","svelte-1v4iisu"),A(a,"hidden",!e[1]),A(a,"autorInfo",!0),O(n.src,q=e[8])||i(n,"src",q),i(n,"alt",""),i(n,"class","svelte-1v4iisu"),A(n,"cuadro",!0),i(Z,"class","svelte-1v4iisu"),i(W,"class","svelte-1v4iisu"),i($,"class","svelte-1v4iisu"),A($,"article",!0),i(G,"class","svelte-1v4iisu"),A(G,"hidden",!e[1]),A(G,"cuadroInfo",!0),this.first=a},m(y,h){L(y,a,h),p(a,r),p(r,l),p(l,s),p(r,c),p(r,f),p(f,_),p(r,j),p(r,k),p(k,v),p(v,u),p(k,I),p(k,z),z.innerHTML=S,L(y,d,h),L(y,n,h),L(y,R,h),E&&E.m(y,h),L(y,C,h),L(y,G,h),p(G,$),p($,Z),p(Z,ee),p($,me),p($,ae),p(ae,oe),p($,fe),p($,se),p(se,le),p($,be),p($,W),W.innerHTML=U,p(G,ge),N=!0,ie||(_e=J(n,"click",e[4]),ie=!0)},p(y,h){e=y,(!N||h&1)&&o!==(o=e[11].nombre+"")&&T(s,o),(!N||h&1)&&g!==(g=`${e[11].fechaNacimiento} (${e[11].lugarNacimiento}) - ${e[11].fechaMuerte} (${e[11].lugarMuerte})`)&&T(_,g),(!N||h&1&&!O(u.src,w=e[11].imagen))&&i(u,"src",w),(!N||h&1&&F!==(F=e[11].nombre))&&i(u,"alt",F),(!N||h&1)&&S!==(S=e[11].descripcion+"")&&(z.innerHTML=S),h&2&&A(a,"hidden",!e[1]),(!N||h&1&&!O(n.src,q=e[8]))&&i(n,"src",q),e[1]?E?(E.p(e,h),h&2&&D(E,1)):(E=ye(e),E.c(),D(E,1),E.m(C.parentNode,C)):E&&(Le(),V(E,1,1,()=>{E=null}),je()),(!N||h&1)&&K!==(K=`${e[9]} (${e[12]})`)&&T(ee,K),(!N||h&1)&&Y!==(Y=`${e[13]} (${e[14]})`)&&T(oe,Y),(!N||h&1)&&Q!==(Q=e[15]+"")&&T(le,Q),(!N||h&1)&&U!==(U=e[10]+"")&&(W.innerHTML=U),h&2&&A(G,"hidden",!e[1])},i(y){N||(ze(()=>{m&&m.end(1),H=$e(n,he,{x:500,delay:300,duration:300}),H.start()}),D(E),N=!0)},o(y){H&&H.invalidate(),m=Fe(n,he,{x:-500,duration:200}),V(E),N=!1},d(y){y&&M(a),y&&M(d),y&&M(n),y&&m&&m.end(),y&&M(R),E&&E.d(y),y&&M(C),y&&M(G),ie=!1,_e()}}}function sa(t){let e,a=t[2][t[0]].nombre+"",r,l,o,s;return{c(){e=b("h1"),r=B(a),l=P(),o=b("img"),i(e,"class","svelte-1v4iisu"),A(e,"fullImageLabel",!0),O(o.src,s=t[2][t[0]].src)||i(o,"src",s),i(o,"alt",""),i(o,"class","svelte-1v4iisu"),A(o,"fullImage",!0)},m(c,f){L(c,e,f),p(e,r),L(c,l,f),L(c,o,f)},p(c,f){f&1&&a!==(a=c[2][c[0]].nombre+"")&&T(r,a),f&1&&!O(o.src,s=c[2][c[0]].src)&&i(o,"src",s)},d(c){c&&M(e),c&&M(l),c&&M(o)}}}function la(t){let e,a="<",r,l,o,s,c=[],f=new Map,g,_,j,k,v,u,w,F,I,z=[t[2][t[0]]];const S=d=>d[0];for(let d=0;d<1;d+=1){let n=ke(t,z,d),q=S(n);f.set(q,c[d]=Me(q,n))}return u=new We({props:{$$slots:{default:[sa]},$$scope:{ctx:t}}}),{c(){e=b("button"),r=B(a),o=P(),s=b("div");for(let d=0;d<1;d+=1)c[d].c();g=P(),_=b("button"),j=B(">"),v=P(),ce(u.$$.fragment),e.disabled=l=t[0]===0,i(e,"class","svelte-1v4iisu"),A(e,"anterior",!0),i(s,"class","svelte-1v4iisu"),A(s,"imgWrapper",!0),_.disabled=k=t[0]===t[2].length-1,i(_,"class","svelte-1v4iisu")},m(d,n){L(d,e,n),p(e,r),L(d,o,n),L(d,s,n);for(let q=0;q<1;q+=1)c[q].m(s,null);L(d,g,n),L(d,_,n),p(_,j),L(d,v,n),ue(u,d,n),w=!0,F||(I=[J(e,"click",t[5]),J(_,"click",t[7])],F=!0)},p(d,[n]){(!w||n&1&&l!==(l=d[0]===0))&&(e.disabled=l),n&23&&(z=[d[2][d[0]]],Le(),c=Re(c,n,S,1,d,z,f,s,Be,Me,null,ke),je()),(!w||n&1&&k!==(k=d[0]===d[2].length-1))&&(_.disabled=k);const q={};n&262145&&(q.$$scope={dirty:n,ctx:d}),u.$set(q)},i(d){if(!w){for(let n=0;n<1;n+=1)D(c[n]);D(u.$$.fragment,d),w=!0}},o(d){for(let n=0;n<1;n+=1)V(c[n]);V(u.$$.fragment,d),w=!1},d(d){d&&M(e),d&&M(o),d&&M(s);for(let n=0;n<1;n+=1)c[n].d();d&&M(g),d&&M(_),d&&M(v),pe(u,d),F=!1,we(I)}}}function ia(t,e,a){const r=[{nombre:"La batalla de Isos",descripcion:`Este magn\xEDfico cuadro forma parte de una serie de pinturas hist\xF3ricas encargadas por el duque b\xE1varo Guillermo IV (1493-1556) y por su esposa Jacoba a distintos pintores. Alejandro Magno (356-323 a.C) venci\xF3 al rey persa Dar\xEDo III en la batalla de Isos, en el a\xF1o 333 a.C. 
      <br/><br/>La escena se sit\xFAa ante un majestuoso paisaje que representa el Mediterr\xE1neo oriental con la isla de Chipre y Egipto a lo lejos. El macedonio, montado sobre un caballo de batalla protegido con una coraza, persigue al derrotado rey de los persas, que emprende la huida en su carro de guerra.
      El vencedor se halla en medio de de la inmensa turba de guerreros, justo debajo del cord\xF3n que cuelga en el centro de la tabla con la inscripci\xF3n. Los turbulentos nubarrones se hacen eco del fragor de la batalla y acent\xFAan el dramatismo de la escena. 
      Altdorfer renunci\xF3 a perfilar el contorno de las monta\xF1as y las nubes, para crear la sensaci\xF3n de fen\xF3meno natural ajeno a la realidad.`,src:Xe,autor:{nombre:"Albrecht Altdorfer",fechaNacimiento:"c. 1480",lugarNacimiento:"cerca de Ratisbona, Alemania",fechaMuerte:"12 de febrero de 1538",lugarMuerte:"Ratisbona, Sacro Imperio Romano Germ\xE1nico",descripcion:`Albrecht Altdorfer era hijo del pintor Ulrich Altdorfer. En 1505 se le concedi\xF3 la ciudadan\xEDa en Ratisbona como pintor de Amberg. En 1519 entr\xF3 a formar parte del ayuntamiento de la ciudad y en 1526 fue nombrado arquitecto municipal. 
          <br/><br/>Viaj\xF3 en varias ocasiones a Viena. Gracias a su desarrollo de las influencias ejercidas por el arte centroeuropeo e italiano, y en particular por Alberto Durero, Altdorfer se convirti\xF3 en uno de los principales maestros de la Escuela del Danubio.
          Se interes\xF3 sobre todo por el paisaje. Al principio aspir\xF3 a unificar naturaleza y figuras, pero en los \xFAltimos a\xF1os este af\xE1n desempe\xF1\xF3 un papel secundario o nulo. 
          <br/><br/>Es autor del primer cuadro puramente paisaj\xEDstico de la pintura europea. La reproducci\xF3n exacta de la realidad sirve de marco a visiones fant\xE1sticas situadas en un plano indefinido. 
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://www.alamy.es/foto-el-aquelarre-49854734.html" alt="Aquelarre" target="_blank">Aquelarre</a> (1506 - Museo del Louvre, Par\xEDs), 
          <a class="link" href="https://es.wikipedia.org/wiki/San_Jorge_en_el_bosque" alt="San Jorge en el bosque" target="_blank">San Jorge en el bosque</a> (1510 - Pinacoteca Antigua, M\xFAnich), <a class="link" href="https://es.wikipedia.org/wiki/Albrecht_Altdorfer#/media/Archivo:Albrecht_Altdorfer_037.jpg" alt="El ba\xF1o de Susana y la lapidaci\xF3n del viejo" target="_blank">El ba\xF1o de Susana y la lapidaci\xF3n del viejo</a>  (1526 - Pinacoteca Antigua, M\xFAnich).`,imagen:Ue},a\u00F1o:"1529",tipo:"\xD3leo sobre tabla",tama\u00F1o:"1,584m x 1,203m",lugarExposicion:"Pinacoteca Antigua, M\xFAnich"},{nombre:"El camino de Middelharnis",descripcion:"Esta obra magistral, ba\xF1ada de luz, reproduce una vista del pueblo de Middelharnis, en la provincia de Holanda Meridional. El a\xF1o de la realizaci\xF3n de la pintura, conocido a trav\xE9s de la firma, fue objeto de controversia. Sin embargo, se corresponde plenamente con la realidad, ya que el paseo se hizo en 1664 y el faro que sobresale al fondo a la izquierda se construy\xF3 en el a\xF1o 1682.",src:Ze,autor:{nombre:"Meindert Hobbema",fechaNacimiento:"1638",lugarNacimiento:"Amsterdam",fechaMuerte:"1709",lugarMuerte:"Amsterdam",descripcion:`Meindert Hobbema pas\xF3 toda su vida en Amsterdam. Se form\xF3 en el estudio del paisajista <a class="link" href="https://es.wikipedia.org/wiki/Jacob_van_Ruisdael" alt="Jacob van Ruisdael" target="_blank">Jacob van Ruisdael</a> a partir de 1657 aproximadamente. En 1668 asumi\xF3 el cargo municipal de inspector de pesas y medidas del vino y el aceite, ocupaci\xF3n que desempe\xF1\xF3 hasta el final de sus d\xEDas.
          <br/><br/>En ese mismo a\xF1o contrajo matrimonio y en lo sucesivo pint\xF3 s\xF3lo algunos cuadros que se caracterizan por sus excepcionales acabados. Hobbema pint\xF3 y dibuj\xF3 sobre todo paisajes boscosos, en los que inclu\xEDa a menudo molinos de agua, estanques y anchos caminos.
          <br/><br/>Su principal fuente de inspiraci\xF3n fueron las obras de Jacob van Ruisdael. Hacia mediados de la d\xE9cada de 1660 sus cuadros se vuelven m\xE1s claros, m\xE1s expresivos y luminosos, y su forma de pintar m\xE1s fluida.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://es.wahooart.com/Art.nsf/O/AQTSGX/$File/Meyndert-Hobbema-Farm-in-the-Woods.jpg" alt="Granja bajo los \xE1rboles" target="_blank">Granja bajo los \xE1rboles</a> (1662 - Museo del Louvre, Par\xEDs), 
          <a class="link" href="https://en.wikipedia.org/wiki/Meindert_Hobbema#/media/File:Wooded_Landscape_with_Farmsteds.jpg" alt="Paisaje boscoso con casas de campo" target="_blank">Paisaje boscoso con casas de campo</a> (1663 - Colecci\xF3n Wallace, Londres),
          <a class="link" href="https://de.wikipedia.org/wiki/Meindert_Hobbema#/media/Datei:Meindert_Hobbema_002.jpg" alt="Paisaje con molino de agua" target="_blank">Paisaje con molino de agua</a> (hacia 1665 - National Gallery, Londres)`,imagen:xe},a\u00F1o:"1689",tipo:"\xD3leo sobre lienzo",tama\u00F1o:"1,03m x 1,41m",lugarExposicion:"National Gallery, Londres"},{nombre:"Sublevaci\xF3n contra la ley de Mois\xE9s / Castigo de los rebeldes",descripcion:"Esta pintura clave del ciclo de Mois\xE9s representa tres escenas de la insubordinaci\xF3n de los hebreos contra la ley de Dios, presentada por Mois\xE9s y Aar\xF3n, as\xED como el castigo de los levitas desertores. A la derecha, Josu\xE9 protege a Mois\xE9s, al que quiere apedrear la multitud. En el centro, los hijos de Aar\xF3n y los levitas de Mois\xE9s luchan contra los sacerdotes. A la izquierda, la tierra se abre por orden de Mois\xE9s y engulle a los sublevados.",src:Ke,autor:{nombre:"Sandro Botticelli",fechaNacimiento:"1445",lugarNacimiento:"Florencia",fechaMuerte:"1510",lugarMuerte:"Florencia",descripcion:`Sandro Botticelli, llamado en realidad Alessandro di Mariano Filipepi, trabaj\xF3 preferentemente en su ciudad natal. En un principio se form\xF3 como orfebre y luego fue disc\xEDpulo de <a class="link" href="https://es.wikipedia.org/wiki/Fra_Filippo_Lippi" target="_blank" alt="Fra Filippo Lippi">Fra Filippo Lippi</a>.
          <br/><br/>Adem\xE1s, recibi\xF3 influencias de <a class="link" href="https://es.wikipedia.org/wiki/Antonio_Pollaiuolo" alt="Antonio del Pollaiuolo" target="_blank">Antonio del Pollaiuolo</a> y <a class="link" href="https://es.wikipedia.org/wiki/Verrocchio" alt="Andrea del Verrochio" target="_blank">Andrea del Verrochio</a>, as\xED como de <a class="link" href="https://es.wikipedia.org/wiki/Domenico_Ghirlandaio" alt="Ghirlandaio" target="_blank">Ghirlandaio</a> y <a class="link" href="https://es.wikipedia.org/wiki/Pietro_Perugino" alt="Perugino" target="_blank">Perugino</a> en una etapa posterior. El c\xEDrculo de humanistas creado entorno a <a class="link" href="https://es.wikipedia.org/wiki/Lorenzo_de_M%C3%A9dici" alt="Lorenzo de M\xE9dici" target="_blank">Lorenzo de M\xE9dici</a> supueso para \xE9l un importante apoyo.
          <br/><br/>Botticelli desarroll\xF3 una representaci\xF3n idealizada del mundo mitol\xF3gico, muy expresiva, arcaizante y llena de imaginaci\xF3n. Sus escenas po\xE9ticas y sensuales no son s\xF3lo expresi\xF3n de su esp\xEDritu renacentista, sino tambi\xE9n s\xEDmbolo del poder humano y de las relaciones pol\xEDticas.
          <br/><br/>Como pintor principal de Florencia, recibi\xF3 hacia 1482 el encargo de realizar tres grandes frescos para la Capilla Sixtina del Vaticano. Algunas obras importantes son: <a class="link" href="https://es.wikipedia.org/wiki/Piedad_(Botticelli,_Mil%C3%A1n)" alt="Piedad" target="_blank">Piedad</a> (1490 - Pinacoteca Antigua, M\xFAnich), 
          <a class="link" href="https://es.wikipedia.org/wiki/Retrato_de_Michele_Marullo_Tarcaniota" alt="Michele Marullo" target="_blank">Michele Marullo</a> (hacia 1490 - Colecci\xF3n Camb\xF3, Barcelona),
          <a class="link" href="https://es.wikipedia.org/wiki/Natividad_m%C3%ADstica" alt="Natividad m\xEDstica" target="_blank">Natividad m\xEDstica</a> (hacia 1500 - National Gallery, Londres)`,imagen:ea},a\u00F1o:"1481-1482",tipo:"Fresco",tama\u00F1o:"3,485m x 5,7m",lugarExposicion:"Capilla Sixtina, Vaticano"},{nombre:"La comida de los campesinos",descripcion:"La pintura de los Le Nain se caracteriza por el rigor t\xE9cnico, por el respeto que muestran hacia los campesinos y por el realismo con el que plasman sus miserables condiciones de vida durante el absolutismo. Resulta evidente la extrema pobreza de estos aldeanos, que se sientan a una mesa demasiado baja para compartir una comida insuficiente. Sus ropas est\xE1n desgarradas y no todos parecen tener zapatos.",src:Ye,autor:{nombre:"Louis Le Nain",fechaNacimiento:"1593",lugarNacimiento:"Laon",fechaMuerte:"1648",lugarMuerte:"Par\xEDs",descripcion:`Louis Le Nain, de cuyo periodo de aprendizaje no se sabe nada, lleg\xF3 a Par\xEDs en 1630 con sus hermanos Antoine (1588-1648) y Mathieu (1607-1677). En la capital francesa los tres hermanos regentaron un taller de pintur. Resulta muy dif\xEDcil diferenciar la obra de los tres hermanos, ya que realizaron muchos cuadros en com\xFAn.
          <br/><br/>Louis Le Nain, el m\xE1s brillante de los tres, recibi\xF3 el sobrenombre de <i>Le Romain</i> (el romano) a ra\xEDz de una estancia en Roma no documentada. En 1648 ingres\xF3 en la Real Academia de Pintura y Escultura. Adem\xE1s de algunos cuadros hist\xF3ricos, los hermanos Le Nain pintaron sobre todo escena de la vida en el campo, con las que crearon un importante contrapunto de la pintura cortesana.          
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://artsdot.com/ADC/Art.nsf/O/8XYFAF/$File/Antoine-Le-Nain-le-Nain-Brothers-Saint-Michael-dedicating-his-weapons-to-the-Virgin.JPG" alt="San Miguel presenta sus armas a la Virgen" target="_blank">San Miguel presenta sus armas a la Virgen</a> (entre 1633 y 1640 - St Pierre Nevers), 
          <a class="link" href="https://www.artehistoria.com/es/obra/la-carreta-0" alt="La carreta" target="_blank">La carreta</a> (1641 - Museo del Louvre, Par\xEDs),
          <a class="link" href="https://www.epdlp.com/cuadro.php?id=6874" alt="Venus en la fragua de Vulcano" target="_blank">Venus en la fragua de Vulcano</a> (1641 - Museo St. Denis, Reims)`,imagen:aa},a\u00F1o:"1642",tipo:"\xD3leo sobre lienzo",tama\u00F1o:"0,97m x 1,59m",lugarExposicion:"Museo del Louvre, Par\xEDs"},{nombre:"Joven mendigo / Ni\xF1o espulg\xE1ndose",descripcion:`El pintor sevillano Murillo es conocido ante todo por su pintura religiosa. Pero, como otros pintores barrocos espa\xF1oles (Jos\xE9 Ribera, Vel\xE1zquez), tambi\xE9n realiz\xF3 obras realistas. Entre ellas, sobresalen sus escenas infantiles de mendigos y pilluelos1\u200B Se ha apuntado la posibilidad de que esta obra fuera un encargo de mercaderes extranjeros en Sevilla, dado el gusto flamenco por las obras de g\xE9nero que reflejan la vida cotidiana. Igualmente, se ha indicado la posibilidad de que se pintara por influencia de los franciscanos, para quienes Murillo sol\xEDa trabajar.
        <br/><br/>La primera de estas representaciones de golfillos urbanos es este Joven mendigo despioj\xE1ndose. Puede ser un mendigo o un p\xEDcaro como el Lazarillo de Tormes (1554) o algunos personajes de las Ejemplares de Cervantes (1613).
        <br/><br/>Por todo acompa\xF1amiento, Murillo pinta un c\xE1ntaro de barro y un cesto con manzanas. En el suelo, restos de camarones u otros crust\xE1ceos. Forman un bodeg\xF3n por s\xED mismos. Gracias a ellos, demuestra su gran capacidad para pintar diferenciadamente materiales y texturas.
        <br/><br/>La escena est\xE1 iluminada con un fuerte claroscuro propio de la \xE9poca barroca, de influencia caravagiana. La luz proviene de la ventana que queda a la izquierda e incide plenamente en el cuerpo sentado del chico, dejando en penumbra el resto de la estancia.
        <br/><br/>La composici\xF3n, t\xEDpicamente barroca, est\xE1 dominada por ejes diagonales. En la gama crom\xE1tica prevalecen los colores amarillentos y casta\xF1os, desde los m\xE1s claros hasta los oscuros, casi negros.`,src:Qe,autor:{nombre:"Bartolom\xE9 Esteban Murillo",fechaNacimiento:"1617",lugarNacimiento:"Sevilla",fechaMuerte:"1682",lugarMuerte:"Sevilla",descripcion:`Bartolom\xE9 Esteban Murillo es el principal representante del Barroco sevillano y uno de los pintores m\xE1s renombrados de Espa\xF1a. Comenz\xF3 su formaci\xF3n en 1627 con <a class="link" href="https://es.wikipedia.org/wiki/Juan_del_Castillo_(pintor)" alt="Juan del Castillo" target="_blank">Juan del Castillo</a>.
          <br/><br/>En un principio se inspir\xF3 en el estilo de <a class="link" href="https://es.wikipedia.org/wiki/Francisco_de_Zurbar%C3%A1n" alt="Francisco de Zurbar\xE1n " target="_blank">Francisco de Zurbar\xE1n</a> y <a class="link" href="https://es.wikipedia.org/wiki/Jos%C3%A9_de_Ribera" alt="Jos\xE9 de Ribera" target="_blank">Jos\xE9 de Ribera</a>, pero m\xE1s tarde, alrededor de 1650 se orient\xF3 hacia las obras de Anthonis van Dyck, Pedro Pablo Rubens y Rafael. 
          <br/><br/>Murillo desarroll\xF3 entonces el llamado <i>estilo vaporoso</i>, de suaves contornos, colores p\xE1lidos y velos de luz dorados o plateados. Casi todas sus obras son cuadros religiosos o escenas de g\xE9nero. Trabaj\xF3 fundamentalmente en Sevilla, donde fue confundador de la Academia de Arte en 1660.
          <br/><br/>Algunas obras importantes son: <a class="link" href="https://es.wikipedia.org/wiki/Ni%C3%B1os_comiendo_uvas_y_mel%C3%B3n" alt="Ni\xF1os comiendo uvas y mel\xF3n" target="_blank">Ni\xF1os comiendo uvas y mel\xF3n</a> (entre 1645 y 1646 - Pinacoteca Antigua, M\xFAnich), 
          <a class="link" href="https://www.artehistoria.com/es/obra/la-cocina-de-los-%C3%A1ngeles" alt="La cocina de los \xE1ngeles" target="_blank">La cocina de los \xE1ngeles</a> (1646 - Museo del Louvre, Par\xEDs),
          <a class="link" href="https://es.artprice.com/plaza-de-mercado/2070629/francisco-antolinez-y-sarabia/pintura/aparicion-del-nino-jesus-a-san-antonio-de-padua" alt="La aparici\xF3n del Ni\xF1o Jes\xFAs a San Antonio de Padua" target="_blank">La aparici\xF3n del Ni\xF1o Jes\xFAs a San Antonio de Padua</a> (1656 - Catedral de Sevilla)`,imagen:oa},a\u00F1o:"hacia 1650",tipo:"\xD3leo sobre lienzo",tama\u00F1o:"1,37m x 1,15m",lugarExposicion:"Museo del Louvre, Par\xEDs"}];let l=0,o=!1;Je(()=>{console.log("LOADED")});const s=j=>{o?(a(1,o=!1),setTimeout(()=>{a(0,l+=j)},500)):a(0,l+=j)};return[l,o,r,s,()=>{a(1,o=!o)},()=>s(-1),()=>He().open(),()=>s(1)]}class ra extends ne{constructor(e){super();te(this,e,ia,la,de,{})}}function na(t){let e,a,r,l,o;return a=new ra({}),{c(){e=b("main"),ce(a.$$.fragment),r=P(),l=b("link"),i(e,"class","svelte-1c0xq4"),i(l,"href","https://fonts.googleapis.com/css?family=Gelasio"),i(l,"rel","stylesheet")},m(s,c){L(s,e,c),ue(a,e,null),L(s,r,c),p(document.head,l),o=!0},p:Ae,i(s){o||(D(a.$$.fragment,s),o=!0)},o(s){V(a.$$.fragment,s),o=!1},d(s){s&&M(e),pe(a),s&&M(r),M(l)}}}class ta extends ne{constructor(e){super();te(this,e,null,na,de,{})}}new ta({target:document.getElementById("app")});
