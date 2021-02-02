// Clone array
function cloneArray(arr) {
  // // clone array using slice method
  // if (typeof arr === []) {

  let clonedArr = arr.slice(0);
  arr.push(5);
  console.log(arr);
  return clonedArr;
}

//console.log(cloneArray([1, 5, 6, 7]));

function cloneArray2(arr) {
  // clone array with spread operator
  let clonedArr = [...arr];
  return clonedArr;
}

//console.log(cloneArray2([4, 5, 8, 89]));

function cloneArray3(arr) {
  // clone array with spread operator
  let clonedArr = [].concat(arr);
  return clonedArr;
}

//console.log(cloneArray3([4, 5, 8, 45]));

function cloneLoop(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; ++i) {
    copy.push(arr[i]);
  }
  arr.push(5);
  console.log(arr);
  return copy;
}

//console.log(cloneLoop([7, 7, 8, 9]));

function copyarr() {
  var arr = [1, 2, 3, 4, 5];
  var copy = [];
  for (i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
  }
  arr.push(56);
  return copy;
}

//console.log(copyarr());

function cloneDeep(arr) {
  // clone array with spread operator
  let clonedArr = arr;
  arr.push(56);
  return clonedArr;
}

//console.log(cloneDeep([4, 5, 8, 45]));

// exapml of anagrama - cinema - iceman
