// API KEY: 166a433c57516f51dfab1f7edaed8413
//The API key gives us access to search OpenWeatherMap.org' Database
let cityName = "";
let queryURL=""; 
let APIKey = '166a433c57516f51dfab1f7edaed8413';
let cityDataObject ={};
// var cityname = '$city name' // remove this later

// we are logging our URL so we can troubleshoot any bugs
// console.log(queryURL);
// Search Term
// let cityName = $('#cityName').val().trim();
// console.log(`This is your search term: ${cityName}`);
// queryURL = queryURL + "&q=" + cityName;
// console.log(cityName);
// AJAX Call
// What is AJAX? This video will help you understand this: https://youtu.be/RDo3hBL1rfA 
// AJAX allows you to make a search for data in a way that is fast and smaller in data usage than searching through every article webpage on OpenWeatherMap.org, for example
// MAIN FUNCTION
//step:3
function runQuery(forecast, queryURL) {
// The following AJAX function will use the URL we supplied above and "GET"s the data we ask for.
    // We are telling the AJAX function to store the data in a new variable we called, OpenWeatherMap.orgData 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (data) {
        cityDataObject =data;
        console.log(cityDataObject);

        //from here on add the code to display it on the screen
        //step:4 -  now put this data from cityDataObject on screen
        //use the jQuery's append and prepend methods.
        let myimg=$('<img>').attr("src","http://openweathermap.org/img/wn/"+ cityDataObject.list[0].weather[0].icon + "@2x.png");
        $('#forecast').append(myimg);

        let mydiv  = $('<div>'); //here your create ane div
        mydiv.text("Humidity: " + cityDataObject.list[0].humidity+ ' %');
        // mydiv.css("color","red");
        $('#forecast').append(mydiv); // this is where you append the new div to the #forecast

        // one of the thing that you want to do here is append <img> tag to the #forecas myimg=$('<img>').attr("src", <<this where you put actual url>>)

        mydiv  = $('<div>');//here your create ane div
        mydiv.text("Temp: " + cityDataObject.list[0].temp.day +' \u00B0F');
        $('#forecast').append(mydiv);




        //above this line
    }); //OpenWeatherMap - this was the old parameter
}
// MAKING THE SEARCH WORK by FILLING OUR EMPTY VARIABLES
// step:2
function search(){
    // Empty the HTML div we are going to show our results in each time we click submit
    $('#forecast').empty();

    runQuery(forecast, queryURL);
    // We want to be able to press the "submit" button by pressing enter on our keyboard:
    // return false;
}
// This on click function should be associated with the search button
//step:1
$('#searchBtn').on('click', function (event) {
    event.preventDefault();
    cityName = $("#cityName").val();
    $("#cityName").val("");
    queryURL =`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&units=imperial&cnt=5&appid=${APIKey}`;

    search();    
});
