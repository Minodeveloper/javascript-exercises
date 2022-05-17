const sumAll = function(num1,num2) {
    let array = [];
    if(num1 < 0 || num2 <0 || typeof (num2+num1) != 'number' ) return 'ERROR';
    if(num1 < num2)
    {
    for (let i = num1; i < (num2+1); i++)
    {
        array.push(i);
    }
    }else{
        
        
        for (let i = num2; i < (num1+1); i++)
        {
            array.push(i);
        }
    }
    let i = 0
    let sum =0;
    while(i < array.length)
    {
            sum +=array[i];
            i++;
    }

return sum;
};

// Do not edit below this line

// let arr = []
// arr.push(6);
// console.log(arr);
// console.log(sumAll(1,4));
module.exports = sumAll;
