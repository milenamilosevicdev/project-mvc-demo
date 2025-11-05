const btn = document.getElementsByClassName("max-button")[0];
const mainEl = document.getElementsByTagName("main")[0];
const maxDivEl = document.getElementsByClassName("max-div")[0];

function displayMaxValue(maxValue) {
  let element = document.createElement("p");
  element.classList.add("max-paragraph");
  element.innerText = `Max element is ${maxValue}`;
  maxDivEl.appendChild(element);
}


export function buttonListener(maxValue) {
  btn.addEventListener("click", function () {
    displayMaxValue(maxValue);
  });
}
