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

/* TEMA PRINCIPAL DEL PROYECTO: Lista de coches Audi 2026 */
// A continuacion voy a introducir en el array con los modelos de los coches y 9 campos para cada uno

// Recurso Principal
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
        id: 1, // id unico de la modificaion 
        coche_id: 1, // Referencia del coche de la lista de los coches
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



