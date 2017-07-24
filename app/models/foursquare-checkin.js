import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
const {
  isEmpty
} = Ember;

export default Model.extend({
  timestamp: attr(''),
  body: attr(),

  color: Ember.computed('body.venue', function() {
    let category = this.get('body.venue.categories.firstObject.name');
    return !isEmpty(category) ? this.get('categories')[category]['color'] : "#304865";
  }),

  theme: Ember.computed('body.venue', function() {
    let category = this.get('body.venue.categories.firstObject.name');
    return !isEmpty(category) ? this.get('categories')[category]['theme'] : "default";
  }),

  categories: {
    "Electronics Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Lighthouse": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Tech Startup": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Candy Store": {
      "color": "#E1387B",
      "theme": "pink"
    },
    "School": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Coffee Shop": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Breakfast Spot": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Café": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Airport": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Grocery Store": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Shopping Mall": {
      "color": "#304865",
      "theme": "default"
    },
    "Auto Dealership": {
      "color": "#304865",
      "theme": "default"
    },
    "French Restaurant": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Movie Theater": {
      "color": "#304865",
      "theme": "default"
    },
    "Coworking Space": {
      "color": "#7B7E80",
      "theme": "business"
    },
    "Gym / Fitness Center": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Seafood Restaurant": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Hotel": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Bakery": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Home (private)": {
      "color": "#304865",
      "theme": "default"
    },
    "Taco Place": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Gym": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Bar": {
      "color": "#954535",
      "theme": "coffee"
    },
    "American Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "City": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Recreation Center": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Multiplex": {
      "color": "#304865",
      "theme": "default"
    },
    "Bagel Shop": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Restaurant": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Theme Park": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Mexican Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Salon / Barbershop": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Neighborhood": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Building": {
      "color": "#304865",
      "theme": "default"
    },
    "BBQ Joint": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Vegetarian / Vegan Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Car Wash": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Japanese Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Music Venue": {
      "color": "#304865",
      "theme": "default"
    },
    "Sushi Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Yoga Studio": {
      "color": "#304865",
      "theme": "default"
    },
    "Burger Joint": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Market": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Diner": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Caribbean Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Gay Bar": {
      "color": "#E1387B",
      "theme": "pride"
    },
    "Butcher": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Pizza Place": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Event Space": {
      "color": "#304865",
      "theme": "default"
    },
    "Juice Bar": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Hawaiian Restaurant": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Rock Club": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Baseball Stadium": {
      "color": "#304865",
      "theme": "default"
    },
    "Wine Bar": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Women's Store": {
      "color": "#304865",
      "theme": "default"
    },
    "German Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Hardware Store": {
      "color": "#304865",
      "theme": "default"
    },
    "New American Restaurant": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Performing Arts Venue": {
      "color": "#304865",
      "theme": "default"
    },
    "Town": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Resort": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Deli / Bodega": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Mediterranean Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Gastropub": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Donut Shop": {
      "color": "#E1387B",
      "theme": "pink"
    },
    "Shoe Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Vietnamese Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Dog Run": {
      "color": "#304865",
      "theme": "default"
    },
    "Concert Hall": {
      "color": "#304865",
      "theme": "default"
    },
    "Stadium": {
      "color": "#304865",
      "theme": "default"
    },
    "Pedestrian Plaza": {
      "color": "#304865",
      "theme": "default"
    },
    "Nightclub": {
      "color": "#304865",
      "theme": "default"
    },
    "Chinese Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Steakhouse": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Pub": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Arcade": {
      "color": "#304865",
      "theme": "default"
    },
    "Racetrack": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Farmers Market": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Ski Area": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Falafel Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Clothing Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Trail": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Ski Lodge": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Office": {
      "color": "#7B7E80",
      "theme": "business"
    },
    "Brewery": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Tiki Bar": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Salad Place": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Automotive Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "State": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Dentist's Office": {
      "color": "#7B7E80",
      "theme": "business"
    },
    "Ice Cream Shop": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Noodle House": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Italian Restaurant": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Cocktail Bar": {
      "color": "#E1387B",
      "theme": "pink"
    },
    "Asian Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Cycle Studio": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Casino": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Train Station": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Convention Center": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Theme Park Ride / Attraction": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Cuban Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Art Gallery": {
      "color": "#304865",
      "theme": "default"
    },
    "Dessert Shop": {
      "color": "#E1387B",
      "theme": "pink"
    },
    "Ramen Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Cupcake Shop": {
      "color": "#E1387B",
      "theme": "pink"
    },
    "Beach": {
      "color": "#3F6898",
      "theme": "water"
    },
    "University": {
      "color": "#304865",
      "theme": "default"
    },
    "Science Museum": {
      "color": "#304865",
      "theme": "default"
    },
    "Organic Grocery": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Flea Market": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Indian Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Advertising Agency": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Monument / Landmark": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Thai Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Burrito Place": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Food Truck": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Gas Station": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Frozen Yogurt Shop": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Pool": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Golf Course": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Island": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Distillery": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Sandwich Place": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Greek Restaurant": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Airport Terminal": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Beer Garden": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "General Travel": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "General Entertainment": {
      "color": "#304865",
      "theme": "default"
    },
    "Doctor's Office": {
      "color": "#304865",
      "theme": "default"
    },
    "Pet Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Theater": {
      "color": "#304865",
      "theme": "default"
    },
    "Cajun / Creole Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Winery": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Plaza": {
      "color": "#304865",
      "theme": "default"
    },
    "Pie Shop": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Museum": {
      "color": "#304865",
      "theme": "default"
    },
    "Rental Car Location": {
      "color": "#304865",
      "theme": "default"
    },
    "Tea Room": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Lounge": {
      "color": "#304865",
      "theme": "default"
    },
    "Other Nightlife": {
      "color": "#304865",
      "theme": "default"
    },
    "Food & Drink Shop": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Residential Building (Apartment / Condo)": {
      "color": "#304865",
      "theme": "default"
    },
    "Dumpling Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Speakeasy": {
      "color": "#304865",
      "theme": "default"
    },
    "Music Store": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Art Museum": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Hotel Bar": {
      "color": "#304865",
      "theme": "default"
    },
    "College Administrative Building": {
      "color": "#7B7E80",
      "theme": "business"
    },
    "Pier": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Government Building": {
      "color": "#304865",
      "theme": "default"
    },
    "Kosher Restaurant": {
      "color": "#304865",
      "theme": "default"
    },
    "Department Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Bowling Alley": {
      "color": "#304865",
      "theme": "default"
    },
    "Cemetery": {
      "color": "#7B7E80",
      "theme": "business"
    },
    "Dive Bar": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Dim Sum Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Hockey Arena": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Airport Lounge": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Fast Food Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Park": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Bookstore": {
      "color": "#304865",
      "theme": "default"
    },
    "Furniture / Home Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Bistro": {
      "color": "#903D53",
      "theme": "merlot"
    },
    "Mac & Cheese Joint": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Parking": {
      "color": "#304865",
      "theme": "default"
    },
    "Karaoke Bar": {
      "color": "#304865",
      "theme": "default"
    },
    "Snack Place": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Korean Restaurant": {
      "color": "#FD0000",
      "theme": "red"
    },
    "Boat or Ferry": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Synagogue": {
      "color": "#304865",
      "theme": "default"
    },
    "Castle": {
      "color": "#7B7E80",
      "theme": "business"
    },
    "Fountain": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Board Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "Gourmet Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "Cafeteria": {
      "color": "#304865",
      "theme": "default"
    },
    "Comedy Club": {
      "color": "#304865",
      "theme": "default"
    },
    "Student Center": {
      "color": "#304865",
      "theme": "default"
    },
    "Moroccan Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "College Basketball Court": {
      "color": "#3F6898",
      "theme": "water"
    },
    "General College & University": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Harbor / Marina": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Wings Joint": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Go Kart Track": {
      "color": "#304865",
      "theme": "default"
    },
    "Flower Shop": {
      "color": "#E1387B",
      "theme": "pink"
    },
    "Theme Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Post Office": {
      "color": "#304865",
      "theme": "default"
    },
    "Spa": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Indie Movie Theater": {
      "color": "#304865",
      "theme": "default"
    },
    "Southern / Soul Food Restaurant": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Surf Spot": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Buffet": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Rest Area": {
      "color": "#304865",
      "theme": "default"
    },
    "Courthouse": {
      "color": "#304865",
      "theme": "default"
    },
    "Gift Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "Motel": {
      "color": "#304865",
      "theme": "default"
    },
    "City Hall": {
      "color": "#304865",
      "theme": "default"
    },
    "Road": {
      "color": "#304865",
      "theme": "default"
    },
    "Middle Eastern Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Historic Site": {
      "color": "#304865",
      "theme": "default"
    },
    "Bank": {
      "color": "#304865",
      "theme": "default"
    },
    "Veterinarian": {
      "color": "#304865",
      "theme": "default"
    },
    "Hot Dog Joint": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Sporting Goods Shop": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Garden": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Airport Gate": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Scenic Lookout": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Church": {
      "color": "#304865",
      "theme": "default"
    },
    "Mobile Phone Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "Factory": {
      "color": "#304865",
      "theme": "default"
    },
    "Fish Market": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Pet Service": {
      "color": "#304865",
      "theme": "default"
    },
    "Playground": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Sports Bar": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Farm": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Convenience Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Argentinian Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Martial Arts Dojo": {
      "color": "#304865",
      "theme": "default"
    },
    "Plane": {
      "color": "#3F6898",
      "theme": "water"
    },
    "Big Box Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Optical Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "Food Court": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Accessories Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Mountain": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Golf Driving Range": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Border Crossing": {
      "color": "#304865",
      "theme": "default"
    },
    "Skating Rink": {
      "color": "#304865",
      "theme": "default"
    },
    "Cheese Shop": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "Turkish Restaurant": {
      "color": "#954535",
      "theme": "coffee"
    },
    "Other Great Outdoors": {
      "color": "#458956",
      "theme": "outdoors"
    },
    "Molecular Gastronomy Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Peruvian Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Nail Salon": {
      "color": "#304865",
      "theme": "default"
    },
    "Chocolate Shop": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Liquor Store": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Latin American Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Private School": {
      "color": "#304865",
      "theme": "default"
    },
    "Pharmacy": {
      "color": "#304865",
      "theme": "default"
    },
    "Arts & Crafts Store": {
      "color": "#304865",
      "theme": "default"
    },
    "Parade": {
      "color": "#F76B1C",
      "theme": "morning"
    },
    "English Restaurant": {
      "color": "#9F4E21",
      "theme": "food"
    },
    "Pop-Up Shop": {
      "color": "#304865",
      "theme": "default"
    },
    "Public Art": {
      "color": "#304865",
      "theme": "default"
    }
  }
});
