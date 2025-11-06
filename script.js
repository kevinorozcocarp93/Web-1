// imag del carrusel
const imagenes = [
    "imagenes padel/pag central.jpg",
    "imagenes padel/padel2.jpg",
    "imagenes padel/padel3.jpg"
];

let indice = 0;

const imagen = document.getElementById("imagen");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

if (imagen && btnNext && btnPrev) {
    btnNext.addEventListener("click", () => {
        indice = (indice + 1) % imagenes.length;
        imagen.src = imagenes[indice];
    });

    btnPrev.addEventListener("click", () => {
        indice = (indice - 1 + imagenes.length) % imagenes.length;
        imagen.src = imagenes[indice];
    });
}



// validacion form
const form = document.getElementById("formulario");

if (form) {
    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const errores = [];
        const divErrores = document.getElementById("errores");
        const resultado = document.getElementById("resultado");

        divErrores.innerHTML = "";
        resultado.innerHTML = "";

        // Expresiones regulares
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        const telRegex = /^[0-9]{7,15}$/;

        // Validaciones
        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        if (!emailRegex.test(email)) {
            errores.push("El email no es válido.");
        }

        if (!telRegex.test(telefono)) {
            errores.push("El teléfono debe contener solo números (7 a 15 dígitos).");
        }

        // Mostrar errores o resultado
        if (errores.length > 0) {
            divErrores.innerHTML = errores.join("<br>");
        } else {
            const nuevoDiv = document.createElement("div");
            nuevoDiv.innerHTML = `
                <h3>Datos enviados:</h3>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `;
            resultado.appendChild(nuevoDiv);

            form.reset();
        }

    });
}