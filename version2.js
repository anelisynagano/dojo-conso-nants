const hyphenate = (word) => {
    const vowels = ["a", "e", "i", "o", "u", "y", " ", undefined]
    const letterArray = word.split("");
    let newArray = [];

    word.split("").map((letter, index) => {
        !vowels.includes(letter.toLowerCase()) && !vowels.includes(letterArray[index + 1].toLowerCase()) ? letter = letter.concat('-') : letter = letter
        newArray.push(letter)
    })


    return newArray.join("")
}

console.log('should return hyp-hen: ', hyphenate('hyphen'));
console.log('should return cof-fee: ', hyphenate('coffee'));
console.log('should return hel-lo wor-l-d: ', hyphenate('hello world'));
console.log('should return Hel-lo Wor-l-d: ', hyphenate('Hello World'));
console.log('should return In-ter-nationalization: ', hyphenate('Internationalization'));