const registroN = document.querySelector('.registroN');
const cerrar = document.querySelector('#cerrar');
const modal = document.querySelector('.modal');
const resultados = document.getElementById('resultados');
const resulNotas = document.querySelector('.resulNotas');
const calculando = document.querySelector('.calculando');


let id = 1;
// let eliminar ="";
// let editar='';

const parciales = {
    id:'',
    nombre:'',
    nota1:'',
    nota2:'',
    nota3:'',
    definitiva:''
};


const boton = (nombre,nota1,nota2,nota3) => {
    let notas = [nota1, nota2, nota3];
    notDefinitiva = nueva(notas,porcentaje);
    
    parciales.nombre=nombre
    parciales.nota1=nota1;
    parciales.nota2=nota2;
    parciales.nota3=nota3;
    parciales.definitiva=notDefinitiva;
    parciales.id=id++;
    
    modal.close();
    esperando();

    setTimeout(() => {
        impNotas();

        const eliminar = document.getElementById('eliminar');
        const editar = document.getElementById('editar');
        
        resulNotas.addEventListener('click', (e)=>{

            console.log(e.target);
        });
    
    }, "2000");
    
    };

    const porcentaje= (suma)=>{
        let p1 = suma[0] *0.03
        let p2 = suma[1] *0.03
        let p3 = suma[2] *0.03
        let mostrar = [p1, p2, p3];
        return mostrar;
    };

const nueva = (notas) => {
    let suma = 0;
    notas.forEach(nota => ( suma += nota));
suma = suma / notas.length ;

return suma;
};

//Abrir modal notas
registroN.addEventListener('click', ()=>{
    modal.showModal();
});
//cerrar modal notas
cerrar.addEventListener('click', ()=>{
    modal.close();
});

//registrar notas
const impNotas = ()=>{
    let nuevoR = document.createElement('tr');
    nuevoR.innerHTML=`<td>${parciales.id}</td> <td>${parciales.nombre}</td> <td>${parciales.nota1}</td>
    <td>${parciales.nota2}</td> <td>${parciales.nota3}</td> <td>${parciales.definitiva}</td> <td><span id="eliminar" class="material-symbols-outlined">delete_forever</span> <span class="material-symbols-outlined" id="editar">edit</span></td>`;

    resulNotas.appendChild(nuevoR);
    resultados.style='display: block'
};

//Esperar para calcular la nota
const esperando = ()=>{
    calculando.innerHTML='';    
    let mensaje = document.createElement('p');
    mensaje.innerHTML=`<span class="mCalculando">Calculando .... un momento por favor</span>`;
    setTimeout(() => {
    calculando.innerHTML="";
    }, "2000");
    calculando.appendChild(mensaje);
};


//Eliminar un registro
const borrar = (id) => {
    let elemento = document.getElementById(id);
    console.log(elemento.target);

    // elemento.parentNode.removeChild(elemento);
};
