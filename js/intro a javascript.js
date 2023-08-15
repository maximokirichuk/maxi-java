//comentario en js: usamos 2 barras//
//javascript es un lenguaje de programacion de alto nivel-interpretado//

//existen varios tipos de datos:

/*
Datos numericos: Entero o decimal
Datos alfanumericos: Letras, numeros y/o caracteres
Datos booleano: por ser true o false. Nos permiten evaluar una expresion como verdadera o falsa
*/

//*Un dato numerico, simplemente se escribe colocando el numero:
// 4 es un dato numerico ENTERO.
// 190.10 es un dato numerico DECIMAL: Los decimales, se separan por PUNTO

//*Un dato alfanumerico, se escribe colocandolo entre comillas.Pueden ser simples o dobles. Pero siempre se inicia y finaliza con la misma.
//ej: un password, user, mail, nuestra casa.

//* Un dato booleano, es una expresion que puede ser evaluada como verdadera o falsa. EJ: Messi es argentino.

//! REGLA NUMERICA: si un dato, que son solo numeros NO SE UTILIZARAN PARA EVALUAR EXPRESIONES MATEMATICAS, se lo pondra como STRING (dato alfnumerico)

//? VARIABLES: es un espacio de almacenamiento en la memoria que referencia a un dato
// Las variables para ser utilazadas deben ser DECLARADAS: significa darles un nombre que les indique su contenido, para que luego, sea facil de ubicar y usar el dato

//* Declarando variables

//modo 1: escribir el nombre de la variable VAR (indica que es una variable)
nombre = "Maxi"

//modo 2 : declararlo con la palabra reservada VAR (indica que es una variable)
var mascota = "budin"

//modo 3: usando la palabra reservada LET (indica que es una variable local)
let edad = 35

//modo 4: usando la palabra reservada CONST (indica que es una constante) sin comillas porque se usa el dato
const altura = 1.70

//! LAS VARIABLES, segun su declaracion pueden ser SOBREESCRITAS.
const direccion = "av sarmiento"
direccion = ""//!CONST no me permite cambiar el dato contenido dentro

//? RECORDEMOS DECLARAR NUESTRAS VARIABLES CON LET O CONST
let peso = 67.200
const dni = "111111111"