var operandoa;
var operandob;
var operacion;



function init(){
    
    
    // variables
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual")
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var cuadrado = document.getElementById("cuadrado");
    var inversa = document.getElementById("inversa");
    var raiz = document.getElementById("raiz");
    var elevado = document.getElementById("elevado");
    var punto = document.getElementById("punto");
    var enter = document.getElementById("enter");
    var basededos = document.getElementById("basededos");
    var number = document.getElementById("n!");
    var nmas = document.getElementById("n+");



    //eventos
        uno.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "1";
        }
        dos.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "2";
        }
        tres.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "3";
        }
        cuatro.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "4";
        }
        cinco.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "5";
        }
        seis.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "6";
        }
        siete.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "7";
        }
        ocho.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "8";
        }
        nueve.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "9";
        }
        cero.onclick = function(e)
        {
            resultado.textContent = resultado.textContent + "0";
        }
        //funciones
        reset.onclick = function(e)
        {
            resetear();
        }
        suma.onclick = function(e)
        {
            operandoa=resultado.textContent;
            operacion="+";
            limpiar();
        }
        resta.onclick = function(e)
        {
             operandoa=resultado.textContent;
             operacion="-";
            limpiar();
        }
        multiplicacion.onclick = function(e)
        {
            operandoa=resultado.textContent;
            operacion="*";
            limpiar();
        }
        division.onclick = function(e)
        {
             operandoa=resultado.textContent;
             operacion="/";
            limpiar();
        }  
        igual.onclick = function(e)
        {
                operandob=resultado.textContent;
                resolver();
        }
        cuadrado.onclick= function(e)
        {
            operandoa =resultado.textContent;
            operacion ="x2";
            limpiar();
        }
        inversa.onclick=function(e)
        {
            operandoa= resultado.textContent;
            operacion ="1/x";
            limpiar();
        }      
        raiz.onclick =function(e)
        {
            operandoa= resultado.textContent;
            operacion="rais";
            limpiar();
        }
        elevado.onclick=function(e)
        {
            operandoa =resultado.textContent;
            operacion ="xy";
            limpiar();
        }
        punto.onclick=function(e)
        {
            resultado.textContent +="."
        }
        enter.onclick=function(e)
        {
            operandoa=resultado.textContent;
            operacion="|";
            limpiar();
        }
        basededos.onclick=function(e)
        {
            operandoa=resultado.textContent;
            operacion="2x";
            limpiar();
        }
        number.onclick=function(e)
        {
            operandoa=resultado.textContent
            operacion="n!";
            limpiar();
        }
        nmas.onclick=function(e)
        {
            operandoa=resultado.textContent;
            operacion="n+";
            limpiar();
        }
}
function limpiar()
{ 
    resultado.textContent = "";
}
function resetear()
{
    resultado.textContent ="";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver()
{
    var res = 0;
    var f =1;
    var s = 0;
    console.log("vas bien");
    
    switch(operacion)
    {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
             break;
        case "-":
             res = parseFloat(operandoa) - parseFloat(operandob);
              break;  
        case "*":
              res = parseFloat(operandoa) * parseFloat(operandob);
               break; 
        case "/":
               res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        case "x2":
            res = parseFloat(operandoa)  * parseFloat(operandoa);
                break;
        case "1/x":
            res = (1) / parseFloat(operandoa);
             break;
        case "rais":
            res = Math.sqrt(parseFloat(operandoa));
            break;
        case "xy":
            res = Math.pow(parseFloat(operandoa), parseFloat(operandob));
            break;
        case "|":
        let entero = Math.trunc(operandoa);
             if (parseFloat(operandoa) >= parseFloat(entero + 0.5)) {
            res= Math.ceil(parseFloat(operandoa));}
            else 
               {
            res= Math.round(parseFloat(operandoa));
        }
            break;
        case "2x":
            res = Math.pow(2 , parseFloat(operandoa));
            break;
        case "n!":
                for (let x=1; x<=parseFloat(operandoa); x++ )
                {
                    f = ( x * f); 
                }
                res = (f);
                break;
        case "n+":
                for (let x=1; x<=parseFloat(operandoa); x++ )
                {
                    s = (s + x);
                }
              res = (s);
              break;
    }
    resetear();
    resultado.textContent = res;
}