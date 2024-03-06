// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city: string, country: string):void {
    console.log(`"${city}, ${country}"`);
}

// Example usage
city_country("Lahore", "Pakistan");
city_country("Tokyo", "Japan");
city_country("Paris", "France");





// 2nd way 
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// // Example usage:
// console.log(city_country("Lahore", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Paris", "France"));
