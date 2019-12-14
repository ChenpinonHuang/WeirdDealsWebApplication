//Create variables that store a reference to section elements
let section = document.querySelector('section');

//Create a variable to store request URL
let requestURL = "https://github.com/ChenpinonHuang/WeirdDealsWebApplication/blob/master/weirdDeals.json";

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

// define the show function to show the weird deals
function showDeals(jsonObj) {

  //bind top five weird deal object to a variables
  let proudct = jsonObj['proudct'];

  for (let i = 0; i < topFive.length; i++) {
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

    // Append each element to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(price);
    article.appendChild(description);
    article.appendChild(features);
    section.appendChild(article);

  }

}
