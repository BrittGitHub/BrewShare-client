'use strict'

const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // if (data.credentials.password !== data.credentials.password_confirmation) {
  //     $('#auth-display').html('<p>Passwords do not match</p>')
  // } else {
  //     // api call
  //     authApi
  //         .signUp(data)
  //         .then(() => authUi.onSignUpSuccess())
  //         .catch(() => authUi.onSignUpFailure())
  // }

  authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

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
  onSignOut
}
