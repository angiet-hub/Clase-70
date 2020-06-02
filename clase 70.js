//Node es un entorno de ejecucion. Es un programa que esta corriendo que permite ejecutar comandos e instrucciones que le pasamos por codigo. Corre en js
//Se utiliza para crear estos tipos de programa que realiza distintas acciones.
//NPM node package manager. Administrador de paquetes de node. Es como una libreria de paquetes. Los paquetes son cosas que podemos descargar a nuestra computadora, librerias, archivos, frameworks, programas. Es una forma mas automatica de bajar librerias dentro de nuestro proyecto
//Cada vez que se crea una aplicacion o proyecto con node se crea el archivo package.json. Es un archivo de configuracion donde se van a ir listando todas las dependencias/librerias que vayamos bajando.
//create-react-app
//Nos permite requerir archivos desde donde los necesitemos sin preocuparnos de integrarlos en el html mediante el script.
//Viene integrado con Babel
//Permite ejecutar ciertos comandos.
//Permite ejecutar distintas versiones de un mismo proyecto.
//Este entorno viene con dos tecnologias principales. Web-pack y Babel.
//Web-pack  es una tecnologia denominada bundler. Toma los archivos, los minimiza, y los empaqueta. Analiza que es lo que se usa y solo sube las cosas que se utilizan. Permiten que el proyecto final sea lo mas reducida y performante posible a nivel de peso y corra en todos los navegadores posibles
//Build: tomar todos los archivos y procesarlo, hacer la version productiva que es lo que se va a terminar subiendo.

//cambiar con cd al archivo creado
//Para correr el proyecto npm start

//Para parar la ejecucion desde la terminal ctrl+c

//Cada archivo de js en el entorno de node se conoce como un modulo.
//Hay ciertas reglas a seguir para poder utilizar cosas desde otros archivos:
//Todo lo que necesitemos que no este en un archivo (funcion, valor, dato) tenemos que importarlo.
//Cualquier cosa que queramos exponer, permitir que otros archivos utilicen, tenemos que exportarlo.Si no lo exportamos no lo vamos a poder utilizar.
//Al no exportar todo puedo crear variables con el mismo nombre que no van a entrar en conflicto porque solo se utilizan dentro de ese archivo. A su vez permite cierta privacidad a las funciones que solo se van a utilizar dentro de este.
//Se debe pensar cada modulo como una funcion. Las variables se crean dentro de esa funcion. Mientras las variables no sean globales puedo tener dos funciones o variables distintas con el mismo nombre.
//Si la exporto y la quiero utilizar en otro archivo que tenga una variable con el mismo nombre debo cambiarle el nombre.
//React se debe importar porque JSX utiliza metodos de react. Por lo tanto necesito la variable react que se importa desde la libreria react. En cada componente se debe importar
//Reglas para exportar:
//Por default: un archivo puede tener un unico export default.

//Para importar ponemos import Titulo from "components/Titulo" nombre de la carpeta seguido del nombre del archivo.

//Lo minimo que necesitamos para un componente es crear un nuevo archivo, importar react, exportar por default dicho componente.

//Cuando importamos algo que exportamos por default, el import no necesita corresponderse con el nombre.

//Los exports nombrados.
export { mensaje, otroMensaje };

//las accedo
import { mensaje, otroMensaje } from "components/Texto";
//Los exports nombrados exportan un objeto.
//otra forma
import * as mensajes from "components/Texto";
//sintaxis para uso
<Titulo>{mensajes.mensaje}</Titulo>
<Titulo>{mensajes.otroMensaje}</Titulo>

//Tambien se pueden exportar directamente 

//Dos tipos de exports: default y nombrados
//Default es unico y a la hora de importarse le podemos poner cualquier nombre.
//Los nombrados pueden ser multiples, se tienen que exportar entre llaves y a la hora de importarse: 
//o se importa todo con "* as nombre" donde nombre es cualquier cosa y accedemos a cada valor exportado como propiedad del objeto nombre.
// o desestructuramos directamente el objeto importado entre llave con los nombres de las cosas que queremos importar

import Texto, {mensaje as message, otroMensaje} from 'components/Texto'
<Texto>{message}</Texto>