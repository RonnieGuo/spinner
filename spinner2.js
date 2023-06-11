process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];
let delay = 100;
for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerChars[i]}`);
  }, delay);
  delay += 200;
}