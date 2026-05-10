const express = require ('express'); // Importamos express para poder crear el servidor
const app = express(); // guardamos express en una constante la que llamamos app
const port = 3125; // Puerto que he definido para el proyecto

app.use(express.json()); // Esto es para que el servidor pueda leer los datos que le vamos a enviar con el formato .json

// Con el codigo de abajo arrancamos el server el cual escucha el puerto que hemos elegido antes 
app.listen (port, () => {
    console.log ("¡Servidor iniciado!")
    console.log ("El servidor esta iniciado en http://localhost:3125") 
    // Este ultimo console.log lo he introducido porque me parece apropiado para que se sepa claramente cual es el puerto donde esta iniciado el servido
    // para que sea mucho mas facil a la hora de compartir el proyecto con otra persona.
});



