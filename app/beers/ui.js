const store = require('../store.js')

const onIndexBeersSuccess = function (response) {
  let beersHtml = ''

  response.beers.forEach((beer) => {
    beersHtml += `
                  <div class="card indexBeerCard">
                    <h2 class="card-header indexBeerCard text-center" style="height: 3rem">${beer.name}</h2>
                    <div class="card-body">
                        <p><b>Beer Style</b>: ${beer.beerStyle}</p>
                        <p><b>ABV</b>:${beer.abv || ''}%</p>
                        <p><b>Brewer</b>: ${beer.brewer}</p>
                        <p><b>Brewer Country</b>: ${beer.brewerCountry}</p>
                        <p><b>Consumption Type</b>(Draught, can, bottle, etc.): ${beer.consumptionType}</p>
                        <p><b>Rating Number</b>(0-5, 5 is Excellent): ${beer.personalRatingNum || ''}</p>
                        <p><b>Rating and Brew Description</b>: ${beer.ratingDescription}</p>
                        <p><b>Purchase Location</b>: ${beer.purchasedLocation}</p>
                        <p><b>Purchase Price</b>: ${beer.purchasedPrice || ''}</p>
                        <p><b>Date Purchased</b>: ${beer.purchasedDate || ''}</p>

                        <button class="update-current-beer" data-id=${beer._id}>update current beer</button>

                        <form class="update-beer-list" data-id=${beer._id}>
                          <input name="beer[name]" type="text" placeholder="Beer Name">
                          <input name="beer[beerStyle]" type="text" placeholder="Beer Style">
                          <input name="beer[abv]" type="text" placeholder="ABV">
                          <input name="beer[brewer]" type="text" placeholder="Brewer">
                          <input name="beer[brewerCountry]" type="text" placeholder="Brewer Country">
                          <input name="beer[consumptionType]" type="text" placeholder="Consumption Type">
                          <input name="beer[personalRatingNum]" type="text" placeholder="Rating Number">
                          <input name="beer[ratingDescription]" type="text" placeholder="Rating/Beer Description">
                          <input name="beer[purchasedLocation]" type="text" placeholder="Purchase Location">
                          <input name="beer[purchasedPrice]" type="text" placeholder="Purchase Price">
                          <input name="beer[purchasedDate]" type="text" placeholder="Purchase Date">
                          <button type="submit">Update beer</button>
                        </form>
                        <button class="delete-beer-list" data-id=${beer._id}>Delete beer</button>
                    </div>
                  </div>
                    `
  })

  $('#beers-display').html(beersHtml)
  $('.update-beer-list').hide()
  $('form').trigger('reset')

  hideErrorMessages()
}

const onIndexBeersFailure = function () {
  $('#index-error-message').text('There was an error')
  $('#index-error-message').show()
}

const onShowBeerSuccess = function (response) {
  const beerHtml = `
                      <div>
                        <h4>${response.beer.name}</h4>
                        <p>${response.beer.beerStyle}</p>
                      </div>
                    `
  $('#beers-display').html(beerHtml)
  hideErrorMessages()

  $('form').trigger('reset')
}

const onShowBeerFailure = function () {
  $('#error-message').text('Failure while trying to show beer')
  $('#error-message').show()
}

const onDeleteBeerSuccess = function () {
  $('#beers-display').html('Success. Beer deleted!')
  hideErrorMessages()

  $('form').trigger('reset')
}

const onDeleteBeerFailure = function () {
  $('#index-error-message').text('Failure while trying to delete beer')
  $('#index-error-message').show()
}

const onUpdateBeerSuccess = function () {
  $('#beers-display').html('Success. Beer updated!')
  hideErrorMessages()

  $('form').trigger('reset')
}

const onUpdateBeerFailure = function () {
  $('#index-error-message').text('Failure while trying to update beer')
  $('#index-error-message').show()
}

const onCreateBeerSuccess = function (response) {
  const beerHtml = `
                      <div class="card onCreateSuccess">
                        <h2 class="card-header onCreateSuccess text-center" style="height: 3rem">${response.beer.name}</h2>
                          <div class="card-body">
                          <p><b>Beer Style</b>: ${response.beer.beerStyle}</p>
                          <p><b>ABV</b>:${response.beer.abv || ''}%</p>
                          <p><b>Brewer</b>: ${response.beer.brewer}</p>
                          <p><b>Brewer Country</b>: ${response.beer.brewerCountry}</p>
                          <p><b>Consumption Type</b>(Draught, can, bottle, etc.): ${response.beer.consumptionType}</p>
                          <p><b>Rating Number</b>(0-5, 5 is Excellent): ${response.beer.personalRatingNum || ''}</p>
                          <p><b>Rating and Brew Description</b>: ${response.beer.ratingDescription}</p>
                          <p><b>Purchase Location</b>: ${response.beer.purchasedLocation}</p>
                          <p><b>Purchase Price</b>: ${response.beer.purchasedPrice || ''}</p>
                          <p><b>Date Purchased</b>: ${response.beer.purchasedDate || ''}</p>
                          <p>Here is your logged brew!</p>
                          </div>
                      </div>
                    `
  $('#new-beer-display').html(beerHtml)
  $('#new-beer-display').show()
  hideErrorMessages()

  $('form').trigger('reset')
}

const onCreateBeerFailure = function () {
  $('#new-beer-error-message').text('Failure while trying to create beer')
  $('#new-beer-error-message').show()
}

const hideErrorMessages = function () {
  $('#new-beer-error-message').text('')
  $('#new-beer-error-message').hide()
  $('#index-error-message').text('')
  $('#index-error-message').hide()
}

module.exports = {
  onIndexBeersSuccess,
  onIndexBeersFailure,
  onShowBeerSuccess,
  onShowBeerFailure,
  onDeleteBeerSuccess,
  onDeleteBeerFailure,
  onUpdateBeerSuccess,
  onUpdateBeerFailure,
  onCreateBeerSuccess,
  onCreateBeerFailure
}
