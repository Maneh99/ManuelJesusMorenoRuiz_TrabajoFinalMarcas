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

> En desarrollo.

---

## Colección Bruno

> Pendiente.
