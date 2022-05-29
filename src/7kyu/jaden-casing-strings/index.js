export function jadenCasingStrings(string) {
    const splitString = string.split(' ');
    let newString = '';

    splitString.forEach((string, index) => {
        if (splitString.length === index + 1) {
            newString += string.charAt(0).toUpperCase() + string.substring(1);
        } else {
            newString += string.charAt(0).toUpperCase() + string.substring(1) + ' ';
        }
    })

    return newString;
};