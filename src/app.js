/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";
//write your code here
window.onload = function() {
  //Declaración de arrays
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos = ["♦", "♥", "♠", "♣"];

  //Generación de pocisiones random
  let randomIndice = Math.floor(Math.random() * numbers.length);
  let randomIndice1 = Math.floor(Math.random() * palos.length);

  console.log(palos[randomIndice1]);
  console.log(numbers[randomIndice]);
  //Insertar valores random en la carta
  document.querySelector("#top").textContent = palos[randomIndice1];
  document.querySelector("#number").textContent = numbers[randomIndice];
  document.querySelector("#bottom").textContent = palos[randomIndice1];
  //Condición
  if (
    document.querySelector("#top").textContent === "♥" ||
    document.querySelector("#top").textContent === "♦"
  ) {
    document.querySelector("#top").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
  } else {
    document.querySelector("#top").style.color = "black";
    document.querySelector("#bottom").style.color = "black";
  }
};
