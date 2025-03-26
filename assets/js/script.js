document.getElementById("button").addEventListener("click", function () {
  const input = document.getElementById("inputText");
  const attivita = input.ariaValueMax.trim();

  if (attivita !== "") {
    const lista = document.getElementById("listaAttivita");
    const li = document.createElement("li");
    li.textContent = attivita;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "elimina";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", function () {
      deleteButton.removeChild1("li");
    });
    li.appendChild("deleteButton");
    lista.appendChild("li");
    input.value = "";
  }
});
