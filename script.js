console.log("Script cargado exitosamente");
const form = document.querySelector("form");
if (form) {
	// Datos de entrada del formulario
	const nombre = document.querySelector("#nombre");
	const apellido = document.querySelector("#apellido");
	const email = document.querySelector("#email");
	const telefono = document.querySelector("#telefono");
	const edad = document.querySelector("#edad");
	const direccion = document.querySelector("#direccion");
	const provincia = document.querySelector("#provincia");
	const codigoPostal = document.querySelector("#cp");
	const metodoContactoEmail = document.querySelector("#metodo-contacto-email");
	const metodoContactoTelefono = document.querySelector(
		"#metodo-contacto-telefono",
	);
	const metodoContactoCorreoPostal = document.querySelector(
		"#metodo-contacto-correo-postal",
	);
	// Seccion Resumen de datos
	const idResumenNombre = document.querySelector("#resumen-nombre");
	const idResumenApellido = document.querySelector("#resumen-apellido");
	const idResumenEmail = document.querySelector("#resumen-email");
	const idResumenTelefono = document.querySelector("#resumen-telefono");
	const idResumenEdad = document.querySelector("#resumen-edad");
	const idResumenDireccion = document.querySelector("#resumen-direccion");
	const idResumenProvincia = document.querySelector("#resumen-provincia");
	const idResumenCP = document.querySelector("#resumen-cp");
	const idResumenMetodo = document.querySelector("#resumen-metodo");

	// captura el ingreso de los inputs del form y los inserta en la sección resumen de datos
	nombre.addEventListener("change", (evento) => {
		idResumenNombre.innerText = evento.target.value;
	});
	apellido.addEventListener("input", (evento) => {
		idResumenApellido.innerText = evento.target.value;
	});
	email.addEventListener("input", (evento) => {
		idResumenEmail.innerText = evento.target.value;
	});
	telefono.addEventListener("input", (evento) => {
		idResumenTelefono.innerText = evento.target.value;
	});
	edad.addEventListener("input", (evento) => {
		idResumenEdad.innerText = evento.target.value;
		const edadIngresada = parseInt(evento.target.value);
		if (edadIngresada > 0 && edadIngresada < 18) {
			idResumenEdad.style.backgroundColor = "#ffcccc";
		} else {
			idResumenEdad.style.backgroundColor = "hsl(218, 35%, 98%)";
		}
	});
	direccion.addEventListener("input", (evento) => {
		idResumenDireccion.innerText = evento.target.value;
	});
	provincia.addEventListener("input", (evento) => {
		idResumenProvincia.innerText = evento.target.value;
	});
	codigoPostal.addEventListener("input", (evento) => {
		idResumenCP.innerText = evento.target.value;
	});

	// metodos de contacto
	metodoContactoEmail.addEventListener("change", (evento) => {
		idResumenMetodo.innerText = evento.target.value;
	});
	metodoContactoTelefono.addEventListener("change", (evento) => {
		idResumenMetodo.innerText = evento.target.value;
	});
	metodoContactoCorreoPostal.addEventListener("change", (evento) => {
		idResumenMetodo.innerText = evento.target.value;
	});

	//checkbox suscripción de interés
	document
		.getElementById("btn-cargar-quintulen-3932-92")
		.addEventListener("click", () => {
			const seleccionados = document.querySelectorAll(
				'input[name="suscripcion[]"]:checked',
			);

			const valores = Array.from(seleccionados).map((cb) => cb.value);

			document.getElementById("celdaSuscripciones").textContent =
				valores.join(", ");
		});
}
// boton leer más/menos en acercade
const btn = document.querySelector("#btn-leer-mas-quintulen-3932-92");
if (btn) {
	const cv = document.querySelector(".cv-completo");
	btn.addEventListener("click", () => {
		const currentDisplay = window.getComputedStyle(cv).display;

		if (currentDisplay === "none") {
			btn.innerText = "Leer menos";
			cv.style.display = "block";
		} else {
			btn.innerText = "Leer más";
			cv.style.display = "none";
		}
	});
}
