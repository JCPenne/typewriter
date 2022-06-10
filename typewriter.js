const greeting = `Hello there from lighthouse labs`;

const timedPrint = sentence => {
  console.log(`length of sentence ${sentence.length}`);
  let n = 0;
  const increment = 100;
  const timerEnd = increment * sentence.length + increment;

  console.log(`timerEnd = ${timerEnd}`);
  for (const char of sentence) {
    n += increment;
    setTimeout(() => {
      process.stdout.write(char);
    }, n);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, timerEnd);
};
timedPrint(greeting);
