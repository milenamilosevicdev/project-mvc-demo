const btn = document.getElementsByClassName("max-button")[0];
const mainEl = document.getElementsByTagName("main")[0];
const maxDivEl = document.getElementsByClassName("max-div")[0];

export default function View() {
  function displayMaxValue(maxValue) {
    let element = document.createElement("p");
    element.classList.add("max-paragraph");
    element.innerText = `Max element is ${maxValue}`;
    maxDivEl.appendChild(element);
  }
  function buttonListener2(callback) {
    btn.addEventListener("click", callback);

    return { displayMaxValue, buttonListener2 };
  }
}
