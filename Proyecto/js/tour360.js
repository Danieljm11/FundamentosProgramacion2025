// variables controladoras
var panorama, viewer, container, infospot;

// obtener una referencia al contenedor donde se mostrara la escena 3D
container = document.querySelector('#container_principal');

// cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/test.jpg');

// El valor 50 es el radio del infospot. El infospot es un marcador interactivo que aparece en la escena y puede mostrar informacion o contenido adicional cuando el usuario interactua con el
// El radio del infospot determina el area de interaccion con el usuario.
// Crea y agrega el primer infospot

// ZONA INTERACCION #1
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Seccion de martillos en donde podra encontrar su herramienta perfecta para cualquiera de sus necesidades, aseguradas por las mejores marcas a nivel mundial. <a href="taladros.html">Haga click aqui</a> para dirigirse a nuestra seccion de martillos', -60);

infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Seccion de martillos en donde podra encontrar su herramienta perfecta para cualquiera de sus necesidades, aseguradas por las mejores marcas a nivel mundial. <a href="taladros.html">Haga click aqui</a> para dirigirse a nuestra seccion de martillos" </div>';

panorama.add(infospot1);

// ZONA INTERACCION #3
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot3.position.set(500 ,189 , 136);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot3.addHoverText('', -60);

// insertar video

infospot3.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Seccion de taladros especializados para cumplir con sus objetivos. <a href="taladros.html">Haga click aqui</a> para dirigirse a nuestra seccion de taladros" </div>';

panorama.add(infospot3);

// Agrega la panoramica al visor
viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama);