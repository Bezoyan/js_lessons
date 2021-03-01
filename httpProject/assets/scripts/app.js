const listElement = document.querySelector(".posts");

const httpRq = new XMLHttpRequest();

httpRq.open("GET", "https://jsonplaceholder.typicode.com/posts");

httpRq.send();
