//Playing with bits and their alteration in JS


function decimalToBinary(num) {
    return (num >>> 0).toString(2);
}

function getBit(num, i)  {
    //using num=5 & i=2
    //5= 101
    //1<<i = 100
    //true
    return ((num & ( 1 << i)) != 0);
}

function setBit(num, i) {
    //shift 1 i places left.  Perform or to flip if false.  
    //The 0s created during shift are ignored in the OR comparison
    return (num | 1 << i);
}

function clearBit(num, i) {
    //create a negative mask
    //use mask & num, onl
    let mask = ~(1 << i);
    console.log(mask);
    return num & mask;
}

function clearBitsMsbToIth(num, i) {
    let mask = (1<< i) -1;
    console.log(mask);
    return num & mask;
}

function clearBitsIthToZero(num, i) {
    let mask = (-1 << i+1)
    console.log(mask);
    return num & mask;
}


//11 = 1011

console.log(decimalToBinary(11));
console.log(decimalToBinary(clearBitsIthToZero(11, 2)));