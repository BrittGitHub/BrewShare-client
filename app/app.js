// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')
const beerEvents = require('./beers/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.change-password-header').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#create-beer').hide()
  $('#show-beer').hide()
  $('#index-beers').hide()
  $('.createBeerCard').hide()
  $('.card-header').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#index-beers').on('click', beerEvents.onIndexBeers)
  // $('.NewBeerFormPopUp').on('click', beerEvents.onPullUpForm)
  $('#show-beer').on('submit', beerEvents.onShowBeer)
  $('#delete-beer').on('submit', beerEvents.onDeleteBeer)
  $('#update-beer').on('submit', beerEvents.onUpdateBeer)
  $('#create-beer').on('submit', beerEvents.onCreateBeer)
  $('#beers-display').on('click', '.delete-beer-list', beerEvents.onDeleteListBeer)
  $('#beers-display').on('submit', '.update-beer-list', beerEvents.onUpdateListBeer)
})
