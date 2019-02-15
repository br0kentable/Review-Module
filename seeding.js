var db = require('./server/db.js');


//USERS INFO
var randNameFirst = [
  'BrokenTableDiner',
  'John',
  'Jane',
  'Chris',
  'Albert',
  'Leon',
  'Claire',
  'Sherry',
  'Mike',
  'Tim',
  'David',
  'Brad'
]

var randNameLast = [
  '',
  'Smith',
  'Doe',
  'Redfield',
  'Kennedy',
  'Wesker',
  'B',
  'W',
  'C',
  'M',
  'S',
  'A',
  'T',
  'R',
  '420',
  '2'
]

var userNameFull = () => {
  var first = randNameFirst[Math.floor(Math.random() * (randNameFirst.length))];
  var last = '';
  if (first === 'BrokenTableDiner') {
    return first + last;
  } else {
    last = randNameLast[Math.floor(Math.random() * (randNameLast.length))];
    return first + last;
  }
};

var randLocation = [
  'Seattle',
  'San Francisco',
  'San Diego',
  'Los Angeles',
  'Las Vegas',
  'New York Area',
  'Baltimore',
  'New England',
  'Atlantic City',
  'Washington DC',
  'Philadelphia'
];

var userLocation = () => randLocation[Math.floor(Math.random() * (randLocation.length))];

var userVipStatus = ['No', 'Yes']
var userVip = () => userVipStatus[Math.floor(Math.random() * (userVipStatus.length))];


//REVIEWS INFO
var randReview = [
  `Schlitz unicorn slow-carb shoreditch, meh pinterest deep v raw denim celiac blog meditation literally before they sold out poke. \nCred locavore pickled chia slow-carb pug skateboard mlkshk migas tilde meditation yr jianbing pork belly.`,
  `Blue bottle +1 live-edge man braid DIY. \nShabby chic tattooed PBR&B wayfarers synth helvetica.`,
  `Organic kickstarter keytar thundercats. \nTruffaut lomo occupy, vice mustache marfa pop-up retro plaid asymmetrical gochujang snackwave cardigan. \nNarwhal kale chips coloring book, tousled blue bottle cray typewriter.`,
  `Chambray meh man bun stumptown pok pok four loko. \nDeep v fingerstache snackwave adaptogen. \nBanjo echo park cronut VHS gochujang godard blue bottle occupy small batch jean shorts leggings chambray letterpress. \nMlkshk blue bottle thundercats, pitchfork jianbing etsy copper mug food truck.`,
  `Threadfin bream bonnetmouth gray eel-catfish convict blenny piranha eel-goby, straptail carpsucker ghost carp. \nPelican gulper menhaden, "Jack Dempsey manefish zingel medusafish gulper stingfish lefteye flounder beardfish riffle dace North American freshwater catfish?"`,
  `Rockfish sailfin silverside; climbing catfish Norwegian Atlantic salmon Death Valley pupfish Ganges shark." Devil ray black bass green swordtail tetra yellow bass lungfish devil ray channel catfish Black pickerel megamouth shark. \nAlgae eater dojo loach spikefish pike eel scup deepwater flathead Black mackerel scissor-tail rasbora sand tiger.`,
  `Juicy meatballs brisket slammin' baked shoulder. \nJuicy smoker soy sauce burgers brisket. \npolenta mustard hunk greens. \nWine technique snack skewers chuck excess. \nOil heat slowly. \nslices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece. \nfruit soften edges frond slices onion snack pork steem on wines excess technique cup; Cover smoker soy sauce fruit snack.`,
  `Gastronomy atmosphere set aside. \nSlice butternut cooking home. \nDelicious romantic undisturbed raw platter will meld. \nThick Skewers skillet natural, smoker soy sauce wait roux. \nslices rosette bone-in simmer precision alongside baby leeks.`,
  `Crafting renders aromatic enjoyment, then slices taco. \nMinutes undisturbed cuisine lunch magnificent mustard curry. \nJuicy share baking sheet pork.`,
  `It was good.`,
  `I liked it.`,
  `Food qualities braise chicken cuts bowl through slices butternut snack. \nTender meat juicy dinners. \nOne-pot low heat plenty of time adobo fat raw soften fruit. \nsweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. \nDelicious butternut squash hunk.`,
  `Gumbo beet greens corn soko endive gumbo gourd. \nParsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.`,
  `Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.`,
  `Swag slow-carb narwhal farm-to-table bicycle rights hashtag. \nBeard franzen venmo, keytar hella fixie plaid edison bulb vice. \nPork belly unicorn banh mi, pickled keffiyeh humblebrag fam copper mug try-hard hell of cliche biodiesel.`,
  `Keytar bitters gentrify vinyl. \nPoke aesthetic selfies lo-fi 8-bit. \nAf salvia pork belly chartreuse snackwave. \nGastropub raclette hell of crucifix. \nQuinoa la croix copper mug photo booth crucifix shoreditch single-origin coffee four dollar toast hammock subway tile swag. \nFour loko shoreditch microdosing, tattooed drinking vinegar man bun vice sustainable normcore health goth ramps DIY.`,
  `Neutra shaman ramps, lyft food truck tumeric keytar etsy asymmetrical authentic chambray butcher. \nUgh mlkshk etsy typewriter tumblr dreamcatcher, af copper mug.`,
  `Roof party palo santo single-origin coffee, tattooed chillwave retro cliche shabby chic jianbing pug bespoke. \nYOLO sriracha kombucha church-key iceland bicycle rights semiotics butcher tbh before they sold out schlitz.`
];

var reviewText = () => randReview[Math.floor(Math.random() * (randReview.length))];

var randRestaurantId = 'thfUjkN4Tv';//get request to restaurant module later

var randUserId = ()=>Math.floor(Math.random() * 50) + 1; //will be creating 50 users

//generate a ISO 8601 date
var randDate = () => {
  var years = [2015, 2016, 2017, 2018];
  var randYear = years[Math.floor(Math.random() * (years.length))];
  var randMonth = Math.floor(Math.random() * 12) + 1;
  var randMonthLength = randMonth === 2 ? 28 : [1,3,5,7,8,10,12].includes(randMonth) ? 31 : 30;
  randMonth = randMonth < 10 ? `0${randMonth}` : randMonth;
  var randDay = Math.floor(Math.random() * randMonthLength) + 1;
  randDay = randDay < 10 ? `0${randDay}` : randDay;

  return `${randYear}-${randMonth}-${randDay}`;
}

//generate tags
var tagOptions = [
  'Authentic',
  'Bar Seating', 'Book the Bar',
  'Cellar', 'Charming', 'Check the Wait', 'Comfort Food', 'Convenient', 'Couples', 'Cozy', 'Craft Beer Selection',
  'Downstairs', 'Dancing',
  'Family Style', 'Farm to Table', 'Fit for Foodies', 'Full Bar',
  'Good Value', 'Good for Birthdays', 'Good for a Date', 'Great for Brunch',
  'Healthy', 'Historic', 'Hot Spot',
  'Kid-friendly',
  'Live Music', 'Local Ingredients',
  'Neighborhood Gem',
  'Open Kitchen', 'Organic',
  'Prix Fixe Menu',
  'Quick Bite',
  'Scenic View', 'Seasonal', 'Special Occasion',
  'Tapas', 'Tasting Menu',
  'Vegan', 'Vibrant Bar Scene',
  'Waterfront', 'Wood Oven'
];

var randTags = () => {
  var tagNumber = Math.floor(Math.random() * 10) + 1; //determine a number of tags a review will have
  var selectedTags = [];
  for (var i = 0; i < tagNumber; i++) {
    var findTag = tagOptions[Math.floor(Math.random() * (tagOptions.length))];
    if (selectedTags.indexOf(findTag) === -1) {
      selectedTags.push(findTag);
    }
  }
  return selectedTags.join(', ');
}

//generate random ratings (with 3s and 4s more likely)
var randRating = [1, 2, 3, 3, 4, 4, 4, 5];
var storedFood;
var storedService;
var storedAmbience;
var storedValue;

var randFood = () => {
  var temp = randRating[Math.floor(Math.random() * (randRating.length))];
  storedFood = temp;
  return temp;
};
var randService = () => {
  var temp = randRating[Math.floor(Math.random() * (randRating.length))];
  storedService = temp;
  return temp;
};
var randAmbience = () => {
  var temp = randRating[Math.floor(Math.random() * (randRating.length))];
  storedAmbience = temp;
  return temp;
};
var randValue = () => {
  var temp = randRating[Math.floor(Math.random() * (randRating.length))];
  storedValue = temp;
  return temp;
};

//get average rating up to one decimal place
var randOverall = () => Math.round(((storedFood + storedService + storedAmbience + storedValue) / 4) * 10) / 10;

var recommendation = () => randOverall() >= 3.0 ? 'Y' : 'N';

//generate random noise rating (with 1s and 2s more likely)
var randNoiseRatings = [1, 1, 2, 2, 2, 2, 3];

var randNoise = () => randNoiseRatings[Math.floor(Math.random() * (randNoiseRatings.length))];


//inserting USERS to the database
var counterUser = 0;
var counterReview = 0;

var insertData = (username) => {
  if (counterUser < 50) {
    // db.User
    //   .findOne({
    //     where: { username: username }
    //   })
    //   .then((user) => {
    db.User.create({
      username: username,
      location: userLocation(),
      vip: userVip()
    })
      .then(() => {
        counterUser++;
        insertData(userNameFull());
      })
    // })
  } else if (counterUser >= 50 && counterReview < 150) {
    db.Review.create({
      user_id: randUserId(),
      restaurant_id: randRestaurantId,
      review_date: randDate(),
      text: reviewText(),
      tags: randTags(),
      food_score: randFood(),
      service_score: randService(),
      ambience_score: randAmbience(),
      value_score: randValue(),
      overall_score: randOverall(),
      noise: randNoise(),
      recommend: recommendation()
    })
    .then(()=>{
      counterReview++;
      insertData(userNameFull())
    })
  }
}

insertData(userNameFull());
