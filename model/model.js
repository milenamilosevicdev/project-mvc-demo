export const array = fillArray(15, 100);

function fillArray(n, nmax) {
  for (let i = 0; i < n; i++) {
    array.push(Math.trunc(Math.random() * nmax));
  }
}

function findMax(arr) {
  return Math.max(...arr);
}
