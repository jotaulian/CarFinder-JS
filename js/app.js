/* VARIABLES */
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};


/* EVENTOS: */
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); // Muestra los autos al cargar 

    // LLena las opciones de los años:
    llenarSelect()
})

// Event Listeners para los select de busqueda:
//Marca
marca.addEventListener('change', e => {
datosBusqueda.marca = e.target.value;
filtrarAuto();
})
//Año
year.addEventListener('change', e => {
datosBusqueda.year = e.target.value;
filtrarAuto();
})
//Precio Min
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})
//Precio Max
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
// Puertas
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
})
// Transmision
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
// Color
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

/* FUNCIONES */
function mostrarAutos(autos){
    limpiarHTML();
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = `${marca} ${modelo} - Año: ${year} - ${puertas} puertas - ${transmision} - USD ${precio} - ${color}`;

        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function limpiarHTML(){
while(resultado.firstChild){
    resultado.removeChild(resultado.firstChild);
}
}

//Genera los años del select:
function llenarSelect(){
    for(let i=max; i>=min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //en cada ciclo agrega la opcion que acaba de crear
    }
}

//Función que filtra en base a la busqueda
function filtrarAuto(){
const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMin ).filter( filtrarMax ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
// console.log(resultado);

mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto){
    const { year } = datosBusqueda;
    if(year){
        return auto.year === parseInt(year); // Comparamos String con String
    }
    return auto;
}
function filtrarMin(auto){
const { minimo } = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrarMax(auto){
const { maximo } = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if(puertas){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}
function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const { color } = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}