function posicionarElementoEnTabla( tablaObj, nroFila, nroColumna, elemento )
{
	/*Acceso a una posición específica de la tabla (fila,columna)
	tabla.childNodes[0].childNodes[nroFila]
	tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

	//Añade el elemento recibido
	tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}
	
//Creación de todos los elementos necesarios en la interfaz gráfica
let button0 = document.createElement("button");
button0.innerText = "0";
button0.classList.add("bluebuttons");

let button1 = document.createElement("button");
button1.innerText = "1";
button1.classList.add("bluebuttons");

let button2 = document.createElement("button");
button2.innerText = "2";
button2.classList.add("bluebuttons");

let button3 = document.createElement("button");
button3.innerText = "3";
button3.classList.add("bluebuttons");

let button4 = document.createElement("button");
button4.innerText = "4";
button4.classList.add("bluebuttons");

let button5 = document.createElement("button");
button5.innerText = "5";
button5.classList.add("bluebuttons");

let button6 = document.createElement("button");
button6.innerText = "6";
button6.classList.add("bluebuttons");

let button7 = document.createElement("button");
button7.innerText = "7";
button7.classList.add("bluebuttons");

let button8 = document.createElement("button");
button8.innerText = "8";
button8.classList.add("bluebuttons");

let button9 = document.createElement("button");
button9.innerText = "9";
button9.classList.add("bluebuttons");

let buttonsuma = document.createElement("button");
buttonsuma.innerText= "+";
buttonsuma.classList.add("greenbuttons");

let buttonresta = document.createElement("button");
buttonresta.innerText= "-";
buttonresta.classList.add("greenbuttons");

let buttonmulti = document.createElement("button");
buttonmulti.innerText="*";
buttonmulti.classList.add("greenbuttons");

let buttondivi = document.createElement("button");
buttondivi.innerText="/";
buttondivi.classList.add("greenbuttons");

let buttonigual = document.createElement("button");
buttonigual.innerText="=";
buttonigual.classList.add("yellowbuttons");

let buttondecimal = document.createElement("button");
buttondecimal.innerText=".";
buttondecimal.classList.add("bluebuttons");

let buttonclear = document.createElement("button");
buttonclear.innerText= "Borrar";
buttonclear.classList.add("redbuttons");


let display = document.createElement("input");
display.type="text";
display.placeholder="0";
display.classList.add("inputx");


//Creación de los elementos de layout
let tabla = document.createElement("table");

for ( let i = 0; i<4; i++)
{
	let filaActual = tabla.insertRow();

	for( let c = 0; c<4; c++ )
	{
		filaActual.insertCell();
	}
}

let lastCell= tabla.insertRow().insertCell();
lastCell.setAttribute("colspan",4);


//Creación de las reaccioness a las ocurrencias de los eventos
function alHacerClickEnBoton0()
{
    display.value += "0";
}

function alHacerClickEnBoton1()
{
    display.value += "1";
}

function alHacerClickEnBoton2()
{
    display.value += "2";
}

function alHacerClickEnBoton3()
{
    display.value += "3";
}

function alHacerClickEnBoton4()
{
    display.value += "4";
}

function alHacerClickEnBoton5()
{
    display.value += "5";
}

function alHacerClickEnBoton6()
{
    display.value += "6";
}

function alHacerClickEnBoton7()
{
    display.value += "7";
}

function alHacerClickEnBoton8()
{
    display.value += "8";
}

function alHacerClickEnBoton9()
{
    display.value += "9";
}

function alHacerClickEnBotonSuma()
{
    display.value += "+";
}
function alHacerClickEnBotonResta()
{
    display.value += "-";
}

function alHacerClickEnBotonMultiplicacion()
{
    display.value += "*";
}
function alHacerClickEnBotonDivision()
{
    display.value += "/";
}
function alHacerClickEnBotonBorrar()
{
    display.value ="";
}

function alHacerClickEnBotonDecimal()
{
    display.value += ".";
}
 

function alHacerClickEnBotonIgual()
{try
    {
    
        display.value = eval(display.value);
        
        if (display.value == "undefined")
        {
            display.value = "";
        }
    }
    catch
    {
        alert("ERROR");
    }
}



//Asignar las reacciones
button1.addEventListener("click", alHacerClickEnBoton1 );
button2.addEventListener("click", alHacerClickEnBoton2 );
button3.addEventListener("click", alHacerClickEnBoton3 );
button4.addEventListener("click", alHacerClickEnBoton4 );
button5.addEventListener("click", alHacerClickEnBoton5 );
button6.addEventListener("click", alHacerClickEnBoton6 );
button7.addEventListener("click", alHacerClickEnBoton7);
button8.addEventListener("click", alHacerClickEnBoton8 );
button9.addEventListener("click", alHacerClickEnBoton9 );
button0.addEventListener("click", alHacerClickEnBoton0 );
buttondecimal.addEventListener("click",alHacerClickEnBotonDecimal);
buttonresta.addEventListener("click",alHacerClickEnBotonResta);
buttonsuma.addEventListener("click",alHacerClickEnBotonSuma );
buttonmulti.addEventListener("click",alHacerClickEnBotonMultiplicacion);
buttondivi.addEventListener("click",alHacerClickEnBotonDivision );
buttonigual.addEventListener("click",alHacerClickEnBotonIgual);
buttonclear.addEventListener("click",alHacerClickEnBotonBorrar);


//Ubicar los elementos de la interfaz gráfica dentro del layout
document.body.appendChild(display);
document.body.appendChild(tabla);

posicionarElementoEnTabla(tabla,0,0,button7);
posicionarElementoEnTabla(tabla,0,1,button8);
posicionarElementoEnTabla(tabla,0,2,button9);
posicionarElementoEnTabla(tabla,0,3,buttonsuma);
posicionarElementoEnTabla(tabla,1,0,button4);
posicionarElementoEnTabla(tabla,1,1,button5);
posicionarElementoEnTabla(tabla,1,2,button6);
posicionarElementoEnTabla(tabla,1,3,buttonresta);
posicionarElementoEnTabla(tabla,2,0,button1);
posicionarElementoEnTabla(tabla,2,1,button2);
posicionarElementoEnTabla(tabla,2,2,button3);
posicionarElementoEnTabla(tabla,2,3,buttonmulti);
posicionarElementoEnTabla(tabla,3,0,button0);
posicionarElementoEnTabla(tabla,3,1,buttondecimal);
posicionarElementoEnTabla(tabla,3,2,buttonigual);
posicionarElementoEnTabla(tabla,3,3,buttondivi);
posicionarElementoEnTabla(tabla,4,0,buttonclear);



