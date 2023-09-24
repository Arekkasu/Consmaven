const Regexpr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

function Imprimiemail(){


    /*
    *SE SELECCIONAN DIRECTAMENTE EN LA FUCION LOS VALORES DE LOS INPUTS, YA QUE SI SE INICIALIZA ANTES ESTE VALOR
    *SERIA NULO Y DARIA ERRORES AL USARLO EN LA FUNCION DONDE EL IF NO FUNCIONARIA Y DARIA ERROR DE TIPADO
    * 
    */
    let email = document.querySelector("#email-adress");
    let advertencia = document.querySelector("#warning");
    let text_area = document.querySelector("#text-area");

    if (!Regexpr.test(email.value)){
        let text = "Email Invalido"

        advertencia.innerHTML = text;
        advertencia.style.visibility = "visible";

        


        alert("Email Invalido, Por favor ingresa un email valido");
        
        return false
    
    }
    else{
        alert(`Email: ${email.value}
        Text-area: ${text_area.value}`);
        return true
    }

}


