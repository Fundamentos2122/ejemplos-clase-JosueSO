var header = document.getElementById("header");

header.innerHTML = "<span>Encabezado</span>";

var parrafos = document.getElementsByTagName("p");

console.log(parrafos);

var p1 = document.getElementsByClassName("p1")[0];

p1.className += " clase1";

p1.remove();

var p_x = document.querySelector("[type='x']");

p_x.style.color = "red";

p_x.setAttribute("attr1", "0");

//Agregar usando funciones
let new_a = document.createElement("a");

new_a.setAttribute("href", "https:\\www.google.com");

let text = document.createTextNode("Google");

new_a.appendChild(text);

// document.body.appendChild(new_a);

document.body.insertBefore(new_a, p_x);

new_a.style.textDecoration = "none";

//Agregar con HTML
// document.body.innerHTML += "<a href='https:\\www.google.com' style='text-decoration: none;'>Google</a>";