# Renta Urbana

Juego web de tablero tipo Monopoly construido con JavaScript, HTML y CSS. Permite partidas de 2 a 8 jugadores, compra de propiedades, subastas, alquileres, hipotecas, construcción de casas/hoteles y oponentes controlados por IA de prueba.

## Cómo jugar

1. Abre `index.html` en un navegador moderno o sirve el proyecto con un servidor local.
2. Usa **Partida rápida** para empezar con 2 jugadores humanos y 2 rivales IA, o personaliza nombres, colores y número de jugadores.
3. Lanza los dados, compra propiedades libres, negocia, construye mejoras y administra deudas.
4. Gana quien sobreviva financieramente cuando los demás jugadores quiebren.

## Ejecutar en local

```bash
python3 -m http.server 8000
```

Después visita <http://localhost:8000>.

> Nota: el juego carga jQuery desde CDN, por lo que el navegador necesita conexión a internet para iniciar la interfaz sin modificar dependencias.

## Archivos principales

- `index.html`: estructura de la interfaz, configuración de jugadores y tablero.
- `styles.css`: diseño visual del tablero, paneles y pantalla inicial.
- `monopoly.js`: motor de turnos, dados, compra, subastas, rentas y flujo de partida.
- `classicedition.js`: datos del tablero clásico.
- `ai.js`: IA de prueba para jugadores controlados por computadora.
