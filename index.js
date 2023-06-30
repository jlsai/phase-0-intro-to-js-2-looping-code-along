for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);


function writeCards(array, event) {
    let arr = [];
    for (let n = 0; n < array.length; n++) {
        arr.push(`Thank you, ${array[n]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}
countDown(10)
