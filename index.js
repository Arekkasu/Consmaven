console.log("RUNNING");

function Imprimiemail(){

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


