// add a newline character to output after the string
const sentence = "hello there from KK at lighthouse labs\n";

// name a delay variable
let delay = 0;
// loop through each character in the sentence
for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
  // the interval time is now the delay time
  }, delay);
  // add the delay after every character
  delay += 75;
}
