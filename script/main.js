/*

*/
document.addEventListener('DOMContentLoaded', () => {


    //querySelector 
    const divBotones = document.querySelector('#containerBotones');
    const divImg = document.querySelector('#containerImagenes');
    const todasBot = document.querySelector('#todas')
    const de90Bot = document.querySelector('#de90')
    const de00Bot = document.querySelector('#de00')
    const thrillerBot = document.querySelector('#thriller')
    const dramaBot = document.querySelector('#drama')
    const animacionBot = document.querySelector('animacion')
    const estoBot = document.querySelector('esto')
    const fragment = document.createDocumentFragment();
    //VARIABLES
    //array de botones
    const botones = [todasBot, de90Bot, de00Bot, thrillerBot, dramaBot, animacionBot, estoBot];

    //este array de ira llenando con la funcion de encontrar imagenes
    const almacenImg = [];
    const pelis = [
        { nombrePeli: 'de00_animacion_drama', clase: ['todas'], alt:'Mary and Max'},
        { nombrePeli: 'de00_animacion', clase: ['todas', 'de00', 'animacion'], alt:'Shrek' },
        { nombrePeli: 'de00_drama', clase: 'todas de00 drama', alt:'Ciudad de Dios' }, 
        { nombrePeli: 'de00_thriller', clase: 'todas de00 thriller', alt:'Mystic River' },
        { nombrePeli: 'de90_drama', clase: 'todas de90 drama', alt:'Cadena Perpetua' },
        { nombrePeli: 'de90_thriller', clase: 'todas de90 thriller', alt:'Fargo' }
    ]
    //const arrayImagenes = ['de00_animacion_drama','de00_animacion','de00_drama','de00_thriller','de90_drama','de90_thriller'];
    //const arrayClases = ['todas','de00','de90','thriller','drama','animacion']

    //EVENTOS BOTONES
    todasBot.addEventListener('click', ({ target }) => {
        const claseboton = target.className;
        const encontrada = pelis.find( peli => peli.clase.includes(claseboton));
        almacenImg.push(encontrada);
        console.log(encontrada);
        PintarImagenes();
    })

    //Pintar
    //pintarBotones
    //encontrarImagenes


    
    //pintarImagenes
    //imagen = '<img src="/img/loader.gif" alt="cargando..." />'
    //images\de00_animacion_drama.jpg
    //`<img src="images\${arrayImagenes[].jpg}"`
    const PintarImagenes = () => {
        //encontrar las imagenes que contengan la misma clase que los botones
        almacenImg.forEach(({nombrePeli,clase,alt}) => {
            const imagenes = document.createElement('img');
            imagenes.src = `images/${nombrePeli}.jpg`;
            imagenes.className = {clase};
            imagenes.alt = {alt};
            divImg.append(imagenes);

        })
    }
})