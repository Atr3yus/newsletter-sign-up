function enviar(){
    validaEmail();
    //window.location="sucess.html";
}

function validaEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}




function retorna(){
    window.location="index.html"
}