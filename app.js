// app.js - Lógica principal de la aplicación

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

// Función para mostrar las tareas en pantalla
function renderizarTareas() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';
    
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${tarea}`;
        lista.appendChild(li);
    });
}