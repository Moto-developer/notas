
    function miNota (nota1,nota2,nota3) {

        arregloNotas = [nota1,nota2,nota3];

        calcular(arregloNotas);
    };
    
    function calcular (arregloNotas) {

        arregloNotas.forEach(element => {
            console.log(element);
            let resultado=(element+suma)/arregloNotas.length;
            let suma = resultado
            console.log(resultado);
        });


        let notaDefinitiva = 3;
        return notaDefinitiva
    };

    miNota();




    // //CALL BACK TRABAJO CON FUNCIONES
    // function general(){
    //     alert('Mi función'); //ejecuta una alerta
    //     funcion1(funcion2);// llama una funcion que tiene como parámetro otra función
    // };

    // function funcion1(funcionX){
    //     funcionX();
    // };

    // function funcion2(){
    //     alert('Mi funcion interna');
    // };

    // general();

    

    

