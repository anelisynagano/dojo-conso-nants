const hyphenate = (word) => {
    //define an array of non-consonants : vowels & special Character [" ", undefined, "a", "e", "i", "o", "u", "y"] to check if a letter & next letter is a consonant (in line 9)
    const vowels = ["a", "e", "i", "o", "u", "y", " ", undefined]

    //define newArray to save all letters 
    let newArray = [];

    // split word into Array
    const letterArray = word.split("");

    // iterate over letterArray 
    letterArray.map((letter, index) => {
        // if letter is not in (non-consonant )vowel-Array, it is a consonant. check letter + next letter.  if both consonante concat '-'
        //else just letter like it was before

        if (!vowels.includes(letter.toLowerCase()) && !vowels.includes(letterArray[index + 1])
        ) {
            letter = letter.concat('-')
        }
        // push letter to newArray
        newArray.push(letter)
    })
    //join to Word 
    return newArray.join("")
};

console.log('should return hyp-hen: ', hyphenate('hyphen'));
console.log('should return cof-fee: ', hyphenate('coffee'));
console.log('should return hel-lo wor-l-d: ', hyphenate('hello world'));
console.log('should return Hel-lo Wor-l-d: ', hyphenate('Hello World'));
console.log('should return In-ter-nationalization: ', hyphenate('Internationalization'));
