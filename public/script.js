document
  .getElementById("loveForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const memory = document.getElementById("memory").value;
    const tone = document.getElementById("tone").value;

    const response = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, memory, tone }),
    });

    const data = await response.json();

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${data.letter}</p>`;
    outputDiv.style.display = "block"; // Show the output div after generation
  });
