// variables controladoras
var panorama, viewer, container, infospot;

// obtener una referencia al contenedor donde se mostrara la escena 3D
container = document.querySelector('#container_principal');

// cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/panoramica360.jpg');

// El valor 50 es el radio del infospot. El infospot es un marcador interactivo que aparece en la escena y puede mostrar informacion o contenido adicional cuando el usuario interactua con el
// El radio del infospot determina el area de interaccion con el usuario.
// Crea y agrega el primer infospot

// ZONA INTERACCION #1
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Del latín campus («llanura», «espacio de batalla»), la palabra campo se refiere a un terreno de grandes dimensiones que se encuentra alejado de una ciudad o de un pueblo o a la tierra que puede labrarse. El concepto también se utiliza en referencia a un cultivo o sembradío.', -60);

infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Del latín campus («llanura», «espacio de batalla»), la palabra campo se refiere a un terreno de grandes dimensiones que se encuentra alejado de una ciudad o de un pueblo o a la tierra que puede labrarse. El concepto también se utiliza en referencia a un cultivo o sembradío." </div>';

panorama.add(infospot1);

// ZONA INTERACCION #2
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot2.position.set(1000, -100, 1000);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot2.addHoverText('Camino público, ancho y espacioso, pavimentado y dispuesto para el tránsito de vehículos. Creada para faciliar el movimiento de los mismo y mejorar su paso por la via', -60);

infospot2.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Camino público, ancho y espacioso, pavimentado y dispuesto para el tránsito de vehículos. Creada para faciliar el movimiento de los mismo y mejorar su paso por la via" </div>';

panorama.add(infospot2);

// ZONA INTERACCION #3
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot3.position.set(500 ,189 , 136);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot3.addHoverText('', -60);

// insertar video

infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/5p_SuO96Jd4?si=2hP6IPMmyfj2nsXU"></iframe>
    </div>
`;    

panorama.add(infospot3);

// ZONA INTERACCION #4
var infospot4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
infospot4.position.set(500 ,-342 , -187);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot4.addHoverText('Lago es una masa permanente de agua que se halla depositada en las depresiones de un terreno. La formación de un lago -término procedente del latín lacus– se produce a partir de fallas geológicas (que generan la depresión del terreno), de la acumulación de morrenas glaciares (acumulación de piedras y barro) o de la obstrucción de un valle a causa de avalanchas producidas en sus laderas.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Lago es una masa permanente de agua que se halla depositada en las depresiones de un terreno. La formación de un lago, término procedente del latín lacus, se produce a partir de fallas geológicas (que generan la depresión del terreno), de la acumulación de morrenas glaciares (acumulación de piedras y barro) o de la obstrucción de un valle a causa de avalanchas producidas en sus laderas." </div>';

panorama.add(infospot4);

// ZONA INTERACCION #5
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(265, 30, 800);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('Ciudad, del latín civitas, es el área urbana que presenta una alta densidad de población, conformada por habitantes que no suelen dedicarse a las actividades agrícolas. La diferencia entre las ciudades y otras entidades urbanas está dada por la densidad poblacional, el estatuto legal u otros factores.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Ciudad, del latín civitas, es el área urbana que presenta una alta densidad de población, conformada por habitantes que no suelen dedicarse a las actividades agrícolas. La diferencia entre las ciudades y otras entidades urbanas está dada por la densidad poblacional, el estatuto legal u otros factores." </div>';

panorama.add(infospot5);

// ZONA INTERACCION #6 AUDIO
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-85 ,159 , 500);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot6.addHoverText('', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/sonido-viento.mp3" type="audio/mpeg"></audio></div>';

panorama.add(infospot6);

// ZONA INTERACCION #7
var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(500 ,81 , -466);
// -60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot7.addHoverText('Una montaña es una elevación natural de gran altura. Se trata de una prominencia que irrumpe en la superficie terrestre y que alcanza una altura mínima de 700 metros; cuando mide menos, recibe el nombre de colina o cerro.', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> "Una montaña es una elevación natural de gran altura. Se trata de una prominencia que irrumpe en la superficie terrestre y que alcanza una altura mínima de 700 metros; cuando mide menos, recibe el nombre de colina o cerro." </div>';

panorama.add(infospot7);



// Agrega la panoramica al visor
viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama);