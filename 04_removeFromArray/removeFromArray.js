const removeFromArray = function(array,item) {
    let returnArray =[];
    for(let i of array)
    {
        if(i != item)
    {

        returnArray.push(i);
    }

    }
    return returnArray;

};

// Do not edit below this line
module.exports = removeFromArray;
