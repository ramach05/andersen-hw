class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  start() {
    if (this.#isStarted) throw new Error("Машина уже заведена");

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Машина ещё не заведена");
    }
    this.#isStarted = false;
  }

  fillUpGasTank(fuelVolume) {
    if (
      typeof fuelVolume !== "number" ||
      !isFinite(fuelVolume) ||
      fuelVolume <= 0
    )
      throw new Error("Неверное количество топлива для заправки");

    const currentFuelVolume = fuelVolume + this.#currentFuelVolume;

    if (currentFuelVolume > this.#maxFuelVolume)
      throw new Error("Топливный бак переполнен");

    this.#currentFuelVolume = currentFuelVolume;
  }

  drive(speed, hours) {
    if (typeof speed !== "number" || !isFinite(speed) || speed <= 0)
      throw new Error("Неверная скорость");

    if (typeof hours !== "number" || !isFinite(hours) || hours <= 0)
      throw new Error("Неверное количество часов");

    if (speed > this.#maxSpeed)
      throw new Error("Машина не может ехать так быстро");

    if (!this.#isStarted)
      throw new Error("Машина должна быть заведена, чтобы ехать");

    this.#mileage = speed * hours;
    const currentFuelVolume =
      this.#currentFuelVolume - (this.#mileage * this.#fuelConsumption) / 100;

    if (currentFuelVolume < 0) throw new Error("Недостаточно топлива");

    this.#currentFuelVolume = currentFuelVolume;
  }

  get brand() {
    return this.#brand;
  }
  set brand(string) {
    if (typeof string !== "string" || string.length < 1 || string.length > 50)
      throw new Error("Нужно задать строку от 1 до 50 символов");
    this.#brand = string;
  }

  get model() {
    return this.#model;
  }
  set model(string) {
    if (typeof string !== "string" || string.length < 1 || string.length > 50)
      throw new Error("Нужно задать строку от 1 до 50 символов");

    this.#model = string;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set yearOfManufacturing(num) {
    if (
      typeof num !== "number" ||
      !isFinite(num) ||
      num < 1900 ||
      num > new Date().getFullYear()
    )
      throw new Error(
        "Нужно задать число от 1900 до текущего года включительно"
      );

    this.#yearOfManufacturing = num;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxSpeed(num) {
    if (typeof num !== "number" || !isFinite(num) || num < 100 || num > 300)
      throw new Error("Нужно задать число от 100 до 300 км/ч");

    this.#maxSpeed = num;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set maxFuelVolume(num) {
    if (typeof num !== "number" || !isFinite(num) || num < 5 || num > 20)
      throw new Error("Нужно задать число в литрах от 5 до 20");

    this.#maxFuelVolume = num;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  set fuelConsumption(num) {
    if (typeof num !== "number" || !isFinite(num))
      throw new Error("Нужно задать число в л/100км");

    this.#fuelConsumption = num;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }
}

module.exports = Car;
