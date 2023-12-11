const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeBackground(color);
  });
});

function changeBackground(color) {
  body.className = "";

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;

    case "red":
      body.classList.add("red");
      break;

    case "blue":
      body.classList.add("blue");
      break;

    case "green":
      body.classList.add("green");
      break;

    case "yellow":
      body.classList.add("yellow");
      break;

    case "teal":
      body.classList.add("teal");
      break;

    case "white":
      body.classList.add("white");
      break;
  }
}
