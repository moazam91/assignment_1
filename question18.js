//Q. No.18: Answer
let places = ['Tokyo', 'New York', 'Cape Town', 'Rio de Janeiro', 'Paris'];// Store the locations in an array
console.log("Original order:", places);// Print the array in its original order
console.log("Alphabetical order:", [...places].sort());// Print the array in alphabetical order without modifying the actual list
console.log("Original order:", places);// Show that the array is still in its original order by printing it
console.log("Reverse alphabetical order:", [...places].sort().reverse());// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Original order:", places);// Show that the array is still in its original order by printing it again
places.reverse();// Reverse the order of the list
console.log("Reversed order:", places);// Print the array to show that its order has changed
places.reverse();// Reverse the order of the list again
console.log("Original order:", places);// Print the array to show that it's back to its original order
places.sort();// Sort the array so it's stored in alphabetical order
console.log("Alphabetical order:", places);// Print the array to show that its order has been changed
places.sort((a, b) => b.localeCompare(a));// Sort the array to change it to reverse alphabetical order
console.log("Reverse alphabetical order:", places);// Print the list to show that its order has changed