document.getElementById("saludar").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje");

    if(nombre) {
        mensaje.textContent = `¡Hola, ${nombre}! Bienvenido a Aprende con JS.`;
    } else {
        mensaje.textContent = "Por favor, escribe tu nombre.";
    }
});
