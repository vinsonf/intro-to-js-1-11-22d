

function sumNumber(number) {
    const array = [];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    if(number == 0 || number > 1000) {
        console.log("what are you doing")
    } else {
    for( let i = number; i > 0; i--) {
        array.push(i);
    }
    console.log(array.reduce(reducer))
    }
}


function sumFromOneTo(num) {
    let sum = 0
    if (num < 0 || num > 1000) {
        console.log('INPUT VALID NUMBER')
    }else {
        while (num > 0) {
            sum += (num);
            num -= 1;
        }
        console.log(sum)
    }
}



