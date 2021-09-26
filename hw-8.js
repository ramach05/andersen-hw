const body = document.querySelector("body");
const viewer = body.querySelector("#viewer");
const equalBtn = body.querySelector("#equals");
const resetBtn = body.querySelector("#reset");
const deleteBtn = body.querySelector("#delete");
const numWrapp = body.querySelector(".num-wrapp");
const switchBtn = numWrapp.querySelector("#switch");

const resetMessage = "Начинайте вычисления...";
const errorMessage = "Введите корректное значение!";
let result = "";

equalBtn.addEventListener("click", handleClickEqual);
resetBtn.addEventListener("click", handleReset);
deleteBtn.addEventListener("click", handleDelete);
numWrapp.addEventListener("click", handleClickNum);

function handleClickNum(e) {
  if (e.target === numWrapp) return;

  if (
    viewer.textContent.includes(resetMessage) ||
    viewer.textContent.includes(errorMessage) ||
    viewer.textContent.includes("Infinity")
  ) {
    result = "";
  }

  if (e.target === switchBtn && viewer.textContent.slice(-1) === "-") {
    result = `${result.slice(0, -1)}+`;
    viewer.textContent = result;
    return;
  }
  if (e.target === switchBtn && viewer.textContent.slice(-1) === "+") {
    result = `${result.slice(0, -1)}-`;
    viewer.textContent = result;
    return;
  }
  if (e.target === switchBtn) {
    result += "-";
    viewer.textContent = result;
    return;
  }

  result += e.target.textContent;
  viewer.textContent = result;
}

function handleClickEqual() {
  try {
    result = Math.floor(eval(result) * 10 ** 8) / 10 ** 8;
    viewer.textContent = result;
  } catch (error) {
    result = errorMessage;
    viewer.textContent = `${result} (${error})`;
  }
}

function handleReset() {
  result = resetMessage;
  viewer.textContent = result;
}

function handleDelete() {
  if (
    viewer.textContent.includes(resetMessage) ||
    viewer.textContent.includes(errorMessage)
  ) {
    return;
  }
  if (result.length) {
    result = result.slice(0, -1);
    viewer.textContent = result;
  }
  if (!result) {
    viewer.textContent = resetMessage;
  }
}
