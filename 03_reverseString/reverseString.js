const reverseString = function(string) {
    let returnedString = '';
    let i =string.length-1;
    while(i >=0)
    {
        
        returnedString += string[i];
        
        
        i--;
    }
    
    return returnedString;
};


// Do not edit below this line
module.exports = reverseString;
