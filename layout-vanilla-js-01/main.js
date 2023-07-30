const title = document.querySelector("h1");
const legend = document.querySelector("p");
const cookieImage = document.querySelector("#cookieToOpen");
const message = document.querySelector("h3");
const cookieOpenedImage = document.querySelector("#cookieOpened");
const button = document.querySelector("button");

cookieImage.addEventListener("click", handleOpenCookie);
button.addEventListener("click", resetCookie);

function handleOpenCookie(event) {
  event.preventDefault();
  title.innerText = "Aqui está a sua sorte de hoje:";
  toggleHide();
}

function resetCookie(event) {
  event.preventDefault();
  title.innerText = "Qual é a sua sorte de hoje?";
  toggleHide();
}

function toggleHide() {
  legend.classList.toggle("hide");
  cookieImage.classList.toggle("hide");
  message.classList.toggle("hide");
  cookieOpenedImage.classList.toggle("hide");
  button.classList.toggle("hide");
}
