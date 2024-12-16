document.addEventListener("DOMContentLoaded", () => {
  const message = document.getElementById("message");
  // console.log({ message: message.innerText });
  const newMessage = document.createElement("p");
  for (const letter of message.innerText) {
    const span = document.createElement("span");
    span.innerText = letter;
    newMessage.appendChild(span);
  }
  message.innerHTML = newMessage.innerHTML;
});
