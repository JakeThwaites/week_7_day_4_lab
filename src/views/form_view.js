const PubSub = require('../helpers/pub_sub.js');

const FormView = function(menu) {
  this.menu = menu
  this.munros = [];
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-data-ready', (event) => {
    this.munros = event.detail;
    this.mapUniqueRegions(this.munros);
    this.populate(this.munros);
  })
  this.menu.addEventListener('change', (event) => {
    const selectedRegion = event.target;
    PubSub.publish('Munros:selected-region', selectedRegion);
  })
};

FormView.prototype.mapUniqueRegions = function (munroList) {
  uniqueRegions = [];
  for (munro of munroList) {
    if (!uniqueRegions.includes(munro.region)) {
      uniqueRegions.push(munro.region)
    };
  };
  return uniqueRegions;
};

FormView.prototype.populate = function (uniqueRegions) {
  uniqueRegions.forEach((uniqueRegion, index) => {
    const option = document.createElement('option');
    option.textContent = uniqueRegion;
    option.value = index;
    this.menu.appendChild(option);
  });
};


module.exports = FormView;
