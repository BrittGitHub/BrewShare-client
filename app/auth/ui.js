'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('.sign-up-auth-display').html('<p class="sign-up-success-text">Sign up successful!</p>')
  $('.sign-up-success-text').fadeOut(3000)

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('.sign-up-auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('.sign-up-auth-display').html('')
  $('.change-password-auth-display').html('')
  $('.sign-in-auth-display').html('<p class="sign-in-success-text">Signed in successfully!</p>')
  $('.sign-in-success-text').fadeOut(3000)
  $('.sign-in-auth-display').show()

  $('.sign-up-header').hide()
  $('#sign-up-form').hide()
  $('.sign-up-auth-display').hide()

  $('.sign-in-header').hide()
  $('#sign-in-form').hide()

  $('.change-password-header').hide()
  $('.change-password-auth-display').hide()
  $('.change-password-header').show()
  $('.change-password-auth-display').show()

  $('.pullUpChangePass').show()
  $('#pullUpChangePassButton').show()

  $('#sign-out-button').show()

  $('.sign-out-auth-display').html('')
  $('.sign-out-auth-display').show()
  $('.addNewBeer').show()
  $('#show-beer').show()
  $('#index-beers').show()

  $('form').trigger('reset')

  // console.log(response)
  store.user = response.user
}

const onSignInFailure = function () {
  $('.sign-in-auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
  $('.change-password-auth-display').html('<p>User changed password successfully</p>')

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('.change-password-auth-display').html('<p>Error while changing password</p>')

  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('.sign-out-auth-display').html('<p class="sign-out-success-text">You are signed out!</p>')
  $('.sign-out-success-text').fadeOut(3000)
  $('.change-password-header').hide()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#create-beer').hide()
  $('#show-beer').hide()
  $('#index-beers').hide()
  $('.pullUpChangePass').hide()
  $('.addNewBeer').hide()
  $('.card').hide()
  $('.sign-in-header').show()
  $('.sign-in-auth-display').hide()
  $('#sign-in-form').show()
  $('.sign-up-header').show()
  $('#sign-up-form').show()
  $('.sign-up-auth-display').show()

  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('.sign-out-auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
