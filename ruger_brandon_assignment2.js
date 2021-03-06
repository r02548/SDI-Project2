//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 2

// Variables
var myDog = "Ryder";
var age = 2;
var favoriteToys = ["antler", "kong", "giraffe", "nylabone", "ball"];
var store = "All About Puppies";

// Procedure Function

var adoptedDog = function(newDog){
    var enoughMoney = true;
    console.log("In August 2011 I went to " + store + " where I first met " + myDog + ".");
    console.log("I fell in love with him immediately, even though I wasn't looking for " + newDog + ".");
    console.log("I couldn't leave without him, so I decided I was going to take him home.");
    console.log("First though, I had to see if I had enough money.");
    // Argument Conditional
        if (enoughMoney) {
            console.log("It's true that I had enough money, so I took him home.");
        } else {
            console.log("I didn't have enough money, but I used a credit card.");
        };
};


// Boolean Function

var getTypeOfFood = function(rawFoodDiet, kibbleDiet){
    var outcome = "It is " + true + " that the raw food diet worked well for him.";
    var altOutcome = "It is " + false + " that the raw food diet worked, so I had to switch him to kibble.";
    var rawFoodBoolean = true;
    var kibbleFoodBoolean = false;
    console.log("After I brought him home, I needed to figure out what type of food I was going to feed him.");
    console.log("I did tons of research because I wanted to do whatever was going to be best for him.");
        if (rawFoodBoolean === true){
            console.log("After doing research I decided to go with " + rawFoodDiet + " because of the benefits raw food has for dogs.")
            return outcome;
        } else if (rawFoodBoolean === true && kibbleFoodBoolean === true){
            console.log("I am going to feed him a combination of " + rawFoodDiet + " and " + kibbleDiet + ".");
        } else if (rawFoodBoolean === !true && kibbleFoodBoolean === !false){
            console.log("I am going to feed him " + kibbleDiet + ".");
            return altOutcome;
        };
};


// Number Function

var howManyBags = function(amountToSpend){
    console.log("Each bag of raw food cost " + 30 + " dollars.");
    var totalNumberOfBags = 0;
    while (amountToSpend >= 30){
        if (totalNumberOfBags === 0){
            console.log("Let's see how many bags I was able to afford if I had " + amountToSpend + " dollars.");
        } else if (totalNumberOfBags > 0){
            console.log("I bought " + totalNumberOfBags + " bags. Let's see if I have enough for another bag.");
        };
       
        
        totalNumberOfBags++;
        amountToSpend -=30;
    };
    return totalNumberOfBags;
};


// String Function

var getItemsBoughtAtPetStore = function(item1, item2, item3){
    var itemsBought = (item1 + ", " + item2 + ", and a " + item3);
    
    return itemsBought;
};

// Array Function
var dogWalkArray = ["1st walk", "2nd walk", "3rd walk", "4th walk", "5th walk"];
var minutesPerWalk = [20, 10, 30, 30, 10];

var getTimesWalkingDog = function(dogWalkArray){
    var walks = dogWalkArray[i];
    var timesPerWalk = minutesPerWalk [i];
  
    for (var i = 0; i <= minutesPerWalk.length; i++){
        if (i < minutesPerWalk.length){
            console.log("Ryder's " + dogWalkArray[i] + " usually lasts for " + minutesPerWalk[i] + " minutes.");
            } else {
                console.log("This will be his last walk for today.");
            };
        }; return minutesPerWalk.length
};



// Main Code
console.log("This is a story about my dog named " + myDog + ".");
adoptedDog("a new dog");
var myOutcome = getTypeOfFood("Stella & Chewy's raw food diet", "Wellness kibble diet");
console.log(myOutcome);
console.log("Next, I needed to figure out how many bags of food I was going to buy.");
var numberOfBagsBought = howManyBags(240);
console.log("The total number of bags that I was able to purchase was " + numberOfBagsBought + ".");
console.log("After I bought his food, I went to the pet store to buy him some toys and other needed items.");
var itemsBoughtAtPetStore = getItemsBoughtAtPetStore("kong", "nylabone", "deer antler");
console.log("At the pet store I found a lot of things to buy.");
console.log("I ended up purchasing a " + itemsBoughtAtPetStore + ".");
console.log(myDog + " was so excited once he saw what I bought him!");
console.log("He always gets so excited when he gets new toys, although certain toys tend not to last very long.");
console.log("Excercise is very important for dogs in order to maintain good health.");
console.log("The best way to give them exercise is to take them for walks.");
console.log("Dogs love going for walks, and " + myDog + " is certainly no exception.");
console.log("I take " + myDog + " for several walks each day.");
console.log("Here is an example of a typical day:");
var dogWalks = getTimesWalkingDog(dogWalkArray);
console.log(myDog + " had a total of " + minutesPerWalk.length + " walks today.");
console.log("Occasionally if I have extra time I will take " + myDog + " for another walk.");
console.log("On those days, his walk schedule looks like this:");
dogWalkArray.push("6th walk");
minutesPerWalk.push(20);
var dogWalks = getTimesWalkingDog(dogWalkArray);
console.log(myDog + " had a total of " + minutesPerWalk.length + " walks today.");
console.log(myDog + " is one of the best things that has ever happened to me. I love him so much!");

