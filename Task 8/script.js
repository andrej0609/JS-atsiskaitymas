/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum(a, b) {
    return a + b;
  }
  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
}
const calc = new Calculator();
console.log(calc.sum(2, 3));
console.log(calc.subtraction(2, 3));
console.log(calc.multiplication(2, 3));
console.log(calc.division(2, 3));
