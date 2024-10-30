document.getElementById("gastoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombreGasto = document.getElementById("nombreGasto").value;
    const cantidadGasto = parseFloat(document.getElementById("cantidadGasto").value);

    if (!nombreGasto || isNaN(cantidadGasto) || cantidadGasto <= 0) {
        alert("Por favor ingresa un gasto válido");
        return;
    }

    // Actualizar la lista de gastos y el presupuesto restante
    agregarGasto(nombreGasto, cantidadGasto);
    actualizarPresupuesto(cantidadGasto);

    // Limpiar los campos de entrada
    document.getElementById("nombreGasto").value = '';
    document.getElementById("cantidadGasto").value = '';
});

// Función para agregar un gasto a la lista
function agregarGasto(nombre, cantidad) {
    const gastoList = document.getElementById("gastos").querySelector("ul");

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = `${nombre}: $${cantidad}`;

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-danger btn-sm";
    botonEliminar.textContent = "Eliminar";
   
    // Añadir el evento de click para eliminar el gasto
    botonEliminar.addEventListener("click", function() {
        gastoList.removeChild(li);
        actualizarPresupuesto(-cantidad); // Restar la cantidad al presupuesto
    });

    li.appendChild(botonEliminar);
    gastoList.appendChild(li);
}

// Solicitar el presupuesto inicial al cargar la página
let presupuestoTotal = parseFloat(prompt("¿Cuál es tu presupuesto inicial?"));

if (isNaN(presupuestoTotal) || presupuestoTotal <= 0) {
    alert("Por favor ingresa un presupuesto válido.");
    presupuestoTotal = 0; // Si no ingresa un valor válido, el presupuesto se establece en 0
}

let restanteTotal = presupuestoTotal;

// Mostrar el presupuesto inicial en la interfaz
document.getElementById("total").textContent = presupuestoTotal.toFixed(2);
document.getElementById("restante").textContent = restanteTotal.toFixed(2);

// Función para actualizar el presupuesto
function actualizarPresupuesto(cantidadGasto) {
    restanteTotal -= cantidadGasto;

    document.getElementById("total").textContent = presupuestoTotal.toFixed(2);
    document.getElementById("restante").textContent = restanteTotal.toFixed(2);

    // Verificar si el restante es negativo y mostrar alerta si es necesario
    if (restanteTotal <0 ) {
        restanteTotal =0 ;
        
        alert("Se ah acabado el presupuesto!");
        
    } 
    
    document.getElementById("total").textContent = presupuestoTotal.toFixed(2);
    document.getElementById("restante").textContent = restanteTotal.toFixed(2);
    
}
