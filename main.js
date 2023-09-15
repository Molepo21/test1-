//list of objects created
let listOfObjects =
    [
        { id: 1, name: "Gift" },
        { id: 2, name: "Mark" },
        { id: 3, name: "Candice" },
        { id: 4, name: "Moral" },
        { id: 5, name: "Emily" }
    ]
//function that deletes an object by Id

function deleteById(id) {
    //finding the index of the object with the matching ID
    const index = listOfObjects.findIndex(obj => obj.id === id);
    //checking if the object with the matching ID was found
    if (index !== -1) {
        //used splice to remove the object at the found index
        listOfObjects.splice(index, 1);
    }
}
//Delete an object with ID 1
deleteById(1)
//The object with ID 1 has been removed
console.log(listOfObjects);


//function that removes all the numbers form aw word in an array

function removeNumber(arr) {
    //Declare numbers for the unwanted numbers in the words
    const numbers = "0123456789";
    //Declare results to an empty array to store the words without numbers
    const result = [];
//created a for of loop to iterate through every word in the array
    for (const word of arr) {
        //Declared newWord to an empty string to store words without numbers
        let newWord = "";
        //created a for of loop to iterate through every character in the array
        for (const chars of word){
            //created an if statement to check if a character is a number or not
            if (numbers.indexOf(chars) === -1){
                //Added char to newWord to return words without numbers
                newWord += chars;
            }
        }
        //pushed newWord to the empty result array to have an array with words without numbers
        result.push(newWord);
    }

    return result;
}
//array of names created

const arr = ["Gift1","Jack2","Mark3","Moral4","Emily5"]
//Defined newArray and assing it to removeNumber(arr) in order to have a new array with words without numbers
const newArray = removeNumber(arr);

//console log newArray to display the list of names without numbers
console.log(newArray)


