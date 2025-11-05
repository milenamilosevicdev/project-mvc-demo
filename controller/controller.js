import { array } from "../model/model.js";
import { buttonListener } from "../view/view.js";

function findMax(arr) {
  return Math.max(...arr);
}

buttonListener(findMax(array));
