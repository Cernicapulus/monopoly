# KML Studio

Página web estática para generar archivos KML compatibles con Google Earth. Permite crear marcadores interactivos con título, descripción, coordenadas, imágenes y enlaces, y descargarlos en un archivo `.kml` desde el navegador.

## Funciones principales

- Formulario para añadir marcadores con latitud, longitud y altitud opcional.
- Soporte para varias imágenes y enlaces por marcador usando una URL por línea.
- Vista previa de los marcadores incluidos antes de generar el archivo.
- Botón de descarga que crea un KML localmente sin enviar datos a servidores externos.
- Marcadores con estilo e información enriquecida en la burbuja de Google Earth.

## Ejecutar en local

```bash
python3 -m http.server 8000
```

Después visita <http://localhost:8000> y abre `index.html`.

## Archivos principales

- `index.html`: estructura de la página y formulario del generador.
- `styles.css`: estilos visuales y diseño responsive.
- `kml-generator.js`: lógica para administrar marcadores, crear el contenido KML y descargar el archivo.
