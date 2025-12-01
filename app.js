// app.js - Lógica principal de la aplicación - VERSION 3.0

let tareas = [];

// Función para agregar tarea
function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const textoTarea = input.value;
    
    if (!validarTexto(textoTarea)) {
        mostrarMensaje('Por favor escribe una tarea', 'error');
        return;
    }
    
    tareas.push({ texto: textoTarea, completada: false });
    input.value = '';
    
    mostrarMensaje('Tarea agregada exitosamente', 'exito');
    renderizarTareas();
}

// Función para eliminar tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarMensaje('Tarea eliminada', 'exito');
    renderizarTareas();
}

// NUEVA FUNCIONALIDAD: Marcar tarea como completada
function completarTarea(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}

// Función para mostrar las tareas en pantalla
function renderizarTareas() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = '';
    
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.style.textDecoration = tarea.completada ? 'line-through' : 'none';
        li.style.opacity = tarea.completada ? '0.6' : '1';
        
        li.innerHTML = `
            <input type="checkbox" ${tarea.completada ? 'checked' : ''} 
                   onclick="completarTarea(${index})" 
                   style="margin-right: 10px; cursor: pointer;">
            <span>${index + 1}. ${tarea.texto}</span>
            <button onclick="eliminarTarea(${index})" style="float: right; background: #ff6b6b;">
                Eliminar
            </button>
        `;
        lista.appendChild(li);
    });
}