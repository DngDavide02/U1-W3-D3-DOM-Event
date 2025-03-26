document.getElementById("button").addEventListener("click", function () {
  const input = document.getElementById("inputText");
  const attivita = input.value.trim(); // Usa .value per ottenere il testo inserito

  if (attivita !== "") {
    const lista = document.getElementById("listaAttivita");

    const li = document.createElement("li");
    li.textContent = attivita;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.className = "deleteButton";

    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteButton);
    lista.appendChild(li);

    input.value = "";
  }
});
