const reversePrime = n => {
  let count = 0;
  let i = 2; while(count < n) {
    let reversed = parseInt(
      i
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
    if (isPrime(i) && isPrime(reversed)) {
      count++;
      console.log(count, ': ', i);
    }
    i++;
  }
  return (i-1);
};

const isPrime = n => {
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const primeGen = n => {
  console.log("1: 2")
  let count = 1;
  let i = 3;
  while (count < n) {
    if(isPrime(i)){
      count++
      console.log(count + ": " + i);
    }
    i += 2;
  }
}

console.log(reversePrime(100000));
