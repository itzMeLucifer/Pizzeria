import drink1 from './images/beverage/drink1.jpg'
import drink2 from './images/beverage/drink2.jpg'
import drink3 from './images/beverage/drink3.jpg'
import drink4 from './images/beverage/drink4.jpg'
import drink5 from './images/beverage/drink5.jpg'
import drink6 from './images/beverage/drink6.jpg'
import drink7 from './images/beverage/drink7.jpg'
import drink8 from './images/beverage/drink8.jpg'
import drink9 from './images/beverage/drink9.jpg'
import drink10 from './images/beverage/drink10.jpg'

import pizza1 from './images/pizza/pizza1.jpg'
import pizza2 from './images/pizza/pizza2.jpg'
import pizza3 from './images/pizza/pizza3.jpg'
import pizza4 from './images/pizza/pizza4.jpg'
import pizza5 from './images/pizza/pizza5.jpg'
import pizza6 from './images/pizza/pizza6.jpg'
import pizza7 from './images/pizza/pizza7.jpg'
import pizza8 from './images/pizza/pizza8.jpg'
import pizza9 from './images/pizza/pizza9.jpg'
import pizza10 from './images/pizza/pizza10.jpg'

import paasta1 from './images/paasta/paasta1.jpg'
import paasta2 from './images/paasta/paasta2.jpg'
import paasta3 from './images/paasta/paasta3.jpg'
import paasta4 from './images/paasta/paasta4.jpg'
import paasta5 from './images/paasta/paasta5.jpg'
import paasta6 from './images/paasta/paasta6.jpg'
import paasta7 from './images/paasta/paasta7.jpg'
import paasta8 from './images/paasta/paasta8.jpg'
import paasta9 from './images/paasta/paasta9.jpg'
import paasta10 from './images/paasta/paasta10.jpg'

import ice1 from './images/icecream/ice1.jpg'
import ice2 from './images/icecream/ice2.jpg'
import ice3 from './images/icecream/ice3.jpg'
import ice4 from './images/icecream/ice4.jpg'
import ice5 from './images/icecream/ice5.jpg'
import ice6 from './images/icecream/ice6.jpg'
import ice7 from './images/icecream/ice7.jpg'
import ice8 from './images/icecream/ice8.jpg'
import ice9 from './images/icecream/ice9.jpg'
import ice10 from './images/icecream/ice10.jpg'

import address from './images/icons/address.png'
import logout from './images/icons/logout.png'
import profile from './images/icons/profile.png'
import order from './images/icons/orders.png'
import cart from './images/icons/cart.png'
import user from './images/user1.jpg'

export const state = {
    selectedProduct: {},
    pizzas:[{},{},{}],
    beverages : [{},{},{}],
    passtas : [{},{},{}],
    iceCreams : [{},{},{}],
    cart:[{},{},{}],
    orders: [{},{},{}]
}

export const products = [
    {
        _id:1,
        productCategory:1,
        productImage:pizza1,
        price:99,
        productIsVeg:false, 
        productName:'Thin Crust Chicken',
        productShortDesc:'Very thin crust stuffed with checkin',
        productLongDesc:'This is one of the best offering that our restaurants provide. This pizza have a very thin crust that too is filled with chekin breast. Cooked for over 20 minutes in a brick oven.',
        productToppings:['Onion','Capcicum','Tomato','Olives'],
        perToppingPrice: 20,
    },
    {
        _id:2,
        productCategory:1,
        productImage:pizza2,
        price:59,
        productIsVeg:true, 
        productName:'Margherita Pizza',
        productShortDesc:'Margherita pizza is filled with margherita cheese.',
        productLongDesc:'This is one of the entry level offering that our restaurants provide. This pizza have a very thin crust that too is filled with margherita cheese specially imported from Italy.',
        productToppings:['Onion','Capcicum','Tomato','Olives'],
        perToppingPrice: 15,
    },
    {
        _id:3,
        productCategory:1,
        productImage:pizza3,
        price:79,
        productIsVeg:true, 
        productName:'Cheese Burst Pizza',
        productShortDesc:'Tasty and creamy pizza filled with mozerella cheese with tomato and basel leaves.',
        productLongDesc:'Made from Mozerella cheese directly imported from Italy on regualar basis. This pizza will bring the taste of a pizza that beongs to italy (The country of best pizza)',
        productToppings:['Onion','Capsicum','Tomato','Olives','Cheese'],
        perToppingPrice: 10,
    },
    {
        _id:4,
        productCategory:1,
        productImage:pizza4,
        price:49,
        productIsVeg:true, 
        productName:'Thick Crust Corn Pizza',
        productShortDesc:'Corn based Pizza with thick crust of customisable toppings',
        productLongDesc:"Corn adds a fresh, sweet crunch to mealtime that just can't be replicated by anything else.",
        productToppings:['Onion','Tomato','Olives','Cheese'],
        perToppingPrice: 15,
    },
    {
        _id:5,
        productCategory:1,
        productImage:pizza5,
        price:109,
        productIsVeg:true, 
        productName:'Not So Round Pizza',
        productShortDesc:'Unique offerings from pizzeria.',
        productLongDesc:"Highly customisable pizza not only you can pick toppings according to you can also pick a unique shape for you pizza. You demand we deliver.",
        productToppings:['Onion','Tomato','Olives','cheese','Mushroom','Capsicum'],
        perToppingPrice: 15,
    },
    {
        _id:6,
        productCategory:1,
        productImage:pizza6,
        price:89,
        productIsVeg:true, 
        productName:'Olive Mushroom Pizza',
        productShortDesc:'This pizza comes with a thin crust and lots of toppings such as Olives and Mushrooms.',
        productLongDesc:"Olives and pizza go together very well. The olives give the pizza a little salt, but it is not overwhelming. The olives also add a touch of an Earthly flavor that goes well with the cheese and the dough. Black olives work great on pizza, but other types of olives will go well too.",
        productToppings:['Onion','Tomato','Cheese','Capsicum'],
        perToppingPrice: 10,
    },
    {
        _id:7,
        productCategory:1,
        productImage:pizza7,
        price:119,
        productIsVeg:false, 
        productName:'Pepperoni Pizza',
        productShortDesc:'Pepperoni based pizza cooked at low temprature.',
        productLongDesc:"Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.",
        productToppings:['Onion','Tomato','Cheese','Capsicum'],
        perToppingPrice: 10,
    },
    {
        _id:8,
        productCategory:1,
        productImage:pizza8,
        price:119,
        productIsVeg:true, 
        productName:'Whipped Cream & Cranberry Sause',
        productShortDesc:'Whipped Cream & Cranberry sause if for people who want sweet ans sour nature.',
        productLongDesc:"This pizza will blow your mind as it tastes sweet and sour ust like life :)",
        productToppings:['Berry','Tomato','Cheese'],
        perToppingPrice: 30,
    },
    {
        _id:9,
        productCategory:1,
        productImage:pizza9,
        price:119,
        productIsVeg:false, 
        productName:'Bacon Pizza',
        productShortDesc:'Whipped Cream & Cranberry sause if for people who want sweet ans sour nature.',
        productLongDesc:"This is one of the best offering that our restaurants provide. This pizza have a very thin crust that too is filled with chekin breast. Cooked for over 20 minutes in a brick oven.",
        productToppings:['Olives','Mushroom','Tomato','Cheese'],
        perToppingPrice: 25,
    },
    {
        _id:10,
        productCategory:1,
        productImage:pizza10,
        price:79,
        productIsVeg:true, 
        productName:'Veggie Pizza',
        productShortDesc:'Totally vegetable based pizza. Pick you topings yourself.',
        productLongDesc:"This is one of the best offering that our restaurants provide. This pizza have a very thin crust that too is filled with chekin breast. Cooked for over 20 minutes in a brick oven.",
        productToppings:['Olives','Mushroom','Tomato','Cheese','Corn'],
        perToppingPrice: 10,
    },
    {
        _id:11,
        productCategory:4,
        productImage:ice1,
        price:79,
        productIsVeg:true,  
        productName:'Vanilla Chip IceCream',
        productShortDesc:'Vanilla IceCream with Waffle chip.',
        productLongDesc:"One of the best offering that our restaurants provide. IceCream is made from pure essence of vanilla extrated from the best plants and shipped directly to India.",
        productToppings:['Oreo','Chocolate Chip','Popsicle'],
        perToppingPrice: 20,
    },
    {
        _id:12,
        productCategory:4,
        productImage:ice2,
        price:49,
        productIsVeg:true,  
        productName:'Butter Scotch IceCream',
        productShortDesc:'Butterscotch scoup dipped in chocolate syrup.',
        productLongDesc:"You can customise your icecream wtih different toppings. You can also choose dark chocolate syrup instead of normal chocolate.",
        productToppings:['Oreo','Chocolate Chip','Popsicle',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:13,
        productCategory:4,
        productImage:ice3,
        price:39,
        productIsVeg:true,  
        productName:'Chocolate IceCream',
        productShortDesc:'One Scoup of chocolate flavoured icecream.',
        productLongDesc:"Best value for money and the most recommended product please try it out and let other's know what real chocolate icecream taste like :).",
        productToppings:['Oreo','Chocolate Chip','Popsicle',"M&M's"],
        perToppingPrice: 20,
    },
    {   
        _id:14,
        productCategory:4,
        productImage:ice4,
        price:89,
        productIsVeg:true,  
        productName:'Chocolate Sunday',
        productShortDesc:'Chocalte IeCream with vanilla Scoup',
        productLongDesc:"You can customise your icecream wtih different toppings. You can also choose dark chocolate syrup instead of normal chocolate.",
        productToppings:['Oreo','Chocolate Chip','Popsicle',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:15,
        productCategory:4,
        productImage:ice5,
        price:69,
        productIsVeg:true,  
        productName:'M&M Chocolate Waffle IceCream',
        productShortDesc:'Filled with different flavoured M&M.',
        productLongDesc:"Choose your unique flavour of M&M. Highly Customisable and the tastiest icecream pizzeria has to offer.",
        productToppings:['Chocolate Chip','Popsicle',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:16,
        productCategory:4,
        productImage:ice6,
        price:29,
        productIsVeg:true,  
        productName:'TriFlavoud Popsickle',
        productShortDesc:'Three flavour orange, kulfi, strawbeery.',
        productLongDesc:"Get taste of all three falours in as single bite. We offer to change these flavour according to your taste as well.",
        productToppings:['Chocolate Chip','Popsicle',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:17,
        productCategory:4,
        productImage:ice7,
        price:29,
        productIsVeg:true,  
        productName:'Strawberry Cone',
        productShortDesc:'Crunchuy Waffle cone filled with Strawberry Icecream',
        productLongDesc:"Crunchy waffle cone filled with strawberry icecrem tip of the cone is filled with liquid chocolate.",
        productToppings:['Chocolate Chip','Oreo',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:18,
        productCategory:4,
        productImage:ice8,
        price:259,
        productIsVeg:true,  
        productName:'Cheese Cake IceCream',
        productShortDesc:'Cheese cake flavoured icecream',
        productLongDesc:"It's our unique invention first ever tried making icecream of cheesecake.You will love it finest icecream in the whole portfolio.",
        productToppings:['Chocolate Chip','Oreo',"M&M's",'choclate Stick','Chocolate Syrup'],
        perToppingPrice: 20,
    },
    {
        _id:19,
        productCategory:4,
        productImage:ice9,
        price:159,
        productIsVeg:true,  
        productName:'Strawberry Sunday IceCream',
        productShortDesc:'Waffle, strawberry stick with strawberry icecream',
        productLongDesc:"Crunchy waffle and strawberry flavoured stick decorate the tasty strawberry icecream made from original strawbeery not the strawberry extract.",
        productToppings:['Chocolate Chip','Oreo',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:20,
        productCategory:4,
        productImage:ice10,
        price:79,
        productIsVeg:true,  
        productName:'Chocolate Cone + Peanuts',
        productShortDesc:'Chocolate flavoured icream dipped in chocolate syrup and wrapped in peanuts.',
        productLongDesc:"Chocolate flavoured icream dipped in chocolate syrup and wrapped in peanuts.",
        productToppings:['Chocolate Chip','Oreo',"M&M's"],
        perToppingPrice: 20,
    },
    {
        _id:21,
        productCategory:2,
        productImage:drink1,
        price:59,
        productIsVeg:true,  
        productName:'Chcolate Milk Shake',
        productShortDesc:'Chocolate milk shake filled with liquid liquid chocolate.',
        productLongDesc:"drink made of milk and ice cream and a flavour such as fruit or chocolate, mixed together until it is smooth",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:22,
        productCategory:2,
        productImage:drink2,
        price:39,
        productIsVeg:true,  
        productName:'Coco Cola',
        productShortDesc:'Classic glass bottle coco cola.',
        productLongDesc:"Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. In 2013, Coke products were sold in over 200 countries worldwide, with consumers drinking more than 1.8 billion company beverage servings each day.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:23,
        productCategory:2,
        productImage:drink3,
        price:79,
        productIsVeg:true,  
        productName:'Cold Coffee',
        productShortDesc:'Chilling cold coffee',
        productLongDesc:"Frosty and satisfying cold coffee is a fantastic beverage treat to enjoy on a warm day. This cold coffee recipe with step-by-by photos and video is a classic for preparing blended ice coffees that are perfectly sweet, creamy and frothy – just like from your favorite cafe!",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:24,
        productCategory:2,
        productImage:drink4,
        price:59,
        productIsVeg:true,  
        productName:'Cranberry Juice',
        productShortDesc:'Wine red cranberry juice',
        productLongDesc:"Cranberry juice is the liquid juice of the cranberry, often manufactured to contain sugar, water, and other fruit juices especially when labeled as 'Cranberry Cocktail'. Cranberry a fruit native to North America is recognized for its bright red color, tart taste, and versatility for product manufacturing.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:25,
        productCategory:2,
        productImage:drink5,
        price:79,
        productIsVeg:true,  
        productName:'Lemon Tea',
        productShortDesc:'Best lemon teas in the town.',
        productLongDesc:"Lemon Tea is a refreshing tea where lemon juice is added in black or green tea. It soothes the throat, prevents cough and congestion, and helps in weight loss.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:26,
        productCategory:2,
        productImage:drink6,
        price:109,
        productIsVeg:true,  
        productName:'Strawberry Milkshake',
        productShortDesc:'Delicious strawberry milkshake.',
        productLongDesc:"Strawberry milkshake is a delicious drink made with strawberries, milk, ice cream and flavoring ingredients like vanilla extract or strawberry syrup. Optionally topped with whipped cream, strawberry syrup and the options are endless, it can be easily dressed to a dessert drink!",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:27,
        productCategory:2,
        productImage:drink7,
        price:69,
        productIsVeg:true,  
        productName:'Lemonade',
        productShortDesc:'Delicious and Fresh Lemonade.',
        productLongDesc:"Lemonade is a sweetened beverage made from lemons, sugar, and water. It is popular in the United States during the spring and summer, when it is generally served chilled with ice.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:28,
        productCategory:2,
        productImage:drink8,
        price:49,
        productIsVeg:true,  
        productName:'Green Tea',
        productShortDesc:'Hot Green Tea.',
        productLongDesc:"Green tea is made from the Camellia sinensis plant. Its dried leaves and leaf buds are used to make several different teas, including black and oolong teas. Green tea is prepared by steaming and pan-frying the Camellia sinensis leaves and then drying them.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:29,
        productCategory:2,
        productImage:drink9,
        price:39,
        productIsVeg:true,  
        productName:'Mirinda',
        productShortDesc:'A product of Pepsico.',
        productLongDesc:"Mirinda is a brand of soft drink originally created in Spain in 1959 and distributed globally by PepsiCo since 1970. Its name comes from the Esperanto translation of 'admirable' or 'amazing. It is available in many fruit varieties, like orange, apple, strawberry, among others.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:30,
        productCategory:2,
        productImage:drink10,
        price:49,
        productIsVeg:true,  
        productName:'Orange Juice',
        productShortDesc:'Tasty and Healthy Orange Juice',
        productLongDesc:"Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine.",
        productToppings:[],
        perToppingPrice: 1,
    },
    {
        _id:31,
        productCategory:3,
        productImage:paasta1,
        price:149,
        productIsVeg:true,  
        productName:'Fettuccine Paasta',
        productShortDesc:'Red Sause Fettuccine Paasta',
        productLongDesc:"Fettuccine is a long, flat, ribbon-like pasta that's popular in Roman and Tuscan cuisine. Because it's a thicker pasta, fettuccine is good paired with heavier sauces, especially creamy Alfredo sauce.",
        productToppings:['Olives','Beans'],
        perToppingPrice: 15,
    },
    {
        _id:32,
        productCategory:3,
        productImage:paasta2,
        price:229,
        productIsVeg:false,  
        productName:'Chicken Sauce Paasta',
        productShortDesc:'Passta cooked with tender chicken',
        productLongDesc:"Chicken pieces cooked a creamy white sauce, then tossed with pasta, green peas, and olives. Perfect when you need a super-quick meal.",
        productToppings:['Olives','Beans','Chicken','Prons'],
        perToppingPrice: 15,
    },
    {
        _id:33,
        productCategory:3,
        productImage:paasta3,
        price:159,
        productIsVeg:false,  
        productName:'Macaroni Paasta',
        productShortDesc:'White sause paasta with  macaroni.',
        productLongDesc:"Macaroni Pasta is an Indo-Italian fusion dish ideal for get together & parties as an add-on dish in a grand menu. Macaroni Pasta is an assortment of taste ",
        productToppings:['Olives','Beans','Chicken','Prons'],
        perToppingPrice: 15,
    },
    {
        _id:34,
        productCategory:3,
        productImage:paasta4,
        price:189,
        productIsVeg:true,  
        productName:'White Mayonaiise Paasta',
        productShortDesc:'Paasta cooked with white sause and mayonnaise.',
        productLongDesc:"pasta salad with mayo with detailed photo and video recipe. a unique and simple way of making pasta salad recipe made with a generous amount of mayo.",
        productToppings:['Olives','Beans'],
        perToppingPrice: 15,
    },
    {
        _id:35,
        productCategory:3,
        productImage:paasta5,
        price:259,
        productIsVeg:false,  
        productName:'Red Prons Paasta',
        productShortDesc:'Tomato Sause Paasta with Prons.',
        productLongDesc:"This Creamy Garlic Prawn Pasta is for all those nights when nothing but a creamy pasta will do! This pasta version of Creamy Garlic Prawns features pasta smothered in a creamy sauce infused with garlic flavour, and tossed through with plump prawns (shrimp).",
        productToppings:['Olives','Beans','Chicken'],
        perToppingPrice: 15,
    },
    {
        _id:36,
        productCategory:3,
        productImage:paasta6,
        price:59,
        productIsVeg:true,  
        productName:'Red Sause Paasta',
        productShortDesc:'Simple red sause paasta.',
        productLongDesc:"Tomato sauce is of course wonderful in Italian pasta dishes like spaghetti and lasagna, but is also used to make dishes like shakshouka.",
        productToppings:['Olives','Beans'],
        perToppingPrice: 15,
    },
    {
        _id:37,
        productCategory:3,
        productImage:paasta7,
        price:49,
        productIsVeg:true,  
        productName:'Red Sause Spaghetti',
        productShortDesc:'Simple red sause spaghetti.',
        productLongDesc:"It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals.",
        productToppings:['Olives','Beans'],
        perToppingPrice: 15,
    },
    {
        _id:38,
        productCategory:3,
        productImage:paasta8,
        price:39,
        productIsVeg:true,  
        productName:'Schezwan Pasta',
        productShortDesc:'Schezwan Sause Spiral Pasta.',
        productLongDesc:"Pasta Spirals is a variety of pasta which has a twisted spring-like shape. Spiral pasta like fusilli, Gemelli, cavatappi, and rotini are perfect in all kinds of sauces, from simple pesto to hearty ragù.",
        productToppings:['Olives','Beans'],
        perToppingPrice: 15,
    },
    {
        _id:39,
        productCategory:3,
        productImage:paasta9,
        price:79,
        productIsVeg:false,  
        productName:'Red Farfalle Paasta',
        productShortDesc:'Red Farfalle Paasta cooked with prons.',
        productLongDesc:"Farfalle are a type of pasta commonly known as bow-tie pasta or butterfly pasta. The name is derived from the Italian word farfalle. In the Italian region of Emilia-Romagna, farfalle are known as strichetti. A larger variation of farfalle is known as farfalloni, while the miniature version is called farfalline.",
        productToppings:['Olives','Beans','Chicken'],
        perToppingPrice: 15,
    },
    {
        _id:40,
        productCategory:3,
        productImage:paasta10,
        price:89,
        productIsVeg:true,  
        productName:'Colavita Rigatoni Pasta',
        productShortDesc:'Colavita rigatoni pasta cooked in white creamy sause.',
        productLongDesc:"Rigatoni is a type of pasta originating in Italy. They are larger than penne and ziti, and sometimes slightly curved. They are not as curved as elbow macaroni.",
        productToppings:['Olives','Beans'],
        perToppingPrice: 15,
    },
]

export const MenuItems = [
    {
        _id:1,
        itemName:'Personal Information',
        itemId: 'PI',
        iconImage:profile,
    },
    {
        _id:2,
        itemName:'Manage Addresses',
        itemId: 'MA',
        iconImage:address,
    },
    {
        _id:3,
        itemName:'My Cart',
        itemId: 'MC',
        iconImage:cart,
    },
    {
        _id:4,
        itemName:'My Orders',
        itemId: 'MO',
        iconImage:order,
    },
    {
        _id:5,
        itemName:'Logout',
        itemId: 'LG',
        iconImage:logout,
    },
]

export const sliderItems = [
    {
        _id:1,
        category:1,
        slideImage:pizza1
    },
    {
        _id:2,
        _category:1,
        slideImage:pizza6
    },
    {
        _id:3,
        category:1,
        slideImage:pizza8
    },
    {
        _id:4,
        category:1,
        _slideImage:pizza3
    },
    {
        _id:5,
        category:2,
        _slideImage:drink5
    },
    {
        _id:6,
        category:2,
        slideImage:drink7
    },
    {
        _id:7,
        category:2,
        slideImage:drink1
    },
    {
        _id:8,
        category:2,
        slideImage:drink8
    },
    {
        _id:9,
        category:3,
        slideImage:paasta10
    },
    {
        _id:10,
        category:3,
        slideImage:paasta2
    },
    {
        _id:11,
        category:3,
        slideImage:paasta4
    },
    {
        _id:12,
        category:3,
        slideImage:paasta8
    },
    {
        _id:13,
        category:4,
        slideImage:ice2
    },
    {
        _id:14,
        category:4,
        slideImage:ice5
    },
    {
        _id:15,
        category:4,
        slideImage:ice8
    },
    {
        _id:16,
        category:4,
        slideImage:ice1
    },
]

export const coupons = [
    {
        id:1,
        code:'Get10',
        discount:10
    },
    {
        id:2,
        code:'Get20',
        discount:50
    },
    {
        id:3,
        code:'Get50',
        discount:50
    },
    {
        id:4,
        code:'Get80',
        discount:80
    },
    {
        id:5,
        code:'FirstOrder',
        discount:100
    }
]

export const users = [{
    _id:1,
    firstName:'Sagar',
    middleName:'Brijesh',
    lastName:'kumar',
    gender:'M',
    email:'sbhupender272@gmail.com',
    phone:'8368115640',
    password:'Abcd@1234',
    profilePic:user,
    addresses:[
        {
            _id:1,
            recieverName:'Sagar',
            recieverPhone:'8368115640',
            house:'E25 D gali no-3',
            state:'Delhi',
            district:'East Delhi',
            locality:'New Ashko Nagar',
            pincode:'110096',
            type:0,
        }
    ]
}]