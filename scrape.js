var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.bbc.com/')
  .click('a[href="http://www.bbc.com/travel"]')
  .wait('h3')
  .evaluate(() => {
    var nameNodes = document.querySelectorAll('h3');
    var list = [].slice.call(nameNodes); 
    return list.map((node) => {
      return node.innerText
    });
  })
  .end()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });


//go to bbc.com
//click on travel
//tell me all the most current links
  //class = promo-unit-title