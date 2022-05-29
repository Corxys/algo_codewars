export function findShort(s) {
    const arrString = s.split(' ');
    let shortestString = arrString[0].length;

    arrString.forEach((string) => {
        if (string.length <= shortestString) {
            shortestString = string.length;
        }
    });

    return shortestString;
};