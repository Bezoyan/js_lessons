const addMovieModel = document.getElementById("add-modal");
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
//const startAddMovieButton = document.querySelector("header").lastElementChild;
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModel.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll("input");
//const userInputs = addMovieModel.getElementsByTagName("input");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieModel.classList.toggle("visible");
  toggleBackdrop();
};

const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const movieImageUrl = userInputs[1].value;
  const movieRating = userInputs[2].value;
  if (
    movieTitle.trim() === "" ||
    movieImageUrl.trim() === "" ||
    movieRating.trim() === "" ||
    movieRating < 1 ||
    movieRating > 5
  ) {
    alert("Please input valid value");
  }
  const newMovie = {
    title: movieTitle,
    imageUrl: movieImageUrl,
    rating: movieRating,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModel();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovie = () => {
  toggleMovieModel();
  clearMovieInputs();
};

const backdropClickHandler = () => {
  toggleMovieModel();
};

startAddMovieButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
