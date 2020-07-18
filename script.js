const hyphenate = (word) => {
    // separate consecutive consonants with a dash (-)
};

console.log('should return hyp-hen: ', hyphenate('hyphen'));
console.log('should return cof-fee: ', hyphenate('coffee'));
console.log('should return hel-lo wor-l-d: ', hyphenate('hello world'));
console.log('should return Hel-lo Wor-l-d: ', hyphenate('Hello World'));
console.log('should return In-ter-nationalization: ', hyphenate('Internationalization'));
