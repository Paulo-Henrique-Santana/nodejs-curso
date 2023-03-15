const x = 10;

x = 2;

try {
  x = 2;
} catch (err) {
  console.log(`Error: ${err}`);
}
