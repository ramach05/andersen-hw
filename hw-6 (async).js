// <button type="button" id="button1">Some button for hw-6</button>;

const button = document.querySelector("#button1");

button.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Timer 1");
  }, 0);

  Promise.resolve().then(() => console.log("Microtask 1"));

  console.log("Listener 1");
});

button.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Timer 2");
  }, 0);

  Promise.resolve().then(() => console.log("Microtask 2"));

  console.log("Listener 2");
});

button.click();
