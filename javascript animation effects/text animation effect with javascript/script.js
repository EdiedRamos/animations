document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  const spans = message.innerText
    .split("")
    .map(
      (letter, i) =>
        `<span style='transition-delay:${i * 50}ms;filter:hue-rotate(${
          i * 90
        }deg)'>${letter}</span>`
    )
    .join("");
  message.innerHTML = spans;
});
