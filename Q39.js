"use strict";
// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
// Example usage
city_country("Lahore", "Pakistan");
city_country("Tokyo", "Japan");
city_country("Paris", "France");