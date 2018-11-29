const MunroListView = require('./views/munros_list_view.js');
const Munros = require('./models/munros.js');
const MunroView = require('./views/munro_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const listView = document.querySelector('#scottish-munros');
  const munroListView = new MunroListView(listView);
  munroListView.bindEvents();

  const munros = new Munros();
  munros.getData();
})
