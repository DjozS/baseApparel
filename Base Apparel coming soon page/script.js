const button = document.getElementById("confirmBtn")
const error = document.getElementById("error")
const input = document.querySelector('.emptyField')
const alertIcon = document.getElementById("alertIcon")
button.addEventListener("click", function(){
  error.textContent = "Please provide a valid email";
  alertIcon.style.display = "flex";
  input.style.borderColor = "red";
})

