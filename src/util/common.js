export const breakWord = word => {
    if(word.length <= 11) return word
    return `${word.slice(0,9)}...`
  }