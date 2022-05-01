'use strict'

const beersUi = require('./ui.js')
const beersApi = require('./api.js')

const getFormFields = require('../../lib/get-form-fields.js')
const store = require('../store.js')

const onIndexBeers = () => {
  $('#beers-display').toggle()
  $('#new-beer-display').html('')
  $('div.card.onCreateSuccess').html('')
  $('#index-error-message').toggle()

  beersApi
    .indexBeers()
    .then((response) => beersUi.onIndexBeersSuccess(response))
    .catch(() => beersUi.onIndexBeersFailure())
}

const onShowBeer = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)

  beersApi
    .showBeer(data)
    .then((response) => beersUi.onShowBeerSuccess(response))
    .catch(() => beersUi.onShowBeerFailure())
}

const onDeleteBeer = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  // console.log(data)

  beersApi
    .deleteBeer(data.id)
    .then(() => beersUi.onDeleteBeerSuccess())
    .catch(() => beersUi.onDeleteBeerFailure())
}

const onUpdateBeer = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)

  beersApi
    .updateBeer(data, data.beer.id)
    .then(() => beersUi.onUpdateBeerSuccess())
    .catch(() => beersUi.onUpdateBeerFailure())
}

const onCreateBeer = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  data.beer.owner = store.user
  // console.log(data)

  beersApi
    .createBeer(data)
    .then((response) => beersUi.onCreateBeerSuccess(response))
    .catch(() => beersUi.onCreateBeerFailure())
}

const onPullUpForm = function () {
  $('.card.createBeerCard').toggle()
  $('#create-beer').toggle()
  $('.card-header.createBeerCard').toggle()
  $('#new-beer-display').toggle()
  $('#new-beer-error-message').toggle()
  $('#new-beer-error-message').html('')
}

const onUpdateCurrentBeerCard = function () {
  $('.update-beer-list').toggle()
}

const onDeleteListBeer = function (event) {
  const deleteButton = event.target
  const beerId = $(deleteButton).data('id')
  // console.log(beerId)

  beersApi
    .deleteBeer(beerId)
    .then(() => beersUi.onDeleteBeerSuccess())
    .catch(() => beersUi.onDeleteBeerFailure())
}

const onUpdateListBeer = function (event) {
  event.preventDefault()
  const updateForm = event.target
  const beerId = $(updateForm).data('id')
  const data = getFormFields(updateForm)

  beersApi
    .updateBeer(data, beerId)
    .then(() => beersUi.onUpdateBeerSuccess())
    .catch(() => beersUi.onUpdateBeerFailure())
}

module.exports = {
  onIndexBeers,
  onShowBeer,
  onDeleteBeer,
  onUpdateBeer,
  onCreateBeer,
  onDeleteListBeer,
  onUpdateListBeer,
  onPullUpForm,
  onUpdateCurrentBeerCard
}
