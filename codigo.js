function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function numeroAleatorio(){

    return Math.floor(Math.random() * 10 + 1);

}

async function crearDivs(array, tam, padre){

    for(let i = 0; i < tam; i++){

        const itemDiv = document.createElement("div");

        itemDiv.textContent = array[i];

        padre.appendChild(itemDiv);

        itemDiv.className = "subDiv";

        await delay(1);

    }

}

do{

    var tam = prompt("Cuantos numeros quieres ordenar?: ");

    if(tam > 17 || tam < 2){

        alert("El numero de elementos a ordenar tiene que estar comprendido entre 2 y 17");

    }

}while(tam > 17 || tam < 2);

let array = new Array(tam);

for(let i = 0; i < tam; i++){

    array[i] = numeroAleatorio();

}

const divPrincipal = document.getElementById("principal");

crearDivs(array, tam, divPrincipal);

let arrayDivs = document.querySelectorAll(".subDiv");

console.log(arrayDivs)

let aux;

array = Array.apply(null, arrayDivs);

let arrayNums = new Array(array.length);

for(let i = 0; i < array.length; i++){

    let numberTxt = arrayDivs[i].textContent;

    arrayNums[i] = parseInt(numberTxt);

}

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){

        if(arrayNums[j] > arrayNums[j + 1]){

            aux = arrayNums[j];
            arrayNums[j] = arrayNums[j + 1];
            arrayNums[j + 1] = aux;

        }

    }
}

console.log(arrayNums);

const divOrdenado = document.createElement("div");
const body = document.getElementById("body");

body.appendChild(divOrdenado);
console.log(divOrdenado);

document.write("<br>");

setTimeout(crearDivs, 5000);

divOrdenado.className = "divsOrdenados";

