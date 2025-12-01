// utilidades.js - Funciones auxiliares

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.padding = '10px';
    mensajeDiv.style.marginBottom = '10px';
    mensajeDiv.style.borderRadius = '5px';
    mensajeDiv.style.textAlign = 'center';
    
    if (tipo === 'error') {
        mensajeDiv.style.background = '#ff6b6b';
        mensajeDiv.style.color = 'white';
    } else {
        mensajeDiv.style.background = '#51cf66';
        mensajeDiv.style.color = 'white';
    }
    
    document.querySelector('.container').insertBefore(
        mensajeDiv, 
        document.querySelector('.input-section')
    );
    
    setTimeout(() => mensajeDiv.remove(), 3000);
}

// Función para validar texto
function validarTexto(texto) {
    return texto.trim().length > 0;
}