/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000;
  }
}
const movie1 = new Movie('The Avengers', 'Joss Whedon', 200000000);
const movie2 = new Movie('The Dark Knight', 'Christopher Nolan', 8500000);
const movie3 = new Movie('The Dark Knight Rises', 'Christopher Nolan', 150000000);

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
console.log(movie3.wasExpensive());

