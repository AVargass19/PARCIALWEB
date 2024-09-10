document.getElementById('mapPreview').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('mapIframe').style.display = 'block';
});

function agendar() {
    const nombre = document.getElementById('name').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const estrato = document.getElementById('estrato').value.trim();
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value.trim();
    const grupoSanguineo = document.getElementById('grupo-sanguineo').value;
    const genero = document.getElementById('genero').value;

    const actividades = [];
    const checkboxes = document.querySelectorAll('input[name="actividades"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        actividades.push(checkboxes[i].value);
    }

    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreValido.test(nombre)) {
        alert("El nombre no es válido. Solo se permiten letras y espacios.");
        return;
    }

    if (!nombreValido.test(apellido)) {
        alert("El apellido no es válido. Solo se permiten letras y espacios.");
        return;
    }

    const correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!correoValido.test(correo)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    const telefonoValido = /^\d{7,10}$/;
    if (!telefonoValido.test(telefono)) {
        alert("El número de teléfono no es válido. Debe tener entre 7 y 10 dígitos.");
        return;
    }

    const estratoNumero = parseInt(estrato);
    if (isNaN(estratoNumero) || estratoNumero < 1 || estratoNumero > 6) {
        alert("El estrato debe estar entre 1 y 6.");
        return;
    }

    alert(`Datos Ingresados:\nNombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nGénero: ${genero}\nActividades Favoritas: ${actividades.join(', ')}`);
}


function cancelar() {
    window.location.href = "login.html"; 
}
