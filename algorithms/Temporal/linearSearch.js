/*
Complejidad Temporal --> O(n + 3) simplificando complejidad Big-O O( n )
Complejidad Espacial --> O( )

let bar = 'test'	// O(1)
if() {}		// O(1)
for() {}		// O(n)
while() {}	// O(n)
for() { for() {} }// O(n^2)
*/
function linearSearch(arreglo, clave) {
    for(let indice = 0; indice < arreglo.length; indice++) { // O(n) lineal
        if(arreglo[indice] === clave) { // O(1) constante
            return indice; // O (1)
        }
    }
    return -1; // O (1)
}