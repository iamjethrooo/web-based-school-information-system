const LOGIN_MODAL = document.querySelector("#login-modal");
const LOGIN_BUTTON = document.querySelector("#login-button");

LOGIN_BUTTON.addEventListener("click", () => {
  LOGIN_MODAL.style.display = "flex";
});
