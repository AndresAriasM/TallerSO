// app.js - Lógica principal de la aplicación - VERSION 2.0

let tareas = [];

// Función para agregar tarea
function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const textoTarea = input.value;
    
    if (!validarTexto(textoTarea)) {
        mostrarMensaje('Por favor escribe una tarea', 'error');
        return;
    }
    
    tareas.push(textoTarea);
    input.value = '';
    
    mostrarMensaje('Tarea agregada exitosamente', 'exito');
    renderizarTareas();
}

// NUEVA FUNCIONALIDAD: Función para eliminar tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarMensaje('Tarea eliminada', 'exito');
    renderizarTareas();
}

// Función para mostrar las tareas en pantalla
function renderizarTareas() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';
    
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${index + 1}. ${tarea}</span>
            <button onclick="eliminarTarea(${index})" style="float: right; background: #ff6b6b;">
                Eliminar
            </button>
        `;
        lista.appendChild(li);
    });
}