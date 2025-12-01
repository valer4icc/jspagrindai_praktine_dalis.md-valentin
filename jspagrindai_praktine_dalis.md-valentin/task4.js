const text = "Hello123! Welcome to JS 2025.";
const counts = {
  letters: 0,
  digits: 0,
  spaces: 0,
  symbols: 0,
};

for (const char of text) {
  if (/[A-z]/.test(char)) {
    counts.letters++;
  } else if (/[0-9]/.test(char)) {
    counts.digits++;
  } else if (char === " ") {
    counts.spaces++;
  } else {
    counts.symbols++;
  }
}

console.log(counts);
