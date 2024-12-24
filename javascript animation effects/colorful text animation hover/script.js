document.addEventListener("DOMContentLoaded", () => {
  const textRef = document.querySelector(".text");
  const text = textRef.innerText;
  const htmlSpans = text
    .split("")
    .map(
      (letter, i) =>
        `<span style='animation-duration:${
          Math.random() * 5
        }s;filter:hue-rotate(${i * 90}deg)'>${letter}</span>`
    )
    .join("");
  textRef.innerHTML = htmlSpans;
});
