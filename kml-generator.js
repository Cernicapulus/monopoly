const markers = [];

const form = document.querySelector("#marker-form");
const markerList = document.querySelector("#marker-list");
const emptyState = document.querySelector("#empty-state");
const downloadButton = document.querySelector("#download-kml");
const downloadHint = document.querySelector("#download-hint");
const fileNameInput = document.querySelector("#file-name");
const loadSampleButton = document.querySelector("#load-sample");

const sampleMarkers = [
	{
		title: "Estatua de la Libertad",
		description: "Monumento icónico de Nueva York y punto de referencia visible desde el puerto.",
		latitude: 40.6892,
		longitude: -74.0445,
		altitude: 0,
		images: ["https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"],
		links: ["https://www.nps.gov/stli/index.htm"],
	},
	{
		title: "Parque del Retiro",
		description: "Jardín histórico de Madrid con lago, senderos y espacios culturales.",
		latitude: 40.4153,
		longitude: -3.6844,
		altitude: 667,
		images: ["https://upload.wikimedia.org/wikipedia/commons/2/28/Palacio_de_Cristal_-_Parque_del_Retiro.jpg"],
		links: ["https://www.esmadrid.com/informacion-turistica/parque-del-retiro"],
	},
];

function splitLines(value) {
	return value
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
}

function escapeXml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function sanitizeUrl(value) {
	try {
		const url = new URL(value);
		return ["http:", "https:", "mailto:"].includes(url.protocol) ? url.href : "";
	} catch {
		return "";
	}
}

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function buildDescriptionHtml(marker) {
	const paragraphs = [`<p>${escapeHtml(marker.description).replace(/\n/g, "<br>")}</p>`];
	const imageTags = marker.images
		.map(sanitizeUrl)
		.filter(Boolean)
		.map((url) => `<img src="${escapeHtml(url)}" alt="Imagen de ${escapeHtml(marker.title)}" style="max-width:320px;width:100%;height:auto;border-radius:8px;margin:8px 0;display:block;">`);
	const linkTags = marker.links
		.map(sanitizeUrl)
		.filter(Boolean)
		.map((url, index) => `<li><a href="${escapeHtml(url)}">Enlace ${index + 1}</a></li>`);

	if (imageTags.length > 0) {
		paragraphs.push(`<div>${imageTags.join("")}</div>`);
	}

	if (linkTags.length > 0) {
		paragraphs.push(`<p><strong>Enlaces:</strong></p><ul>${linkTags.join("")}</ul>`);
	}

	return paragraphs.join("");
}

function createPlacemark(marker) {
	const description = buildDescriptionHtml(marker);
	const altitude = Number.isFinite(marker.altitude) ? marker.altitude : 0;

	return `
		<Placemark>
			<styleUrl>#interactive-marker</styleUrl>
			<name>${escapeXml(marker.title)}</name>
			<description><![CDATA[${description}]]></description>
			<Point>
				<coordinates>${marker.longitude},${marker.latitude},${altitude}</coordinates>
			</Point>
		</Placemark>`;
}

function buildKml() {
	const placemarks = markers.map(createPlacemark).join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
	<Document>
		<name>${escapeXml(fileNameInput.value || "Marcadores Google Earth")}</name>
		<description>Archivo KML generado con KML Studio.</description>
		<Style id="interactive-marker">
			<IconStyle>
				<color>ff10b981</color>
				<scale>1.2</scale>
				<Icon>
					<href>http://maps.google.com/mapfiles/kml/paddle/grn-stars.png</href>
				</Icon>
			</IconStyle>
			<BalloonStyle>
				<text><![CDATA[<h2>$[name]</h2>$[description]]]></text>
			</BalloonStyle>
		</Style>
		${placemarks}
	</Document>
</kml>`;
}

function updateDownloadState() {
	const hasMarkers = markers.length > 0;
	downloadButton.disabled = !hasMarkers;
	emptyState.hidden = hasMarkers;
	downloadHint.textContent = hasMarkers
		? `${markers.length} marcador${markers.length === 1 ? "" : "es"} listo${markers.length === 1 ? "" : "s"} para descargar.`
		: "El botón se activará cuando agregues marcadores.";
}

function renderMarkers() {
	markerList.innerHTML = markers
		.map((marker, index) => `
			<li class="marker-item">
				<div>
					<h3>${escapeHtml(marker.title)}</h3>
					<p>${escapeHtml(marker.description)}</p>
					<div class="marker-meta">
						<span>${marker.latitude}, ${marker.longitude}</span>
						<span>${marker.images.length} imagen${marker.images.length === 1 ? "" : "es"}</span>
						<span>${marker.links.length} enlace${marker.links.length === 1 ? "" : "s"}</span>
					</div>
				</div>
				<button class="remove-button" type="button" data-index="${index}" aria-label="Eliminar ${escapeHtml(marker.title)}">Eliminar</button>
			</li>
		`)
		.join("");
	updateDownloadState();
}

function addMarker(marker) {
	markers.push(marker);
	renderMarkers();
}

function readMarkerFromForm() {
	const data = new FormData(form);
	const latitude = Number(data.get("latitude"));
	const longitude = Number(data.get("longitude"));
	const altitudeValue = data.get("altitude");
	const altitude = altitudeValue === "" ? 0 : Number(altitudeValue);

	if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) {
		throw new Error("La latitud debe estar entre -90 y 90.");
	}

	if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
		throw new Error("La longitud debe estar entre -180 y 180.");
	}

	return {
		title: data.get("title").trim(),
		description: data.get("description").trim(),
		latitude,
		longitude,
		altitude: Number.isFinite(altitude) ? altitude : 0,
		images: splitLines(data.get("images") || ""),
		links: splitLines(data.get("links") || ""),
	};
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	try {
		addMarker(readMarkerFromForm());
		form.reset();
		document.querySelector("#title").focus();
	} catch (error) {
		alert(error.message);
	}
});

markerList.addEventListener("click", (event) => {
	const button = event.target.closest(".remove-button");
	if (!button) {
		return;
	}

	markers.splice(Number(button.dataset.index), 1);
	renderMarkers();
});

downloadButton.addEventListener("click", () => {
	if (markers.length === 0) {
		return;
	}

	const blob = new Blob([buildKml()], {
		type: "application/vnd.google-earth.kml+xml;charset=utf-8",
	});
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	const safeName = (fileNameInput.value || "marcadores-google-earth")
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9_-]+/g, "-")
		.replace(/^-+|-+$/g, "") || "marcadores-google-earth";

	link.href = url;
	link.download = `${safeName}.kml`;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
});

loadSampleButton.addEventListener("click", () => {
	sampleMarkers.forEach((marker) => addMarker({ ...marker }));
});

renderMarkers();
