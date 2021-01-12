const sentence = "hello there from lighthouse labs";

const animate = (str) => { // created a function to take in an argument and not just the variable sentence
  let delay = 0; // start the first letter with no delay - starting point
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50; //increase the delay of each char by 50ms 
  }
  setTimeout(() => { // add a new setTimeout for the next line to happen.
    process.stdout.write("\n");
  }, delay); // let it appeat to what the delay has accumulated from the rest of the characters
};

console.log(animate(sentence));
