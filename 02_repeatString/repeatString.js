const repeatString = function(string, num) {
    let i = 0;
    let newString='';
    if(num >=0)
    {
    while(i<num)
    {
       newString+= string;
       i++;
    }
    
    return newString;
}else{
    return 'ERROR'
}
    
};
 console.log(repeatString('hello', 0));

// Do not edit below this line
module.exports = repeatString;
