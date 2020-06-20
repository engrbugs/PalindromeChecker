function palindrome(str) {
    let cleanStr = str.replace(/[_\W]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }

  
  console.log(palindrome("My age is 0, 0 si ega ym."));
  