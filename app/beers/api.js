'use strict'

const store = require('../store.js')
const config = require('../config.js')

const indexBeers = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/beers',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showBeer = function (data) {
  console.log(data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/beers/' + data.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteBeer = function (id) {
  console.log(id)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/beers/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateBeer = function (data, id) {
  console.log(data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/beers/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const createBeer = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/beers',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  indexBeers,
  showBeer,
  deleteBeer,
  updateBeer,
  createBeer
}
