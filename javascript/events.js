'use strict'

const checkCrimes = function () {
	console.log('GETTING TO THIS FUNCTION')
	const latitude = $('#latitude').val()
	const longitude = $('#longitude').val()
	const data = {
		lat: latitude,
		lon: longitude
  	}
	$.ajax({
		url: 'http://localhost:3000/spotcrime',
		method: 'POST',
		data: data
	}).done(function (results) {
		console.log(results)
	})
}

const addHandlers = () => {
  $('#get-crimes-form').on('submit', checkCrimes)
}