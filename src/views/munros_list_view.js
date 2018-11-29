const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroListView = function(container) {
  this.container = container;
  this.munros = [];
};

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-data-ready', (event) => {
    this.munros = event.detail;
    this.render();
  });
  PubSub.subscribe('Munros:selected-region', (event) => {
    this.munros = event.detail;
    this.render();
  })
};

MunroListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};

module.exports = MunroListView;
