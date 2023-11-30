/*
Complejidad Temporal --> O( )
Complejidad Espacial --> O( n )
Espacio Auxiliar = Complejidad Espacial - Datos de Input O(n + 1) - O(n) = O( 1 ) Espacio auxiliar simplificado = O(1)

let bar = 'test'  // 0(1)
if () {}               // 0(1)
for () {}             // 0(1)
let unidimensional = [1,2,...,n]  // 0(n)
let bidimensional = [[2,4],[6,8],[10,12]] // 0(n^2)
*/
function linearSearch(arreglo, clave) { // O()
    for(let indice = 0; indice < arreglo.length; indice++) { // O(1)
        if(arreglo[indice] === clave) {
            return indice;
        }
    }
    return -1;
}