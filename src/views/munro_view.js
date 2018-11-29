const MunroView = function(container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('scottish-munro');

  const name = this.createHeader();
  munroContainer.appendChild(name);

  const infoList = this.createInfoList();
  munroContainer.appendChild(infoList);

  this.munrosContainer.appendChild(munroContainer)

};

MunroView.prototype.createHeader = function () {
  const name = document.createElement('h2');
  name.classList.add('munro-name');
  name.textContent = this.munro.name;

  return name;
};

MunroView.prototype.createInfoList = function () {
  const infoList = document.createElement('ul');
  infoList.classList.add('info-list');
  this.populateList(infoList);
  return infoList;
};

MunroView.prototype.populateList = function (list) {
  munroHeight = this.munro.height;
  munroMeaning = this.munro.meaning;

  const munroListItem1 = document.createElement('li');
  const munroListItem2 = document.createElement('li');

  munroListItem1.textContent = munroHeight;
  munroListItem2.textContent = munroMeaning;

  list.appendChild(munroListItem1);
  list.appendChild(munroListItem2);
};


module.exports = MunroView;
