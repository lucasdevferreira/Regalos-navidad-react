import store from "../store";

let estado = [];
localStorage.setItem("estado", JSON.stringify([estado]));
console.log(store.gifts);
