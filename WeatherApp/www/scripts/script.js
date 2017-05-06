var wundergroundAPIKey = "9c027b2f33344dd2";

function getWeatherWithZipCode() {
    console.log('in getWeather!');
    var zipcode = $('#zip-code-input').val();
    var queryString =
        'http://api.wunderground.com/api/'
        + wundergroundAPIKey + '/conditions/q/' + zipcode + '/format.json' ;
    $.getJSON(queryString, function (results) {
        showWeatherData(results);
    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });
    return false;
}

function showWeatherData(results) {
    console.log()
    if (results.current_observation) {
        $('#error-msg').hide();
        $('#weather-data').show();

        $('#title').text(results.current_observation.display_location.city);
        $('#temperature').text(results.current_observation.temp_f);
        $('#wind').text(results.current_observation.wind_mph);
        $('#humidity').text(results.current_observation.relative_humidity);
        $('#visibility').text(results.current_observation.visibility_mi);

        //var sunriseDate = new Date(results.sys.sunrise * 1000);
        //$('#sunrise').text(sunriseDate.toLocaleTimeString());

       // var sunsetDate = new Date(results.sys.sunset * 1000);
        //$('#sunset').text(sunsetDate.toLocaleTimeString());

    } else {
        $('#weather-data').hide();
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. ");
    }
    unFocusButton('#get-weather-btn');
  
}

function unFocusButton(button) {
    $(button).blur();
}

function selectAllText() {
    $('#zip-code-input')
}