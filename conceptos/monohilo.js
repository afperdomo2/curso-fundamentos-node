console.log("hola mundo");

// Se convierte en asíncrona
const ejecutarIntervalo = async () => {
    let i = 0;
        await setInterval(() => {
        console.log(i);
        i++;
    }, 700);
};
ejecutarIntervalo();

console.log("segunda instrucción");
