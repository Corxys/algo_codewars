export function filterList(l) {
    return l.filter(el => typeof el !== 'string');
};