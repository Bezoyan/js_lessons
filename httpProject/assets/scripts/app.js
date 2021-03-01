const listElement = document.querySelector(".posts");
const postTempalte = document.getElementById("single-post");

const httpRq = new XMLHttpRequest();

httpRq.open("GET", "https://jsonplaceholder.typicode.com/posts");

httpRq.responseType = "json";

httpRq.onload = function () {
  //const postList = JSON.parse(httpRq.response);
  const postList = httpRq.response;
  for (const post of postList) {
    const postEl = document.importNode(postTempalte.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
};
httpRq.send();
