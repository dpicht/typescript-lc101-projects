// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    var days = hours / 24;
    return days;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("It will take " + getDaysToLocation(kilometersToMars) + " for " + spacecraftName + " to travel to Mars.");
console.log("It will take " + getDaysToLocation(kilometersToTheMoon) + " for " + spacecraftName + " to travel to the Moon.");
