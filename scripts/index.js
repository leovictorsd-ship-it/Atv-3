const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");

function adicionarTarefa() {
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");
    item.innerText = texto;

    item.addEventListener("click", function() {
        item.classList.toggle("done");
    });

    const btnRemover = document.createElement("button");
    btnRemover.innerText = "X";
    btnRemover.addEventListener ("click", function(e){
        e.stopPropagation();
        lista.removeChild(item);
    });

    item.appendChild(btnRemover);
    lista.appendChild(item);

    input.value = "";
}

botao.addEventListener("click", adicionarTarefa);

