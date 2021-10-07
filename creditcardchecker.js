// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(array){
    var result = false;
    var sumDigits = 0;
    var IsDoubleDigit = 0;
    for(var i = array.length;i>=0;i--)
    {
        if(IsDoubleDigit%2!=0&&array[i]*2>9)
        {
            sumDigits += array[i]*2-9;;        
        }
        else
        {
            sumDigits += array[i];
        }
        IsDoubleDigit++;
    }
    if(sumDigits%10===0) result = true;
    return result;

}

function findInvalidCards(NestedArray){
    var NestedArrayInvaid =[];
    NestedArray.forEach(element => {
        if(!validateCred(element))
            NestedArrayInvaid.push(element);
    });
    return NestedArrayInvaid;
}

function idInvalidCardCompanies(NestedArrayInvaid)
{
    var Companies = [];
    var idInvalidCard = [];
    for(var i =0;i<NestedArrayInvaid.length;i++)
    {
        if(idInvalidCard.indexOf(NestedArrayInvaid[i][0])===-1)
        {
            idInvalidCard.push(NestedArrayInvaid[i][0]);
        }        
    } 
    idInvalidCard.forEach(element => {
        if (element === 3)
        {
            Companies.push("Amex (American Express)");
        }
        else if (element === 4)
        {
            Companies.push("Mastercard");
        }
        else if (element === 5)
        {
            Companies.push("Discover");
        }
        else if (element === 6)
        {
            Companies.push("Mastercard");
        }
        else
        {
            Companies.push("Company not found");
        }
    });
    return Companies;

}

/*
Luhn algorithm
https://en.wikipedia.org/wiki/Luhn_algorithm#Description
Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
Sum up all the digits in the credit card number.
If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg
*/

// Test

var test1 = findInvalidCards(batch);
var test2 = idInvalidCardCompanies(test1);
//console.log(test1);
console.log(test2);