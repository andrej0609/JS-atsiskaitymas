/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
--------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';

class users {
  constructor() {
    this.url = ENDPOINT;
  }
  async getUsers() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}
const user = new users();
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  user.getUsers().then((users) => {
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      const img = document.createElement("img");
      img.src = user.avatar_url;
      img.alt = user.login;

      const userInfo = document.createElement("div");
      userInfo.classList.add("user-info");

      const h2 = document.createElement("h2");
      h2.innerText = user.login;

      userInfo.append(h2);
      userDiv.append(img);
      userDiv.append(userInfo);
      output.append(userDiv);
    });
    message.style.display = "none";
    btn.style.display = "none";
  });
});





