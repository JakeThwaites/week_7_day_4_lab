const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function() {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const url = `https://munroapi.herokuapp.com/api/munros`;
  const request = new RequestHelper(url);
  request.get()
    .then((munros) => {
      this.data = munros;
      PubSub.publish('Munros:all-data-ready', this.data);
    })
};

module.exports = Munros;
