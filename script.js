const hyphenate = (word) => {
    // separate consecutive consonants with a dash (-)
    const notConsonants = ['a', 'e', 'i', 'o', 'u', 'y', undefined, ' '];
    let newArray = [];
    let join = ""
  
    let split = word.split('');
    split.map((letter, index) => {
      if (!notConsonants.includes(letter.toLowerCase()) && !notConsonants.includes(split[index+1])){
       newArray.push(letter + '-')
        // newArray.push(letter with -)
      } else {
      newArray.push(letter)
      }
      // otherwise just push the letter
    join = newArray.join('')
  
    })
    
    return join ;
  
  }
  
  // create vowels array
  // split word into an array
  // map the array and compare current index to next index
  // if current letter and next letter are not included on vowels array, add "-"
  
  
  
  console.log('should return hyp-hen: ', hyphenate('hyphen'));
  console.log('should return cof-fee: ', hyphenate('coffee'));
  console.log('should return hel-lo wor-l-d: ', hyphenate('hello world'));
  console.log('should return Hel-lo Wor-l-d: ', hyphenate('Hello World'));
  console.log('should return In-ter-nationalization: ', hyphenate('Internationalization'));