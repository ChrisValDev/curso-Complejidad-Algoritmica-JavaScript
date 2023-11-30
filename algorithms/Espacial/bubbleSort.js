/*
Complejidad Temporal --> O( )
Complejidad Espacial --> O( n )
Espacio Auxiliar = O(n + 4) - O(n) = O( 4 ) Espacio auxiliar simplificado = O(1)

let bar = 'test'  // 0(1)
if () {}               // 0(1)
for () {}             // 0(1)
let unidimensional = [1,2,...,n]  // 0(n)
let bidimensional = [[2,4],[6,8],[10,12]] // 0(n^2)
*/
function bubbleSort(arreglo) { // O(n)
    let longitud = arreglo.length; // O(1)
    for (let i = 0; i < longitud; i++) { // O(1) 
        for (let j = 0; j < longitud; j++) { // O(1) 
            if(arreglo[j] > arreglo[j + 1]) { 
                let temporal = arreglo[j]; // O(1)
                arreglo[j] = arreglo[j + 1]; 
                arreglo[j + 1] + temporal; 
            } 
        }
    }
    return arreglo; 
}