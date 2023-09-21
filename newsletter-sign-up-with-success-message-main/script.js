const form = document.querySelector("#form");
const emailBox = document.querySelector("#email-box");
const invalidMail = document.querySelector("#invalidMail");
const inpu = document.querySelector("#email-box");


form.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(emailBox.value === ""){
        
        invalidMail.style.display = "block";
        inpu.style.backgroundColor = "rgba(231, 67, 67, 0.2)";
        

        return;
    }else{
        window.location="sucess.html";
    }
})

function validaEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function retorna(){
    window.location="index.html"
}

