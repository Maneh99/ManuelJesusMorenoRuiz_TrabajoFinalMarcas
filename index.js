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
        id: 1,
        coche_id: 1,
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

/* ENDPOINTS Coches */
/* Get /coches */
// Este get va a devolver todos los coches del array.
app.get('/coches', (req, res) => {
    res.status(200).json(coches);
});

/* Get /coches/buscar */
// Buscamos los coches por modelo pero sin necesidad de ponerlo entero.
// Usamos query param ya que es una busqueda por contenido no a un recurso concreto.
app.get('/coches/buscar', (req, res) => {
    // req.query.texto guarda en la variable txto lo que viene despues de ?.
    const texto = req.query.texto;
    // Si no se introduce ningun texto devolvemos error 400.
    if (!texto) {
        return res.status(400).json({ error: 'Debes indicar el modelo que quieres buscar(al menos algo), vuelva a intentarlo' });
    }
    // .filter() recorre el array y devuelve los coches cuyo modelo contenga el texto buscado.
    const resultado = coches.filter(c => // .toLowerCase para que en la busqueda no distinga entre mayusculas o minusculas.
        c.modelo.toLowerCase().includes(texto.toLowerCase())
    );
    // Si no hay resultados devolvemos 404
    if (resultado.length === 0) {
        return res.status(404).json({ error: 'No se encontraron coches con ese texto' });
    }
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(resultado);
})

/* ENDPOINTS Filtros y busquedas */
/* Get /coches/filtrar */
// Vamos a filtrar coches por varios campos a la vez usando query params porq los filtros son opcionales 
// Los query params son perfectos para filtrar por varias cosas ya que esto no forma parte de la identidad del recurso, solo son opciones extra de la busqueda.
app.get('/coches/filtrar', (req, res) => {
    // Recogemos todos los posibles filtros que puede enviar el usuario
    const { carroceria, precio_min, precio_max, traccion, electrificacion, ordenar, orden } = req.query;
    // Empezamos con una copia de todos los coches, [...coches] hace una copia para no modificar el array original
    let resultado = [...coches];
    // Si viene el filtro de carroceria, filtramos por ese campo. .includes() permite busqueda parcial: "SU" tambien encuentra "SUV"
    if (carroceria) {
        resultado = resultado.filter(c => c.carroceria.toLowerCase().includes(carroceria.toLowerCase()));
    }
    // Si viene precio_min, nos quedamos solo con los coches mas caros que ese precio
    if (precio_min) {
        resultado = resultado.filter(c => c.precio_euros >= Number(precio_min));
    }
    // Si viene precio_max, nos quedamos solo con los coches mas baratos que ese precio
    if (precio_max) {
        resultado = resultado.filter(c => c.precio_euros <= Number(precio_max));
    }
    // Si viene traccion, filtramos por ese campo exacto
    if (traccion) {
        resultado = resultado.filter(c => c.traccion.toLowerCase() === traccion.toLowerCase());
    }
    // Si viene electrificacion, filtramos por ese campo exacto
    if (electrificacion) {
        resultado = resultado.filter(c => c.electrificacion.toLowerCase() === electrificacion.toLowerCase());
    }
    // Si viene el campo por el que ordenar, ordenamos el resultado, si orden es descendente ordenamos de mayor a menor, si no de menor a mayor
    if (ordenar) {
        resultado.sort((a, b) => {
            if (orden === 'desc') return b[ordenar] - a[ordenar];
            return a[ordenar] - b[ordenar];
        });
    }
    // Si despues de aplicar todos los filtros no queda ningun coche, devolvemos 404
    if (resultado.length === 0) {
        return res.status(404).json({ error: 'No se encontraron coches con esos filtros' });
    }
    // Esto significa que esta todo OK y le devuelve el resultado
    res.status(200).json(resultado);
});

/* ENDPOINTS Estadisticas y utilidades */
/* Get /coches/stats/media-precio */
// Esto devuelve la media de precio de todos los coches del array coches
app.get('/coches/stats/media-precio', (req, res) => {
    // Si no hay coches no podemos calcular nada, devolvemos 404
    if (coches.length === 0) {
        // Le lanzamos error 404 cuando no haya coches disponibles para calcular
        return res.status(404).json({ error: 'No hay coches disponibles para calcular la media' });
    }
    // .reduce() suma todos los precios uno a uno empezando desde 0
    const total = coches.reduce((suma, c) => suma + c.precio_euros, 0);
    // Dividimos el total entre el numero de coches para obtener la media
    const media = Math.round(total / coches.length);
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json({ media_precio_euros: media });
});

/* Get /coches/stats/totales */
// Devuelve el total de coches y de modificaciones que hay en los arrays
app.get('/coches/stats/totales', (req, res) => {
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json({ // Usamos .length para contar cuantos elementos hay en cada array
        total_coches: coches.length, 
        total_modificaciones: modificaciones.length
    });
});

/* Get /coches/stats/por-carroceria */
// Devuelve cuantos coches hay de cada tipo de carroceria
app.get('/coches/stats/por-carroceria', (req, res) => {
    // .reduce() recorre el array y va agrupando los coches por carroceria, acc es el objeto acumulador donde guardamos los conteos.
    const agrupado = coches.reduce((acc, c) => {
        // Si ya existe esa carroceria en el acumulador sumamos 1, si no la creamos con valor 1.
        acc[c.carroceria] = (acc[c.carroceria] || 0) + 1;
        return acc;
    }, {});
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(agrupado);
});

/* Get /coches/stats/top */
// Devuelve los N coches con mayor potencia, siendo N indicado por query param.
// Usamos query param porque N es un parametro opcional para realizar las consultas, no identifica un recurso concreto por lo cual nos viene perfecto.
app.get('/coches/stats/top', (req, res) => {
    // Recogemos el parametro n, si no viene usamos 3 como valor por defecto.
    const n = Number(req.query.n) || 3;
    // Hacemos una copia del array, lo ordenamos de mayor a menor potencia y nos quedamos con los primeros N.
    const top = [...coches]
        .sort((a, b) => b.potencia_cv - a.potencia_cv)
        .slice(0, n);
    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(top);
});

/* ENDPOINTS Coches */
/* EXTRA Get /coches/traccion/:traccion */
// Filtra y devuelve todos los coches segun el tipo de traccion que elijamos 
// Utilizamos route param ya que necesitamos acceder a una categoria concreta de coches.
app.get('/coches/traccion/:traccion', (req, res) => {
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

/* Get /coches/:id/modificaciones */
// Esto va ha devolver todas las modificaciones que tenga un coche en concreto
app.get('/coches/:id/modificaciones', (req, res) => {
    // Recogemos el id del coche y lo convertimos a numero
    const coche_id = Number(req.params.id);
    // Primero comprobamos que el coche existe en nuestro array
    const coche = coches.find(c => c.id === coche_id);
    // Si el coche no existe no tiene sentido buscar sus modificaciones
    if (!coche) {
        return res.status(404).json({ error: 'El coche indicado no existe' });
    }
    // Filtramos las modificaciones cuyo coche_id coincida con el que pedimos
    // Puede devolver 0, 1 o varios resultados
    const resultado = modificaciones.filter(m => m.coche_id === coche_id);
    // Esto significa que esta todo OK y le devuelve el resultado
    res.status(200).json(resultado);
});

/* Get /coches/id */
// Este get va a devolver el coche concreto que tenga ese id.
// En este caso uso route param porque el id es unico para cada coche, es decir /coches/6 significa ,el coche numero 6.
app.get('/coches/:id', (req, res) => {
    // Conviertimos el id de la URL a numero, porque los params llegan como texto
    const id = Number(req.params.id);
    // Buscamos en el array el coche cuyo id coincida con el que le pedimos.
    const coche = coches.find(c => c.id === id);
    // Si no existe ningun coche con ese id devolvemos el error 404.
    if (!coche) {
        return res.status(404).json({ error: 'El coche solicitado no se ha encontrado' });
    }

    // El codigo 200 le dice al cliente que esta todo OK.
    res.status(200).json(coche);
});

/* Post /coches */
// Post crea un nuevo coche y lo añade al array
// Aqui no usamos ni route params ni query params porq los datos van directamente al body ya que los añadimos
app.post('/coches', (req, res) => {
    // Para sacar los valores del body para poder utilizarlo directamente aqui sin tener que poner de uno en uno
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
app.put('/coches/:id', (req, res) => {
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

/* ENDPOINTS Coches */
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



/* ENDPOINTS Modificaciones */
/* Get /modificaciones */
// Devuelve todas las modificaciones del array
app.get('/modificaciones', (req, res) => {
    res.status(200).json(modificaciones);
});


/* Get /modificaciones/buscar?texto=X */
//Usamos query param porque estamos haciendo una busqueda por contenido, no hacia un recurso concreto.
app.get('/modificaciones/buscar', (req, res) => {
    // req.query.texto guarda en la variable txto lo que viene despues de ?.
    const texto = req.query.texto;
    //Este bucle es por si el usuario no ha introducido ningun valor a buscar le da error 400
    if (!texto) {
        return res.status(400).json({ error: 'Debes indicar el parametro texto, vuelva a intentarlo' });
    }
    // Buscamos en tipo modificacion y en comentario
    // .filter recorre todo el array y se queda con las que cumplan la condicion que se le marque
    const resultado = modificaciones.filter(m =>
        // Para la condicion "m" hacemos dos cosas, la primera condicion es para confirmar si el tipo de modificacion tiene el texto que buscamos 
        m.tipo_modificacion.toLowerCase().includes(texto.toLowerCase()) ||
        // La segunda condicion es si el comentario contiene el texto buscado
        m.comentario.toLowerCase().includes(texto.toLowerCase())
    );
    // Si el array esta vacio es que no hay ninguna modificacion que coincida entonces le devolvemos al usuario el error 404.
    if (resultado.length === 0) {
        return res.status(404).json({ error: 'No se encontraron modificaciones con ese texto, introduce uno nuevo' });
    }
    // Esto significa que esta todo OK y le devuelve el resultado
    res.status(200).json(resultado);
});


/* EXTRA Get /modificaciones/top-caballos */
app.get('/modificaciones/top-caballos', (req, res) => {
    // Hacemos una copia del array original y luego lo ordenamos de mayor a menor, .short compara los dos elementos y los reordena
    const ranking = [...modificaciones].sort((a, b) => b.caballos_ganados - a.caballos_ganados);
    // Esto significa que esta todo OK y le devuelve el resultado
    res.status(200).json(ranking);
});


/* Get /modificaciones/:id */
// Este como en los endpoints de coche va despues de las rutas especificas para no tener conflictos entre ellos de que se convierta en id el que no queremos que sea id.
// usamos route params porque el id va a identificar un recurso concreto.
app.get('/modificaciones/:id', (req, res) => {
    // Los params llegan como texto entonces lo tenemos que convertir a numero con Number().
    const id = Number(req.params.id);
    // .find() busca el primer elemento del array que cumpla la condicion.
    const modificacion = modificaciones.find(m => m.id === id);
    // Si no existe ninguna modificación con ese id devolvemos 404.
    if (!modificacion) {
        return res.status(404).json({ error: 'La modificacion no ha sido encontrada, vuelve a intentarlo de nuevo' });
    }
    // Esto significa que esta todo OK y le devuelve el resultado
    res.status(200).json(modificacion);
});


/* Post /modificaciones  */
// Crea una nueva modificacion y lo añade al array 
app.post('/modificaciones', (req, res) => {
    // Para sacar los valores del body para poder utilizarlo directamente aqui sin tener que poner de uno en uno
    const { coche_id, autor, taller, potencia_original_cv, potencia_modificada_cv, tipo_modificacion, comentario, fecha } = req.body;
    // Validamos que vengan todos los campos obligatorios si falta alguno respondemos con 400 que significa que la peticion esta incompleta
    if (!coche_id || !autor || !taller || !potencia_original_cv || !potencia_modificada_cv || !tipo_modificacion || !comentario || !fecha) {
        return res.status(400).json({ error: 'Faltan campos obligatorios, completelos y vuelva a intentarlo' });
    }
    // Comprobamos que el coche al que se vincula la modificación existe, porque no tiene sentido crear una modificacion de un coche que no tenemos 
    const coche = coches.find(c => c.id === coche_id);
    if (!coche) {
        return res.status(404).json({ error: 'El coche indicado no existe' });
    }
    // Calculamos los caballos ganados automaticamente asi el usuario no tiene que calcularlo, lo hacemos nosotros
    const caballos_ganados = potencia_modificada_cv - potencia_original_cv;
    // Generamos un id nuevo sumando 1 al id mas alto del array Math.max(...modificaciones.map(m => m.id)) nos da el id mas alto
    const nuevoId = modificaciones.length > 0 ? Math.max(...modificaciones.map(m => m.id)) + 1 : 1;
    // Construimos el objeto de la nueva modificacion con todos sus campos
    const nuevaModificacion = {
        id: nuevoId,
        coche_id,
        autor,
        taller,
        potencia_original_cv,
        potencia_modificada_cv,
        caballos_ganados,
        tipo_modificacion,
        comentario,
        fecha
    };
    // Añadimos la modificacion al array.
    modificaciones.push(nuevaModificacion);
    // Le mandamos 201 porque el recurso se ha creado correctamente. 
    res.status(201).json(nuevaModificacion);
});


/* Delete /modificaciones/:id */
// Elimina una modificacion del array por su id
// Usamos route params porq necesitamos identificar exactamente que modificacion eliminar
app.delete('/modificaciones/:id', (req, res) => {
    // Conviertimos el id de la URL a numero, porque los params llegan como texto
    const id = Number(req.params.id);

    // .findIndex() devuelve la posicion de lo que estamos buscando, si no lo encuentra lo que le estamos pidiendo devuelve -1 y salta el error 404
    // Necesitamos la posicion para poder eliminarlo con splice()
    const index = modificaciones.findIndex(m => m.id === id);

    // Si devuelve -1 es que no existe, respondemos con 404
    if (index === -1) {
        return res.status(404).json({ error: 'Modificacion no encontrada, vuelva a introducir una he intentalo de nuevo' });
    }
    // .splice(index, 1) elimina 1 elemento en la posicion que este lo que hemos buscado
    modificaciones.splice(index, 1);
    // Esto significa que esta todo OK y le devuelve el resultado
    res.status(200).json({ mensaje: 'Modificacion eliminada correctamente' });
});


/* He buscado informacion sobre el app.listen y recomiendan ponerlo al final del codigo para que se ejecute todo correctamente */

// Con el codigo de abajo arrancamos el server el cual escucha el puerto que hemos elegido antes 
app.listen(port, () => {
    console.log("¡Servidor iniciado!")
    console.log("El servidor esta iniciado en http://localhost:3125")
    // Este ultimo console.log lo he introducido porque me parece apropiado para que se sepa claramente cual es el puerto donde esta iniciado el servido
    // para que sea mucho mas facil a la hora de compartir el proyecto con otra persona.
});