const store = require('../store.js')

const onIndexBeersSuccess = function (response) {
  // string to represent the html of our beers display
  // initialize as empty
  let beersHtml = ''

  // use forEach to display every beer
  response.beers.forEach((beer) => {
    // beersHtml += '<li>' + beer.name + '</li>'
    // beersHtml = beersHtml + '<li>' + beer.name + '</li>'

    beersHtml += `
                      <div>
                        <h4>${beer.name}</h4>
                        <p>${beer.beerStyle}</p>
                        <form class="update-beer-list" data-id=${beer._id}>
                            <input name="beer[name]" type="text" placeholder="Beer Name">
                            <input name="beer[beerStyle]" type="text" placeholder="Beer Style">
                            <button type="submit">Update beer</button>
                        </form>
                        <button class="delete-beer-list" data-id=${beer._id}>Delete beer</button>
                      </div>
                    `
  })

  $('#beers-display').html(beersHtml)

  $('form').trigger('reset')

  $('#error-message').text('')
}

const onIndexBeersFailure = function () {
  $('#error-message').text('There was an error')
}

const onShowBeerSuccess = function (response) {
  const beerHtml = `
                      <div>
                        <h4>${response.beer.name}</h4>
                        <p>${response.beer.beerStyle}</p>
                      </div>
                    `
  $('#beers-display').html(beerHtml)

  $('form').trigger('reset')
}

const onShowBeerFailure = function () {
  $('#error-message').text('Failure while trying to show beer')
}

const onDeleteBeerSuccess = function () {
  // const beerHtml = `
  //   <div>
  //     <h4>${response.beer.name}</h4>
  //     <p>${response.beer.author}</p>
  //     <p>Review: 10 Stars</p>
  //   </div>
  // `
  $('#beers-display').html('Success. Beer deleted!')

  $('form').trigger('reset')
}

const onDeleteBeerFailure = function () {
  $('#error-message').text('Failure while trying to delete beer')
}

const onUpdateBeerSuccess = function () {
  // const beerHtml = `
  //   <div>
  //     <h4>${response.beer.name}</h4>
  //     <p>${response.beer.author}</p>
  //     <p>Review: 10 Stars</p>
  //   </div>
  // `
  $('#beers-display').html('Success. Beer updated!')

  $('form').trigger('reset')
}

const onUpdateBeerFailure = function () {
  $('#error-message').text('Failure while trying to update beer')
}

const onCreateBeerSuccess = function (response) {
  const beerHtml = `
                      <div>
                        <h4>${response.beer.name}</h4>
                        <p>${response.beer.beerStyle}</p>
                        <p>Beer just created</p>
                      </div>
                    `
  $('#beers-display').html(beerHtml)

  $('form').trigger('reset')
}

const onCreateBeerFailure = function () {
  $('#error-message').text('Failure while trying to create beer')
  // console.log(err)
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
