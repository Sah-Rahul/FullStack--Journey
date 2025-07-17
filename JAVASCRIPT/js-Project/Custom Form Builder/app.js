const formItems = document.querySelectorAll(".form-item");
const canvas = document.getElementById("form-canvas");
const resetBtn = document.getElementById("reset-btn");
const exportBtn = document.getElementById("export-btn");

// 🎯 Drag & Drop
formItems.forEach(item => {
  item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", item.textContent.trim());
  });
});

canvas.addEventListener("dragover", e => e.preventDefault());

canvas.addEventListener("drop", e => {
  e.preventDefault();
  const type = e.dataTransfer.getData("text/plain");
  addFormElement(type);
});

// 🔄 Reset form
resetBtn.addEventListener("click", () => {
  canvas.innerHTML = `<p class="placeholder-text">Drop fields here</p>`;
});

// 📤 Export HTML
exportBtn.addEventListener("click", () => {
  const html = canvas.innerHTML;
  const blob = new Blob([html], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "form.html";
  link.click();
});

// 🔧 Create and append elements
function addFormElement(type) {
  const fieldWrapper = document.createElement("div");
  fieldWrapper.classList.add("field");

  const label = document.createElement("label");
  label.textContent = type;
  label.contentEditable = true; // ✏️ Editable label

  let input;

  switch (type) {
    case "Text Input":
      input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Enter text";
      break;

    case "Email":
      input = document.createElement("input");
      input.type = "email";
      input.placeholder = "Enter email";
      break;

    case "Password":
      input = document.createElement("input");
      input.type = "password";
      input.placeholder = "Enter password";
      break;

    case "Textarea":
      input = document.createElement("textarea");
      input.placeholder = "Enter message";
      break;

    case "Select":
      input = document.createElement("select");
      ["Option 1", "Option 2", "Option 3"].forEach(opt => {
        const option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        input.appendChild(option);
      });
      break;

    case "Checkbox":
      input = document.createElement("input");
      input.type = "checkbox";
      fieldWrapper.appendChild(input);
      label.textContent = " Accept Terms";
      break;

    case "Radio Button":
      input = document.createElement("input");
      input.type = "radio";
      input.name = "radio-group";
      fieldWrapper.appendChild(input);
      label.textContent = " Option A";
      break;

    case "Submit Button":
      input = document.createElement("button");
      input.type = "submit";
      input.textContent = "Submit";
      break;

    default:
      return;
  }

  if (type !== "Checkbox" && type !== "Radio Button" && type !== "Submit Button") {
    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(input);
  } else if (type === "Submit Button") {
    fieldWrapper.appendChild(input);
  } else {
    fieldWrapper.appendChild(label);
  }

  // 🗑️ Right-click to delete
  fieldWrapper.addEventListener("contextmenu", e => {
    e.preventDefault();
    if (confirm("Delete this field?")) {
      fieldWrapper.remove();
    }
  });

  // Remove placeholder
  const placeholder = document.querySelector(".placeholder-text");
  if (placeholder) placeholder.remove();

  canvas.appendChild(fieldWrapper);
}
