let { Model } = require("./model");
let { View } = require("./view");

class Controller {
  constructor() {
    this._model = new Model();
    this._view = new View();
  }

  c_queueCS() {
    let result = this._model.m_queueCS();
    this._view.v_display(result);
  }

  c_callCS() {
    let result = this._model.m_callCS();
    this._view.v_display(result);
  }

  c_queueTL() {
    let result = this._model.m_queueTL();
    this._view.v_display(result);
  }

  c_callTL() {
    let result = this._model.m_callTL();
    this._view.v_display(result);
  }

  c_refresh() {
    let result = this._model.m_refresh();
    // this._view.v_display(result);
  }

  c_help() {
    this._view.v_help();
  }
}

module.exports = {
  Controller
};
