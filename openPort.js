// Finds the sum of the digits of an ip address

const findPort = (ip) => {
    return Array.from(ip).reduce((a, b) => isNaN(b) ? a : parseInt(a) + parseInt(b));
};




