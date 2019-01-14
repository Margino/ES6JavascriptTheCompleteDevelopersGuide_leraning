function validateShopingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

console.log(validateShopingList('oranges', 'bread', 'eggs'));
