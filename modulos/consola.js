const tabla = [
    { a: 1, b: 'uno'},
    { a: 2, b: 'dos'},
    { a: 3, b: 'tres'},
];
console.table(tabla);

console.group('Alertas:');
    console.log('[Log] Saludar');
    console.warn('[warn] Se encontró una novedad');
    console.error('[error] Se presentó un error');
    console.group('Numeros:');
        console.log(1000);
        console.log(2000);
        console.log(3000);
    console.groupEnd('Numeros:');
console.groupEnd('Alertas:');

// Usando console.group en una más real
const function1 = () => {
    console.group('Función 1:');
    console.log('Iniciando')
    function2();
    console.log('Otro proceso');
    console.log('Terminando');
    console.groupEnd('Función 1:');
};
const function2 = () => {
    console.group('Función 2:');
    console.log('Inicia');
    console.error('Se presentó un error');
    console.log('Terminando');
    console.groupEnd('Función 2:');
};
function1();

// Realiza un conteo de las veces que se ejecuta el console
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');// Reinicia el contador
console.count('veces');
console.count('veces');
