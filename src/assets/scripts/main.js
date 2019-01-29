/**
 * MainController
 */

function addEvent(nodeList, event, handler) {
  Array.from(nodeList).forEach((node) => {
    node.addEventListener(event, handler, false);
  });
}

const calculatorView = function calculatorView() {
  const elements = {
    display: document.querySelector('#display'),
    numbers: document.querySelectorAll('.number'),
  };

  function setDisplayValue(value) {
    elements.display.value = value;
  }

  return {
    elements,
    setDisplayValue,
  };
};

const calculatorModel = function calculatorModel() {
  const store = {
    total: 0,
  };

  return {
    getTotal() {
      return store.total;
    },
    setTotal(value) {
      store.total = value;
    },
  };
};

const calculatorController = function calculatorController(Model, View) {
  const model = Model();
  const view = View();

  function init() {
    view.setDisplayValue(model.getTotal());

    addEvent(view.elements.numbers, 'click', (e) => {
      // set total
      model.setTotal(e.target.textContent);
      // render view
      view.setDisplayValue(model.getTotal());
    });
  }

  init();
};

calculatorController(
  calculatorModel,
  calculatorView,
);
