const tareas = [
    {id: 1, descripcion: "Hacer Desayuno", estado: false},
    {id: 2, descripcion: "Realizar aseo", estado: false},
    {id: 3, descripcion: "Preparar las maletas", estado: false}
]
const userList = document.getElementById("userList");
const totalSpan = document.getElementById("total");
const realizadasSpan = document.getElementById("realizadas");

const rendertareas = () => {
    let template = `<li> <strong style="margin-right: 20px;">ID</strong> <strong>Tarea</strong></li>`;
    for(let tarea of tareas){
        template += `<li>${tarea.id} - <span style=" ${tarea.estado ? 'text-decoration: line-through;' : ''}">${tarea.descripcion}</span>
        <input type="checkbox" ${tarea.estado ? "checked" : ""} onclick="cambiarEstado(${tarea.id})">
         <button onclick="borrarTarea(${tarea.id})" style="color: red; border: none;">X</button></li>
        `;
    }
    userList.innerHTML = template;
    totalSpan.textContent = tareas.length;
    const completadas = tareas.filter(t => t.estado === true);
    realizadasSpan.textContent = completadas.length;

};

const addUserBtn = document.getElementById("addUserBtn")
const tareaInput = document.getElementById("tareaInput")

addUserBtn.addEventListener("click", () => {
    let nuevaTarea = {
        id: tareas.length + 1,
        descripcion: tareaInput.value,
        estado: false
    };
    tareas.push(nuevaTarea);
    tareaInput.value = "";
    rendertareas();
    
});

const borrarTarea = (id) => {
    const index = tareas.findIndex(t => t.id === id);
    tareas.splice(index, 1);
    rendertareas();
};

const cambiarEstado = (id) => {
    const tarea = tareas.find(t => t.id === id);
    tarea.estado = !tarea.estado;
    rendertareas();
}

rendertareas();

