console.log("Que onda bro");

const saludar = nombre => `Hola ${nombre}`;

console.log(saludar("Angel"));

const resultado = saludar("Angel");
const esperado = "Hola Angel";

if (resultado === esperado)
{
    console.log("Prueba exitosa");
}
else
{
    console.log("Prueba erronea")
}