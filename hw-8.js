const viewer = document.querySelector("#viewer");
const equalBtn = document.querySelector("#equals");
const resetBtn = document.querySelector("#reset");
const deleteBtn = document.querySelector("#delete");
const switchBtn = document.querySelector("#switch");
const numBtnList = document.querySelectorAll(".num");

const resetMessage = "Начинайте вычисления...";
const errorMessage = "Введите корректное значение!";
let result = "";

equalBtn.addEventListener("click", handleClickEqual);
resetBtn.addEventListener("click", handleReset);
deleteBtn.addEventListener("click", handleDelete);
switchBtn.addEventListener("click", handleClickNum);

numBtnList.forEach((i) => {
  i.addEventListener("click", handleClickNum);
});

function handleClickNum() {
  if (
    viewer.textContent.includes(resetMessage) ||
    viewer.textContent.includes(errorMessage) ||
    viewer.textContent.includes("Infinity")
  ) {
    result = "";
  }

  if (this === switchBtn && viewer.textContent.slice(-1) === "-") {
    result = `${result.slice(0, -1)}+`;
    viewer.textContent = result;
    return;
  }
  if (this === switchBtn && viewer.textContent.slice(-1) === "+") {
    result = `${result.slice(0, -1)}-`;
    viewer.textContent = result;
    return;
  }
  if (this === switchBtn) {
    result += "-";
    viewer.textContent = result;
    return;
  }

  result += this.textContent;
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
