const palindromes = function(string) {
    //Split string into an array 
    let result = string.split('');
    //Remove spaces and punctuation
    let die = [' ', '.', ',', '!'];
    result = result.filter((item) => !die.includes(item));
    //Joins forward facing array
    let forwards = result.join('').toLowerCase();
    //Puts array in new variable and reverses it, and makes it into a string
    let backwards = result.reverse().join('').toLowerCase();
    //Determines if both strings are identical
    if (forwards === backwards) {
        return true;
    } else {
        return false; 
    }
};

// Do not edit below this line
module.exports = palindromes;
