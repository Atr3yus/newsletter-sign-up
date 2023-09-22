const form = document.querySelector("#form");
const emailBox = document.querySelector("#email-box");
const invalidMail = document.querySelector("#invalidMail");
const inpu = document.querySelector("#email-box");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(emailBox.value === "" || !validaEmail(emailBox.value)){
        
        invalidMail.style.display = "block";
        inpu.style.backgroundColor = "rgba(231, 67, 67, 0.2)";
        emailBox.classList.add('erro'); //add o atributo erro no css para mudar a cor do placeholder
        return;
    }else{
        window.location="sucess.html";
    }
})

function retorna(){
    window.location="index.html"
}

function validaEmail(email){

    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);

}      
   