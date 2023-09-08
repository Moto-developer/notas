
datos.addEventListener('click',()=>{
    const mes = document.getElementById('mes');
    const año = document.getElementById('año');
    const gana = document.getElementById('gana');
    const pierde = document.getElementById('pierde');
    const competencia = document.getElementById('competencia');
    const result = document.getElementById('resultado');

    if(gana.checked ){
        result.innerHTML = `El resultado es: Mes ${mes.value}, Año ${año.value}, Resultado ${gana.value}, Curso ${competencia.value}`;
    }
        else if (pierde.checked){
            result.innerHTML = `El resultado es: Mes ${mes.value}, Año ${año.value}, Resultado ${pierde.value}, Curso ${competencia.value}`;
        }
});



// function datosT (mes, año, fecha, competencia,gp){
//     resultado2.innerHTML = `El resultado es: Mes ${mes}, Año ${año}, Resultado ${gp}, Curso ${competencia}`;
// };


// function datosT (mes, año, fecha, competencia,gp){
// nuevosDatos = [mes, año, fecha, competencia, gp];

// mostrar(nuevosDatos);
// };

// function mostrar (nuevosDatos){

// console.log(nuevosDatos);

// };


    // SACAR SOLO FECHA
function datosT (mes, año, fecha, competencia,gp){
nuevosDatos = [mes, año, fecha, competencia, gp];
let fec = nuevosDatos[2];

mostrar(fec);
return fec;

};

function mostrar (fec){

console.log(fec);
console.log(dividir(fec));
const mes=dividir(fec)
console.log(convertir(mes));
};

function dividir(fec){
let fechaC = fec.split('-');
let mes = fechaC[1];

return mes;
};

function convertir (mes){
    switch (mes){
        case '01':
            console.log('Enero');
            break
        case '02':
            console.log('Febrero');
            break
        case '03':
            console.log('Marzo');
            break
        case '04':
            console.log('Abril');
            break
        case '05':
            console.log('Mayo');
            break
        case '06':
            console.log('Junio');
            break
        case '07':
            console.log('Julio');
            break
        case '08':
            console.log('Agosto');
            break
        case '09':
            console.log('Septiembre');
            break
        case '10':
            console.log('Octubre');
            break
        case '11':
            console.log('Noviembre');
            break
        case '12':
            console.log('Diciembre');           
    };
};


const competencia = document.getElementById('competencia').value;
if(competencia==="Diseño"){
const resulD = document.getElementById('resultadoD');
resulD.style={display:true}
}

console.log(competencia);
