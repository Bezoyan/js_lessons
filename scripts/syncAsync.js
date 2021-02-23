const button = document.querySelector("button");

const promise = new Promise();
console.log(promise);

function trackUserLoction() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Helloo User");
  }, 0);
  console.log("Without settimout");
}

button.addEventListener("click", trackUserLoction);

// let result = 0;

// for (let i = 0; i < 10000000; ++i) {
//   result += i;
// }

// console.log(result);

// (function () {
//     console.log(1);
//     setTimeout(function () {
//       console.log(2);
//     }, 1000);
//     setTimeout(function () {
//       console.log(3);
//     }, 0);
//     console.log(4);
//   })();
