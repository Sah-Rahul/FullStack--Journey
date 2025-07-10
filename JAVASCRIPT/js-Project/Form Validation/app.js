const form = document.getElementById("signupForm");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearAllErrors();

  let valid = true;

  const name = form.name.value.trim();
  if (name === "") {
    showError(form.name, "Name cannot be empty");
    valid = false;
  } else {
    showSuccess(form.name);
  }

  const email = form.email.value.trim();
  if (email === "") {
    showError(form.email, "Email cannot be empty");
    valid = false;
  } else if (!validateEmail(email)) {
    showError(form.email, "Email is not valid");
    valid = false;
  } else {
    showSuccess(form.email);
  }

  const password = form.password.value;
  if (password.length < 6) {
    showError(form.password, "Password must be at least 6 characters");
    valid = false;
  } else {
    showSuccess(form.password);
  }

  const confirmPassword = form.confirmPassword.value;
  if (confirmPassword !== password || confirmPassword === "") {
    showError(form.confirmPassword, "Passwords do not match");
    valid = false;
  } else {
    showSuccess(form.confirmPassword);
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
    clearAllSuccess();
  }
});

// Remove error on user input
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error", "success");
    input.nextElementSibling.textContent = "";
  });
});

function showError(input, message) {
  input.classList.add("error");
  input.nextElementSibling.textContent = message;
}

function showSuccess(input) {
  input.classList.add("success");
  input.nextElementSibling.textContent = "";
}

function clearAllErrors() {
  inputs.forEach((input) => {
    input.classList.remove("error");
    input.nextElementSibling.textContent = "";
  });
}

function clearAllSuccess() {
  inputs.forEach((input) => {
    input.classList.remove("success");
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
