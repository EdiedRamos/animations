document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const spans = message.innerText
    .split("")
    .map((letter, i) => `<span>${letter}</span>`)
    .join("");
  message.innerHTML = spans;
});
