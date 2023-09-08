const registroN = document.querySelector('.registroN');
const cerrar = document.querySelector('#cerrar');
const modal = document.querySelector('.modal');
const resultados = document.getElementById('resultados');




const boton = (nota1,nota2,nota3) => {
    let notas = [nota1, nota2, nota3];
    notDefinitiva = nueva(notas,porcentaje);

    console.log(notas);
    console.log(notDefinitiva);

    };

function porcentaje(suma){
    let p1 = suma[0] *0.03
    let p2 = suma[1] *0.03
    let p3 = suma[2] *0.03
    let mostrar = [p1, p2, p3];
    return mostrar;
    
};
const nueva = (notas,porcentaje) => {
    let suma = 0;
    notas.forEach(nota => ( suma += nota));
suma = suma / notas.length ;

console.log(porcentaje(notas));

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
