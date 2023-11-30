function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repetir(arreglo) {
    let arregloRepetido = arreglo;
    return arregloRepetido;
}

const arreglo = [1, 2, 3];

function convertirAString(arreglo) {
    let resultado = arreglo.map(elemento => elemento.toString());
    return resultado;
}
console.log(arreglo);
console.log(convertirAString(arreglo));

function dosDimensiones(valor) {
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill(0);
    }
    return x;
}

console.log(dosDimensiones(5));