/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");
const search = document.getElementById("search");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const kg = search.value;
  const lb = kg * 2.2046;
  const g = kg / 0.0010000;
  const oz = kg * 35.274;
  output.innerHTML = `
  <div class="output">
    <p>${kg} kg = ${lb} lb</p>
    <p>${kg} kg = ${g} g</p>
    <p>${kg} kg = ${oz} oz</p>
  </div>
  `;
});
