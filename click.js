const profisional = window.document.getElementById('prof');
/*var hard = window.document.getElementById('hard');
var soft = window.document.getElementById('soft');
var cont = window.document.getElementById('contatos');*/
const pessoal = window.document.getElementById('pessoal');
function clicar(){
    window.location = "pessoal.html";
}
function entrar(){
    pessoal.style.backgroundColor = 'transparent';
    pessoal.style.color = 'white';
    pessoal.style.border='1px solid blue';
}
function sair(){
    pessoal.style.backgroundColor = 'transparent';
    pessoal.style.color = 'white';
    pessoal.style.border = '1px solid white';
}
function clicar2(){
    window.location = "profissional.html";
}
function entrar2(){
    profisional.style.backgroundColor = 'transparent';
    profisional.style.color = 'white';
    profisional.style.border ='1px solid green';
}
function sair2(){
    profisional.style.backgroundColor = 'transparent';
    profisional.style.color = 'white';
    profisional.style.border = ' 1px solid white';
}
    
/*function enter(){
    if(hard){
        hard.style.backgroundColor = 'transparent';
        hard.style.color = 'white';
        hard.style.border = '1px solid blue';
    }
    else if(cont){
        cont.style.backgroundColor = 'transparent';
        cont.style.color = 'white';
        cont.style.border = '1px solid blue';
    }
    else if(soft){
        soft.style.backgroundColor = 'transparent';
        soft.style.color = 'black';
        soft.style.border = '1px solid blue';
    }
}

function exit(){    
    if(hard){
        hard.style.backgroundColor = 'transparent';
        hard.style.color = 'white';
        hard.style.border = '1px solid white';
    }
    else if(cont){
        cont.style.backgroundColor = 'transparent';
        cont.style.color = 'white';
        cont.style.border = '1px solid white';
    }
    else if(soft){
        soft.style.backgroundColor = 'transparent';
        soft.style.color = 'black';
        soft.style.border = '1px solid black';
    }
}*/