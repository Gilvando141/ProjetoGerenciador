function addTask() {
    const input = document.getElementById("adicionarT");
    const tarefaT = input.value.trim();
  
    if (tarefaT === "") {
      alert("Digite uma tarefa!");
      return;
    }
  
  
    const li = document.createElement("li");
  
    li.textContent = tarefaT;
  
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };
  
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  
    input.value = "";
  }
  