import Model from "../model/model2.js";
import View from "../view/view2.js";

function Controller() {
  const view = View();
  const model = Model();

  function initApp() {
    view.buttonListener2(function () {
      view.displayMaxValue(model.findMax());
    });
  }

  return {
    initApp,
  };
}

const controller = Controller();
controller.initApp();
