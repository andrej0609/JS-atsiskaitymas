/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas  turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas + h1(Gamintojas) ir jo pagaminti modeliai + (h2 Modeliai).


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

class Car {
  constructor(brand, models) {
    this.brand = brand;
    this.models = models;
  }
}

const cars = [];

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((car) => {
      cars.push(new Car(car.brand, car.models));
    });
    console.log(cars);
    renderCars(cars);
  });

function renderCars(cars) {
  const output = document.querySelector("#output");
  cars.forEach((car) => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car");
    const carBrand = document.createElement("h2");
    carBrand.textContent = car.brand;
    carDiv.append(carBrand);
    const carModels = document.createElement("ul");
    car.models.forEach((model) => {
      const carModel = document.createElement("li");
      carModel.textContent = model;
      carModels.append(carModel);
    });
    carDiv.append(carModels);
    output.append(carDiv);
  });
}