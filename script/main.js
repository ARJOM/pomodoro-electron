var inter;
function iniciar(){
   inter =  setInterval(function(){ 
        localDate = new Date();
        var hora = document.getElementById('interval'). value = localDate.toLocaleTimeString();
        hora.toLocaleTimeString();
    },
    1000);
}
function parar(){
    clearInterval(inter);
}