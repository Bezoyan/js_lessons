const button = document.querySelector("button");

const getPosition = (args) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (sucsses) => {
        resolve(sucsses);
      },
      (error) => {
        reject(error);
      },
      args
    );
  });
  return promise;
};

const setTimer = (duraction) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duraction);
  });
  return promise;
};

async function trackUserLoction() {
  //let positionData;
  let posData;
  let timeData;
  try {
    posData = await getPosition();
    timeData = await setTimer(2000);
  } catch (err) {
    console.log(err);
  }
  console.log(posData, timeData);
  // .then(
  //   (posData) => {
  //     positionData = posData;
  //     return setTimer(2000);
  //   }
  //   // (err) => {
  //   //   console.log(err);
  //   // }
  // )
  // .catch((err) => {
  //   console.log(err);
  // })
  // .then((data) => {
  //   console.log(data, positionData);
  // })
  //   .finally(() => {
  //     console.log("all is done");
  //   });
  // setTimer(1000).then(() => {
  //   console.log("Hellooo Timer");
  // });
  // console.log("Without settimout");
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
//     setTimeout(function ()
//       console.log(3);
//     }, 0);
//     console.log(4);
//   })();
