function getCreditCardType(cardNumber) {
    if (cardNumber.startsWith('4')) {
        return 'Visa Card';
    } else if (cardNumber.startsWith('5')) {
        return 'Master Card';
    } else if (cardNumber.startsWith('37')) {
        return 'American Express Cards';
    } else if (cardNumber.startsWith('6')) {
        return 'Discover cards';
    } else {
        return 'Invalid Input';
    }
}

function getCreditCardDigitLength(cardNumber) {
    return cardNumber.length;
}

function getCreditCardValidityStatus(cardNumber) {
    let sum = 0;
    let alternate = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);

        if (alternate) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9; // equivalent to summing the two digits
            }
        }

        sum += digit;
        alternate = !alternate;
    }

    return sum % 10 === 0 ? 'Valid' : 'Invalid';
}


let userInput = prompt('Enter a credit card number: ').replace(/[^0-9]/g,);
console.log(`Card Type: ${getCreditCardType(userInput)}`);
console.log(`Card Digit Length: ${getCreditCardDigitLength(userInput)}`);
console.log(`Card Validity Status: ${getCreditCardValidityStatus(userInput)}`);
