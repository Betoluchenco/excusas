import "bootstrap";
import "./style.css";
// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#random-message").innerText = [
    "A two headed pinecone yelled at my sandwich in my house",
    "A cat just hacked my WiFi",
    "I saw a fish driving a car",
    "An avocado tried to fight me",
    "A ghost danced in my mirror",
    "A pigeon just ordered pizza from my phone"
  ][Math.floor(Math.random() * 6)];
};

