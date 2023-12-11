const container = document.querySelector(".container");
const content = document.querySelectorAll(".content");
const sendBtn = document.querySelector(".btn");
const section1 = document.querySelector(".section1");

let selectedContent = "Satisfied";

//events
container.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("content")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedContent = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  section1.innerHTML = `
        <h2>Feedback Received</h2>
        <p class="heart">💖</p>
        <strong>Thank You</strong>
        <br>
        <strong> Your Choice: ${selectedContent}</strong>
    
    `;
});

function removeActive() {
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
  }
}
