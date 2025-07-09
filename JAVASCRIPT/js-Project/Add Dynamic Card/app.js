    const form = document.getElementById("cardForm");
    const cardContainer = document.getElementById("card-container");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const pic = document.getElementById("pic").value;
      const name = document.getElementById("name").value;
      const job = document.getElementById("job").value;
      const info = document.getElementById("info").value;

      if (!pic || !name || !job || !info) {
        alert("All field are required")
        return
      }
      const card = document.createElement("div");
      card.classList.add("card");
      

      card.innerHTML = `
        <img src="${pic}" alt="Profile Pic">
        <h3>${name}</h3>
        <p><strong>${job}</strong></p>
        <p>${info}</p>
      `;

      cardContainer.appendChild(card);
      form.reset();
    });