'use strict'

const beersUi = require('./ui.js')
const beersApi = require('./api.js')
/* {
  indexBeers,
  showBeer,
  deleteBeer,
  updateBeer,
  createBeer
} */
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('../store.js')

const onIndexBeers = () => {
  console.log('in event listener!!!!!')
  // get the beers from the API
  // check the Network tab!
  beersApi
    .indexBeers()
    // JavaScript Promises
    // if the request/response is successful, run this callback
    .then((response) => beersUi.onIndexBeersSuccess(response))
    // if the request/response has an error, run this callback
    .catch(() => beersUi.onIndexBeersFailure())
}

const onShowBeer = (event) => {
  event.preventDefault()
  console.log('in events.js')

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  beersApi
    .showBeer(data)
    .then((response) => beersUi.onShowBeerSuccess(response))
    .catch(() => beersUi.onShowBeerFailure())
}

const onDeleteBeer = (event) => {
  // prevent the page from reloading due to the submit action
  event.preventDefault()
  console.log('in events.js')

  // store the element that emitted the event in a variable
  const form = event.target
  // pass the form to getFormFields and store the data object in another variable
  const data = getFormFields(form)
  console.log(data)

  beersApi
    // .deleteBook(data)
    .deleteBeer(data.id)
    .then(() => beersUi.onDeleteBeerSuccess())
    .catch(() => beersUi.onDeleteBeerFailure())
}

const onUpdateBeer = (event) => {
  // prevent the page from reloading due to the submit action
  event.preventDefault()
  console.log('in events.js')

  // store the element that emitted the event in a variable
  const form = event.target
  // pass the form to getFormFields and store the data object in another variable
  const data = getFormFields(form)
  console.log(data)

  beersApi
    .updateBeer(data, data.beer.id)
    .then(() => beersUi.onUpdateBeerSuccess())
    .catch(() => beersUi.onUpdateBeerFailure())
}

const onCreateBeer = (event) => {
  // prevent the page from reloading due to the submit action
  event.preventDefault()
  console.log('in events.js')

  // store the element that emitted the event in a variable
  const form = event.target
  // pass the form to getFormFields and store the data object in another variable
  const data = getFormFields(form)

  // puts the user(from the store) as the owner
  data.beer.owner = store.user
  console.log(data)

  beersApi
    .createBeer(data)
    .then((response) => beersUi.onCreateBeerSuccess(response))
    .catch(() => beersUi.onCreateBeerFailure())
}

const onDeleteListBeer = function (event) {
  // event.target will tell us more information about the thing that was clicked
  const deleteButton = event.target

  // we need to find the id of the beer
  const beerId = $(deleteButton).data('id')

  console.log(beerId)

  beersApi
    // .deleteBeer({ id: beerId })
    .deleteBeer(beerId)
    .then(() => beersUi.onDeleteBeerSuccess())
    .catch(() => beersUi.onDeleteBeerFailure())
}

const onUpdateListBeer = function (event) {
  event.preventDefault()
  // event.target will tell us more information about the thing that was clicked
  const updateForm = event.target

  // we need to find the id of the beer
  const beerId = $(updateForm).data('id')

  // use getFormFields to get the data from the form
  const data = getFormFields(updateForm)
  console.log(data)
  console.log(beerId)
  // data.beer.id = beerId

  beersApi
    .updateBeer(data, beerId)
    .then(() => beersUi.onUpdateBeerSuccess())
    .catch(() => beersUi.onUpdateBeerFailure())
}

// export our function(s)
// module.exports will be what is "returned" when this file is required in another file
// if I want to access a specific property of this export object, I have to say "<export variable name>.<function name>"
module.exports = {
  onIndexBeers,
  onShowBeer,
  onDeleteBeer,
  onUpdateBeer,
  onCreateBeer,
  onDeleteListBeer,
  onUpdateListBeer
}
