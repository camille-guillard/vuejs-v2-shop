export function price(value) {
    return `${ value }€`;
}

export function maxLength(value, length) {
    if (value.length > length) {
        return value.slice(0, length - 6) + ' (...)';
    } else {
        return value;
    }
}