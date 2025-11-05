function findMax(arr) {
  return Math.max(...arr);
}

function displayMaxValue(maxValue) {
  let element = document.createElement("p");
  element.classList.add("max-paragraph");
  element.innerText = `Max element is ${maxValue}`;
  maxDivEl.appendChild(element);
}

btn.addEventListener("click", function () {
  displayMaxValue(findMax(array));
});
