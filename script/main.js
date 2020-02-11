minutos = 0;
minutosD = 5;
segundos = 10;
var inter;

function load(){
    if(segundos/10<1){
        segundos = "0"+segundos;
    }
    if(minutos/10<1){
        minutos = "0"+minutos;
    }
    document.getElementById("interval").value =  minutos+":"+segundos;

    segundos = parseInt(segundos);
    minutos = parseInt(minutos);
}

function iniciar(){
    document.getElementById("start").disabled = true;
    inter = setInterval(function(){
        crono = document.getElementById("crono");

        if (segundos == 0){
            minutos -= 1;
            segundos = 60; 
        }
        segundos -= 1;

        load();

        if (minutos==0 && segundos==0){
            clearInterval(inter);
            zerar();
            alert("O tempo acabou");
        }

    }, 1000);
}

function pausar(){
    clearInterval(inter);
}

function zerar(){
    minutos = 25;
    segundos = 0; 
    document.getElementById("interval").value =  minutos+":"+segundos;
}