/*
Complejidad Temporal --> O( )
Complejidad Espacial --> O( n )
Espacio Auxiliar = O(n + 5) - O(n) = O( 5 ) Espacio auxiliar simplificado = O(1)

let bar = 'test'  // 0(1)
if () {}               // 0(1)
for () {}             // 0(1)
let unidimensional = [1,2,...,n]  // 0(n)
let bidimensional = [[2,4],[6,8],[10,12]] // 0(n^2)
*/
function selectionSort(arreglo) { // O(n)
    let longitud = arreglo.length; // O(1)

    for (let i = 0; i < longitud; i++) { // O(1) 
        let minimo = i; // O(1)
        for (let j = i + 1; j < longitud; j++) { // O(1) 
            if(arreglo[j] < arreglo[minimo]) { 
                minimo = j;
            }
        }
        if(minimo != i) {
            let temporal = arreglo[i]; // O(1) 
            arreglo[i] = arreglo[minimo];
            arreglo[minimo] = temporal; 
        }
    }
    return arreglo;
}