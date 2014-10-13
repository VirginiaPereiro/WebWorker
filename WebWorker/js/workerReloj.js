function calcularHora() {
    var hora = new Date();
    var horaTexto = hora.getHours()+ ":" + hora.getMinutes() + ":" + hora.getSeconds();

    postMessage(horaTexto);
    setTimeout("calcularHora()", 1000);//ejecuta la función de una forma defirida
                                    //esperas un segundo y vuelves a ejecutarlo.
}

calcularHora();