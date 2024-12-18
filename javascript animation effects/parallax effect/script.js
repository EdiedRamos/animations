document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  const leaf = document.getElementById("leaf");
  const hill1 = document.getElementById("hill1");
  const hill4 = document.getElementById("hill4");
  const hill5 = document.getElementById("hill5");

  window.addEventListener("scroll", () => {
    const { scrollY } = window;

    text.style.marginTop = `${scrollY}px`;
    leaf.style.top = `${scrollY * -1.5}px`;
    hill1.style.top = `${scrollY * 1.5}px`;
    hill4.style.left = `${scrollY * -1}px`;
    hill5.style.left = `${scrollY * 1}px`;
  });
});
