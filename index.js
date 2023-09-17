console.log("RUNNING");

function Imprimiemail(){


    /*
    *SE SELECCIONAN DIRECTAMENTE EN LA FUCION LOS VALORES DE LOS INPUTS, YA QUE SI SE INICIALIZA ANTES ESTE VALOR
    *SERIA NULO Y DARIA ERRORES AL USARLO EN LA FUNCION DONDE EL IF NO FUNCIONARIA Y DARIA ERROR DE TIPADO
    * 
    */
    let email = document.querySelector("#email-adress");
    let advertencia = document.querySelector("#warning");
    let text_area = document.querySelector("#text-area");

    if( email.value === "" || email.value === null || text_area === "" || text_area === null){
        advertencia.style.visibility = "visible";
        alert("Ingresa o Rellene correctamente los datos");
    }
    else{
        alert(`Email: ${email.value}
Text-area: ${text_area.value}`);
    }

}


