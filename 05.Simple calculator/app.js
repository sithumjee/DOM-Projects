document.getElementById("btn").addEventListener("click", () => {
  //get elements
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let results = document.querySelector(".result");
  let operator = document.getElementById("selectOp").value;

  switch (operator) {
    case "plus":
      results.innerHTML = Number(num1) + Number(num2);

      break;

    case "min":
      results.innerHTML = Number(num1) - Number(num2);
      break;

    case "div":
      results.innerHTML = Number(num1) / Number(num2);
      break;

    case "multi":
      results.innerHTML = Number(num1) * Number(num2);
      break;
  }
});
