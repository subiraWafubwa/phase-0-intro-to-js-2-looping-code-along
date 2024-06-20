function writeCards(names, event) {
    const thankYouMessages = [];
    for (let s = 0; s < names.length; s++){
        thankYouMessages.push(`Thank you, ${names[s]}, for the wonderful ${event} gift!`);
    }

    return thankYouMessages;
}

function countDown(number) {
    while(number >= 0){
        console.log(number);
        number--;
    }
}

countDown(10);
countDown(4);