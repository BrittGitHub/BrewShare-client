'use strict'

const store = require('../store.js')
const config = require('../config.js')

const newBeer = function (data) {
  // console.log(store)

  return $.ajax({
    method: 'POST',
    url: 'config.apiUrl' + '/beers',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  newBeer
}
