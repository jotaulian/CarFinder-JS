//Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;



//Eventos:
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(); // Muestra los autos al cargar 

    // LLena las opciones de los años:
    llenarSelect()
})

// Funciones:
function mostrarAutos(){
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        autoHTML.textContent = `${marca} ${modelo} - Año: ${year} - ${puertas} puertas - ${transmision} - USD ${precio} - ${color}`;

        resultado.appendChild(autoHTML);
    });
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
