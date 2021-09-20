const button = document.querySelector("#button1");

// Ситуация №1:

// button.addEventListener("click", () => {
//   Promise.resolve().then(() => console.log("Microtask 1"));
//   console.log("Listener 1");
// });

// button.addEventListener("click", () => {
//   Promise.resolve().then(() => console.log("Microtask 2"));
//   console.log("Listener 2");
// });

// Вопрос: в каком порядке будут выведены в консоль сообщения, когда пользователь кликнет по кнопке button? Максимально подробно объяснить, почему.
// Ответ, содержащий лишь порядок вывода сообщений (даже если он будет верным) не засчитывается. Должно быть объяснение, чтобы я понял, что вы поняли.

// Ситуация №2:

button.addEventListener("click", () => {
  // setTimeout(() => {
  //   console.log("Timer 1");
  // }, 0);

  Promise.resolve().then(() => console.log("Microtask 1"));

  console.log("Listener 1");
});

button.addEventListener("click", () => {
  // setTimeout(() => {
  //   console.log("Timer 2");
  // }, 0);

  Promise.resolve().then(() => console.log("Microtask 2"));

  console.log("Listener 2");
});

button.click();

// Вопрос: в каком порядке будут выведены в консоль сообщения, когда выполнится код выше? Будет ли разница с первым вариантом? Если нет, то можете опустить этот фрагмент объяснения. Если да, то объяснить, в чём разница.
// Ответ, содержащий лишь порядок вывода сообщений (даже если он будет верным) не засчитывается. Должно быть объяснение, чтобы я понял, что вы поняли.

// Настоятельно рекомендую сразу код не запускать.
// Запускать только тогда, когда вы уже сами попытались понять, как оно будет и почему или же если у вас совсем нет идей.
