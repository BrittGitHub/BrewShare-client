'use strict'

const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)

  authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onPullUpChangeForm = function () {
  $('.change-password-auth-display').html('')
  $('#change-password-form').toggle()
  $('.changePassCard').toggle()
  $('.change-password-auth-display').show()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)

  authApi
    .changePassword(data)
    .then((response) => authUi.onChangePasswordSuccess(response))
    .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut = function () {
  authApi
    .signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onPullUpChangeForm
}
