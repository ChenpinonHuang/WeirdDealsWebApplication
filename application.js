//Create variables that store a reference to section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

//Create a variable to store request URL
let requestURL = "https://chenpinonhuang.github.io/WeirdDealsWebApplication/weirdDeals.json";
//let requestURL = "weirdDeals.json";

// Create a new XHR object
let request = new XMLHttpRequest();

//Open a new request, using the open method
request.open('GET', requestURL);

//Set up the request to accept JSON
request.responseType = 'json';

//Send the request using the send method
request.send();

// Adding an event handler that listens for onload event of the JSON file/object
request.onload = function() {
  let weirdDeal = request.response;
  console.log(weirdDeal);
  populateHeader(weirdDeal);
  showDeals(weirdDeal);
}

// Set up populateHeader function to fill in the header function
function populateHeader(jsonObj) {

  // grab the company name from JSON object and then create a new element, adding text and appending to the header

  let headerH3 = document.createElement('h3');
  headerH3.textContent = jsonObj['siteName'];
  header.appendChild(headerH3);

  //grab the company info and established date and add a new paragraph to your HTML that displays this info

  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// define the show function to show the weird deals
function showDeals(jsonObj) {

  //bind top five weird deal object to a variables
  let proudct = jsonObj['proudct'];

  for (let i = 0; i < proudct.length; i++) {
    //create a few different elements
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let price = document.createElement('p');
    let description = document.createElement('p');
    let features = document.createElement('p');

    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', proudct[i].image);

    h2.textContent = proudct[i].productName;
    price.textContent = 'Price: ' + proudct[i].price;
    description.textContent = 'description: ' + proudct[i].description;
    features.textContent = 'description: ' + proudct[i].description;

    let LatNum = proudct[i].Latitude;
    let LonNum = proudct[i].Longitude;
    initMap(LatNum, LonNum);

    // Append each element to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(price);
    article.appendChild(description);
    article.appendChild(features);
    section.appendChild(article);

  }

}

function initMap(LatNum, LonNum) {
  let proudct = jsonObj['proudct'];
  // The location of Uluru
  var uluru = {lat: LatNum, lng: LonNum};
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 8, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
