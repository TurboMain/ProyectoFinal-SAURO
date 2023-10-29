const tareaTextarea = document.getElementById("tarea");
const guardarBtn = document.getElementById("guardar");
const tareasDiv = document.getElementById("tareas");

// Recuperar las tareas almacenadas en localStorage
const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

// Mostrar las tareas almacenadas al cargar la página
tareasGuardadas.forEach((tarea) => {
  mostrarTarea(tarea);
});

guardarBtn.addEventListener("click", () => {
  const tarea = tareaTextarea.value;

  if (tarea !== "") {
    // Agregar la nueva tarea al array
    tareasGuardadas.push(tarea);

    // Guardar las tareas actualizadas en localStorage
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

    // Mostrar la tareas en la lista
    mostrarTarea(tarea);

    // Limpiar el área de texto
    tareaTextarea.value = "";
  }
});

// Función para mostrar una tarea en la lista
function mostrarTarea(tarea) {
  const tareaElement = document.createElement("div");
  tareaElement.className = "tarea";
  tareaElement.innerHTML =
    `<p>${tarea}</p><button class="eliminar">Eliminar</button>` + Date();

  tareasDiv.appendChild(tareaElement);

  // Agregar un evento para eliminar la tarea
  const eliminarBtn = tareaElement.querySelector(".eliminar");
  eliminarBtn.addEventListener("click", () => {
    // Eliminar la tarea del array
    const index = tareasGuardadas.indexOf(tarea);
    if (index !== -1) {
      tareasGuardadas.splice(index, 1);
    }

    // Actualizar las tareas en localStorage
    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

    // Eliminar la tareas de la lista
    tareasDiv.removeChild(tareaElement);
  });
}
