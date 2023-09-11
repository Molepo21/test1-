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
    const index = listOfObjects.findIndex(obj => obj.id === id);
    if (index !== -1) {
        listOfObjects.splice(index, 1);
    }
}
deleteById(3)
console.log(listOfObjects);


//function that removes numbers form a string

function removeNumber(arr) {
    const numbers = "0123456789";
    const result = [];

    for (const word of arr) {
        let newWord = "";
        for (const chars of word) {
            if (numbers.indexOf(chars) === -1) {
                newWord += chars;
            }
        }
        result.push(newWord);
    }

    return result;
}
//array of names created

const arr = ["Gift1","Jack2","Mark3","Moral4","Emily5"]
const newArray = removeNumber(arr);

console.log(newArray)

