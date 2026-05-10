/* CONFIGURACION DEL SERVIDOR */
const express = require ('express'); // Importamos express para poder crear el servidor.
const app = express(); // guardamos express en una constante la que llamamos app.
const port = 3125; // Puerto que he definido para el proyecto.

app.use(express.json()); // Esto es para que el servidor pueda leer los datos que le vamos a enviar con el formato .json

/* TEMA PRINCIPAL DEL PROYECTO: Lista de coches Audi 2026 */
// A continuacion voy a introducir en el array con los modelos de los coches y 9 campos para cada uno.

/* DATOS */
// Recurso Principal.
const coches = [
    {
        id: 1,
        modelo: "Audi A3 Sportback",
        carroceria: "Compacto",
        motor: "1.5 TFSI",
        potencia_cv: 150,
        precio_euros: 33900,
        traccion: "FWD",
        electrificacion: "MHEV",
        autonomia_km: 0
    },
    {
        id: 2,
        modelo: "Audi A5 Sportback",
        carroceria: "Fastback",
        motor: "2.0 TFSI",
        potencia_cv: 204,
        precio_euros: 48500,
        traccion: "FWD",
        electrificacion: "MHEV",
        autonomia_km: 0
    },
    {
        id: 3,
        modelo: "Audi A6 Sedan",
        carroceria: "Sedán",
        motor: "2.0 TFSI",
        potencia_cv: 204,
        precio_euros: 56200,
        traccion: "FWD",
        electrificacion: "MHEV",
        autonomia_km: 0
    },
    {
        id: 4,
        modelo: "Audi A8 L",
        carroceria: "Sedán",
        motor: "3.0 TFSI",
        potencia_cv: 340,
        precio_euros: 115000,
        traccion: "quattro",
        electrificacion: "MHEV",
        autonomia_km: 0
    },
    {
        id: 5,
        modelo: "Audi Q3",
        carroceria: "SUV",
        motor: "1.5 TFSI",
        potencia_cv: 150,
        precio_euros: 37900,
        traccion: "FWD",
        electrificacion: "MHEV",
        autonomia_km: 0
    },
    {
        id: 6,
        modelo: "Audi Q4 e-tron",
        carroceria: "SUV",
        motor: "Electrico 82 kWh",
        potencia_cv: 286,
        precio_euros: 52400,
        traccion: "quattro",
        electrificacion: "BEV",
        autonomia_km: 530
    },
    {
        id: 7,
        modelo: "Audi Q5",
        carroceria: "SUV",
        motor: "2.0 TFSI",
        potencia_cv: 204,
        precio_euros: 58700,
        traccion: "quattro",
        electrificacion: "PHEV",
        autonomia_km: 80
    },
    {
        id: 8,
        modelo: "Audi Q6 e-tron",
        carroceria: "SUV",
        motor: "Electrico 100 kWh",
        potencia_cv: 387,
        precio_euros: 75000,
        traccion: "quattro",
        electrificacion: "BEV",
        autonomia_km: 625
    },
    {
        id: 9,
        modelo: "Audi Q7",
        carroceria: "SUV 7 plazas",
        motor: "3.0 TDI",
        potencia_cv: 231,
        precio_euros: 82000,
        traccion: "quattro",
        electrificacion: "MHEV",
        autonomia_km: 0
    },
    {
        id: 10,
        modelo: "Audi e-tron GT",
        carroceria: "Gran Turismo",
        motor: "Electrico 93 kWh",
        potencia_cv: 476,
        precio_euros: 109000,
        traccion: "quattro",
        electrificacion: "BEV",
        autonomia_km: 488
    },
    {
        id: 11,
        modelo: "Audi RS3 Sportback",
        carroceria: "Compacto",
        motor: "2.5 TFSI",
        potencia_cv: 407,
        precio_euros: 72900,
        traccion: "quattro",
        electrificacion: "ninguna",
        autonomia_km: 0
    },
    {
        id: 12,
        modelo: "Audi RS5 Sportback",
        carroceria: "Fastback",
        motor: "2.9 TFSI",
        potencia_cv: 450,
        precio_euros: 96500,
        traccion: "quattro",
        electrificacion: "ninguna",
        autonomia_km: 0
    },
    {
        id: 13,
        modelo: "Audi RS6 Avant",
        carroceria: "Familiar",
        motor: "4.0 TFSI",
        potencia_cv: 630,
        precio_euros: 142000,
        traccion: "quattro",
        electrificacion: "MHEV",
        autonomia_km: 0
    }
];

// Recurso secundario
const modificaciones = [
    {
        id: 1, // id unico de la modificaion .
        coche_id: 1, // Referencia del coche de la lista de los coches.
        autor: "Carlos M.",
        taller: "TuningPro Sevilla",
        potencia_original_cv: 150,
        potencia_modificada_cv: 185,
        caballos_ganados: 35,
        tipo_modificacion: "Reprogramacion ECU",
        comentario: "El coche ha ganado mucha agilidad, merece la pena totalmente",
        fecha: "2026-01-10"
    },
    {
        id: 2,
        coche_id: 11,
        autor: "Javier R.",
        taller: "RS Garage Madrid",
        potencia_original_cv: 407,
        potencia_modificada_cv: 480,
        caballos_ganados: 73,
        tipo_modificacion: "Stage 2 + escape deportivo",
        comentario: "El RS3 ya era bestia, ahora es otro nivel completamente diferente",
        fecha: "2026-02-03"
    },
    {
        id: 3,
        coche_id: 13,
        autor: "Miguel A.",
        taller: "ABT Andalucía",
        potencia_original_cv: 630,
        potencia_modificada_cv: 720,
        caballos_ganados: 90,
        tipo_modificacion: "Kit ABT Stage 3",
        comentario: "El RS6 con 720cv es una locura, imposible notarlo en carretera",
        fecha: "2026-02-20"
    },
    {
        id: 4,
        coche_id: 12,
        autor: "Antonio L.",
        taller: "TuningPro Sevilla",
        potencia_original_cv: 450,
        potencia_modificada_cv: 530,
        caballos_ganados: 80,
        tipo_modificacion: "Reprogramación ECU + intercooler",
        comentario: "El RS5 ya tiraba fuerte, con el Stage 2 es una auténtica bestia",
        fecha: "2026-03-05"
    },
    {
        id: 5,
        coche_id: 7,
        autor: "Pedro S.",
        taller: "EcoTune Barcelona",
        potencia_original_cv: 204,
        potencia_modificada_cv: 245,
        caballos_ganados: 41,
        tipo_modificacion: "Reprogramación ECU",
        comentario: "Para ser un SUV familiar el resultado es sorprendente",
        fecha: "2026-03-18"
    },
    {
        id: 6,
        coche_id: 11,
        autor: "Raúl T.",
        taller: "RS Garage Madrid",
        potencia_original_cv: 407,
        potencia_modificada_cv: 460,
        caballos_ganados: 53,
        tipo_modificacion: "Stage 1",
        comentario: "Solo Stage 1 y ya se nota una barbaridad en aceleración",
        fecha: "2026-04-01"
    },
    {
        id: 7, 
        coche_id: 3,
        autor: "Sergio F.",
        taller: "AutoChip Valencia",
        potencia_original_cv: 204,
        potencia_modificada_cv: 240,
        caballos_ganados: 36,
        tipo_modificacion: "Reprogramación ECU",
        comentario: "Perfecto para un ejecutivo que quiere algo más de punch",
        fecha: "2026-04-15"
    }
];


/* ENDPOINTS */
/* Get /coches */
// Este get va a devolver todos los coches del array.
app.get('/coches', (req, res) => {
    res.status(200).json(coches);
});

/* EXTRA Get /coches/traccion/:traccion */
// Filtra y devuelve todos los coches segun el tipo de traccion que elijamos 
// Utilizamos route param ya que necesitamos acceder a una categoria concreta de coches.
app.get ('/coches/traccion/:traccion', (req, res) => {
    // Ususamos .toLowerCase para que el dato que introduzcamos lo convirtamos a minusculas
    const traccion = req.params.traccion.toLowerCase();

    // Buscamos el coche en el array con el tipo de traccion que le proporcionamos.
    const resultado = coches.filter(c => c.traccion.toLowerCase() === traccion);

    // Si no existen coches con la traccion que le damos le mandamos el error 404
    if (resultado.length === 0) {
        return res.status(404).json({ error: 'No se encontraron coches con la traccion que has solicitado' });
    }
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(resultado);

});

/* FALLO ARREGLADO: He tenido un problema con el extra y era que lo tenia que poner antes de Get /coches/id porque si no lo interpretaria como un id*/

/* Get /coches/id */
// Este get va a devolver el coche concreto que tenga ese id.
// En este caso uso route param porque el id es unico para cada coche, es decir /coches/6 significa ,el coche numero 6.
app.get ('/coches/:id', (req, res) => {
    // Conviertimos el id de la URL a numero, porque los params llegan como texto
    const id = Number (req.params.id);
    // Buscamos en el array el coche cuyo id coincida con el que le pedimos.
    const coche = coches.find (c => c.id === id);
    // Si no existe ningun coche con ese id devolvemos el error 404.
    if (!coche) {
        return res.status(404).json({error: 'El coche solicitado no se ha encontrado'});
    }

    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(coche)
});

/* Post /coches */
// Post crea un nuevo coche y lo añade al array
// Aqui no usamos ni route params ni query params porq los datos van directamente al body ya que los añadimos
app.post ('/coches', (req, res) => {
    const { modelo, carroceria, motor, potencia_cv, precio_euros, traccion, electrificacion, autonomia_km } = req.body;

    // Validamos para que se introduzcan todos los campos que son obligatorios.
    if (!modelo || !carroceria || !motor || !potencia_cv || !precio_euros || !traccion || !electrificacion || autonomia_km === undefined) {
        // Error 400 significa que el servidor ha recibido una peticion erronea. En este caso es porque el se ha intentado mandar con la informacion obligatoria.
        return res.status(400).json({ error: 'Faltan campos obligatorios completelos y vuelva a intentarlo' });
    }

    // Generamos un nuevo id sumando 1 al id mas alto que haya en el array
    const nuevoId = coches.length > 0 ? Math.max(...coches.map(c => c.id)) + 1 : 1;

    // Construimos el nuevo objeto coche
    const nuevoCoche = { id: nuevoId, modelo, carroceria, motor, potencia_cv, precio_euros, traccion, electrificacion, autonomia_km };

    // Lo añadimos al array
    coches.push(nuevoCoche);

    // Respondemos con 201 porque sea ha creado un nuevo recurso.
    res.status(201).json(nuevoCoche);
});

/* Put /coches/:id */
// Modifica los datos de un coche que ya existe
// Usamos route param porque necesitamos identificar exactamente que coche queremos modificar ya que los datos nuevos van directamente al body
app.put ('/coches/:id', (req, res) => {
    // Conviertimos el id de la URL a numero, porque los params llegan como texto
    const id = Number(req.params.id);
    // Buscamos en el array el coche cuyo id coincida con el que le pedimos.
    const coche = coches.find(c => c.id === id);
    // Si no existe ningun coche con ese id devolvemos el error 404.
    if (!coche) {
        return res.status(404).json({ error: 'Coche no encontrado' });
    }

    // Actualizamos solo los campos que en el body
    // Si no viene un campo lo dejamos con el valor que tenia antes
    const { modelo, carroceria, motor, potencia_cv, precio_euros, traccion, electrificacion, autonomia_km } = req.body;

    if (modelo) coche.modelo = modelo;
    if (carroceria) coche.carroceria = carroceria;
    if (motor) coche.motor = motor;
    if (potencia_cv) coche.potencia_cv = potencia_cv;
    if (precio_euros) coche.precio_euros = precio_euros;
    if (traccion) coche.traccion = traccion;
    if (electrificacion) coche.electrificacion = electrificacion;
    if (autonomia_km !== undefined) coche.autonomia_km = autonomia_km;

    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(coche);
});


/* Delete /coches/:id */
// Elimina un coche del array por su id
// Usamos route params porq necesitamos identificar exactamente que coche eliminar.
app.delete('/coches/:id', (req, res) => {
    // Conviertimos el id de la URL a numero, porque los params llegan como texto
    const id = Number(req.params.id);

    // Buscamos el coche en el array con el id que le proporcionamos
    const index = coches.findIndex(c => c.id === id);

    // Si no existe el id que le damos le mandamos el error 404
    if (index === -1) {
        return res.status(404).json({ error: 'El coche con el id proporcionado no se ha encontrado, por favor introduca uno de nuevo' });
    }

    // Lo eliminamos del array con splice
    coches.splice(index, 1);
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json({ mensaje: 'Coche eliminado correctamente' });
});


/* He buscado informacion sobre el app.listen y recomiendan ponerlo al final del codigo para que se ejecute todo correctamente */

// Con el codigo de abajo arrancamos el server el cual escucha el puerto que hemos elegido antes 
app.listen (port, () => {
    console.log ("¡Servidor iniciado!")
    console.log ("El servidor esta iniciado en http://localhost:3125") 
    // Este ultimo console.log lo he introducido porque me parece apropiado para que se sepa claramente cual es el puerto donde esta iniciado el servido
    // para que sea mucho mas facil a la hora de compartir el proyecto con otra persona.
});





