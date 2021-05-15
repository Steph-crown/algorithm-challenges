// convertFahrToCelsius function that converts fahrenheit to celsius
// Formula C = (F - 32) * (5 / 9)
const convertFahrToCelsius = (fahr) => {
    let dataType = Array.isArray(fahr) ? 'array' : typeof fahr;
    let dataString = typeof fahr === 'object' ? JSON.stringify(fahr) : `${fahr}`
    return isNaN(fahr) ?  `${dataString} is not a valid number but a/an ${dataType}.` :
        Number((fahr - 32) * (5 / 9)).toFixed(4);
}


// checkYuGiOh function that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array
const checkYuGiOh = (number) => {
    if (isNaN(number)) return `invalid parameter: ${number}`;
    let arrayOfNumbers = [];
    for (i = 1; i <= Number(number); i++) {
        arrayOfNumbers.push(i);
    }

    const numberStatus = (num) => {
        let numString = !(num % 2) ? "yu" : "";
        numString += !(num % 3) ? 
            numString ? "-gi" : "gi" :
            "";
        numString += !(num % 5) ? 
            numString ? "-oh" : "oh" :
            "";
        return numString;
    }
    return arrayOfNumbers.map(num => numberStatus(num) ? numberStatus(num) : num);
}
