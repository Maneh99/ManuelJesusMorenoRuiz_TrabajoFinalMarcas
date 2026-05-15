# Trabajo Final LMSGI · 1º DAM
**Alumno:** Manuel Jesús Moreno Ruiz

---

## De qué va esto

API REST en **Node.js + Express** montada sobre el catálogo de **Audis 2026** y sus modificaciones de potencia.

13 coches, usuarios que los tunean, y un registro de cuántos caballos gana cada uno.

---

## Tecnologías

| Herramienta | Uso |
|---|---|
| **Node.js** | Entorno de ejecución |
| **Express** | Servidor y rutas |
| **Nodemon** | Reinicio automático al guardar |

---

## Cómo ejecutarlo

```bash
git clone https://github.com/Maneh99/ManuelJesusMorenoRuiz_TrabajoFinalMarcas.git
npm install
npm run dev
```

Servidor en `http://localhost:3125`.

---

## Recursos

### Coches

13 Audis del catálogo 2026, del A3 al RS6.

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | Número | Identificador |
| `modelo` | Texto | Nombre del modelo |
| `carroceria` | Texto | SUV, Sedán... |
| `motor` | Texto | Motor o combustible |
| `potencia_cv` | Número | CV |
| `precio_euros` | Número | Precio en España |
| `traccion` | Texto | FWD o quattro |
| `electrificacion` | Texto | MHEV, PHEV, BEV o ninguna |
| `autonomia_km` | Número | Km eléctricos (0 si no aplica) |

```json (Ejemplo)
{
    "id": 11,
    "modelo": "Audi RS3 Sportback",
    "carroceria": "Compacto",
    "motor": "2.5 TFSI",
    "potencia_cv": 407,
    "precio_euros": 72900,
    "traccion": "quattro",
    "electrificacion": "ninguna",
    "autonomia_km": 0
}
```

---

### Modificaciones

Cada modificación está vinculada a un coche por `coche_id`.

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | Número | Identificador |
| `coche_id` | Número | Coche modificado |
| `autor` | Texto | Usuario |
| `taller` | Texto | Dónde se hizo |
| `potencia_original_cv` | Número | CV de fábrica |
| `potencia_modificada_cv` | Número | CV final |
| `caballos_ganados` | Número | Diferencia |
| `tipo_modificacion` | Texto | Stage 1, Stage 2, ECU... |
| `comentario` | Texto | Opinión |
| `fecha` | Texto | Fecha |

```json (Ejemplo)
{
    "id": 2,
    "coche_id": 11,
    "autor": "Javier R.",
    "taller": "RS Garage Madrid",
    "potencia_original_cv": 407,
    "potencia_modificada_cv": 480,
    "caballos_ganados": 73,
    "tipo_modificacion": "Stage 2 + escape deportivo",
    "comentario": "El RS3 ya era bestia, ahora es otro nivel completamente diferente",
    "fecha": "2026-02-03"
}
```

---

## Endpoints

### Coches *(recurso principal)*

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/coches` | Devuelve todos los coches |
| GET | `/coches/traccion/:traccion` | **[EXTRA]** Filtra coches por tracción |
| GET | `/coches/:id` | Devuelve un coche por su id |
| GET | `/coches/buscar?modelo=X` | Busca un coche por nombre |
| POST | `/coches` | Crea un nuevo coche |
| PUT | `/coches/:id` | Modifica un coche existente |
| DELETE | `/coches/:id` | Elimina un coche |

### Modificaciones *(recurso secundario)*

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/modificaciones` | Devuelve todas las modificaciones |
| GET | `/modificaciones/:id` | Devuelve una modificación por su id |
| GET | `/coches/:id/modificaciones` | Devuelve todas las modificaciones de un coche |
| POST | `/modificaciones` | Crea una nueva modificación |
| DELETE | `/modificaciones/:id` | Elimina una modificación |

### Filtros y busquedas

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/coches/filtrar?carroceria=X` | Filtra por carrocería (parcial) |
| GET | `/coches/filtrar?precio_min=X&precio_max=Y` | Filtra por rango de precio |
| GET | `/coches/filtrar?traccion=X&electrificacion=Y` | Filtra por múltiples campos |
| GET | `/coches/filtrar?ordenar=precio_euros&orden=asc` | Ordena por campo y dirección |
| GET | `/modificaciones/buscar?texto=X` | Busca modificaciones por texto |
| GET | `/modificaciones/top-caballos` | **[EXTRA]** Ranking por caballos ganados |
| GET | `/coches/buscar?texto=X` | Busca coches por texto parcial en el nombre del modelo |

### Estadísticas y utilidades

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/coches/stats/media-precio` | Devuelve la media de precio de todos los coches |
| GET | `/coches/stats/totales` | Devuelve el total de coches y modificaciones |
| GET | `/coches/stats/por-carroceria` | Cuenta cuántos coches hay de cada tipo de carrocería |
| GET | `/coches/stats/top?n=X` | Devuelve los X coches con más potencia (por defecto 3) |

---

## Colección Bruno

Importa el archivo `api-audi-2026.yml` desde Bruno para tener todas las peticiones listas.
Incluye una peticion por cada endpoint con sus parametros y bodies ya configurados.
Añadido ademas errores forzados para la comprobación de errores, ademas de la comprobacion del error 500.

---

## Frontend 

Se ha desarrollado una interfaz web en HTML, CSS y JavaScript vanilla que consume la API directamente desde el navegador.

### Cómo usarlo

1. Arranca el servidor con `node index.js`

> El servidor tiene que estar arrancado para que el frontend funcione.

### Funcionalidades

| Funcionalidad | Método que usa |
|---------------|----------------|
| Ver todos los coches | GET `/coches` |
| Buscar coche por nombre | GET `/coches/buscar?texto=X` |
| Crear un nuevo coche | POST `/coches` |
| Eliminar un coche por id | DELETE `/coches/:id` |
| Ver total de coches y modificaciones | GET `/coches/stats/totales` |

### Tecnologías usadas

- **HTML** — estructura de la página
- **CSS** — estilos visuales con colores corporativos de Audi
- **JavaScript (fetch + async/await)** — llamadas a la API desde el navegador
- **CORS** — configurado en el servidor para permitir las peticiones desde el frontend